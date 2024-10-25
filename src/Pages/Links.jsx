import FormList from "../Components/Form/FormList";
import JournalList from "../Components/Journal/JournalList";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
export default function Links() {
    return (
        <>
            <Navbar />
            <FormList />
            <JournalList/>
            <Footer />
        </>
    )
}
