import { useState } from "react";
const Home = () => {
    const [name , setName]= useState('zakariae');
    const handleClick = () => {
        console.log(' button clicked');
        setName('Zakariae Elhajri');
    }
   
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click button to change name</button>
            
        </div>
     );
}
 // useState hook to make a reactive value 
export default Home;