import React, { Component } from 'react';



 class SignUp extends Component {
     constructor(props){
         super(props)

         this.state ={
             username:'',
             phone:'',
             password:'',
             re_password:'',
             email:''
         }
     }

     handleChange = e =>{
         this.setState({
             [e.target.id]:e.target.value
         })
     }
     handleSubmit = e =>{
         e.preventDefault();
         fetch('/auth/users/',{
            method:"POST",
            headers:{
                "Accept":"application/json, text/plain,*/*",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(this.state)      
        })
         .then(res =>res.json())
         .then(data =>{
                if(data.email = this.state.email){
                    this.props.history.push('/login/');
                }
         })
         
     }
     componentDidMount(){
         var token = localStorage.getItem('token');
         if(token){
             localStorage.removeItem('token')
         }
     }
     
     
    render() {
    
        return (
            <div>
                <div className="container">
                    
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 ">
                            <form action="" onSubmit={this.handleSubmit} method ="POST" className="form-horizontal">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" onChange={this.handleChange} value = {this.state.username} className="form-control" name="username" id="username" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" onChange={this.handleChange} value = {this.state.email} className="form-control" name="email" id="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="number" className="form-control" onChange={this.handleChange} value = {this.state.phone} name="phone" id="phone" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" onChange={this.handleChange} value = {this.state.password} name="password" id="password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Password Confirmation</label>
                                    <input type="password" className="form-control" onChange={this.handleChange} value = {this.state.re_password} name="re_password" id="re_password" />
                                </div>
                                <button  className={"btn btn-primary " } >Sign Up</button>< span className="text-muted mr-3">Do You have an accout</span>
                            
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default SignUp;
