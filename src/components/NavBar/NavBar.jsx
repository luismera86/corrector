import { NavLink } from 'react-router-dom'
import styles from './styles/NavBar.module.css'

const NavBar = () => {
  return (
    <div className='oculto-impresion'>
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        <li className={styles.li}>
            <NavLink className={styles.a} to='/home'>
          <button className={styles.button}>
          Home
          </button>
            </NavLink>
        </li>
        <li className={styles.li}>
            <NavLink className={styles.a} to='/delivery1'>
          <button className={styles.button}>
              Primera Entrega
          </button>
            </NavLink>
        </li>
        <li className={styles.li}>
            <NavLink className={styles.a} to='/deliveryt'>
          <button className={styles.button}>
              Segunda Entrega
          </button>
            </NavLink>
        </li>
        <li className={styles.li}>
            <NavLink className={styles.a} to='/deliverytee'>
          <button className={styles.button}>
              Tercera Entrega
          </button>
            </NavLink>
        </li>
      </ul>
      </nav>
    </div>
  )
}

export default NavBar