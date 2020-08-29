import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../../styles/style.css';

class User extends Component {
    constructor(props){
        super(props);
        this.state ={
            user:[],
            profile:[],
            loading:true
        }
        
    }
    componentDidMount(){
        var token = localStorage.getItem('token');
        if(token){
            fetch(`/users/api/get_user/${this.props.user_id}/`,{
                method:"POST",
                headers:{
                    "Accept":"application/json,text/plain, */*",
                    "Content-Type":"application/json",
                    "Authorization":`Token ${token}`
                }
            })
            .then(res => res.json())
            .then(data =>{
                
                this.setState({
                    loading:false,
                    user:data.user,
                    profile:data.profile,
                    following:false
                });
            });

        }else{
            return <Redirect to="/login/" />
        }
        
    }
     follow_user  = user_id =>{
         if(!this.state.following){
            var token = localStorage.getItem('token');
            if (token){
                 fetch(`http://127.0.0.1:8000/follow/api/followe_user/${user_id}/`,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        "Accept":"application/json, text/plain, */*",
                        "Authorization":`Token ${token}`
                    }
                })
                .then(res =>res.json())
                .then(data =>{
                    
                    if(data.follower ){
                        this.setState({
                            following:true
                        });
    
                    }
                })
                .catch(err =>{console.log(err)})
    
            }else{
                this.props.history.push('/login/')
            }
         }
    }
    render() {
        var content =this.state.loading?(
            <>
            </>
        ):(
        <>
        <div className="d-flex mb-1" style={{ borderBottom: "1px solid #e8e4e4" }}>
            <img src={this.state.profile.profile_image} style={{width: "30px",height: "30px",borderRadius: "20px",}}/>
            <p className="ml-2"><b>{this.state.user.username}</b></p>
        <button className="btn btn-sm btn-primary follow_button" onClick={()=>{this.follow_user(this.state.user.id)}}>{this.state.following ?'Following': "Follow"}</button>
        </div>
        
        </>
        )
        return (
            <div>
                {content}
                
            </div>
        )
    }
}

export default  User