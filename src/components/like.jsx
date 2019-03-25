import React, { Component } from 'react';
class Like extends Component {
    state = {  }
    render(props) { 
        let classses="fa fa-heart";
       if(!this.props.liked) classses+="-o"

        return (            
            <i onClick={this.props.onClick}  style={{cursor:'pointer'}} className={classses} aria-hidden="true"></i>
         );
    }
}
 
export default Like;