import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Image, Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import Avatar from './Avatar';


class UserLists extends Component{

	render(){
     const userlist = this.props.userlist;
     const allusers = userlist.map((user) => 

     <ListGroupItem href="#" key={user.cell}>  
    <Grid>
        <Row className="show-grid">
        <Col xs={12} md={1}>
          <Avatar src={user.picture.medium}/>
        </Col>
        <Col xs={6} md={4}>
          {user.name.first} {user.name.last} <br />{user.location.city} <br />{user.location.state}
        </Col>
      </Row>
    </Grid>
    </ListGroupItem>
     );
	
       return(
         <ListGroup>
        {allusers}
        </ListGroup>
       
        );
	}
}

export default connect()(UserLists);