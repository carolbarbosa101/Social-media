import styles from './Header.module.css';
import igniteLogo from '../assets/Ignite-logo.svg';
export function Header() {
    return (
        <div>
            <header className={styles.header}>
            <img src={igniteLogo} alt="logo do projeto em cor verde" />
            </header>
        </div>
    )
}