import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import ScrollToTop from "react-scroll-to-top";


const Root = () => {
  const location = useLocation();
  const currentLocation = location ==  "/Login"  
  const footerlocation = location ==  '/Registration' 


  return (
    <div>
    <Header></Header>
    <Outlet />
    <div>
      {/* Assuming ScrollToTop is a component */}
      <ScrollToTop smooth color="#D99904" className="grid place-items-center" />
    </div>
    <Footer> </Footer>
  </div>
);
}


export default Root;
