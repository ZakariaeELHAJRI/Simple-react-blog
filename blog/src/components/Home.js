import BlogList from "../BlogList";
import useFetch from '../useFecth';
const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
   
  //create a new external component to handle the blog list and use props to pass the data
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList  blogs={blogs}/>}
        </div>
    );
}

export default Home;
