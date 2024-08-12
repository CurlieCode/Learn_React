

function Footer(){
    const styles ={
        color:"blue",
        fontFamily:"Arial"
        
    }

    return(
        <footer>
            <p style = {styles}>&copy; {new Date().getFullYear()}   codewithcurlie </p>
        </footer>


    );



}
export default Footer