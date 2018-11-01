import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Users} from '../actions/Actions';
import API from '../services/api';
import UserLists from './UserLists';
import Loader from './Loader';
import Header from './Header';

import logo from '../logo.svg';
import '../App.css';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      usersList : [],
      loading : true,
    }
  }

componentWillMount() {

API.get(`api/?results=80`)
      .then(res => {
       const usersList = res.data;
        // console.log('red', res.data);
        this.props.onWillMount(res.data.results);
        this.setState({usersList: usersList.results, loading: false});
      });

  }
  
  render() {
     let content;
    
    if (this.state.loading) {
      content = <Loader /> ;
    } 
    return (
  <div>
   <Header />
   {content}
   {/* {JSON.stringify(this.props.userList)} */}
   <UserLists userlist={this.props.userList}  />
  </div>

  
    );
  }
}

const mapStateToProps = state => {
 return {
   userList: state.users
 }

}

const mapDispatchToProps = dispatch => {

  return {

    onWillMount: user => {
      dispatch(Users(user));
    }

  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
