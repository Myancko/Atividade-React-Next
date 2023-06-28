import style from './style.module.css'
import Book from '../book_list/book'



export default function Main_content () {
    const len = 10
    new Array(len).fill(0);

    return (
        <main>
            <div className={style.main}>
                <h2 className={style.title}>Encontre as melhores indicações de livros</h2>

                    <div className={style.main_content}>
                        <Book/>
                        <Book/>
                        <Book/>
                        <Book/>
                        <Book/>
                        <Book/>
                        <Book/>
                        <Book/>
                        <Book/>
                        <Book/>
                        <Book/>
                        <Book/>
                        <Book/>
                    </div>


            </div>
        </main>

        
        
    )

}