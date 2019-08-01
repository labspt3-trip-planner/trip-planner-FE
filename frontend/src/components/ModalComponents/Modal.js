import React, { Component } from "react";
import "./modal.css";
import PropTypes from "prop-types";

export default class Modal extends Component {
	onClose = e => {
		this.props.onClose && this.props.onClose(e);
	};

	render() {
		console.log("modaljs", this.props.children);
		if (!this.props.show) {
			return null;
		}
		return (
			<div className="modal-container">
				<div className="content">{this.props.children[0]}</div>
				<div className="actions">
					<h2 className="actions-h2"> Create Trip</h2>
					<div className="props-area">
						<div className="input-box">
							{this.props.children[1]}
						</div>
						<div>{this.props.children[2]}</div>
						<div className="date-input-area">
							{this.props.children[3]}
						</div>
					</div>
					<div className="modal-button-area">
						<button
							id="modal-button"
							onClick={e => this.onClose(e)}
						>
							Close
						</button>
						<button id="modal-button" onClick={this.props.addTrip}>
							Add Trip
						</button>
					</div>
				</div>
			</div>
		);
	}
}
Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired
};
