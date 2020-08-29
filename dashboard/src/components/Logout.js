import React, { Component } from 'react';
import { connect } from 'react-redux';
import logout_user from './Redux/dispatches/logout';


 class Logout extends Component {

     componentDidMount(){
         this.handleLogout()
     }

     
    handleLogout = ()=>{
        var token = localStorage.getItem('token');
        if(token){     
        fetch(`/auth/token/logout/`,{
            method:"POST",
            headers:{
                "Authorization":`Token ${token}`
            }
        })
        .then(()=>{
            localStorage.removeItem('token');
            this.props.history.push('/login/')
            
        })

        }else{
            this.props.history.push('/login/')
        }


    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Logout;