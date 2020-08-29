import React, { Component } from 'react';
import { connect } from 'react-redux';
import  login  from '../Redux/dispatches/login';
import { Redirect } from 'react-router-dom';
import '../../styles/style.css'


 class Login extends Component {
     constructor(props){
         super(props)

         this.state ={
             email:'',
             password:''
            
         }
     }

     handleChange = e =>{
         this.setState({
             [e.target.id]:e.target.value
         })
     }
     handleSubmit = e =>{
         e.preventDefault();
         fetch('/auth/token/login/',{
            method:"POST",
            headers:{
                "Accept":"application/json, text/plain,*/*",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(this.state)      
        })
         .then(res =>res.json())
         .then(data =>{
             localStorage.setItem('token',data.auth_token)
             this.props.history.push('/edit_profile/')
         })
         
     }


     
    render() {
        
        
        // const disabled = this.props.auth.loading  ? 'disabled' :'';
        return (
            <div>
                <div className="container">
                    
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 ">
                            <form action="" onSubmit={this.handleSubmit} method ="POST" className="form-horizontal">
                               
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" onChange={this.handleChange} value = {this.state.email} className="form-control" name="email" id="email" />
                                </div>
                                

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" onChange={this.handleChange} value = {this.state.password} name="password" id="password" />
                                </div>
                                
                                <input type="submit"  className={"btn btn-primary " } value="Sign Up" />< span className="text-muted mr-3">Create An Account</span>
                            
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login;
