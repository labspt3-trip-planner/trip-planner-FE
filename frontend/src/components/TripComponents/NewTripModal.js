import React, { Component } from 'react';
import Modal from "../ModalComponents/Modal";
import TextInput from "../ModalComponents/TextInput";
import DateInput from "../ModalComponents/DateInput";

import { axios } from 'axios';

const INITIAL_STATE = {
    tripName: "",
    destinations: [],
    tripPlanner: ""
  };


class NewTripModal extends Component {
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
    axios
    .post('/trip')
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
               <button 
                    id="modal-button"
                    onClick={e => {
                        this.showModal(e);
                    }}
                >
                    {" "}Add New Trip{" "}
               </button>
               <Modal onClose={this.showModal} show={this.state.show}>
                   <TextInput />
                   <DateInput />

               </Modal> 
            </div>
        );
    }
}

export default NewTripModal;
