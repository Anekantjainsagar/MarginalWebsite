import Navbar from "../Components/Utils/Navbar";
import Footer from "../Components/Utils/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
