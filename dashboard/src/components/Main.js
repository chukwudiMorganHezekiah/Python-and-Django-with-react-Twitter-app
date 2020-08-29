import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter} from 'react-router-dom';
import { Route,Switch } from 'react-router-dom';
import SignUp from './Authentication/SignUp';
import  store  from './Redux/store';
import { Provider } from 'react-redux';
import '../styles/style.css';
import Login from './Authentication/Login';
import EditProfile from './profile_edit/EditProfile';
import Home from './Home/Dashboard';
import Alert from './Alert';
import { Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import  Logout from './Logout'
export class Main extends Component {
    
    render() {
        const AlertConfig ={
        positon:'top center',
        timeout:6000
          }
        return (
            <div>
                <div className="container">   
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 ">
                            <Provider store ={store}>
                                <AlertProvider template={AlertTemplate} {...AlertConfig}>
                                    <BrowserRouter>
                                        <Navbar /> 
                                        <Switch>
                                            <Route path="/" exact component ={Home} />
                                            <Route path="/login/" component ={Login} /> 
                                            <Route path="/signup/" component = {SignUp} />
                                            <Route path="/edit_profile/" exact component ={EditProfile} />
                                            <Route path="/logout/" component ={Logout} />
                                        </Switch> 
                                    </BrowserRouter>
                                    <Alert />
                                </AlertProvider>
                            </Provider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
