import Navbar from "../Components/Utils/User/Navbar";
import Topbar from "../Components/Utils/User/Topbar";
import Footer from "../Components/Utils/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
