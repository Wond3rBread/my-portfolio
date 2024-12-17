import React, { useEffect, useRef } from 'react';

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  velocityX: number;
  velocityY: number;
  baseVelocityX: number;
  baseVelocityY: number;
}

class Particle implements ParticleProps {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  velocityX: number;
  velocityY: number;
  baseVelocityX: number;
  baseVelocityY: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 1; // Particle size between 1 and 6
    this.baseX = x;
    this.baseY = y;
    this.density = Math.random() * 30 + 1;
    this.velocityX = (Math.random() - 0.5) * 2; // Random initial speed between -1 and 1
    this.velocityY = (Math.random() - 0.5) * 2;
    this.baseVelocityX = this.velocityX;
    this.baseVelocityY = this.velocityY;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(
    canvasWidth: number,
    canvasHeight: number,
    mouse: { x: number | null; y: number | null; radius: number },
  ) {
    // Boundary collision detection and correction
    if (this.x - this.size <= 0) {
      this.x = this.size; // Correct position to ensure it's within boundary
      this.velocityX = -this.velocityX; // Reverse velocity
    } else if (this.x + this.size >= canvasWidth) {
      this.x = canvasWidth - this.size;
      this.velocityX = -this.velocityX;
    }

    if (this.y - this.size <= 0) {
      this.y = this.size;
      this.velocityY = -this.velocityY;
    } else if (this.y + this.size >= canvasHeight) {
      this.y = canvasHeight - this.size;
      this.velocityY = -this.velocityY;
    }
    // Mouse interaction
    if (mouse.x !== null && mouse.y !== null) {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < mouse.radius) {
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let force = (mouse.radius - distance) / mouse.radius;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;
        this.velocityX -= directionX;
        this.velocityY -= directionY;
      } else {
        // Reset to base velocity when outside radius
        if (this.velocityX < 0) {
          this.velocityX = -this.baseVelocityX;
        } else {
          this.velocityX = this.baseVelocityX;
        }
        if (this.velocityY < 0) {
          this.velocityY = -this.baseVelocityY;
        } else {
          this.velocityY = this.baseVelocityY;
        }
      }
    }

    // Apply velocity
    this.x += this.velocityX;
    this.y += this.velocityY;
  }
}

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 150,
    };

    const updateMousePosition = (event: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect(); // Get canvas position and size
        mouse.x = event.clientX - rect.left; // Adjust X relative to canvas
        mouse.y = event.clientY - rect.top; // Adjust Y relative to canvas
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.draw(ctx);
        particle.update(canvas.width, canvas.height, mouse);
      });
      connect();
      requestAnimationFrame(animate);
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            opacityValue = 1 - distance / 150;
            ctx.strokeStyle = `rgba(255,255,255,${opacityValue})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    for (let i = 0; i < 100; i++) {
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      particles.push(new Particle(x, y));
    }

    animate();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
      });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default BackgroundCanvas;
