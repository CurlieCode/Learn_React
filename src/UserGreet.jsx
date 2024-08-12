import PropTypes from 'prop-types'

function UserGreet(props){

 const successMessage = <h2 className="success-message"> Welcome {props.username} to code with curlie</h2>;
 const loginPrompt =  <h2 className="login-prompt"> Please login to continue</h2>;
 return ( props.isLoggedIn ? successMessage : loginPrompt)
}

UserGreet.propTypes={
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string
}

UserGreet.defaultProps ={
    isLoggedIn : true, 
    username :"Guest"
}
export default UserGreet