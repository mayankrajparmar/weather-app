import { Card, CardContent, IconButton, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { TemperatureContext } from "../context/TemperatureContext";
import { Delete } from "@mui/icons-material";
import { configs } from "../configs";

interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
}

interface WeatherWidgetProps {
  id: number;
  city: string;
  onRemove: () => void;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  id,
  city,
  onRemove,
}) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const context = useContext(TemperatureContext);

  if (!context) {
    throw new Error("WeatherWidget must be used within a TemperatureProvider");
  }

  const { unit } = context;

  useEffect(() => {
    const fetchWeather = async () => {
      const units = unit === "Celsius" ? "metric" : "imperial";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${configs.server_url}&units=${units}`
      );
      const data = response.data;
      setWeather({
        temperature: data.main.temp,
        condition: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
      });
    };

    fetchWeather();
  }, [city, unit]);

  return (
    <Card style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} key={id}>
      <CardContent>
        <IconButton onClick={onRemove} style={{ float: "right", color: "red" }}>
          <Delete />
        </IconButton>
        <Typography variant="h5" style={{ color: "green" }}>
          {city} Weather
        </Typography>
        {weather ? (
          <>
            <Typography variant="body1">
              Temperature: {weather.temperature} °
              {unit === "Celsius" ? "C" : "F"}
            </Typography>
            <Typography variant="body1">
              Condition: {weather.condition}
            </Typography>
            <img src={weather.icon} alt="Weather icon" />
          </>
        ) : (
          <Typography variant="body1">Loading...</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
