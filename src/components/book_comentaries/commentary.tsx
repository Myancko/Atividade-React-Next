import * as React from "react";
import Link from 'next/link'
import style from './style.module.css'
import { Heart } from 'lucide-react'


export default function Comment () {

    return (
        <section className={style.comment}>
            <div className={style.photo}></div>
            <div className={style.text}>
                <p>
                    Labore dasdssadsadsdsadssdsad sd sad sadsjka ds jad sjada sldsakjdbbsakjdbsakjdbsadkj sakd sk jab
                </p>
                <div  className={style.like}>
                    <Heart className={style.heart}/>
                    <p>Gostei (-1)</p>
                </div>
            </div>
        </section>
        

    )

}