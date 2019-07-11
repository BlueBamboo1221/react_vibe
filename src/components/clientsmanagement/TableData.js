import React, { Component } from 'react'
import TableDataRow from './TableDataRow';

export default class TableData extends Component {
  render() {
    console.log("accesstoken", localStorage.getItem("accessToken"));
    console.log("idtoken", localStorage.getItem("idToken"));
    const { users } = this.props
    return (
      <div className="table-user">
        <table className="table table-hover">
            <tr>
              <th scope="col" className="td-th-algin">Name</th>
              <th scope="col" className="td-th-algin">Email</th>
              <th scope="col" className="td-th-algin">VIBE Results</th>
              <th scope="col" className="td-th-algin">Sex </th>

            </tr>
          <tbody>
            {users.map((user, key) => {
              return (
                <TableDataRow 
                  user={user}
                  key={key}
                  order={key}
                  editUser={this.props.editUser}
                  deleteUser={this.props.deleteUser}
                />
              )
            })}
          </tbody>
        </table>
      </div>

    )
  }
}
