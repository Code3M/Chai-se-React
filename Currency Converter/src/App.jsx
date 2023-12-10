import { useState } from "react";
import LogoComponent from "./components/LogoComponent";
import "./App.css";
import InputBox from "./components/InputBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="inline-flex w-full h-screen flex-wrap justify-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1006060/pexels-photo-1006060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundSize: "cover",
        }}
      >
        <div id="converterfield" className="inline-flex flex-wrap flex-col  rounded-3xl">
          <h1 className="self-center mb-16">Currency converter</h1>
            <div id="FromField"
            className="inline-flex flex-wrap w-96 h-20  rounded-3xl"
            >
            <InputBox />
            </div>
          
        </div>

        <div className="inline-flex flex-wrap  justify-center self-end w-full h-1/5">
          <LogoComponent
            cn="mr-auto shrink"
            ima="Tea -PhotoRoom.png-PhotoRoom.png"
          />
          <LogoComponent
            cn="ml-auto shrink"
            ima="Sugar Logo-PhotoRoom.png-PhotoRoom.png"
          />
        </div>
      </div>
    </>
  );
}

export default App;
