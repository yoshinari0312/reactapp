import { ColoredMessage } from "./components/index";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

export const App = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("num is chenged.");
  },[num])

  const onClickButton = () => {
    setNum(prevState => prevState + 1)
  };

  return (
    <>
      <h1 style={{color:"red"}}>こんにちは！</h1>
      <ColoredMessage color="blue">"お元気ですか？"</ColoredMessage>
      <ColoredMessage color="pink">"元気です！"</ColoredMessage>
      <Button onClick={onClickButton} variant="contained" color="success" size="large">ボタン</Button>
      <p>{num}</p>
    </>
  );
}
