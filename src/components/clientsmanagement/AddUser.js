import React, { Component } from 'react'
const uuidv1 = require('uuid/v1');


class Modal extends React.Component {

	constructor(props) {
		super(props);
    const { isModalOpen, closeModal, style } = this.props;
	}

	// render modal
	render() {
		return (
			<div className="modal-outerstyle"
				style={{
					display: this.props.isModalOpen ? "block" : "none"
				}}
			>
				<div className="modal-overlay" onClick={this.props.closeModal} />
				<div onClick={this.props.closeModal} />
				<div className="modal-style">{this.props.children}</div>
			</div>
		);
	}
}















export default class AddUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showAddUser: false,
      addUserDone: false,
      isModalOpen: false
    }
    this.isInputChange = this.isInputChange.bind(this)
    this.submitNewUser = this.submitNewUser.bind(this)
    // binding methods
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true})
  }
  
  closeModal () {
    this.setState({ isModalOpen: false })
  }

  isInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  submitNewUser() {
    const newUser = {
      id: uuidv1(),
      name: this.state.name,
      phone: this.state.phone,
      permission: this.state.permission

    }
    this.props.createNewUser(newUser)

    this.setState({
      addUserDone: !this.state.addUserDone
    });
  }

  showAddUser() {
    this.setState({
      showAddUser: !this.state.showAddUser
    })
  }

  render() {
    if (!this.state.showAddUser) {
      return (
        <div>
        <button  className="btn_new_client" onClick={this.openModal}><i className="button-icon-newclient-space fa fa-user-plus" />Add New Client</button>
        <Modal
					isModalOpen={this.state.isModalOpen}
					closeModal={this.closeModal}
				>
            


          <div className="add-client-form-padding">
          <div className="row">
            <div className="col-6 form-group-title">Add New Client</div>
          </div>
          <div className="row">
              <div className="col-6">
                  <div class="form-group input-material">
                      <input type="text" class="form-control" id="firstname-field" required/>
                      <label for="firstname-field">First NAME</label>
                  </div>
                  <div class="form-group input-material">
                      <input type="email" class="form-control" id="email-field" required/>
                      <label for="email-field">Email</label>
                  </div>
                  <div className="form-group">
                    <div className="row"><div className="col-6"> <label for="birth-field">Birthday</label></div></div>
                    <div className="row">
                      <div className="col-5">
                        <select className="eval-input w-input-select" id="month-field">
                                  <option value="0">January</option>
                                  <option value="1">February</option>
                                  <option value="2">March</option>
                                  <option value="3">April</option>
                                  <option value="4">May</option>
                                  <option value="5">Juune</option>
                        </select> 
                      </div>
                      <div className="col-3">
                        <select className="eval-input w-input-select" id="day-field">
                                  <option value="0">0</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                        </select> 
                      </div>
                      <div className="col-4">
                        <select className="eval-input w-input-select" id="month-field">
                                  <option value="0">2019</option>
                                  <option value="1">2018</option>
                                  <option value="2">2017</option>
                                  <option value="3">2016</option>
                                  <option value="4">2015</option>
                                  <option value="5">2014</option>
                        </select> 
                      </div>
                    </div>
                  </div>

              </div>
              <div className="col-6">
                  <div class="form-group input-material">
                      <input type="text" class="form-control" id="lastname-field" required/>
                      <label for="lastname-field">LAST NAME</label>
                  </div>
                  <div class="form-group input-material">
                      <input type="number" class="form-control" id="phonenumber-field" required/>
                      <label for="phonenumber-field">Phone Number</label>
                  </div>
                  <div class="form-group input-material form-group-length">
                      <input type="text" class="form-control" id="lenth-field" required/>
                      <label for="lenth-field">Length in Centimeters</label>
                  </div>

              </div>
          </div>

          <div className="row">
            <div>
            <label for="test1" className="group-label-margin" >Dominant Hand</label>
            <div className="col-5 radio-group-display">
              <div>
                <input type="radio" id="test1" name="radio-group" checked/>
                <label for="test1">Right</label>
              </div>
              <div className="radio-second-radio-margin">
                <input type="radio" id="test2" name="radio-group"/>
                <label for="test2">Left</label>
              </div>  
            </div>
            </div>
            <div>
            <label for="test1" className="group-label-right-margin" >Gender</label>
            <div className="col-5 radio-group-display group-second-group-margin">
              <div>
                <input type="radio" id="test1" name="radio-group" checked/>
                <label for="test1">Male</label>
              </div>
              <div className="radio-second-radio-margin">
                <input type="radio" id="test2" name="radio-group"/>
                <label for="test2">Female</label>
              </div>  
            </div>
            </div>
          </div>
          <div className="row div_dlg_create_client ">
            <button  className="btn_new_client" onClick={this.openModal}>Create Client</button>
          </div>

    </div>


				</Modal>
        </div>

      )
    } else {
      return (
        <div>
          {this.state.addUserDone && (
            <div className="alert alert-success mt-3">
              User was created!
            </div>
          )}
            {/* <div className="modal" visible={this.state.visible}>
              <form>
                <div className="form-group">
                  <input type="text" name="name" className="form-control" placeholder="Username" onChange={this.isInputChange}/>
                </div>
                <div className="form-group">
                  <input type="text" name="phone" className="form-control" placeholder="Phone" onChange={this.isInputChange}/>
                </div>
                <div className="form-group">
                  <select className="form-control" name="permission" defaultValue={0} onChange={this.isInputChange}>
                    <option value={0} disabled>Select permission</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Moderator</option>
                    <option value={3}>User</option>
                  </select>  
                </div>
                <button type="reset" className="btn btn-info btn-block" 
                  onClick={this.submitNewUser}>Submit
                </button>
                <button className="btn btn-block btn-outline-secondary" 
                  onClick={() => this.showAddUser()}>Cancel
                </button>
              </form>
          </div> */}
        </div>
  
      )
    }
  }
}
