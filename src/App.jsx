
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Women from "./pages/Women"

import Form from "./pages/Form"
import Home from "./pages/Home"
import CountrySelectPage from "./pages/CountrySelectPage";

import ScrollToTop from "./pages/ScrollToTop";
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignIn";
import Admindashboard from "./pages/Admindashboard";
import Unstiched from "./pages/Unstiched";
import AddProduct from "./pages/AddProduct";
import ProductInfo from "./pages/ProductInfo";
import EditProduct from "./pages/EditProduct";










function App() {
 

  return (
  
    <>
    
      <BrowserRouter>
      
      <ScrollToTop />    
      <Routes>
        
        <Route path="/" element={<CountrySelectPage />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Women" element={<Women />}/>
         
         
        <Route path="/Form" element={<Form />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/Admindashboard" element={<Admindashboard />} />
        <Route path = "/Unstiched" element= {<Unstiched />} />
        <Route path="/AddProduct" element= {<AddProduct />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/edit-product/:id" element={<EditProduct/>} />

        


          
        
      </Routes>
      
      
      </BrowserRouter>
      
    </>
  )
}

export default App
