import Slidercontainer from "./components/Slidercontainer";
import { useContext, useState } from "react";
import { Context } from "./context/Context";

function App() {
  //tommorow task is to check how to pass data from child to parent

  // const [color, setColor] = useState({ red: 0, green: 0, blue: 0 });
  // const handleCallback = (childData) => {
  //   setColor({ name: childData });
  // };

  // const {red,green,blue} = color;
  return (
    <div>
      <Slidercontainer />
    </div>
  );
}

export default App;
