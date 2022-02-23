```js
const Home = () => {

    const handleClick = (e) => {
        console.log('I was clicked', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('I was clicked by ' + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>


            <button onClick={(e) =>handleClickAgain('Mario')}>Click me</button>
        </div>
     );
}
 
export default Home;
```