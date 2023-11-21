import Link from "next/link"
import styles from "./styles.module.css"
import Label from "../Label"
import Input from "../Input"
import Button from "../Button"

export default function Rodape({}){

    return(
        <>
        <footer className={styles.footer}>

            <div className={styles.novidades}>
                <Label>Receba as novidades:</Label>
                <div className={styles.novidadesInput}>
                    <Input type={'text'} placeholder={'fulano@email.com'}/>
                    <Button 
                        style={{
                            width: '50px', 
                            height: '100%'
                        }}
                    >OK</Button>
                </div>
            </div>

            <div className={styles.informacoes}>
                <Label>Fale Conosco</Label>
                <Label>Quem Somos</Label>
                <Label>Política de Privacidade</Label>
            </div>

        </footer>
        </>
    )
}