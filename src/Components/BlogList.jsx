import React, {useEffect, useState} from "react";
import { fetchBlogs } from "../api";


const BlogList= () =>{
    const [ blogs, setBlogs] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getBlogs = async() => {
            try {
                const blogs = await fetchBlogs();
                setBlogs(blogs);

                
            } catch (error) {
                setError('Failed to load blogs')
                
            }
        }
        getBlogs();
    },[])


    return (

        <div>
            {error && <p style ={{color:'red'}}>{error}</p>}
            <h2>Blogs List</h2>
            <ul>
                {blogs.map(blog => (
                    <li key = {blog.id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                    </li>
                ))
                }
            </ul>
        </div>
    )

}

export default BlogList;