const Mook = ({ img, title, author, id }) => {
    const clickHandler = (e) => {
        alert ('Welcome!');
        console.log(e);
        console.log(e.target.id);   
    }

    const anotherExample = (author) => {
        console.log(author);
    }

    return(
        <div className="book" onMouseOver={()=> {console.log('click')}}>
            <img src={img} alt="" />
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <button id={id} type="button" onClick={clickHandler}>Read More</button>
            <button id={id} type="button" onClick={() => anotherExample(author)}>Author</button>
            
        </div>
    )
}

export default Mook