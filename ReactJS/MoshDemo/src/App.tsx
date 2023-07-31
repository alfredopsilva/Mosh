
import "./App.css";
import Alert from "./components/Alert";
import { Button } from "./components/Button";
import { useState } from "react";


function App() {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {isVisible && <Alert initialString="Oh my!" secondString="This is an Alert" onCloseButton={() => {
        if (isVisible)
          setIsVisible(false)
      }} />}
      <Button text="My Button" type="primary" onClickButton={() => {
        if (!isVisible)
          setIsVisible(true)
      }} />
    </>
  );
}

export default App;
