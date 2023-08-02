
import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { produce } from 'immer';


function App() {

const [game, setGame] = useState({
  id:1, 
  player: {
    name: 'John'
  }
})

const handleClick = () => {
  setGame({...game, player: { ... game.player,name: 'Alfredo'}});
}

  return (
    <>
      <h1>Hello {game.player.name} {game.id}</h1>
      <Button type={"danger"} text={"Change Name"} onClickButton={() => handleClick()}/>
    </>
  );
}

export default App;
