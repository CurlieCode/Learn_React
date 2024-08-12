import React , {useState} from "react"

function MyComponent(){

    const [cycle, setCycle] = useState(
        {
            type: "mountain rider", 
            material:"carbon steel", 
            year:2024,
            color:"white"
        }
    )

    function handleTypeChange(event){
        setCycle(prevCycle => ({...prevCycle, type:event.target.value}))

    }
    function handleMaterialChange(event){
        setCycle(prevCycle => ({...prevCycle, material:event.target.value}))
        
    }
    function handleColorChange(event){
        setCycle(c => ({...c, color:event.target.value}))
        
    }
    function handleYearChange(event){
        setCycle(c => ({...c,year:event.target.value}))
        
    }


    return(
       <div>
        <p> My fav cycle is : {cycle.type} {cycle.material} {cycle.year} {cycle.color}</p>
        <input type = "text" value ={cycle.type}
        onChange={handleTypeChange}
        /> <br/>
        <input type = "text" value ={cycle.material}
        onChange={handleMaterialChange}
        /> <br/>
        <input type = "text" value ={cycle.color}
        onChange={handleColorChange}
        /> <br/>
        <input type = "number" value ={cycle.year}
        onChange={handleYearChange}
        /> <br/>
       </div>
    )

}
export default MyComponent