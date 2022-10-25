import { EvaluationContext } from '../../context/EvaluationContext'
import styles from './styles/ReportOnePage.module.css'
import { useContext } from 'react'

const ReportOnePage = () => {
	const { result, commentOne, commentTwo, commentThree } = useContext(EvaluationContext)
  return (
    <div className={styles.reportonepage}>
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
      <div>
        <h2>Evaluación</h2>
        <h3>Estructura HTML y archivo JS</h3>
        La estructura HTML está completa y ejecutada con buenas prácticas o utiliza el el starter template de Bootstrap
        u otro framework para el uso adecuado de HTML5 *. El archivo JS está correctamente referenciado en el HTML.
        <h3>
          Estado <samp>{/* aqui va el valor elegido */}</samp>
        </h3>
        <div>
          <h3>Comentarios</h3>
          <p className={styles.comments}>{commentOne}</p>
        </div>
      </div>
      <div>
        <h3>Algoritmos</h3>
        <p>
          Se utiliza algoritmo condicional y con ciclo (IF, bucles for) de manera óptima , reflejando lo aprendido en
          clase.
        </p>
        <h3>
          Estado <samp>{/* aqui va el valor elegido */}</samp>
        </h3>
        <div>
          <h3>Comentarios</h3>
          <p className={styles.comments}>{commentTwo}</p>
        </div>
      </div>
      <div>
        <h3>Funciones</h3>
        <p>
		Los nombres de las funciones son claros y dan a entender que acción realizan. Se emplea la estructura correcta para el armado de las mismas. Crea funciones dinámicas de manera correcta. Generan un resultado correcto cuando se ejecutan.	
        </p>
        <h3>
          Estado <samp>{/* aqui va el valor elegido */}</samp>
        </h3>
        <div>
          <h3>Comentarios</h3>
          <p className={styles.comments}>{commentThree}</p>
        </div>
		  </div>
		  <section>
			  <h2>Resultado {result }</h2>
			  <h3>Devolución</h3>
			  <p>Comentarios del profesor</p>
		  </section>
		  <button className={styles.button}>Generar PDF</button>
    </div>
  )
}

export default ReportOnePage
