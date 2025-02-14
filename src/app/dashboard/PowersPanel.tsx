import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


"use client";

import React from "react";

const PowersPanel = () => {
  return (
    <div className="flex flex-col justify-start h w-full p-4">
      <h1 className="text-xl font-bold mb-4">Powers Panel</h1>
      <div className="w-3/4 max-w-5xl h-3/4 border rounded-lg shadow-lg overflow-hidden ml-4 bg-gray-800 text-white p-4">
        <button className="w-full px-4 py-2 mb-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
          Power Up
        </button>
        <button className="w-full px-4 py-2 mb-2 bg-red-600 hover:bg-red-700 text-white rounded">
          Reset Power
        </button>
        <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded">
          Save Power
        </button>
      </div>
    </div>
  );
};

export default PowersPanel;