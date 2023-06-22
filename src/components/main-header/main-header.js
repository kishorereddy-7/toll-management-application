import Timer from "../timer/Timer";
import "./main-header-style.css";

const MainHeader = () => {
  return (
    <header className="com-header header-bottom p-2">
      <h2 className="">Toll Management Application</h2>
      <Timer />
    </header>
  );
};

export default MainHeader;
