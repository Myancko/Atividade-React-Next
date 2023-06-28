import Image from 'next/image';
import Logo from '../../../public/assets/logo.png'
import style from './style.module.css'

export default function Left_half() {
    
  return (
    <section className={style.sec}>
      <div className={style.logo}>
            <h1>
                Compartilhar suas dicas de leitura com os seus amigos
            </h1>
            
            <Image className={style.img} src={Logo} quality='100' alt="" width={350} height={250} />
        </div>

    </section>

  
  )
}
