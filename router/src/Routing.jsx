import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Services from "./Pages/Service";

// import ServiceDetails from "../pages/ServiceDetails";
// import ErrorPage from "./pages/ErrorPage";

const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/about" element={<About />} />
			<Route path="/service" element={<Services />} />
      <Route path="/me" element={
      <div>
        <h1>this is my own component inside routing file</h1>
      </div>}/>

      {/* <Route path="/service/:id" element={<ServiceDetails />} /> */}
      {/* <Route path="*" element={<ErrorPage/>}/> */}
		</Routes>
	);
};

export default Routing;