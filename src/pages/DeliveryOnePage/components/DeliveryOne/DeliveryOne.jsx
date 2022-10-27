import './deliveryOne.css'

import {
  getDeliveryOne,
  setDeliveryOne,
  setDevolution,
} from '../../../../redux/features/deliveryOneSlice/deliveryOneSlice'
import { useDispatch, useSelector } from 'react-redux'

import DevolutionNote from '../../../../components/DevolutionNote/DevolutionNote'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useReport } from '../../../../hook/useReport'

const DeliveryOne = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const deliveryOne = useSelector(state => state.deliveryOne)

  const { handleSaveComment, handleRemoveComment, handleNoteThreeActivities, handleCalculateResult, handleCalculateDevolution, handleStudentName, report } =
    useReport()

  const { commentOne, commentTwo, commentThree, resultNote, noteOne, noteTwo, noteThree, devolution } = report

  useEffect(() => {
    dispatch(getDeliveryOne())
    handleStudentName(deliveryOne.studentName)
  }, [dispatch, deliveryOne.studentName])

  useEffect(() => {
    handleCalculateResult()
    dispatch(getDeliveryOne())
  }, [noteOne, noteTwo, noteThree])
  
  useEffect(() => {
    handleCalculateDevolution()
  }, [resultNote])


  useEffect(() => {
    dispatch(setDeliveryOne(report))
    dispatch(getDeliveryOne())
  }, [report])

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
            <select
              name='activityOne'
              onChange={e => handleNoteThreeActivities(e)}
              className='select-evaluation'
              id='noteOne'>
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
              name='commentOne'
              onChange={e => handleSaveComment(e)}
              id='comment-evaluation-1'
              cols='30'
              rows='10'></textarea>
            <button onClick={() => handleRemoveComment('comment-evaluation-1')} className='btn-clear'>
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
            <select
              name='activityTwo'
              onChange={e => handleNoteThreeActivities(e)}
              className='select-evaluation'
              id='noteTwo'>
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
              name='commentTwo'
              onChange={e => handleSaveComment(e)}
              id='comment-evaluation-2'
              cols='30'
              rows='10'></textarea>
            <button onClick={() => handleRemoveComment('comment-evaluation-2')} className='btn-clear'>
              Borrar comentario
            </button>
          </div>
        </div>
        <div className='evaluation-box'>
          <div>
            <h3>Funciones</h3>
            <p>
              Los nombres de las funciones son claros y dan a entender que acción realizan. Se emplea la estructura
              correcta para el armado de las mismas. Crea funciones dinámicas de manera correcta. Generan un resultado
              correcto cuando se ejecutan.
            </p>
            <select
              name='activityThree'
              onChange={e => handleNoteThreeActivities(e)}
              className='select-evaluation'
              id='noteThree'>
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
              name='commentThree'
              onChange={e => handleSaveComment(e)}
              id='comment-evaluation-3'
              cols='30'
              rows='10'></textarea>
            <button onClick={() => handleRemoveComment('comment-evaluation-3')} className='btn-clear'>
              Borrar comentario
            </button>
          </div>
        </div>
      </section>
      <div>
        <h2>
          Resultado <span>{resultNote}</span>
        </h2>
      </div>
      <div>
        <textarea defaultValue={devolution} id='devolution-evaluation' className='devolution'></textarea>
      </div>
      <button className='button' onClick={() => navigate('/reportone', report)}>
        GENERAR INFORME
      </button>
    </div>
  )
}

export default DeliveryOne
