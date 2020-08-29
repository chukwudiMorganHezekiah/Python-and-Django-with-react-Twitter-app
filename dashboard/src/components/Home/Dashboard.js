import React, { Component } from 'react';
import User from './User';
import ErrorBoundary from '../ErrorBoundary';
import AddPost from './AddTweet';
import TweetsList from './TweetsList';
import SearchBox from './SearchBox'
class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state ={
            loading:true,
            users:[],
            user:[]
        }
    }
    componentDidMount(){
        this.GetDefaultUsers()

    }
    GetDefaultUsers = ()=>{
        var token = localStorage.getItem('token')
       if(token){
            fetch(`/users/api/get_users/`,{
            method:"POST",
            headers:{
                "Authorization":`Token ${token}`
            }
        })
        .then(res => res.json())
        .then(data =>{ 
              
            while(data.users.length > 5){
               data.pop();
            }
            var user_id = data.user.id;
            var new_data =data.users.filter(datum =>{
                return datum.id != user_id
            });
            

            this.setState({
                loading:false,
                users:new_data,
                user:data.user
            })
            

        })
       }else{
           this.props.history.push('/login/')
       }
    }
    

    render() {
        var content = this.state.loading ?(
            <>
            <div className="col-lg-8 offset-lg-2 pb-2">
               <h1 className="text-center text-muted">Loading ...</h1>
            </div>
            </>
        ):(
            <>
            <div className="col-lg-8 card pb-2" style={{marginTop: "47px" }}>
                <div><AddPost /></div>
                <div id="tweets_list">
                <TweetsList />
                </div>

            </div>

            <div className="col-lg-3 card m-3 p-2" style={{ position: "fixed",top: "30px",right: "230px",width: "262px" }}>
                <SearchBox />
                <h4 className="text-muted text-center">People You may Like</h4>
                {this.state.users.map(user =>{
                    return (
                        <User user_id={user.id} key={user.id} />
                    )
                })}

            </div>

            
            </>
        )
        
        return (
            
            <div className="container">

                <div className="row">
                    { content }
                </div>
                
                
            </div>
        )
    }
}
export  default Dashboard;
