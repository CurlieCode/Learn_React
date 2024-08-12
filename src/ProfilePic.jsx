function ProfilePic(){

    const profile= "./src/assets/profilepic.png";
    const handleClick = () => console.log("hey you clicked");
    const handleClick2 = (e) => e.target.style.display = "none";

    return (
        <img onClick = {(e) => handleClick2(e)} src = {profile}></img>
    )

}
export default ProfilePic