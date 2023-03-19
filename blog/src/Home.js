import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'My new website lorem ipsum...', author: 'zakariae', id: 1 },
        { title: 'Welcome party!', body: 'Welcome party lorem ipsum...', author: 'bilal', id: 2 },
        { title: 'Web dev top tips', body: 'Web dev top tips lorem ipsum...', author: 'zakariae', id: 3 }
    ]);
    const [changeUser, setChangeUser] = useState(false);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    //useEffect is a hook that runs after every change in changeUSer 
    useEffect(() => {
        console.log("useEffect ran");
        if(changeUser === true){
        const changedata = blogs.filter(blog => blog.author === 'zakariae');
        setBlogs(changedata);
        }
    }, [changeUser]);
   //create a new external component to handle the blog list and use props to pass the data
    return ( 
        <div className="home">
        <BlogList  blogs={blogs} handleDelete={handleDelete}/>
        <button onClick={()=>setChangeUser(true)}>click to Change User and change data  </button>
        </div>
    );
}

export default Home;