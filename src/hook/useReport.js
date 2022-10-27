import { useState } from 'react'

export const useReport = () => {
  const [report, setReport] = useState({
    studentName: '',
    course:'',
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
    activityOne: '',
    activityTwo: '',
    activityThree: '',
    activityFour: '',
    activityFive: '',
  })
  

  const handleCalculateResult = () => {
    const { noteOne, noteTwo, noteThree, noteFour, noteFive } = report
    const result = noteOne + noteTwo + noteThree + noteFour + noteFive
    if (result >= 80) {
      setReport({ ...report, resultNote: 'Optimo', })
    } else if (result >= 51 && result <= 79) {
      setReport({ ...report, resultNote: 'Correcto' })
    } else if (result <= 50) {
      setReport({ ...report, resultNote: 'Bajo' })
    }
  }
  
  const handleCalculateDevolution = () => {
    const { resultNote, studentName } = report
    if (resultNote === 'Optimo') {
      setReport({ ...report, devolution: `
      “Hola ${studentName} ¿Cómo estás?”
      “¡Muchas gracias por realizar tu entrega!”
      “ Felicitaciones por tu pre-entrega! ¡Estás cada vez más cerca de la meta final!"
      “¡Felicitaciones! Tu entrega alcanzó el nivel de óptima! Has logrado cumplir con todos las
      consignas de manera exitosa superando las expectativas. Continua así!”
      ` })
    } else if (resultNote === 'Correcto') {
      setReport({ ...report, devolution:  `
      “Hola ${studentName} ¿Cómo estás?”
      “¡Muchas gracias por realizar tu entrega!”
      “¡Felicitaciones! Tu entrega alcanzó el nivel de correcto! Has logrado cumplir con la mayoría de las
      consignas de manera exitosa superando las expectativas. Continua así!”
      ` })
    } else if (resultNote === 'Bajo') {
      setReport({ ...report, devolution: `
      “Hola ${studentName} ¿Cómo estás?”
      “¡Muchas gracias por realizar tu entrega!”
      “¡Felicitaciones! Tu entrega alcanzó el nivel de bajo! tu entrega no alcanzó a cumplir con la mayoría de las
      consignas de manera exitosa. Te recomiendo que repases los contenidos y vuelvas a intentarlo!”
      "Animó a no bajar los brazos y seguir intentando, este es un proceso de aprendizaje y no de competencia."
      ` })
    }
  }
  
  const handleNoteThreeActivities = e => {
    let note = e.target.id
    let value = e.target.value
    let name = e.target.name
    if (value == 1) {
      setReport({ ...report, [note]: 30, [name]: 'Realizado' })
    } else if (value == '2') {
      setReport({ ...report, [note]: 15, [name]: 'Incompleto' })
    } else if (value == '3') {
      setReport({ ...report, [note]: 0, [name]: 'No realizado' })
    }
  }

  const handleNoteFiveActivities = e => {
    let note = e.target.id
    let value = e.target.value
    let name = e.target.name
    if (value == 1) {
      setReport({ ...report, [note]: 20, [name]: 'Realizado' })
    } else if (value == '2') {
      setReport({ ...report, [note]: 10, [name]: 'Incompleto' })
    } else if (value == '3') {
      setReport({ ...report, [note]: 0, [name]: 'No realizado' })
    }
  }

  const handleSaveComment = e => {
    let key = e.target.id
    setReport({ ...report, [e.target.name]: e.target.value })
    localStorage.setItem(key, e.target.value)
  }

  const handleSaveCourse = e => {
    setReport({ ...report, course: e.target.value })
    localStorage.setItem('course', e.target.value)
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

  const handleStudentName = name => {
    
    setReport({ ...report, studentName: name })
  }


    return {
      report,
      handleSaveComment,
      handleRemoveComment,
      handleNoteThreeActivities,
      handleNoteFiveActivities,
      handleCalculateResult,
      handleStudentName,
      handleCalculateDevolution,
      handleSaveCourse,
    }
  }

