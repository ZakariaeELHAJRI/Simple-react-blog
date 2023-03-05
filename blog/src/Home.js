import { useState } from "react";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'My new website lorem ipsum...', author: 'zakariae', id: 1 },
        { title: 'Welcome party!', body: 'Welcome party lorem ipsum...', author: 'bilal', id: 2 },
        { title: 'Web dev top tips', body: 'Web dev top tips lorem ipsum...', author: 'samir', id: 3 }
    ]);
    const [details, setDetails] = useState('');
 
   
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id} onClick={()=>(
                    setDetails(blog.body)  
                )}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>

                </div>
            ))}
               <div className="blog-details">
                    
                    <p> { details}</p>

                </div>
                 
           
        </div>
    );
}
 // useState hook to make a reactive value 
export default Home;