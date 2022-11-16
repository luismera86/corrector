import './deliveryTow.css'

import { getDeliveryTow, setDeliveryTow } from '../../../../redux/features/deliveryTowSlice/deliveryTowSlice'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useReport} from '../../../../hook/useReport'

const DeliveryTow = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    handleSaveComment,
    handleRemoveComment,
    handleNoteFiveActivities,
    handleCalculateResult,
    handleCalculateDevolution,
    handleStudentName,
    handleCourse,
    report,
  } = useReport()
  const {
    commentOne,
    commentTwo,
    commentThree,
    commentFour,
    commentFive,
    resultNote,
    noteOne,
    noteTwo,
    noteThree,
    noteFour,
    noteFive,
    devolution,
  } = report

  useEffect(() => {
    handleCalculateResult()
  }, [noteOne, noteTwo, noteThree, noteFour, noteFive])

  useEffect(() => {
    handleCalculateDevolution()
  }, [resultNote])

  useEffect(() => {
    dispatch(setDeliveryTow(report))
    dispatch(getDeliveryTow())
  }, [report])

  return (
    <>
      <div id='delivery-evaluation'>
        <div>
          <h1>Corrector de pre-entregas - Curso de Javascript</h1>
          <section className='container-stunet-info'>
            <label className='label-student-info'>Estudiante</label>
            <input
              type='text'
              id='student'
              placeholder='Ingrese el nombre y apellido del estudiante evaluado'
              className='input-student-info'
              onChange={e => handleStudentName(e)}
            />
            <label className='label-student-info'>Curso/Comisión</label>
            <input
              type='text'
              id='course'
              placeholder='Completar con nombre de curso y comisión'
              className='input-student-info'
              onChange={e => handleCourse(e)}
            />
          </section>
        </div>

        <section>
          <h2>Consigna Pre-entrega 2</h2>
          <p>
            Deberás entregar la estructura del proyecto, las variables de JS necesarias y los objetos de JS,
            correspondientes a la segunda entrega de tu proyecto final.
          </p>
          <h3>Objetivos Generales</h3>
          <p>- Codificar la funcionalidad inicial del simulador.</p>
          <p>
            - Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas por el usuario,
            procesamiento esencial del simulador y notificación de resultados en forma de salida.
          </p>
          <h3>Objetivos específicos </h3>

          <p>- Capturar entradas mediante prompt().</p>
          <p>- Declarar variables y objetos necesarios para simular el proceso seleccionado.</p>
          <p>
            - Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje,
            etc).
          </p>
          <p>
            - Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o
            console.log().
          </p>
        </section>
        <section>
          <h2>Evaluación</h2>
          <div className='evaluation-box'>
            <div>
              <h3>Funcionalidad</h3>
              <p>
                Se simula un flujo de trabajo en términos de entrada,proceso y salida. La funcionalidad es apropiada al
                contexto del simulador.
              </p>
              <select
                name='activityOne'
                onChange={e => handleNoteFiveActivities(e)}
                className='select-evaluation'
                id='noteOne'>
                <option value='0'>Estado</option>
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
              <h3>Interactividad</h3>
              <p>
                Se capturan una o más entradas ingresadas por el usuario con prompt(). Se efectúan una o más salidas con
                alert() o console.log(). Las salidas son coherentes en relación a los datos ingresados.
              </p>
              <select
                name='activityTwo'
                onChange={e => handleNoteFiveActivities(e)}
                className='select-evaluation'
                id='noteTwo'>
                <option value='0'>Estado</option>
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
              <h3>Escalabilidad</h3>
              <p>
                Se declaran funciones con parámetros para definir instrucciones con una tarea específica. Se emplean
                arrays para agrupar valores relacionados. Se definen objetos con propiedades y métodos relevantes al
                contexto.
              </p>
              <select
                name='activityThree'
                onChange={e => handleNoteFiveActivities(e)}
                className='select-evaluation'
                id='noteThree'>
                <option value='0'>Estado</option>
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
          <div className='evaluation-box'>
            <div>
              <h3>Integridad</h3>
              <p>
                Se define el código JavaScript en un archivo .js, referenciándolo correctamente desde el HTML. Se emplea
                correctamente prompt() y alert() sin generar interrupciones del procesamiento.
              </p>
              <select
                name='activityFour'
                onChange={e => handleNoteFiveActivities(e)}
                className='select-evaluation'
                id='noteFour'>
                <option value='0'>Estado</option>
                <option value='1'>Realizado</option>
                <option value='2'>Incompleto</option>
                <option value='3'>No realizado</option>
              </select>
            </div>
            <div className='evaluation-comments'>
              <h3>Comentarios</h3>
              <textarea
                value={commentFour}
                name='commentFour'
                onChange={e => handleSaveComment(e)}
                id='comment-evaluation-4'
                cols='30'
                rows='10'></textarea>
              <button onClick={() => handleRemoveComment('comment-evaluation-4')} className='btn-clear'>
                Borrar comentario
              </button>
            </div>
          </div>
          <div className='evaluation-box'>
            <div>
              <h3>Legibilidad</h3>
              <p>
                "Los nombres de variables. funciones y objetos son significativos para el contexto. Las instrucciones se
                escriben de forma legible y se emplean comentarios oportunos. El código está correctamente estructurado,
                alineado e indentado. "
              </p>
              <select
                name='activityFive'
                onChange={e => handleNoteFiveActivities(e)}
                className='select-evaluation'
                id='noteFive'>
                <option value='0'>Estado</option>
                <option value='1'>Realizado</option>
                <option value='2'>Incompleto</option>
                <option value='3'>No realizado</option>
              </select>
            </div>
            <div className='evaluation-comments'>
              <h3>Comentarios</h3>
              <textarea
                value={commentFive}
                name='commentFive'
                onChange={e => handleSaveComment(e)}
                id='comment-evaluation-5'
                cols='30'
                rows='10'></textarea>
              <button onClick={() => handleRemoveComment('comment-evaluation-5')} className='btn-clear'>
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
        <button className='button' onClick={() => navigate('/reporttow', report)}>
          GENERAR INFORME
        </button>
      </div>
    </>
  )
}

export default DeliveryTow
