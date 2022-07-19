import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Heading } from "@chakra-ui/react";
import Wordle from "./components/Wordle";


function App() {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        //random integer from json file
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  return (
    <>
      <Header />
      {solution && <Wordle solution={solution} />}
      {/* doesn't print solution unless there is some values to it */}
      <Footer />
    </>
  );
}

export default App;
