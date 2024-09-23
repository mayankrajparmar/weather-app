import React, { createContext, useContext, useState } from "react";

type TemperatureUnit = "Celsius" | "Fahrenheit";

interface TemperatureContextType {
  unit: TemperatureUnit;
  toggleUnit: () => void;
}

export const TemperatureContext = createContext<
  TemperatureContextType | undefined
>(undefined);

// Custom hook to use the TemperatureContext
export const useTemperature = () => {
  const context = useContext(TemperatureContext);
  if (!context) {
    throw new Error("useTemperature must be used within a TemperatureProvider");
  }
  return context;
};

// TemperatureProvider component
export const TemperatureProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [unit, setUnit] = useState<TemperatureUnit>("Celsius");

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "Celsius" ? "Fahrenheit" : "Celsius"));
  };

  return (
    <TemperatureContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </TemperatureContext.Provider>
  );
};
