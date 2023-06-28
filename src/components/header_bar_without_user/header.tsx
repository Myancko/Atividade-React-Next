import Image from 'next/image';
import Logo from '../../../public/assets/logo.png';
import style from './style.module.css'
import Link from 'next/link'
import User_div from '../user_div/user_div'
import { SearchIcon } from 'lucide-react'

export default function Header_login () {
    return <header className={style.header}>
        <Link href="/book_list">
            <Image src={Logo} quality='100' alt="" width={95} height={92} />
        </Link>
        
        <div className={style.search}>
            <input className={style.bar} type="text" name="" id="" placeholder='Search...'/>
            <button className={style.buttom}>
                <SearchIcon width={30} height={30} color='white'/>
            </button>
            
        </div>

        <a href=""><p className={style.login}>
            Login
        </p></a>
    </header>
}