import * as React from "react";
import Link from 'next/link'
import Image from 'next/image';
import style from './style.module.css'

interface Imagem {
    imagem : string
}

export default function Book ( props:Imagem) {

    return (
        <Link href="/book_list/confia">
            <div className={style.book}>
                <Image src={props.imagem} quality='100' alt="" width={95} height={92} />
                
            </div>
        </Link>
    )

}