import logo from "../assets/logo.png";
export default function Loader() {
  return (
    <>
      <div
        className="fixed l-0 t-0 w-100 h-100 alt-bg opacity-100 z-100000 pt-3 opacity-90"
        style={{ zIndex: 999999999991 }}
      >
        <div className="image m-auto w-fit">
          <img src={logo} alt="LOGO" width={150} />
        </div>
      </div>
      <div className="loader" style={{ zIndex: 999999999999 }}></div>
    </>
  );
}
