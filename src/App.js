import { useLayoutEffect, useState } from "react";
import Header from "./components/Header";
import Wordle from "./components/Wordle";


function App() {
  const [solution, setSolution] = useState(null);
  const [hint, setHint] = useState(null);

  useLayoutEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        
        //random integer from json file
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
        setHint(randomSolution.hint);
      });
  }, [setSolution, setHint]);

  return (
    <>
      <Header />
      {solution && <Wordle solution={solution} hint={hint} />}
      {/* doesn't print solution unless there is some values to it */}
    </>
  );
}

export default App;
