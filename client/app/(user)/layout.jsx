import Navbar from "../Components/Utils/User/Navbar";
import Topbar from "../Components/Utils/User/Topbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Topbar />
      <Navbar />
      {children}
    </>
  );
}
