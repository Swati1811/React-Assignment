import React, {Component} from 'react'; 
import classes from './FormContainer.css'; 

import Input from '../UI/Input/Input';
import Button  from  '../UI/Button/Button';


/* Import Components */


class FormContainer extends Component {  
    constructor(props) {
        super(props);
        this.state = {
                  newUser: {
                    name: '',
                    email: '',
                    age: 0,
                  },
                  nameError:false,
                  emailError:false,
                  ageError:false
              }
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.ageChangeHandler = this.ageChangeHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);

    }

    nameChangeHandler=(event)=>{
        let tempName=event.target.value;
        let errors=this.state.nameError;
        let tempUser={...this.state.newUser};
        if(tempName.trim()!=='' && tempName.length < 255)
        {
          errors=true;
          tempUser.name= tempName;
          this.setState({nameError:errors});
          this.setState({ newUser: tempUser});
       }
       else{
         alert('Name should not contain any spaces.!');
       }
         event.preventDefault();
  
    }

    emailChangeHandler=(event)=>{
        let tempEmail=event.target.value;
        let errors=this.state.emailError;
        let tempUser={...this.state.newUser};
        if(tempEmail.trim()!=='' && tempEmail.length < 255)
        {
          errors=true;
          tempUser.email= tempEmail;
          this.setState({emailError:errors});
          this.setState({ newUser: tempUser});
        }
        else{
          alert('Email should not contain any spaces.!');
        }
       
        event.preventDefault();
  
    }

    ageChangeHandler=(event)=>{
        let tempAge=event.target.value;
        let errors=this.state.ageError;
        let tempUser={...this.state.newUser};
        if(tempAge > 0 && tempAge < 100)
        {
          errors=true;
          tempUser.age= tempAge;
          this.setState({ageError:errors});
          this.setState({ newUser: tempUser});
        }
        else{
          alert('Age not valid..!');
        }
       
        event.preventDefault();
  
    }
    
  formSubmitHandler=(event)=>{
    if(this.state.nameError && this.state.ageError && this.state.emailError)
    {
      console.log(this.state.newUser);
    }
    else{
      alert('Insert the data..!');
    }
    
    event.preventDefault();
   
  }
 
  render() {
    let nameDisplayError=null;
     if(!this.state.nameError)
        {
          nameDisplayError=(
           <div className={classes.Invalid}>
           <span>Enter the name correctly..!</span>
           </div>
          )
        }

        let emailDisplayError=null;
        if(!this.state.emailError)
           {
             emailDisplayError=(
              <div className={classes.Invalid}>
              <span>Enter the email correctly..!</span>
              </div>
             )
           }

           let ageDisplayError=null;
           if(!this.state.ageError)
              {
                ageDisplayError=(
                 <div className={classes.Invalid}>
                 <span>Enter the age correctly..!</span>
                 </div>
                )
              }

      
    
      
    return (
      <form className={classes.FormContainer} onSubmit={this.formSubmitHandler} noValidate>
        
        <Input inputtype={'text'} 
               title={'Full Name'}
               name={'Name'} 
               placeholder={'Enter your name here'}
               handlechange={this.nameChangeHandler}
               nameError={this.state.nameError}
               /> 
               {nameDisplayError}
       
        <Input inputtype={'email'} 
               title={'Email'}
               name={'Email'} 
               placeholder={'Enter your email here'} 
               handlechange={this.emailChangeHandler}
               emailError={this.state.emailError}/> 
                {emailDisplayError}
       
        <Input inputtype={'text'} 
                title={'Age'}
                name={'Age'}
                placeholder={'Enter your age'} 
                handlechange={this.ageChangeHandler}
                ageError={this.state.ageError} /> 
                {ageDisplayError}

        <Button title={'Submit'} 
                action={this.formSubmitHandler}>
                </Button>
        
      </form>
    );
  }
}

export default FormContainer;
