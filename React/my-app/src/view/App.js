import React from 'react';
import { Button } from 'antd-mobile';
function App(props) {
  
function randomQuestion(){
  props.history.push('/randomQ')
}
  return (
    <div className="App">
      <Button onClick={randomQuestion} >随机答题</Button>
    </div>
  );
}

export default App;
