import styles from '../styles/Home.module.css'

function Header() {
  return (
      <header className={styles.header_container}>
        <div className={styles.header_left}>
          <img  
            className={styles.header_image} 
            src="/favicon.png">
          </img>
          <div className={styles.col}>
            <div className={styles.h3}>WORLD FLAGS</div>
            <h4 className={styles.h4}>FULL VECTOR COLLECTION</h4>
          </div>
          
        </div>
        <div style={{width:"100%", borderBottom:"1px solid #c4c4c4", marginTop:"10px" }}></div>
      </header>
  )
}

export default Header