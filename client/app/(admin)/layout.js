import Sidebar from "../Components/Admin/Sidebar";
import Topbar from "../Components/Admin/Topbar";

export default function RootLayout({ children }) {
  return (
    <div className="flex h-[100vh]">
      <Sidebar />
      <div className="w-[85vw] pt-6 px-6">
        <Topbar />
        {children}
      </div>
    </div>
  );
}
