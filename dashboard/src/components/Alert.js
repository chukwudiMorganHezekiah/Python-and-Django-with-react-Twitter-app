import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import {connect} from 'react-redux';

 class Alert extends Component {
    handleAlert= (msg)=>{
        this.props.alert.error(msg)

    }
    componentDidUpdate(prevProps){
        if(prevProps.error.error_msg != this.props.error.error_msg){
            this.handleAlert(this.props.error.error_msg)

        }


    }
    render() {
                return (
            <div>
                
            </div>
        )
    }
}
const mapStateToProps = state =>(
    {
        error : state.ErrorReducer
    }
)
export default connect(mapStateToProps)(withAlert()(Alert));

