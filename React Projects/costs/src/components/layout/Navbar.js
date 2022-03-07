import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'


function Navbar () {
  return (
    <div className={styles.navbar}>
      <nav>
        <Container>
          <Link to='/'>
            <img src={logo} alt='Costs' />
          </Link>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to='/'>Home</Link>
            </li>
            <li className={styles.item}>
              <Link to='/about'>About</Link>
            </li>
            <li className={styles.item}>
              <Link to='/contact'>Contact</Link>
            </li>
            <li className={styles.item}>
              <Link to='/projects'>Projects</Link>
            </li>
            <li className={styles.item}>
              <Link to='/newproject'>New Project</Link>
            </li>
          </ul>
        </Container>
      </nav>
    </div>
  )
}

export default Navbar
