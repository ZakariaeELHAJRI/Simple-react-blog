import { useState } from "react";

//we can use destructuring to get the props directly in the function parameters like this:
const BlogList = ({blogs}) => {
    const [details, setDetails] = useState('');
   // const {blogs } = props;
   
    return ( 
        <div className="blog-list">
            <h2>Blog List</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id} onClick={()=>(
                    setDetails(blog.body)  
                )}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>

                </div>
            ))}
               <div className="blog-details">
                    
                    <p> {details}</p>

                </div>
        </div>

     );
}
 
export default BlogList;