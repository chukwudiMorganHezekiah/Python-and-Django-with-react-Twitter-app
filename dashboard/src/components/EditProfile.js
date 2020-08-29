import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter} from 'react-router-dom';
import axios from 'axios';



export class EditProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            user_profile:[]
        }
    }
    componentDidMount(){
        const user_id = localStorage.getItem('token')
        axios.get(`/api/profile/get/${user_id}/`).then(res =>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })

    }
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1 ">
                            <img src="/media/noimage.jpg"/>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

mapDispatchToProps = dispatch =>{
    return {
        error :(msg)=>{dispatch(error_dispatch(msg))}
    }
}
export default EditProfile
