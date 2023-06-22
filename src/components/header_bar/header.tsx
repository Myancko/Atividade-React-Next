import Image from 'next/image';
import Logo from '../../../public/assets/logo.png';
import style from './style.module.css'
import User_div from '../user_div/user_div'
import { SearchIcon } from 'lucide-react'

export default function Header () {
    return <header className={style.header}>
        <Image src={Logo} quality='100' alt="" width={95} height={92} />
        
        <div className={style.search}>
            <input className={style.bar} type="text" name="" id="" placeholder='Search...'/>
            <button className={style.buttom}>
                <SearchIcon width={30} height={30} color='white'/>
            </button>
        </div>

        <User_div />
    </header>
}