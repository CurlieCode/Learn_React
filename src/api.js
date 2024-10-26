import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';
const CONTACT_URL = '/api/contacts'

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

export const fetchContacts = async() => {
    try {
        const response = await axios.get(`${API_BASE_URL}${CONTACT_URL}`);
        return response.data;
        
    } catch (error) {
        console.error('Error fetching data')
        
    }
}

export const createContacts = async(contacts) => {
    try {
        const response = await axios.post(`${API_BASE_URL}${CONTACT_URL}`, contacts, {
            headers:{
                'Content-Type':'application/json',
            },
        })
        return response.data;
    } catch (error) {
        console.error('Error creating Contacts ')
        
    }
}

export const updateContacts = async(id,contacts) => {
    try {
        const response = await axios.put(`${API_BASE_URL}${CONTACT_URL}/${id}`, contacts, {
            headers:{
                'Content-Type':'application/json',
            },
        })
        return response.data;
    } catch (error) {
        console.error('Error updating Contacts ')    
    }
}

export const deleteContacts = async(id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}${CONTACT_URL}/${id}`);
        return response.data;
        
    } catch (error) {
        console.error('Error deleting data')
        
    }
}
