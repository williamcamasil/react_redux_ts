import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { RootState } from "../../store";
import { decrement, asyncIncrement } from "../../store/Stock.store";
// import { decrement, increment } from "../../store/Stock.store";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);

  return (
    <div className="Home">
      <header className="Home-header">
        {stock.counter}
        {/* <button onClick={() => dispatch(increment(1))}>Somar</button> */}
        <button onClick={() => dispatch(asyncIncrement(2))}>Somar</button>
        <button onClick={() => dispatch(decrement())}>Subtrair</button>
        <Link to="/about">Sobre</Link>
      </header>
    </div>
  );
};

export default Home;
