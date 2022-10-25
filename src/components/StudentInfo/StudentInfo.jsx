import './students.css'

import { EvaluationContext } from '../../context/EvaluationContext'
import { useContext } from 'react'

const StudentInfo = () => {
  const { studentName, handleSaveStudentName } = useContext(EvaluationContext)
  return (
    <div className='container'>
      <h1>Corrector de pre-entregas - Curso de Javascript</h1>
      <section className='container-stunet-info'>
        <label className='label-student-info'>Estudiante</label>
        <input
          value={studentName}
          type='text'
          id='student'
          placeholder='Ingrese el nombre y apellido del estudiante evaluado'
          className='input-student-info'
          onChange={(e) => handleSaveStudentName(e)}
        />
        <label className='label-student-info'>Curso/Comisión</label>
        <input
          type='text'
          id='course'
          placeholder='Completar con nombre de curso y comisión'
          className='input-student-info'
        />
        <label className='label-student-info'>Proyecto</label>
        <input type='text' id='project' placeholder='Mencione el nombre de proyecto' className='input-student-info' />
      </section>
    </div>
  )
}
export default StudentInfo
