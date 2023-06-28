import Left_half from "@/src/components/login_left_half/page"
import Right_half from "@/src/components/login_right_half/login_left_half/page"
import style from './style.module.css'

export default function Main_login() {
    
    return (
    <main id={style.main} className={style.main}>
  
      <Left_half/>
      <Right_half/>
      
    </main>
  
    
    )
  }
  