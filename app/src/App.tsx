import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./store";
import { decrement, asyncIncrement } from "./store/Stock.store";
// import { decrement, increment } from "./store/Stock.store";

const App = () => {
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);

  return (
    <div className="App">
      <header className="App-header">
        {stock.counter}
        {/* <button onClick={() => dispatch(increment(1))}>Somar</button> */}
        <button onClick={() => dispatch(asyncIncrement(2))}>Somar</button>
        <button onClick={() => dispatch(decrement())}>Subtrair</button>
      </header>
    </div>
  );
};

export default App;
