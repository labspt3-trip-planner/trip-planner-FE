import React, { Component } from "react";
import Modal from "../ModalComponents/Modal";
import TextInput from "../ModalComponents/TextInput";
import DateInput from "../ModalComponents/DateInput";
import GMap from "../Map/GMap";
import "./Page.css";


class NewTripModal extends Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div className="new-modal">
        <a id="modal-button" onClick={e => this.showModal(e)}>Add New Trip</a>

        <Modal onClose={this.showModal} show={this.state.show}>
          <TextInput />
          <DateInput className="datePicker"/>
          <GMap id="gMap" defaultCenter={{ lat: 37.7577961, lng: -122.38807209999999 }} />
        </Modal>
      </div>
    );
  }
}

export default NewTripModal;
