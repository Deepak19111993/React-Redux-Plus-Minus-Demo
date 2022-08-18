import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import "./app.scss";
import {
  decreaseValue,
  getFetchData,
  getMemeData,
  increaseValue,
  displayNewDataWithClick,
} from "./redux/actions/generalAction";

function App() {
  const { count, users, loading, error, meme, upperLimit } = useSelector(
    (state) => state.valueReducer
  );

  const dispatch = useDispatch();
  // console.log(count);
  console.log("fetchAction meme", upperLimit);
  // console.log("setAction", setAction);

  // const slice = slice(0, 10);

  // const sliceData = Math.floor(Math.random() * );

  const handleClick = () => {
    if (meme.length === 0) {
      dispatch(getMemeData());
    } else {
      dispatch(displayNewDataWithClick());
    }
  };

  return (
    <div className="App" style={{ padding: "20px 0" }}>
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
          {loading ? (
            <p>Loading....</p>
          ) : error ? (
            <p>Error</p>
          ) : (
            meme.slice(0, upperLimit).map((item, index) => (
              <li key={index}>
                <div>{item.name}</div>
                <img src={item.url} alt="img" />
              </li>
            ))
          )}
        </ul>
      </div>
      <button type="button" onClick={() => handleClick()}>
        Call Meme
      </button>
    </div>
  );
}

export default App;
