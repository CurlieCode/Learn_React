import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const fetchBlogs = async() => {
    try {
        const response = await axios.get(`${API_BASE_URL}/blogs`);
        return response.data;
        
    } catch (error) {
        console.error('Error fetching data')
        
    }
}

export const createBlog = async(blog) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/blogs`, blog, {
            headers:{
                'Content-Type':'application/json',
            },
        })
        return response.data;
    } catch (error) {
        console.error('Error creating Blog post ')
        
    }
}