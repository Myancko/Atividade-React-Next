import * as React from "react";
import Link from 'next/link'
import style from './style.module.css'


export default function Book () {

    return (
        <Link href="/book_list/confia">
            <div className={style.book}>
            </div>
        </Link>
    )

}