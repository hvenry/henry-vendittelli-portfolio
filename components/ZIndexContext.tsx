"use client";

import React, { createContext, useContext, useState } from "react";

interface ZIndexContextProps {
  zIndexMap: { [key: string]: number };
  bringToFront: (id: string) => void;
  highestZIndex: number;
}

const ZIndexContext = createContext<ZIndexContextProps | undefined>(undefined);

export const ZIndexProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [zIndexMap, setZIndexMap] = useState<{ [key: string]: number }>({});
  const [highestZIndex, setHighestZIndex] = useState(1);

  const bringToFront = (id: string) => {
    setHighestZIndex((prev) => {
      const newZ = prev + 1;
      setZIndexMap((prevMap) => ({ ...prevMap, [id]: newZ }));
      return newZ;
    });
  };

  return (
    <ZIndexContext.Provider value={{ zIndexMap, bringToFront, highestZIndex }}>
      {children}
    </ZIndexContext.Provider>
  );
};

export const useZIndex = () => {
  const context = useContext(ZIndexContext);
  if (!context) {
    throw new Error("useZIndex must be used within a ZIndexProvider");
  }
  return context;
};
