import Button from "../Button"
import styles from "./styles.module.css"
import Link from 'next/link'

export default function Card({id, titulo, imagem}){
    return(
        <>
        <div className={styles.card}>
            <div>

                <div className={styles.info}>
                    <h2>{titulo}</h2>
                </div>

                <div>
                    <img className={styles.imagem} src={imagem}/>
                </div>

                <div>
                    <Link href={`/eventos/${id}`}>
                        <Button >Visualizar</Button>
                    </Link>
                </div>

            </div>
        </div>
        </>
    )
}