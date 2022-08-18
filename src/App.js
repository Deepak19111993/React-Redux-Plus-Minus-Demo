import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import "./app.scss";
import {
  decreaseValue,
  getFetchData,
  getMemeData,
  increaseValue,
} from "./redux/actions/generalAction";

function App() {
  const { count, users, loading, error, meme } = useSelector(
    (state) => state.valueReducer
  );

  const dispatch = useDispatch();
  // console.log(count);
  console.log("fetchAction meme", meme);
  // console.log("setAction", setAction);
  return (
    <div className="App">
      <div className="calculation-wrapper">
        <button type="button" onClick={() => dispatch(decreaseValue())}>
          -
        </button>
        <input type="text" value={count} />
        {/* <span>{data[0].count}</span> */}
        <button type="button" onClick={() => dispatch(increaseValue())}>
          +
        </button>
      </div>
      <div style={{ margin: "50px 0 0" }}>
        {loading ? (
          <p>Loading....</p>
        ) : error ? (
          <p>Error</p>
        ) : (
          users.map((item, index) => (
            <span key={index} style={{ margin: "0 15px 0 0" }}>
              {item.name}
            </span>
          ))
        )}
      </div>
      <div style={{ margin: "50px 0 0" }}>
        <button type="button" onClick={() => dispatch(getFetchData())}>
          Call Saga
        </button>
      </div>

      <div style={{ marginTop: "50px" }}>
        <span style={{ margin: "30px 0", display: "block", fontSize: "20px" }}>
          Memes API
        </span>
        <ul>
          {meme.map((item, index) => (
            <li key={index}>
              <div>{item.name}</div>
              <img src={item.url} alt="img" />
            </li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={() => dispatch(getMemeData())}>
        Call Meme
      </button>
    </div>
  );
}

export default App;
