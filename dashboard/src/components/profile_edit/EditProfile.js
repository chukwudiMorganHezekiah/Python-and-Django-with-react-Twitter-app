import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../../styles/style.css';
import error_dispatch from '../Redux/dispatches/error';
import { connect } from 'react-redux';

 class EditProfile extends Component {
     componentDidMount(){
         fetch("/profile/api/get_user_profile/",{
             "method":"GET",
             headers:{
                 "Content-Type":"application/json",
                 "Authorization":`Token ${localStorage.getItem('token')}`
             }
         })
         .then(res => res.json())
         .then(data =>{
             if(!data.error ){
                this.props.error("You already have an profile Image.Use the edit link to make changes")
                 this.props.history.push('/')
                 
             }else{
                 this.props.error(data.error)

             }
         })
         

     }
     

    constructor(props){
        super(props);
        this.state = {
            file:null,
            disabled:'disabled'
        }
        this.profile_image = React.createRef();
    }
    handleChange = ()=>{
        if(this.profile_image.current.value != ''){
            this.setState({
                disabled:''
            })
        }else{
            this.setState({
                disabled:'disabled'
            });

        }
        
    }
    
     handleSubmit = (e) =>{
         e.preventDefault();
         this.setState({
             disabled:'disabled'
         })
        var token = localStorage.getItem('token');
        var data = new FormData();
        data.append('profile_image',document.getElementById('profile_image').files[0])
        fetch('/profile/api/',{
            "method":"POST",
            "headers":{
                "Authorization":`Token ${token}`
            },
            body:data
        })
        .then(function(res){ 
            return res.json();
        })
        .catch(err =>{
            return err.json()
        })
        .then(data =>{
            
            this.setState({
                disabled:'disabled'
            });
            
            if( data.id ){
                this.props.history.push('/')
            }
            console.log(data)
        })
            
     }
     RedirectToHome = ()=>{
         return <Redirect to ='/' />
     }
    render() {
        if(!localStorage.getItem('token')){
            return <Redirect to="/login"/>

        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 mt-3 ">
                            <h3 className="text-center text-muted">Add Profile Image <span onClick={this.RedirectToHome}>Ignore for now</span></h3>
                            <form action="" onSubmit={this.handleSubmit} method="post" className="form-inline">
                                <div className="form-group">
                                    <input type="file" onChange ={this.handleChange} ref={this.profile_image} className="form-control" name="profile_image" id="profile_image" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" id="profile_image"  className={"ml-2 btn btn-outline-info btn-sm form-control " + this.state.disabled } />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        error :state.ErrorReducer.error_msg
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        error :(msg)=>{dispatch(error_dispatch(msg))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditProfile);