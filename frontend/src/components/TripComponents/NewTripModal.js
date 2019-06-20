import React, { Component } from "react";
import Modal from "../ModalComponents/Modal";
import TextInput from "../ModalComponents/TextInput";
import DateInput from "../ModalComponents/DateInput";
import GMap from "../Map/GMap";
import "./Page.css";

import { axios } from '../Axios/index';

const INITIAL_STATE = {
    tripName: "",
    destinations: [],
    tripPlanner: ""
  };


class NewTripModal extends Component {
<<<<<<< HEAD
    state = {
        INITIAL_STATE
    };
    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };
    handleSubmit = e => {
        e.preventDefault();
    axios({
        method: 'POST',
        url: '/trip'
    })
    .then(res => {
        this.setState({
            ...res.data,
            destinations: res.data.destinations[0]
        })
        .catch(err => console.log(err));
    })
    }

    render() {
        return (
            <div className="new-modal">
               <a 
                    id="modal-button"
                    onClick={e => {
                        this.showModal(e);
                    }}
                >
                    {" "}Add New Trip{" "}
               </a>
               <Modal onClose={this.showModal} show={this.state.show}>
                   <TextInput />
                   <DateInput />

               </Modal> 
            </div>
        );
    }
=======
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
        <a
          id="modal-button"
          onClick={e => {
            this.showModal(e);
          }}
        >
          {" "}
          Add New Trip{" "}
        </a>
        <Modal onClose={this.showModal} show={this.state.show}>
          <TextInput />
          <DateInput />
          <GMap defaultCenter={{ lat: 37.7577961, lng: -122.38807209999999 }} />
        </Modal>
      </div>
    );
  }
>>>>>>> 1dbbc365fd3bb23d1720cba5b013c40c07487152
}

export default NewTripModal;
