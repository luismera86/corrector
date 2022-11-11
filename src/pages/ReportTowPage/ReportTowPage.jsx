import styles from './styles/ReportTowPage.module.css'
import { useSelector } from 'react-redux'

const ReportTowPage = () => {
  const report = useSelector(state => state.deliveryTow)
  const {
    commentOne,
    commentTwo,
    commentThree,
    commentFour,
    commentFive,
    studentName,
    resultNote,
    activityOne,
    activityTwo,
    activityThree,
    activityFour,
    activityFive,
    devolution,
    course,
  } = report

  return (
    <div className={styles.reporttowpage} id='element'>
      <h2>
        Estudiante <span>{studentName}</span>
      </h2>
      <h2>
        Comisión <span>{course}</span>
      </h2>
      <section>
        <h2>
          Resultado <span>{resultNote}</span>
        </h2>
        <h3>Devolución</h3>
        <p>{devolution}</p>
      </section>
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
      <h2>Evaluación</h2>
      <div className={styles.box}>
        <h3>Funcionalidad</h3>
        <p>
          Se simula un flujo de trabajo en términos de entrada,proceso y salida. La funcionalidad es apropiada al
          contexto del simulador.
        </p>
        <h3>
          Estado: <span>{activityOne}</span>
        </h3>
        <div>
          <h3>Comentarios</h3>
          <p className={styles.comments}>{commentOne}</p>
        </div>
      </div>
      <div>
        <h3>Interactividad</h3>
        <p>
          Se capturan una o más entradas ingresadas por el usuario con prompt(). Se efectúan una o más salidas con
          alert() o console.log(). Las salidas son coherentes en relación a los datos ingresados.
        </p>
        <h3>
          Estado <span>{activityTwo}</span>
        </h3>
        <div>
          <h3>Comentarios</h3>
          <p className={styles.comments}>{commentTwo}</p>
        </div>
      </div>
      <div>
        <h3>Escalabilidad</h3>
        <p>
          Se declaran funciones con parámetros para definir instrucciones con una tarea específica. Se emplean arrays
          para agrupar valores relacionados. Se definen objetos con propiedades y métodos relevantes al contexto.
        </p>
        <h3>
          Estado <span>{activityThree}</span>
        </h3>
        <div>
          <h3>Comentarios</h3>
          <p className={styles.comments}>{commentThree}</p>
        </div>
      </div>
      <div>
        <h3>Integridad</h3>
        <p>
          Se define el código JavaScript en un archivo .js, referenciándolo correctamente desde el HTML. Se emplea
          correctamente prompt() y alert() sin generar interrupciones del procesamiento.
        </p>
        <h3>
          Estado <span>{activityFour}</span>
        </h3>
        <div>
          <h3>Comentarios</h3>
          <p className={styles.comments}>{commentFour}</p>
        </div>
      </div>
      <div>
        <h3>Legibilidad</h3>
        <p>
          "Los nombres de variables. funciones y objetos son significativos para el contexto. Las instrucciones se
          escriben de forma legible y se emplean comentarios oportunos. El código está correctamente estructurado,
          alineado e indentado. "
        </p>
        <h3>
          Estado <span>{activityFive}</span>
        </h3>
        <div>
          <h3>Comentarios</h3>
          <p className={styles.comments}>{commentFive}</p>
        </div>
      </div>

      <div className='oculto-impresion'>
        <button
          onClick={() => {
            javascript: window.print()
          }}
          className={styles.button}>
          IMPRIMIR
        </button>
      </div>
    </div>
  )
}

export default ReportTowPage
