import React, { Component }  from "react";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import SimpleTable from "./simple-table";


import './App.css';
import Header from './Header';
import TableData from './TableData';
import Search from './Search';
import AddUser from './AddUser';
import EditUser from './EditUser';
import Data from './DataSample.json';
import { Modal } from "@material-ui/core";



const styles = theme => ({
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  }
});


class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userData: [],
      editUser: {user: null, display: false}
    }
     this.searchUsers    = this.searchUsers.bind(this);
     this.logout    = this.logout.bind(this);
    // this.createNewUser  = this.createNewUser.bind(this);
    // this.editUser       = this.editUser.bind(this);
    // this.cancelEditUser = this.cancelEditUser.bind(this);
    // this.updateEditUser = this.updateEditUser.bind(this);
    // this.deleteUser     = this.deleteUser.bind(this)

  }



  componentWillMount() {
    // Check localStorage
    if (!localStorage.getItem('userData')) {
      localStorage.setItem('userData', JSON.stringify(Data))
    }
    let data = localStorage.getItem('userData')
    this.setState({
      userData: JSON.parse(data)
    });
  }

  logout()
  {
    this.props.auth.logout();
  }

  searchUsers(event) {
    let keyword = event.target.value.toLowerCase()
    let userData = JSON.parse(localStorage.getItem('userData'))
    this.setState({
      userData: userData.filter((item) => {

        // Find user by Name or Phone
        return (item.name.toLowerCase().indexOf(keyword) >= 0 || item.phone.indexOf(keyword) >= 0)
      })
    })
  }

  render() {
    const { classes } = this.props;
    const { isAuthenticated } = this.props.auth;
    return (
      <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Typography variant="display1" gutterBottom>
        My Group
      </Typography>
      <div onClick={this.logout.bind(this)}>
        Log out
      </div>

    
      
      <div className="container">
        <div className="row">
        <div className="col-3">
          <Search searchUsers={this.searchUsers}/>
        </div>  
        <div className="col-6"/>
        <div className="col-3">
          <AddUser createNewUser={this.createNewUser}/>
        </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TableData 
              users={this.state.userData}
              editUser={this.editUser}
              deleteUser={this.deleteUser} />
          </div>
        </div>
       </div>
    </main>
    );
  }

}


export default withStyles(styles)(Dashboard);
