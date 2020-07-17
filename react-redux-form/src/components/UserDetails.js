import React,{Component} from 'react';
import {reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import {saveUserAction} from '../actions/UserActions';
const mapStateToProps= (state)=>{
    return {
        initialValues :state.userReducer.data
    } 
}

const mapDispatchToProps=(dispatch)=>{
return{
    handleSubmission: (event) =>{
        event.preventDefault();
  console.log("Event :", event);
  const formBody=new FormData(event.target);
   //  console.log(val.target.elements.firstName.value)
     console.log('formdata : ',JSON.stringify(Object.fromEntries(formBody)));

    
        dispatch(saveUserAction(Object.fromEntries(formBody)));
}
}

}
class UserDetails extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {handleSubmission} =this.props;

        return(
    

     <form className="form" onSubmit={handleSubmission}>
     <div className="field">
       <div className="control">
         <label className="label">First Name</label>
         <Field className="input" name="firstName" component="input" type="text" placeholder="First Name"/>
       </div>
     </div>
 
     <div className="field">
       <div className="control">
         <label className="label">Last Name</label>
         <Field className="input" name="lastName" component="input" type="text" placeholder="Last Name"/>
       </div>
     </div>
 
     <div className="field">
       <div className="control">
         <label className="label">Email</label>
         <Field className="input" name="email" component="input" type="email" placeholder="Email Address"/>
       </div>
     </div>
 
     <div className="field">
       <div className="control">
         <label className="label">Proficiency</label>
         <div className="select">
           <Field className="input" name="proficiency" component="select">
             <option />
             <option value="beginner">Beginner Dev</option>
             <option value="intermediate">Intermediate Dev</option>
             <option value="expert">Expert Dev</option>
           </Field>
         </div>
       </div>
     </div>
 
     <div className="field">
       <div className="control">
         <label className="label">Age</label>
         <Field className="input" name="age" component="input" type="number" placeholder="Age"/>
       </div>
     </div>
 
     <div className="field">
       <div className="control">
         <label className="checkbox">
           <Field name="saveDetails" id="saveDetails" component="input" type="checkbox"/>
           Save Details
         </label>
       </div>
     </div>
 
     <div className="field">
       <div className="control">
         <label className="label">Message</label>
         <Field className="textarea" name="message" component="textarea" />
       </div>
     </div>
 
     <div className="field">
       <div className="control">
         <button type="submit" className="button is-link">Submit</button>
       </div>
     </div>
 
   </form>

        );
    }
}

UserDetails = reduxForm({
    form: 'UserDetails',
     enableReinitialize : true  // a unique name for this form
  })(UserDetails);

  UserDetails=connect(mapStateToProps,mapDispatchToProps)(UserDetails);
export default UserDetails;