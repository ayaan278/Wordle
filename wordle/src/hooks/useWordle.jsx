import React, { useState } from "react"

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0) //to track turn
  const [currentGuess, setCurrentGuess] = useState("") //to track current guess
  const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)

  //format a guess into the word
  const formatGuess = () => {
    let solutionArray = [...solution]
    let formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: "grey" }
    })

    //to find green letters in the guess
    formattedGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        formattedGuess[i].color = "green"
        solutionArray[i] = null
      }
    })
    //to find yellow letters in the guess
    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== "green") {
        formattedGuess[i].color = "yellow"
        solutionArray[solutionArray.indexOf(l.key)] = null
      }
    })

    return formattedGuess
  }

  //add new guess to the guesses state
  const addNewGuess = (formattedGuess) => {
    if(currentGuess === solution){
        setIsCorrect(true)
    }
    setGuesses((prevGuesses) => {
        let newGuesses = [...prevGuesses]
        newGuesses[turn] = formattedGuess
        return newGuesses
    })
    setHistory((prevHistory) => {
        return [...prevHistory, currentGuess]
    })
    setTurn((prevTurn) =>{
        return prevTurn +1
    })
    setCurrentGuess('')
  }

  //handle event to track current guess
  const handleKeyup = ({ key }) => {
    // console.log(key)

    //to track submission of the guess
    if (key === "Enter") {
      if (turn > 5) {
        return
      }
      if (history.includes(currentGuess)) {
        return
      }
      if (currentGuess.length !== 5) {
        return
      }
      const formatted = formatGuess()
      addNewGuess(formatted)
    }
    //to check if user is deleting letters before confirming guess
    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1))
      return
    }
    //regex to check of the keyboard is entering alphabets only
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key)
      }
    }
  }
  return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useWordle
