import AppointmentSection from "../Components/Common/AppointmentSection/AppointmentSection";
import ServicesSection from "../Components/Common/Services/ServicesSection";
import DoctorsProfile from "../Components/Home/DoctorsProfile/DoctorsProfile";
import HeroSection from "../Components/Home/HeroSection";
import LatestPhotoAlbums from "../Components/Home/PhotoAlbum/LatestPhotoAlbums";
import LatestVideos from "../Components/Home/VideoGallery/LatestVideos";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DoctorsProfile />
      <ServicesSection />
      <LatestPhotoAlbums />
      <AppointmentSection />
      <LatestVideos />
      <Footer />
    </>
  );
}
