import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* Your layout content */}
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}