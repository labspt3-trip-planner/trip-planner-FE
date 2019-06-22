import React, { Component } from "react";
import Modal from "../ModalComponents/Modal";
import TextInput from "../ModalComponents/TextInput";
import DateInput from "../ModalComponents/DateInput";
import GMap from "../Map/GMap";
import "./Page.css";

class NewTripModal extends Component {
  state = {
    show: false,
    tripName: "",
    destinations: [],
    startDate: "",
    endDate: ""
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addDest = destination => {
    this.setState({ destinations: [...this.state.destinations, destination] });
  };

  startHandler = date => this.setState({ startDate: date });

  endHandler = date => this.setState({ endDate: date });

  render() {
    return (
      <div className="new-modal">
        <a id="modal-button" onClick={e => this.showModal(e)}>
          Add New Trip
        </a>

        <Modal onClose={this.showModal} show={this.state.show}>
          <TextInput
            nameHandler={this.changeHandler}
            nameValue={this.state.tripName}
          />
          <ul>
            {this.state.destinations.map(dest => (
              <li>{dest.name}</li>
            ))}
          </ul>
          <DateInput
            className="datePicker"
            startHandler={this.startHandler}
            endHandler={this.endHandler}
          />
          <GMap
            id="gMap"
            addDest={this.addDest}
            defaultCenter={{ lat: 37.7577961, lng: -122.38807209999999 }}
          />
        </Modal>
      </div>
    );
  }
}

export default NewTripModal;
