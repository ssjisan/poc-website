import { useEffect, useState } from "react";
// import Filters from "../Components/Articles/Filters";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
import axios from "axios";
import toast from "react-hot-toast";
import BlogSection from "../Components/Common/Articles/BlogSection";
export default function Articles() {
  // const [categories, setCategories] = useState([]); // Store category options
  // const [selectedCategory, setSelectedCategory] = useState(null); // Selected category
  // const handleCategoryChange = (event, newValue) => {
  //   setSelectedCategory(newValue);
  // };

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_SERVER_API}/treatments_list`
  //       ); // Fetch categories
  //       setCategories(response.data); // Assuming the response returns an array of categories
  //     } catch (error) {
  //       toast.error("Error fetching categories:", error);
  //     }
  //   };

  //   fetchCategories();
  // }, []);


  return (
    <>
      <Navbar />
      {/* <Filters
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      /> */}
      <BlogSection />
      <Footer />
    </>
  );
}
