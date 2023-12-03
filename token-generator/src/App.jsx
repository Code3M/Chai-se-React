import { useState, useCallback, useEffect, useRef} from "react";

function App() {
  const [password, setPassword] = useState("");
  const [range, setRange] = useState("6");
  const [isNumber, setIsNumber] = useState(false);
  const [isSpChar, setIsSpChar] = useState(false);

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) str += "0123456789";
    if (isSpChar) str += "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~";
    for (let index = 1; index <= range; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [isNumber, range, isSpChar]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator();
  }, [isNumber, range, isSpChar, passwordGenerator]);

  return (
    <>
      <div
        id="body"
        className="fixed flex flex-col w-full h-screen justify-center flex-wrap items-center"
        style={{ background: "linear-gradient(to right, #edeb30, #1b17d8)" }}
      >
        <h1 className="text-3xl text-white ">Token Generator</h1>
        <div
          id="2nd body"
          className="w-3/6 h-2/3 flex flex-wrap rounded-3xl justify-start content-start"
          style={{
            backgroundColor: "rgba(31, 28, 121, 0.612)",
          }}
        >
          <div className="flex w-full h-10 rounded-3xl m-6 overflow-hidden">
            <input
              type="text"
              defaultValue={password}
              className="outline-none w-10/12  py-1 px-3 read-only"
              ref={passwordRef}
            ></input>
            <button 
            className="w-1/6 outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}>
              copy
            </button>
          </div>
          <div className="flex flex-wrap content-around  h-10 gap-x-2 rounded-3xl m-6 overflow-hidden justify-start items-start px-3 py-0.5">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                className="cursor-grab  "
                min={6}
                max={32}
                onChange={(e) => {
                  setRange(e.target.value);
                }}
              ></input>
              <label className="text-white">Length:{range}</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="addNumber"
                onChange={() => {
                  setIsNumber((prev) => !prev);
                }}
              ></input>
              <label className="text-white" htmlFor="addNumber">
                Number
              </label>
            </div>
            <div>
              <input
              type="checkbox"
              id="addChar"
              onChange={() => {
                setIsSpChar((prev) => !prev);
              }}
              ></input>
              <label className="text-white" htmlFor="addChar">Sp Char</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
