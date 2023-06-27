import "./loading.scss";
import logo from "../../assets/logo.png";
function Loading() {
  return (
    <div className="loading fixed w-100 h-100 alt-bg z-100000 pt-3">
      <div className="fixed l-0 t-0 w-100 h-100 black-bg opacity-90"></div>
      <div className="container flex align-center g-1 justify-center relative">
        <div
          className="flex flex-column align-center g-3 justify-end relative w-60"
          style={{
            height: "250px",
          }}
        >
          <div className="image centering-content">
            <img src={logo} alt="LOGO" width={100} />
          </div>
          <h2 className="neon uppercase letter-s-1">Cocking In Progress</h2>
        </div>
        <div
          className="line-bg line absolute l-50 translate-50 h-60"
          style={{
            width: "3px",
            top: "60%",
          }}
        ></div>
        <div id="cooking" className="relative m-auto t-0 overflow-hidden">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div id="area">
            <div id="sides">
              <div id="pan"></div>
              <div id="handle"></div>
            </div>
            <div id="pancake">
              <div id="pastry"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Loading;
