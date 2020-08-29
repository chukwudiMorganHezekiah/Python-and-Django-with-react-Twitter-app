import React, { Component } from 'react'

class SearchBox extends Component {
    render() {
        return (
            <div>
                <input type="text"  style={{border: "1px solid #e2dede",width: "70%",borderRadius:"20px",height: "34px" }} />
                <button className="btn btn-primary" style={{border: "none",borderRadius: "8px",height: "35px" }}>Search</button>
                
            </div>
        )
    }
}
export default  SearchBox
