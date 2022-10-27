import './students.css'

import { setDeliveryOne } from '../../redux/features/deliveryOneSlice/deliveryOneSlice'
import { useDispatch } from 'react-redux'

const StudentInfo = () => {
  const dispatch = useDispatch()

  const handleStudentName = e => {
    dispatch(setDeliveryOne({ studentName: e.target.value }))
  }

  const handleCourse = e => {
    dispatch(setDeliveryOne({ course: e.target.value }))
  }

  return (
    <div className='container'>
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
  )
}
export default StudentInfo
