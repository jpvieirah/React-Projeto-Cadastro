import Link from "next/link"
import styles from "../styles/Navigator.module.css"

export default function Navigator(props) {
    return(
        <div>
            <Link href={props.destiny} >
                <div className={styles.navigator} style={{
                    backgroundColor: props.collor ?? 'dodgerblue'
                }}>
                {props.text}
                </div>
            </Link>
        </div>
    )
}