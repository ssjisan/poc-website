import AppointmentSection from "../Components/Common/AppointmentSection/AppointmentSection";
import ServicesSection from "../Components/Common/Services/ServicesSection";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";

export default function Services() {
  return (
    <>
      <Navbar />
      <AppointmentSection />
      <ServicesSection />
      <Footer />
    </>
  );
}
