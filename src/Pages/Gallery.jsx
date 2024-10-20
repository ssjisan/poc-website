import PhotoAlbums from "../Components/Common/PhotoAlbum/PhotoAlbums";
import VideoGallery from "../Components/Common/VideoGallery/VideoGallery";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
export default function Gallerys() {

  
  return (
    <>
      <Navbar />
      <PhotoAlbums/>
      <VideoGallery/>
      <Footer />
    </>
  );
}
