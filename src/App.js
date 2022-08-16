import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import './app.scss';
import { decreaseValue, increaseValue } from './redux/actions/generalAction';

function App() {
  const { count } = useSelector((state) => state.valueReducer);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div className="App">
      <div className='calculation-wrapper'>
        <button type='button'
        onClick={() => dispatch(decreaseValue())}
        >-</button>
        <input type="text" value={count} />
        {/* <span>{data[0].count}</span> */}
        <button type='button'
        onClick={() => dispatch(increaseValue())}
        >+</button>
      </div>
    </div>
  );
}

export default App;
