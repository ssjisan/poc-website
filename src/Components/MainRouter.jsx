import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Gallerys from "../Pages/Gallery";
import { Toaster } from "react-hot-toast";
import Services from "../Pages/Services";
import ExerciseVideo from "../Pages/ExerciseVideo";
import BookAnAppointment from "../Pages/BookAnAppointment";
import Links from "../Pages/Links";
import Articles from "../Pages/Articles";
import BlogPreview from "../Pages/BlogPreview";

export default function MainRoute() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="treatments" element={<Services />} />
        <Route path="gallery" element={<Gallerys />} />
        <Route path="contact" element={<Contact />} />
        <Route path="exercise_video" element={<ExerciseVideo />} />
        <Route path="book_appointment" element={<BookAnAppointment />} />
        <Route path="links" element={<Links />} />
        <Route path="blog" element={<Articles />} />
        <Route path="blog/:slug" element={<BlogPreview />} />
      </Routes>
    </>
  );
}
