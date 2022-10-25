import { createContext } from 'react'
import { useState } from 'react'

export const EvaluationContext = createContext()

export const EvaluationProvider = ({ children }) => {
  const [result, setResult] = useState('')
  const [studentName, setStudentName] = useState('')

  const [noteOne, setNoteOne] = useState(0)
  const [noteTwo, setNoteTwo] = useState(0)
  const [noteThree, setNoteThree] = useState(0)
  const [noteFour, setNoteFour] = useState(0)
  const [noteFive, setNoteFive] = useState(0)
  const [noteSix, setNoteSix] = useState(0)

  const [commentOne, setCommentOne] = useState('')
  const [commentTwo, setCommentTwo] = useState('')
  const [commentThree, setCommentThree] = useState('')
  const [commentFour, setCommentFour] = useState('')
  const [commentFive, setCommentFive] = useState('')
  const [commentSix, setCommentSix] = useState('')

  // Calcula el resultado de la evaluación y setea el estado con el resultado del calculo
  const calculateResult = (noteOne = 0, noteTwo = 0, noteThree = 0, noteFour = 0, noteFive = 0, noteSix = 0) => {
    let resultNote = noteOne + noteTwo + noteThree + noteFour + noteFive + noteSix
    if (resultNote >= 80) {
      setResult('Optimo')
    } else if (resultNote >= 51 && resultNote < 80) {
      setResult('Correcto')
    } else if (resultNote > 0 && resultNote < 51) {
      setResult('Bajo')
    }
  }

  const handleSaveStudentName = e => {
    const studentName = e.target.value
    setStudentName(studentName)
  }

  const handleSaveComments = e => {
    const comment = e.target.value
    const id = e.target.id
    console.log(id)
    console.log(comment)
    if (id == 'comment-evaluation-1') {
      setCommentOne(comment)
      localStorage.setItem('comment-evaluation-1', comment)
    } else if (id == 'comment-evaluation-2') {
      setCommentTwo(comment)
      localStorage.setItem('comment-evaluation-2', comment)
    } else if (id == 'comment-evaluation-3') {
      setCommentThree(comment)
      localStorage.setItem('comment-evaluation-3', comment)
    } else if (id == 'comment-evaluation-4') {
      setCommentFour(comment)
      localStorage.setItem('comment-evaluation-4', comment)
    } else if (id == 'comment-evaluation-5') {
      setCommentFive(comment)
      localStorage.setItem('comment-evaluation-5', comment)
    } else if (id == 'comment-evaluation-6') {
      setCommentSix(comment)
      localStorage.setItem('comment-evaluation-6', comment)
    }
  }

  const handleClearComments = id => {
    if (id == 'comment-evaluation-1') {
      setCommentOne('')
      localStorage.removeItem('comment-evaluation-1')
    } else if (id == 'comment-evaluation-2') {
      setCommentTwo('')
      localStorage.removeItem('comment-evaluation-2')
    } else if (id == 'comment-evaluation-3') {
      setCommentThree('')
      localStorage.removeItem('comment-evaluation-3')
    } else if (id == 'comment-evaluation-4') {
      setCommentFour('')
      localStorage.removeItem('comment-evaluation-4')
    } else if (id == 'comment-evaluation-5') {
      setCommentFive('')
      localStorage.removeItem('comment-evaluation-5')
    } else if (id == 'comment-evaluation-6') {
      setCommentSix('')
      localStorage.removeItem('comment-evaluation-6')
    }
  }

  return (
    <EvaluationContext.Provider
      value={{
        result,
        calculateResult,
        studentName,
        handleSaveStudentName,
        commentOne,
        commentTwo,
        commentThree,
        commentFour,
        commentFive,
        commentSix,
        noteOne,
        noteTwo,
        noteThree,
        noteFour,
        noteFive,
        noteSix,
        setNoteOne,
        setNoteTwo,
        setNoteThree,
        setNoteFour,
        setNoteFive,
        setNoteSix,
        setCommentOne,
        setCommentTwo,
        setCommentThree,
        setCommentFour,
        setCommentFive,
        setCommentSix,
        handleClearComments,
        handleSaveComments,
      }}>
      {children}
    </EvaluationContext.Provider>
  )
}
