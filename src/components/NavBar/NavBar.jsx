import { NavLink } from 'react-router-dom'
import styles from './styles/NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <button className={styles.button}>
            <NavLink className={styles.a} to='/home'>
          Home
            </NavLink>
          </button>
        </li>
        <li className={styles.li}>
          <button className={styles.button}>
            <NavLink className={styles.a} to='/delivery1'>
              Primera Entrega
            </NavLink>
          </button>
        </li>
        <li className={styles.li}>
          <button className={styles.button}>
            <NavLink className={styles.a} to='/deliveryt'>
              Segunda Entrega
            </NavLink>
          </button>
        </li>
        <li className={styles.li}>
          <button className={styles.button}>
            <NavLink className={styles.a} to='/deliverytee'>
              Tercera Entrega
            </NavLink>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar