import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";

export const Footer = () => {
  return (
    <footer className="bg-primary flex justify-between items-center h-16 mt-8 text-white">
      <MaxWidthWrapper>
        <div className="flex justify-between">
          <p>&copy; 2021 Boat Logo. All rights reserved.</p>
          <p>Developed by Agary</p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
