import Link from "next/link"
import styles from "./styles.module.css"
import Image from "next/image"

export default function Cabecalho({}){

    return(
        <>
        <header className={styles.header}>
            
            <div className={styles.itens}>
                <h1>Minhas</h1>
                <h2>SÉRIES</h2>
            </div>

            <div className={styles.itens}>
                <h3>POPULARES</h3>
            </div>

            <div className={styles.itens}>
                <h3>MAIS BEM AVALIADAS</h3>
            </div>

            <div className={styles.itens}>
                <h3>NA TV</h3>
            </div>
        </header>

        </>
    )
}