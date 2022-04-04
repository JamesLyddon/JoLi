import "./App.css";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Promos from "./Pages/Promos";
import Headshots from "./Pages/Headshots";
import Studio from "./Pages/Studio";
import Contact from "./Pages/Contact";
import Client from "./Pages/Client";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <Footer />
    </div>
  );
}

export default App;

{
  /* <BrowserRouter>
<Routes>
  <Route path="/" exact element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/promos" element={<Promos />} />
    <Route path="/headshots" element={<Headshots />} />
    <Route path="/studio" element={<Studio />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/client" element={<Client />} />
  </Route>
</Routes>
</BrowserRouter> */
}
