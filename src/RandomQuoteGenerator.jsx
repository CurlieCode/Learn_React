import React, {useState, useEffect} from "react";

function RandomQuoteGenerator(){
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const fetchRandomQuotes = async() =>{
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setQuote(data.content);
            setAuthor(data.author);
            
        } catch (error) {
            console.error("Error fetching the quote", error)
            setQuote("OOps!, Something went wrong, please try again later")
            setAuthor("");
            
        }
    }


   useEffect(() => {
    fetchRandomQuotes();
   }, []);

   const styles = {
    container:{
        textAlign : 'center',
        marginTop:'50px',
        fontFamily:'Arial'
    },
    button:{
        marginTop:'20px',
        padding:'10px 20px',
        fontSize:'16px'

    }
   }

    return(
        <div style = {styles.container}>
            <h1> Random Quotes</h1>
            <p>"{quote}"</p>
            <p>- {author}</p>
            <button style={styles.button} onClick={fetchRandomQuotes}>Get Random Quote</button>
        </div>
    )

}
export default RandomQuoteGenerator