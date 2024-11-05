import imgLogo from '../pages/img/logo-fundo.png';
import imgMenu from "../pages/img/logo.png"
import styles from './home.module.css';
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className={styles.content}>
                <header>
                    <div className={styles.menuNav}>
                        <img src={imgLogo.src} alt="Logo" />
                        <nav>
                            <ul>
                                <li><Link href="/home">Home</Link></li>
                                <li><Link href="/guincho">Guincho</Link></li>
                                <li><Link href="/planos">Planos</Link></li>
                                <li><Link href="/servicos">Serviços</Link></li>
                                <li><Link href="/faqs">FAQs</Link></li>
                            </ul>
                        </nav>
                        <div className={styles.login}>
                            <ul>
                                <li><Link href='/login'>Entrar</Link></li>
                                <li><Link href='/registrar'>Registrar</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <div className={styles.containerHome}>
                    <h3>Faça seu plano</h3>
                    <h1>Cote seu <span>seguro auto na Car Safe</span></h1>
                    <p>Veja nossos planos da <strong>Porto Seguro</strong> auto na Car Safe</p>
                    <img src={imgMenu.src} alt="Seguro Auto" />
                </div>
            </div>
        </>
    );
}
