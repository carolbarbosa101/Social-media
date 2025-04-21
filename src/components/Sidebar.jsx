import styles from "./Sidebar.module.css";
import imagemFundo from '../assets/imagemfundo.png';

export function Sidebar() {
    return(
        <div>
            <aside className={styles.sidebar}>
                <img src={imagemFundo} alt="imagem de capa de fundo" />
                <div className={styles.profile}>
                    <strong>Caroline Barbosa</strong>
                    <span>Software Developer</span>
                </div>
                <footer>
                    <a href="#">
                        Editar seu perfil
                    </a>
                </footer>
            </aside>
        </div>
    );
}