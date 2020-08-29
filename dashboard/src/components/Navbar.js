import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import styles from './helper_const/navbar_style';
import { connect } from 'react-redux';
import logout_user from './Redux/dispatches/logout'

class  Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            loggedIn:false
        }
    }
    componentDidMount(){
       this.getUser()
    }
    getUser = ()=>{
        var token = localStorage.getItem('token');
        if(token){
            fetch(`/auth/users/me/`,{
                method:'GET',
                headers:{
                    "Authorization":`Token ${token}`
                }
            })
            .then(res=>res.json())
            .then(data =>{
                if(data.phone){
                    this.setState({
                        loggedIn:true
                    })
    
                }
            })

        }else{
            this.setState({
                loggedIn:false
            })

        }
        
    }

    render(){  
        
        return (
            <div>
               <nav style={styles.nav}>
                    <div id="site-brand" style={{fontSize:"18px",fontWeight:"100"}}>
                        Twitter
                    </div>
                    <div id="site_nav_links">
                        <ul style={styles.ul}>
                            
                            {
                                 this.state.loggedIn ? (
                                    <li style={styles.li}>
                                        <Link  to="/" style={styles.a} onClick={this.getUser}>Home</Link>
                                        <Link to="/logout/"  style={styles.a} onClick={this.getUser}>Logout</Link>
                                    </li>
                        
                                ) :(
                                    <li style={styles.li}>
                                        <Link  to="/login/" style={styles.a} onClick={this.getUser}>Login</Link>
                                        <Link to ="/signup/" style={styles.a} onClick={this.getUser} >Sign Up </Link>
                                    </li>
                        
                                )
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
    
    }

export default Navbar;

