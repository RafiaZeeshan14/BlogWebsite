import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import BlogHome from "./components/blogHome";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <div  style={{ fontFamily: 'Poppins' }}>
      <BrowserRouter>
      <div>
        <Navbar />
        <AppRoutes />
        <Footer/>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
