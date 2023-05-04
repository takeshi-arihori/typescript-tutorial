import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );

  function LikeButton(){
    // useState = 関数コンポーネントに状態を持たせるためのReactの機能
    const [count, setCount] = useState(999);
    // span要素をクリックしたときに、countの値を増加するhandleClick関数
    const handleClick = () => {
      setCount(count+1);
    }
    return <span className='likeButton' onClick={handleClick}>❤︎{count}</span>
  }
}

export default App;
