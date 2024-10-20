//useRef
import React, {useRef, useState} from "react";
import { createBlog } from "../api";

const BlogForm = () => {
    const titleRef = useRef();
    const contentRef = useRef();
    const[success, setSuccess] = useState('');


    const handleSubmit = async(e) => {
        e.preventDefault();
        const newBlog = {
            title:titleRef.current.value,
            content:contentRef.current.value,
        }
        setSuccess('');
        if(!newBlog.title || !newBlog.content){
            return;
        }
        try {
            const createdBlog = await createBlog(newBlog);
            titleRef.current.value='';
            contentRef.current.value='';
            setSuccess('Blog added successfully')
            
        } catch (error) {
            console.error("Blog not created")
            
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label> Title:
                </label>
                <input type="text" ref={titleRef}/>
            </div>
            <div>
                <label> Content:
                </label>
               <textarea ref ={contentRef}/>
            </div>
{success && <p style ={{color:'green'}}>{success}</p>}
            <button type="submit">Create Blog Post</button>
        </form>
    )

}

export default BlogForm;