"use client"
import React from 'react';
import { Alert } from 'react-bootstrap';
import { ImageOff } from 'lucide-react';

const NoImagesFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8" style={{height: "70%"}}>
      <div className="text-center max-w-lg">
        <ImageOff 
          className="mx-auto mb-6 text-gray-400" 
          size={64} 
        />
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          No Images Found
        </h3>
        <Alert variant="info" className="mb-4">
          Your gallery is empty. Start generating some amazing images to see them here!
        </Alert>
        <p className="text-gray-600 mb-6">
          Head over to the image generation section to create your first masterpiece.
        </p>
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
          onClick={() => window.location.href = '/dashboard/genifyl'}
        >
          Generate Images
        </button>
      </div>
    </div>
  );
};

export default NoImagesFound;