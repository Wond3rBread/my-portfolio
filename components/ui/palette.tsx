import React from 'react';

const ColorPalette = () => {
  return (
    <div className="bg-background text-text p-8">
      <h2 className="mb-6 text-3xl font-bold">Color Palette</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {/* Background */}
        <div className="flex flex-col items-center">
          <div className="bg-background mb-2 h-24 w-24 rounded-md border border-gray-600"></div>
          <span className="text-sm font-medium">Background</span>
          <span className="text-xs text-gray-400">#121212</span>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center">
          <div className="bg-text mb-2 h-24 w-24 rounded-md border border-gray-600"></div>
          <span className="text-sm font-medium">Text</span>
          <span className="text-xs text-gray-400">#E0E0E0</span>
        </div>

        {/* Primary Accent Blue */}
        <div className="flex flex-col items-center">
          <div className="bg-accent-blue mb-2 h-24 w-24 rounded-md border border-gray-600"></div>
          <span className="text-sm font-medium">Primary Accent Blue</span>
          <span className="text-xs text-gray-400">#3498db</span>
        </div>

        {/* Secondary Accent Blue */}
        <div className="flex flex-col items-center">
          <div className="bg-accent-blue-dark mb-2 h-24 w-24 rounded-md border border-gray-600"></div>
          <span className="text-sm font-medium">Secondary Accent Blue</span>
          <span className="text-xs text-gray-400">#2980b9</span>
        </div>

        {/* Card Background */}
        <div className="flex flex-col items-center">
          <div className="bg-card-bg mb-2 h-24 w-24 rounded-md border border-gray-600"></div>
          <span className="text-sm font-medium">Card Background</span>
          <span className="text-xs text-gray-400">#1C1C1C</span>
        </div>

        {/* Border */}
        <div className="flex flex-col items-center">
          <div className="bg-border mb-2 h-24 w-24 rounded-md border border-gray-600"></div>
          <span className="text-sm font-medium">Border</span>
          <span className="text-xs text-gray-400">#333333</span>
        </div>

        {/* Link Hover */}
        <div className="flex flex-col items-center">
          <div className="bg-link-hover mb-2 h-24 w-24 rounded-md border border-gray-600"></div>
          <span className="text-sm font-medium">Link Hover</span>
          <span className="text-xs text-gray-400">#5DADE2</span>
        </div>

        {/* Error */}
        <div className="flex flex-col items-center">
          <div className="bg-error mb-2 h-24 w-24 rounded-md border border-gray-600"></div>
          <span className="text-sm font-medium">Error</span>
          <span className="text-xs text-gray-400">#e74c3c</span>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
