import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/signout.module.css'

const Signout :NextPage = () => {


    return(
        <>
            <Head>
                <title>DDUDO</title>
                <meta name="description" content="DDUDO와 함께 시작하세요!" />
            </Head>
            <div className={styles.socialbtn}><button>소셜 로그인</button></div>
            <div className={styles.container}>
                <div className={styles.ddudo}>DDUDO</div>
                <div className={styles.ddudodes}>뚜두와 함께 시작하세요!</div>
                <div className={styles.startbtn}><button>시작하기</button></div>
            </div>
        </>
    )
}

export default Signout