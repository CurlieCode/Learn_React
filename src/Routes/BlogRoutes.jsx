import React from 'react';
import {Route, Routes} from 'react-router-dom';

import BlogForm from '../Components/BlogForm';
import BlogList from '../Components/BlogList';

const BlogRoutes =()=> {
    return (
        <Routes>
            <Route path ="/create-blog" element = {<BlogForm/>} >
            </Route>
            <Route path ="/blogs" element = {<BlogList/>} ></Route>
        </Routes>
    )

}

export default BlogRoutes;