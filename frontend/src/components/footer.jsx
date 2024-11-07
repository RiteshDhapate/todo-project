import React from "react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 py-6">
        <div
          className="flex flex-col items-center justify-center space-y-2"
        >
          <div
            className="flex items-center space-x-2 text-gray-400"
          >
            <span>Made with</span>
            <Heart
              className="h-4 w-4 text-red-500"
            />
            <span>by TaskMaster Team</span>
          </div>
          <div className="text-sm text-gray-500">
            © 2024 TaskMaster. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
