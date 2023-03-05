const Home = () => {
    const handleClick = () => {
        console.log(' button clicked');
    }
    const handleClickAgain = (name) => {
        console.log(' button 2 clicked'+name);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click button</button>
            <button onClick={() => handleClickAgain(' zakariae')}>Click button</button>
        </div>
     );
}
 
export default Home;