import { GiRaven } from "react-icons/gi";
import { IoPrint } from "react-icons/io5";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <GiRaven />
        Odin CV Creator
      </div>
      <button
        className="printBtn"
        onClick={() => {
          window.print();
        }}>
        <IoPrint /> Print
      </button>
    </header>
  );
}

export default Header;
