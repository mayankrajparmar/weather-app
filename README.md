# Weather App

This project is a **Weather App** that allows users to search for city weather information, add widgets, and toggle between Celsius and Fahrenheit. The weather data is fetched from the [OpenWeather API](https://openweathermap.org/). It uses React, Material-UI (MUI), and Axios for API calls.

## Features

- **Weather Information**: Displays weather information (temperature, condition, and icon) for the selected cities.
- **Unit Switcher**: Users can switch between Celsius and Fahrenheit for temperature units.
- **City Search**: Search cities from a static list, and add them to the dashboard.
- **Persistent Widgets**: Add multiple weather widgets to the dashboard.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [API Reference](#api-reference)

---

## Installation

To get started with the project, clone this repository and install the necessary dependencies:

```bash
git clone <your-repository-url>
cd weather-app
npm install
```

## Environment Variables

This project uses environment variables to handle the API key for OpenWeather. Follow the steps below to configure your environment:

1. Create a `.env` file in the root directory of the project.
2. Add the API key for OpenWeather in the `.env` file as follows:

For **Create React App** or **Webpack**:

```bash
REACT_APP_API_KEY=your_openweather_api_key
```

For **Vite**:

```bash
VITE_API_KEY=your_openweather_api_key
```

Replace `your_openweather_api_key` with your actual API key from OpenWeather.

## Running the Project

Once the environment variables are set, you can start the project using the following command:

```bash
npm start
```

This will start the development server. Open your browser and go to `http://localhost:3000` to see the application.

## Project Structure

Here is an overview of the project's folder structure:

```bash
.
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── AppBar.tsx      # Custom AppBar component
│   │   ├── Dashboard.tsx   # Main Dashboard component
│   │   ├── WeatherWidget.tsx  # Widget component for displaying weather
│   ├── context
│   │   └── TemperatureContext.tsx # Context for temperature unit management
│   ├── locals
│   │   └── cities.ts       # Static list of Indian cities
│   ├── App.tsx             # Root component
│   ├── index.tsx           # Entry point
│   ├── types.ts            # TypeScript types
└── .env                    # Environment variables (not included in the repository)
```

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Strongly typed superset of JavaScript.
- **Material-UI (MUI)**: React UI framework for building responsive designs.
- **Axios**: Promise-based HTTP client for making API requests.
- **OpenWeather API**: Provides weather data for different cities.

## API Reference

### OpenWeather API

This project uses the [OpenWeather API](https://openweathermap.org/) to fetch weather data. Ensure you have an API key to access the data.

### Indian Cities API

The Indian cities data is fetched from the static array `indianCities` in the `locals` folder.

## Usage Instructions

1. **Search City**: Use the search bar to find a city and add a weather widget to the dashboard.
2. **Add Widget**: After selecting a city, click the "Add Widget" button to display the weather for that city.
3. **Remove Widget**: Click the close icon to remove a weather widget from the dashboard.
4. **Toggle Temperature Unit**: Use the "Switch to Celsius/Fahrenheit" button to toggle between the two units.
