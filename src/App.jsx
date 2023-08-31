import { useState } from "react";

import Profile from "./components/profile";
import data from "../data.json";
import Card from "./components/Card";

function App() {
  // useState for getProfileTime
  const [time,setTime] = useState("weekly")
  return (
    <div className="app">
      <Profile time={time} setTime={setTime}/>
      {data.map((item, i) => {
        return <Card key={i} item={item} time={time}/>;
      })}
    </div>
  );
}

export default App;
