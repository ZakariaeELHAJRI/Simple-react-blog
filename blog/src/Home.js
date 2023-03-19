import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
   const [isPending, setIsPending] = useState(true);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    //useEffect is a hook that runs after every change in changeUSer 
    useEffect(() => {
       setTimeout(() => {
              fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            });

       }, 2000);
  
    }, []);
   //create a new external component to handle the blog list and use props to pass the data
    return ( 
        <div className="home">
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList  blogs={blogs} handleDelete={handleDelete}/>}
        </div>
    );
}

export default Home;