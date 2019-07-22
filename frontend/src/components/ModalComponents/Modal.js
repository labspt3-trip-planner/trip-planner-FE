import React, { Component } from "react";
import "./modal.css";
import "../TripComponents/Page.css";
import PropTypes from "prop-types";

export default class Modal extends Component {
	onClose = e => {
		this.props.onClose && this.props.onClose(e);
	};
	render() {
		if (!this.props.show) {
			return null;
		}
		return (
			<div className="modal-container">
				<div className="content">{this.props.children}</div>
				<div className="actions">
					<button id="modal-button" onClick={this.props.addTrip}>
						Add Trip
					</button>
					<button id="modal-button" onClick={e => this.onClose(e)}>
						Close
					</button>
				</div>
			</div>
		);
	}
}
Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired
};
