import { useSelector } from "react-redux";
import "./About.css";
import { RootState } from "../../store";
import { Link } from "react-router-dom";

const About = () => {
  const stock = useSelector((state: RootState) => state.stock);

  return (
    <div className="About">
      <header className="About-header">
        {stock.counter}
        <Link to="/">Home</Link>
      </header>
    </div>
  );
};

export default About;
