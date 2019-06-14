import React, { Component } from 'react';
import Modal from "../ModalComponents/Modal";
import TextInput from "../ModalComponents/TextInput";
import DateInput from "../ModalComponents/DateInput";

import { axios } from 'axios';


class NewTripModal extends Component {
    state = {
        show: false
    };
    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };

    componentDidMount(e) {
        axios.get('http://localhost:9090/')
         .then(response => {
             this.setState({
                 addNewTrip: Response.data
             })
         })
         .catch(e > console.log(e))
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
