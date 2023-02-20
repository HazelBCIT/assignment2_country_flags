import styles from '../styles/Home.module.css'

function Footer() {
  return (
    <div className={styles.col} style={{alignItems:"center",width:"100%"}}>
      <div style={{width:"100%", borderBottom:"1px solid #c4c4c4", marginTop:"10px" }}></div>
      <div style={{fontFamily:"Raleway", fontSize:"24px", marginTop:"40px"}} id="footer_text">©Hazel Wang 2023</div>
    </div>
    
  )
}

export default Footer