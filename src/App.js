import React from "react";
import Router from "./routes/Router";
import LocationsContext from "./context/locations-context";

import locationsData from "./assets/data.json";

function App() {
  return (
    <LocationsContext.Provider value={locationsData}>
      <Router />;
    </LocationsContext.Provider>
  );
}

export default App;
