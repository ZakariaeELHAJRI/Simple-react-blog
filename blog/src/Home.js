import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'My new website lorem ipsum...', author: 'zakariae', id: 1 },
        { title: 'Welcome party!', body: 'Welcome party lorem ipsum...', author: 'bilal', id: 2 },
        { title: 'Web dev top tips', body: 'Web dev top tips lorem ipsum...', author: 'Zakariae', id: 3 }
    ]);
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

   //create a new external component to handle the blog list and use props to pass the data
    return ( 
        <div className="home">
        <BlogList  blogs={blogs} handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;