import * as React from "react";
import Link from 'next/link'
import style from './style.module.css'

interface Imagem {
    imagem : string
}

export default function Book ( props:Imagem) {

    return (
        <Link href="/book_list/confia">
            <div className={style.book}>
                {props.imagem}
            </div>
        </Link>
    )

}