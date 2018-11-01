import React, { Component } from 'react';
import {Image} from 'react-bootstrap';

 class Avatar extends Component {

	render(){
	    return(
	    	<Image src={this.props.src} circle/>
		);
	}
}

export default Avatar;