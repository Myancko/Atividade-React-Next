import * as React from "react";
import Link from 'next/link'
import style from './style.module.css'
import { Heart } from 'lucide-react'

interface Comentario {
    text : string;
    user ?: string;
}

export default function Comment ( props:Comentario ) {

    return (
        <section className={style.comment}>
            <div className={style.photo}></div>
            <div className={style.text}>
                <p>
                    {props.text}
                </p>
                <div  className={style.like}>
                    <Heart className={style.heart}/>
                    <p>Gostei (-1)</p>
                </div>
            </div>
        </section>
        

    )

}