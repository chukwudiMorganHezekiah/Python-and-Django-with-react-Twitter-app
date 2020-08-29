import React, { Component } from 'react'

class ErrorBoundary extends Component {
    componentDidCatch(){
        console.log("Error in a component");
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default ErrorBoundary
