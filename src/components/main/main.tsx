import style from './style.module.css'
import Book from '../book_list/book'
import axios from 'axios';

interface Photo{
    title: string;
    discription: string;
    photo: string;
}

interface Album{
    title:string;
    photos: Photo[];
}

export default async function Main_content () {
    const len = 10
    
    const {data : albuns}= await axios.get<Album[]>(`http://127.0.0.1:8000/api/album/`)
    console.log(albuns[0].title)
    
    return (
        <main>
            <div className={style.main}>
                <h2 className={style.title}> {} Encontre as melhores indicações de livros</h2>

                    <div className={style.main_content}>
                        
                        {new Array(50).fill(0).map((list_image,index)=><Book imagem={ albuns[0].photos[1].photo} key="index"/>)}

                    </div>


            </div>
        </main>

        
        
    )

}