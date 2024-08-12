
// 1.External 
// 2. Modules 
// 3. Inline




import profilePic from './assets/profilepic.png'

function Card(){

    return(

        <div className ="card">
            <img  className ="card-img" src= {profilePic }alt ="Profile Picture">
            </img>
            <h2 className='card-title'>Code with Curlie</h2>
            <p className='card-text'> i make youtube videos of my learning</p>
        </div>



    );

}

export default Card
