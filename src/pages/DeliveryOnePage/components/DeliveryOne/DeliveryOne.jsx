import './deliveryOne.css'

import { useContext, useEffect } from 'react'

import DevolutionNote from '../../../../components/DevolutionNote/DevolutionNote'
import { EvaluationContext } from '../../../../context/EvaluationContext'
import { otro } from '../../../../services/otro'

const DeliveryOne = () => {
  const {
    result,
    calculateResult,
    commentOne,
    commentTwo,
    commentThree,
    setCommentOne,
    setCommentTwo,
    setCommentThree,
    handleSaveComments,
    handleClearComments,
    noteOne,
    noteTwo,
    noteThree,
    setNoteOne,
    setNoteTwo,
    setNoteThree,
  } = useContext(EvaluationContext)

  useEffect(() => {
    setCommentOne(localStorage.getItem('comment-evaluation-1'))
    setCommentTwo(localStorage.getItem('comment-evaluation-2'))
    setCommentThree(localStorage.getItem('comment-evaluation-3'))
  }, [])
  useEffect(() => {
    calculateResult(noteOne, noteTwo, noteThree)
  }, [noteOne, noteTwo, noteThree])

  const handleNoteOne = e => {
    const value = e.target.value
    if (value == 1) {
      setNoteOne(33)
    } else if (value == 2) {
      setNoteOne(15)
    } else if (value == 3) {
      setNoteOne(0)
    }
  }
  const handleNoteTwo = e => {
    const value = e.target.value

    if (value == 1) {
      setNoteTwo(33)
    } else if (value == 2) {
      setNoteTwo(15)
    } else if (value == 3) {
      setNoteTwo(0)
    }
  }
  const handleNoteThree = e => {
    const value = e.target.value
    if (value == 1) {
      setNoteThree(33)
    } else if (value == 2) {
      setNoteThree(15)
    } else if (value == 3) {
      setNoteThree(0)
    }
  }

  // TODO: separar la consigna en otro componente para reutilizarla, separar los criterios de evaluación en otro componente para reutilizarlo en el informe final

  return (
    <div id='delivery-evaluation'>
      <section>
        <h2>Consigna Pre-entrega 1</h2>
        <p>Comienza a crear la estructura inicial de tu proyecto integrador. Deberás:</p>
        <p>
          - Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador
          personalizado?
        </p>
        <p>- Armar la estructura HTML del proyecto. - Incorporar algoritmo condicional y algoritmo con ciclo.</p>
        <p>- Utilizar funciones para realizar esas operaciones.</p>
      </section>
      <section>
        <h2>Evaluación</h2>
        <div className='evaluation-box'>
          <div>
            <h3>Estructura HTML y archivo JS</h3>
            <p>
              La estructura HTML está completa y ejecutada con buenas prácticas o utiliza el el starter template de
              Bootstrap u otro framework para el uso adecuado de HTML5 *. El archivo JS está correctamente referenciado
              en el HTML.
            </p>
            <select onChange={handleNoteOne} className='select-evaluation' id='evaluation-1'>
              <option value='0'>Seleccionar</option>
              <option value='1'>Realizado</option>
              <option value='2'>Incompleto</option>
              <option value='3'>No realizado</option>
            </select>
          </div>
          <div className='evaluation-comments'>
            <h3>Comentarios</h3>
            <textarea
              value={commentOne}
              onChange={e => handleSaveComments(e)}
              id='comment-evaluation-1'
              cols='30'
              rows='10'></textarea>
            <button onClick={() => handleClearComments('comment-evaluation-1')} className='btn-clear'>
              Borrar comentario
            </button>
          </div>
        </div>
        <div className='evaluation-box'>
          <div>
            <h3>Algoritmos</h3>
            <p>
              Se utiliza algoritmo condicional y con ciclo (IF, bucles for) de manera óptima , reflejando lo aprendido
              en clase.
            </p>
            <select onChange={handleNoteTwo} className='select-evaluation' id='evaluation-2'>
              <option value='0'>Seleccionar</option>
              <option value='1'>Realizado</option>
              <option value='2'>Incompleto</option>
              <option value='3'>No realizado</option>
            </select>
          </div>
          <div className='evaluation-comments'>
            <h3>Comentarios</h3>
            <textarea
              value={commentTwo}
              onChange={e => handleSaveComments(e)}
              id='comment-evaluation-2'
              cols='30'
              rows='10'></textarea>
            <button onClick={() => handleClearComments('comment-evaluation-2')} className='btn-clear'>
              Borrar comentario
            </button>
          </div>
        </div>
        <div className='evaluation-box'>
          <div>
            <h3>Funciones</h3>
            <p>
            Los nombres de las funciones son claros y dan a entender que acción realizan. Se emplea la estructura correcta para el armado de las mismas. Crea funciones dinámicas de manera correcta. Generan un resultado correcto cuando se ejecutan.	
            </p>
            <select onChange={handleNoteThree} className='select-evaluation' id='evaluation-3'>
              <option value='0'>Seleccionar</option>
              <option value='1'>Realizado</option>
              <option value='2'>Incompleto</option>
              <option value='3'>No realizado</option>
            </select>
          </div>
          <div className='evaluation-comments'>
            <h3>Comentarios</h3>
            <textarea
              value={commentThree}
              onChange={e => handleSaveComments(e)}
              id='comment-evaluation-3'
              cols='30'
              rows='10'></textarea>
            <button onClick={() => handleClearComments('comment-evaluation-3')} className='btn-clear'>
              Borrar comentario
            </button>
          </div>
        </div>
      </section>
      <div>
        <h2>
          Resultado <span>{result === undefined ? '' : result}</span>
        </h2>
      </div>
      <div className='html2pdf__pagebreak'>
        <DevolutionNote />
      </div>
      <button onClick={otro}>PDF</button>
    </div>
  )
}

export default DeliveryOne
