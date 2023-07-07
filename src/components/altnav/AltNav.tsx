import { ReactNode } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./altnav.scss";
function AltNav({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  return (
    <nav className="pt-1 pb-1 w-100 z-10000 relative alt-nav">
      <div className="container flex justify-between align-center g-1">
        <div
          className="logo flex g-1 align-center opacity-100 pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="LOGO" width={70} />
        </div>
        <div className="flex align-center g-2">{children}</div>
      </div>
    </nav>
  );
}
export default AltNav;
