import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Gallerys from "../Pages/Gallery";
import Member from "../Pages/Member";
import { Toaster } from "react-hot-toast";
import Journal from "../Pages/Journal";
import Forms from "../Pages/Forms";

export default function MainRoute() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallerys />} />
        <Route path="contact" element={<Contact />} />
        <Route path="members" element={<Member />} />
        <Route path="link" element={<Journal />} />
        <Route path="forms" element={<Forms />} />
      </Routes>
    </>
  );
}
