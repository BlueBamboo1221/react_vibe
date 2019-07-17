import React, { Component } from 'react'

export default class TableDataRow extends Component {
  constructor(props, context) {
    super(props, context);
    this.onClickEditUser = this.onClickEditUser.bind(this);
    this.onClickDeleteUser = this.onClickDeleteUser.bind(this);
  }
  
  
  permissionName(role) {
    if (role === 1) return 'Admin'
    if (role === 2) return 'Moderator'
    if (role === 3) return 'User'

  }
  onClickEditUser() {
    this.props.editUser(this.props.user.id)
  }
  onClickDeleteUser() {
    this.props.deleteUser(this.props.user.id)
  }

  render() {
    const { user, order } = this.props
    const permissionStyle = 
      (user.permission === 1 ? {color: "red", fontWeight: "bold"} 
      : user.permission === 2 ? {color : "orange"} : {})
    return (
      <tr>
        <td className="td-algin">{user.name}</td>
        <td className="td-algin"> {user.phone}</td>
        <td>                        
          <select className="eval-input w-input-select" id="currentUse">
                            <option value="0">Select one</option>
                            <option value="1">Permanent planning</option>
                            <option value="2">Row </option>
                            <option value="3">Crop</option>
                            <option value="4">Timber</option>
                            <option value="5">Other</option>
                        </select> 
        </td>
        <td className="td-algin"> {user.gender}</td>
        <td className="td-algin"> {user.email}</td>

         <td><button className="btn_cirdle_record" onClick={this.onClickEditUser}><i className="fa fa-microphone" /> </button></td>  
        <td className="td_record_lb td-algin">New Reading</td>
        <td>
        <button  className="btn_row_view "> View < i className="button-icon-view-space fa fa-long-arrow-right" /></button>
        </td>                  
        <td>
          <button className="btn btn-info" onClick={this.onClickEditUser}><i className="fa fa-edit" /> Edit</button> 
        </td>
        <td>  
          <button className="btn btn-danger" onClick={this.onClickDeleteUser}><i className="fa fa-trash-o" /> Delete</button>
        </td>
      
      </tr>

      

    )
  }
}
