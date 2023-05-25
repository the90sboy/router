import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";
import Navbars from "./Components/Navbar";
import Routing from "./Routing";


function App() {
	return (
		<BrowserRouter>
     <Navbars/>
     <Routing/>
    </BrowserRouter>
	);
}

export default App;