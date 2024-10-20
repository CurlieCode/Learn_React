import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BlogRoutes from "./Routes/BlogRoutes";
const App = () => {
    return (
     <Router>
      <BlogRoutes/>
     </Router>
    )
};

export default App;
