import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Container/header";
import Home from "./Components/Home";
import About from "./Components/AboutUs";
import Service from "./Components/Service/ServiceOffers";
import Engagement from "./Components/EngagementModel";
import Career from "./Components/Carrers";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer/Index";
import CloudPlatform from "./Components/Service/CloudPlatform";
import Cognitive from "./Components/Service/CognitiveSolutions";
import Hardware from "./Components/Service/HardwareProduct";
import Salesforce from "./Components/Service/SalesforceCRM";
import Software from "./Components/Service/SoftwareProduct";
import DotNetDeveloper from "./Components/Carrers/Viewjob-Pages/DotNetDeveloper";
import JavaDeveloper from './Components/Carrers/Viewjob-Pages/JavaDeveloper'
import LeadMechanicalEngineer from "./Components/Carrers/Viewjob-Pages/LeadMechanicalEngineer";
import PythonDeveloper from "./Components/Carrers/Viewjob-Pages/PythonDeveloper";
import SalesforceLead from "./Components/Carrers/Viewjob-Pages/SalesforceLead";
import UIDeveloper from "./Components/Carrers/Viewjob-Pages/UIDeveloper";
import Advisory from "./Components/Service/SalesforceCRM/Description/Advisory";
import Implementation from "./Components/Service/SalesforceCRM/Description/Implementation";
import Ongoing from "./Components/Service/SalesforceCRM/Description/Ongoing";
import Solution from "./Components/Service/SalesforceCRM/Description/Solution";
import Search from "./Container/search/index.jsx";
import NotFound from "./Components/NotFound404/index.jsx";
import Landing from "./Components/MOU/Landing.jsx";
 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        {/* Public Layout with Header and Footer */}
        <Route path="*" element={<> <Header />
              <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/engagement" element={<Engagement />} />
                <Route path="/careers" element={<Career />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/service/cloud-platform-engineering" element={<CloudPlatform />} />
                <Route path="/service/cognitive-solution" element={<Cognitive />} />
                <Route path="/service/hardware-product-engineering" element={<Hardware />} />
                <Route path="/service/salesforce-crm" element={<Salesforce />} />
                <Route path="/service/software-product-engineering" element={<Software />} />
                <Route path="/careers/net-developer" element={<DotNetDeveloper />} />
                <Route path="/careers/java-developer" element={<JavaDeveloper />} />
                <Route path="/careers/lead-mechanical-engineer" element={<LeadMechanicalEngineer />} />
                <Route path="/careers/python-developer" element={<PythonDeveloper />} />
                <Route path="/careers/salesforce-lead" element={<SalesforceLead />} />
                <Route path="/careers/sr-ui-developer" element={<UIDeveloper />} />
                <Route path="/service/advisory-service" element={<Advisory />} />
                <Route path="/service/solution-finalization" element={<Solution />} />
                <Route path="/service/implementation" element={<Implementation />} />
                <Route path="/service/ongoing-support" element={<Ongoing />} />
                <Route path="/search/:id" element={<Search />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </>
          }
        />
 
         <Route path="/MOU" element={
           <Routes>
             <Route index element={<Landing />} />
           </Routes>
         }
       />
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;