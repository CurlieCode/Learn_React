
function Button(){

   //event parameter 
   const handleClick = (e) => e.target.textContent="noooo"

    return(
        <button onDoubleClick={(e) => handleClick(e)}>Hey Hi </button>
    );

}
export default Button