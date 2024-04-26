import React from "react";
import CardWrapper from "../card-wrapper";

const FeaturedSection = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full space-y-8">
      <h1 className="text-2xl font-bold">Featured Boats</h1>
      <div className="flex justify-between w-full">
        <CardWrapper className="bg-gray-400 h-64 w-64">
          <h2>Boat 1</h2>
          <p>Some description</p>
        </CardWrapper>
        <CardWrapper className="bg-gray-400 h-64 w-64">
          <h2>Boat 1</h2>
          <p>Some description</p>
        </CardWrapper>
        <CardWrapper className="bg-gray-400 h-64 w-64">
          <h2>Boat 1</h2>
          <p>Some description</p>
        </CardWrapper>
        <CardWrapper className="bg-gray-400 h-64 w-64">
          <h2>Boat 1</h2>
          <p>Some description</p>
        </CardWrapper>
        <CardWrapper className="bg-gray-400 h-64 w-64">
          <h2>Boat 1</h2>
          <p>Some description</p>
        </CardWrapper>
      </div>

      <div className="flex justify-between w-full">
        <CardWrapper className="bg-gray-400 h-64 w-64">
          <h2>Boat 1</h2>
          <p>Some description</p>
        </CardWrapper>
        <CardWrapper className="bg-gray-400 h-64 w-64">
          <h2>Boat 1</h2>
          <p>Some description</p>
        </CardWrapper>
        <CardWrapper className="bg-gray-400 h-64 w-64">
          <h2>Boat 1</h2>
          <p>Some description</p>
        </CardWrapper>
        <CardWrapper className="bg-gray-400 h-64 w-64">
          <h2>Boat 1</h2>
          <p>Some description</p>
        </CardWrapper>
        <CardWrapper className="bg-gray-400 h-64 w-64">
          <h2>Boat 1</h2>
          <p>Some description</p>
        </CardWrapper>
      </div>
    </div>
  );
};

export default FeaturedSection;
