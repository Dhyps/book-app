import './App.css'
import Mook from './Mook'
import { myBooksArray } from './data/data'


const App = () => {
    return <section className='minibook'>
                {
                    myBooksArray.map((book) => {
                        // const { id, title, author, img }= book
                        return (
                        // <Mook id={id} title={title} author={author} img={img} />
                        <Mook key={book.id} {...book}/>
                        )
                    })}
            </section>

}


export default App;