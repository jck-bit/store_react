
const Validation = (values) => {
    let errors ={};

    if(!values.username){
        errors.username='username is reqiured!'
    }
    
    if(!values.email){
        errors.email='email is required'
    } else if(!/\S+@\S+\.\S+/.text(values.email)){


        
        errors.email='email is invalid'
    }

    if (!values.password){
        errors.password='password is required!'
    }else if(values.password.length <5){
        errors.password='password must be more than 5 characters'
    }

    return errors;
}
export default Validation
