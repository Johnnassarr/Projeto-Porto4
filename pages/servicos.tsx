import Pneu from "./img/pneu.png"
import Roda from "./img/roda.png"
import Filtro from "./img/filtro.png"
import Link from "next/link"

import styles from "./servicos.module.css"

export default function Servicos() {
    return (
        <div className={styles.containerServicos}>
            <Link href="/home" className="link-menu">Voltar ao início</Link>
            <h1>Escolha uma das ofertas abaixo</h1>
            <div className={styles.contentItens}>
                <div className={styles.item}>
                    <img src={Pneu.src} />
                    <div className={styles.descricao}>
                        <h1>Troca de Pneus</h1>
                        <p>Por R$ 200,00 - Máximo aro 18</p>
                    </div>
                </div>

                <div className={styles.item}>
                    <img src={Roda.src} />
                    <div className={styles.descricao}>
                        <h1>Alinhamento grátis</h1>
                        <p>No serviço de suspensão ou troca de no mínimo 2 amortecedores.</p>
                    </div>
                </div>

                <div className={styles.item}>
                    <img src={Filtro.src} />
                    <div className={styles.descricao}>
                        <h1>Filtro grátis</h1>
                        <p>Ao realizar a compra e troca de óleo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}