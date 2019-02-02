import React, { Component } from 'react';

class CatBox extends Component {
    render() {
        return (<div style={{margin:"3px",padding:"10px",border:"1px solid #e2e2e2"}}>
            {this.props.children}
        </div>)
    }
}

export default CatBox