import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/signin.module.css'
import Picon from '../public/passfinder.svg'

const Signin :NextPage = () => {

    return(
        <>
            <Head>
                <title>DDUDO</title>
                <meta name="description" content="DDUDO와 함께 시작하세요!" />
            </Head>
            <div className={styles.socialbtn}><button>로그아웃</button><button>프로필 설정</button></div>
            <div className={styles.container}>
                <div className={styles.welcometext}><span>반갑습니다! 깁갑수님!</span></div>

                <div className={styles.buttonctn}>
                    <div className={styles.joingroupbtn}>
                        <div><Picon /></div>
                    </div>
                    <div className={styles.creategroupbtn}>

                    </div>
                </div>
            </div>
        </>
    )


}

export default Signin