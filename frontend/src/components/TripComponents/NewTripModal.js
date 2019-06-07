import React, { Component } from 'react';
import Modal from "../ModalComponents/Modal";
import TextInput from "../ModalComponents/TextInput";
import DateInput from "../ModalComponents/DateInput";

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
               <button 
                    className="modal-button"
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
