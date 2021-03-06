import React, { Component } from "react";
import Modal from "../ModalComponents/Modal";
import TextInput from "../ModalComponents/TextInput";
import DateInput from "../ModalComponents/DateInput";
import GMap from "../Map/GMap";
import { connect } from "react-redux";
import { withFirebase } from "../Firebase";
import { axiosConfig } from "../Axios";
import { getTripsByUser } from "../../store/actions/tripActions";
import "./Page.css";

class NewTripModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      tripName: "",
      destinations: [],
      startDate: "",
      endDate: "",
      //planner: this.props.firebase.auth.currentUser.uid,
      planner: "",
      participants: []
    };
  }

  componentDidUpdate() {
    this.props.firebase.getUser();
  }

  componentDidMount() {
    // console.log("FB props: ", this.props.firebase);
    // const u = this.props.firebase.auth;
    // console.log("u: ", u);
    // console.log("uid: ", this.props.firebase.auth.currentUser);
  }

  getUser = async () => {
    await this.props.firebase.getUser();
  };

  showModal = e => {
    if (this.state.planner) {
      this.setState({
        show: !this.state.show
      });
    } else
      this.setState({
        show: !this.state.show
        // planner: this.props.firebase.auth.currentUser.uid
      });
  };

  addTrip = () => {
    const trip = {
      tripName: this.state.tripName,
      destinations: this.state.destinations,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      planner: this.state.planner,
      participants: this.state.participants,
      favorites: []
    };
    axiosConfig
      .post("/trip", trip)
      .then(res => {
        this.showModal();
        this.props.getTripsByUser();
      })
      .catch(err => console.log(err));
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

        <Modal
          onClose={this.showModal}
          show={this.state.show}
          addTrip={this.addTrip}
        >
          <TextInput
            nameHandler={this.changeHandler}
            nameValue={this.state.tripName}
          />
          <ul>
            {this.state.destinations.map(dest => (
              <li key={dest.place_id}>{dest.name}</li>
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

export default connect(
  null,
  { getTripsByUser }
)(withFirebase(NewTripModal));
