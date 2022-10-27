import { useState } from 'react'

export const useReport = () => {
  const [report, setReport] = useState({
    studentName: '',
    noteOne: 0,
    noteTwo: 0,
    noteThree: 0,
    noteFour: 0,
    noteFive: 0,
    commentOne: '',
    commentTwo: '',
    commentThree: '',
    commentFour: '',
    commentFive: '',
    devolution: '',
    resultNote: '',
  })

  const handleCalculateResult = () => {
    const { noteOne, noteTwo, noteThree, noteFour, noteFive } = report
    const result = noteOne + noteTwo + noteThree + noteFour + noteFive
    if (result >= 80) {
      setReport({ ...report, resultNote: 'Optimo' })
    } else if (result >= 51 && result <= 79) {
      setReport({ ...report, resultNote: 'Correcto' })
    } else if (result <= 50) {
      setReport({ ...report, resultNote: 'Bajo' })
    }
  }

  const handleNoteThreeActivities = e => {
    let note = e.target.id
    let value = e.target.value
    if (value == 1) {
      setReport({ ...report, [note]: 30 })
    } else if (value == '2') {
      setReport({ ...report, [note]: 15 })
    } else if (value == '3') {
      setReport({ ...report, [note]: 0 })
    }
    
  }

  const handleNoteFiveActivities = e => {
    let note = e.target.id
    let value = e.target.value
    if (value == 1) {
      setReport({ ...report, [note]: 20 })
    } else if (value == '2') {
      setReport({ ...report, [note]: 10 })
    } else if (value == '3') {
      setReport({ ...report, [note]: 0 })
    }
  }

  const handleSaveComment = e => {
    let key = e.target.id
    setReport({ ...report, [e.target.name]: e.target.value })
    localStorage.setItem(key, e.target.value)
  }

  const handleRemoveComment = value => {
    if (value === 'comment-evaluation-1') {
      setReport({ ...report, commentOne: '' })
      localStorage.removeItem('comment-evaluation-1')
    } else if (value === 'comment-evaluation-2') {
      setReport({ ...report, commentTwo: '' })
      localStorage.removeItem('comment-evaluation-2')
    } else if (value === 'comment-evaluation-3') {
      setReport({ ...report, commentThree: '' })
      localStorage.removeItem('comment-evaluation-3')
    } else if (value === 'comment-evaluation-4') {
      setReport({ ...report, commentFour: '' })
      localStorage.removeItem('comment-evaluation-4')
    } else if (value === 'comment-evaluation-5') {
      setReport({ ...report, commentFive: '' })
      localStorage.removeItem('comment-evaluation-5')
    }
  }

  return {
    report,
    handleSaveComment,
    handleRemoveComment,
    handleNoteThreeActivities,
    handleNoteFiveActivities,
    handleCalculateResult,
  }
}
