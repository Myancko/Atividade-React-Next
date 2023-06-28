import style from './style.module.css'
import Link from 'next/link'

export default function Right_half() {
    
  return (
    <form className={style.form} action="">
      <div>
        <input className={style.input} type="text" name='email' placeholder="E-mail" />
        <input className={style.input} type="password" name='password' placeholder="Password" />
        <button className={style.button_cyan} type="submit">Entrar</button>
        <Link href="" className={style.no_password} >Esqueceu a senha?</Link>
        <Link  className={style.button_purple} href="">Criar uma conta</Link>
      </div>
    </form>

  
  )
}
