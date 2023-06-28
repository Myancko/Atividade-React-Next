import * as React from "react";
import Link from 'next/link'
import style from './style.module.css'
import { Star, Dot } from 'lucide-react'
import Comment from "../book_comentaries/commentary";

export default function Informations () {

    return (
        <main className={style.main}>

            <div className={style.bookresume} >
                <div className={style.bookcover}/>
                <h4>Titulo do Livro</h4>
                <p>asdsadsdsa sd sadssa dsad sadsads</p>
                <a href="">Author</a>
                <div className={style.estrelinhas}>
                    <Star fill="#D9D9D9" className={style.estrelinha1} />
                    <Star fill="#D9D9D9" className={style.estrelinha2} />
                    <Star fill="#D9D9D9" className={style.estrelinha3} />
                    <Star fill="#D9D9D9" className={style.estrelinha4} />
                    <Star fill="#D9D9D9" className={style.estrelinha5} />
                </div>
                <button className={style.add_buttom}>Adicionar à biblioteca</button>
            </div>

            <div className={style.bookinfo}>
                <h1>Título do livro</h1>

                <div className={style.nota}>
                    <span className={style.number}>4.5</span>
                    <p>93 avaliações</p>
                </div>

                <div className={style.sl}>
                    <p>Irlan Moreira</p>
                    <Dot color="#DDDDDD" />
                    <p>8 Jan 21</p>
                </div>

                <div className={style.discription}>
                    <p>
                        Consequat qui occaecat irure fugiat amet nostrud deserunt aliqua. Laboris aliquip tempor amet cupidatat officia aliqua ea sint. Consectetur amet amet cupidatat eiusmod.
                    </p>

                </div>

                <div className={style.comentilus}>
                    <p>Comentarios</p>

                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />

                </div>

            </div>
        </main>
    )

}