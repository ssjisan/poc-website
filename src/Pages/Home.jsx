import AppointmentSection from "../Components/Common/AppointmentSection/AppointmentSection";
import PhotoAlbums from "../Components/Common/PhotoAlbum/PhotoAlbums";
import ServicesSection from "../Components/Common/Services/ServicesSection";
import DoctorsProfile from "../Components/Home/DoctorsProfile/DoctorsProfile";
import HeroSection from "../Components/Home/HeroSection";
import LatestVideos from "../Components/Common/VideoGallery/VideoGallery";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DoctorsProfile />
      <ServicesSection />
      <PhotoAlbums />
      <AppointmentSection />
      <LatestVideos />
      <Footer />
    </>
  );
}
