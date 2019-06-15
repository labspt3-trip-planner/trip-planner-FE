import React, { Component } from 'react';
import Modal from "../ModalComponents/Modal";
import TextInput from "../ModalComponents/TextInput";
import DateInput from "../ModalComponents/DateInput";
import "./Page.css";
import Map from "../Map/index";

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
                    id="modal-button"
                    onClick={e => {
                        this.showModal(e);
                    }}
                >
                    {" "}Add New Trip{" "}
               </button>
               <Modal
                   onClose={this.showModal}
                   show={this.state.show}
                   isOpen={this.state.modalIsOpen}
                   onAfterClose={this.afterOpenModal}
                   onRequestClose={this.closeModal}
                   id="modal"
                   overlayClassName="overlay"
               >
                   <TextInput />
                   <DateInput />
                   <input
                       className="input"
                       id="location-input"
                       type="text"
                       name="location"
                       maxLength="35"
                       placeholder="location..."
                       value={this.startingLocation}
                       // onSubmit={this.onSubmit}
                   >
                   </input>
                    <Map />
                   <button>Add Trip</button>
               </Modal> 
            </div>
        );
    }
}

export default NewTripModal;
