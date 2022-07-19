import React, { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0); //to track turn
  const [currentGuess, setCurrentGuess] = useState(""); //to track current guess
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  //format a guess into the word
  const formatGuess = () => {};

  //add new guess to the guesses state
  const addNewGuess = () => {};

  //handle event to track current guess
  const handleKeyup = ({ key }) => {
    // console.log(key);
    
    //to check if user is deleting letters before confirming guess
    if(key === 'Backspace'){
        setCurrentGuess((prev) => {
            return prev.slice(0, -1)
        })
        return
    }
    //regex to check of the keyboard is entering alphabets only
    if(/^[A-Za-z]$/.test(key)) {
        if(currentGuess.length < 5) {
            setCurrentGuess((prev) => {
                return prev + key
            })
        }
    }
  };
  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
