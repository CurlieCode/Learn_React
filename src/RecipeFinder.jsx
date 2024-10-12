import React, {useState} from "react"
import axios from 'axios';

function RecipeFinder(){

    const [ingredients, setIngredients] = useState('');
    const [ recipes, setRecipes] = useState([]);
    const [ error, setError] = useState('');


    const handleSearch = async() => {
        try {
            const response = await axios.post('http://localhost:8080/search', {
                ingredients:ingredients.split(',').map(value => value.trim())
            });
            setRecipes(response.data);
            setError('');

            
        } catch (error) {
            setError("Error occured");
            console.log("Error occured")
            
        }
    }


    return ( 
       <div>
        <h1> Recipe Finder</h1>
        <input 
        type = "text"
        value ={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter Ingredients (separated by comma"
        />
        <button onClick={handleSearch}>Search</button>

        {error && <p>{error}</p>}

        <div>
            {recipes.length > 0 ? 
            (
                <ul>
                    {recipes.map((recipe) => (
                        <li key = {recipe.id}>{recipe.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No Recipes found</p>
            )
            
        }
        </div>
       </div>
    )

}

export default RecipeFinder