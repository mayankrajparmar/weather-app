import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import WeatherWidget from "./WeatherWidget";
import { useTemperature } from "../context/TemperatureContext";
import { indianCities } from "../locals";
import SearchAppBar from "./AppBar";

const Dashboard: React.FC = () => {
  const [widgets, setWidgets] = useState<{ id: number; city: string }[]>([
    { id: 0, city: "Kolkata" },
  ]); // Initialize with Kolkata
  const [selectedCity, setSelectedCity] = useState<string | null>("Kolkata");
  const [cityOptions, setCityOptions] = useState<string[]>(indianCities);
  const [cityNotFound, setCityNotFound] = useState(false); // State to handle "City not found"
  const { unit, toggleUnit } = useTemperature(); // Access the temperature unit and toggle function

  const filterCities = (query: string) => {
    setCityNotFound(false); // Reset "City not found" state when user types
    if (query.length > 0) {
      const filteredCities = indianCities.filter((city) =>
        city.toLowerCase().startsWith(query.toLowerCase())
      );
      setCityOptions(filteredCities);
    } else {
      setCityOptions(indianCities);
    }
  };

  const addWidget = () => {
    if (selectedCity) {
      if (indianCities.includes(selectedCity)) {
        // Add widget only if the city exists in the list
        if (!widgets.some((widget) => widget.city === selectedCity)) {
          setWidgets([...widgets, { id: widgets.length, city: selectedCity }]);
        }
        setCityNotFound(false); // Reset the cityNotFound state
        setSelectedCity("Kolkata");
        setCityOptions(indianCities);
      } else {
        // Show "City not found" message if the city is not in the list
        setCityNotFound(true);
      }
    }
  };

  const removeWidget = (id: number) => {
    setWidgets(widgets.filter((widget) => widget.id !== id));
  };

  return (
    <>
      <SearchAppBar />
      <Box sx={{ pb: 2, pt: 4 }}>
        <Autocomplete
          options={cityOptions}
          value={selectedCity}
          onInputChange={(_event, newInputValue) => {
            filterCities(newInputValue);
            setSelectedCity(newInputValue);
          }}
          onChange={(_event, newValue) => {
            setSelectedCity(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Search City" variant="outlined" />
          )}
        />

        {cityNotFound && (
          <Typography variant="body1" color="error" sx={{ mt: 2 }}>
            City not found
          </Typography>
        )}

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            onClick={addWidget}
            sx={{ mt: 2, fontSize: "12px" }}
          >
            Add Widget
          </Button>
          <Button
            variant="contained"
            onClick={toggleUnit}
            sx={{ mt: 2, fontSize: "12px" }}
          >
            Switch to {unit === "Celsius" ? "Fahrenheit" : "Celsius"}
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            mt: 2,
          }}
        >
          {widgets.map(({ id, city }) => (
            <Box
              key={id}
              sx={{
                width: { xs: "100%", sm: "48%", md: "30%" },
                minWidth: "250px",
              }}
            >
              <WeatherWidget
                id={id}
                city={city}
                onRemove={() => removeWidget(id)}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
