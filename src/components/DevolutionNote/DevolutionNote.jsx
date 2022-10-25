import { EvaluationContext } from '../../context/EvaluationContext'
import styles from './styles/DevolutionNote.module.css'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const DevolutionNote = () => {
	const { result, studentName } = useContext(EvaluationContext)
	const [devolution, setDevolution] = useState('')
	const resultOptimo = `
	“Hola ${studentName} ¿Cómo estás?”
    
	“¡Muchas gracias por realizar tu entrega!” “ Felicitaciones por tu primera pre-entrega ¡Estás cada vez más
	cerca de la meta final!”
	
	¡Felicitaciones! Tu entrega alcanzó el nivel de óptima! Has logrado cumplir con todos las consignas de manera
	exitosa superando las expectativas. Continua así!”`
	const resultCorrecto = ''
	const resultBajo = ''
	
	useEffect(() => {
		if (result === 'Optimo') {
			setDevolution(resultOptimo)
		} else if (result === 'Correcto') {
			setDevolution(resultCorrecto)
		} else if (result === 'Bajo') {
			setDevolution(resultBajo)
		}
	}, [result])
	return <textarea id='devolution-evaluation' defaultValue={devolution} className={styles.devolutionnote}></textarea>
}

export default DevolutionNote
