import React from "react";
import HeaderContainer from "../HeaderComponents/HeaderContainer";
import "../TripComponents/Page.css";
import CheckListContainer from "./CheckListComponents/CheckListContainer";
import ListPanel from "./Lists/ListPanel";
// import FaveList from "../Favorites/FaveList";
import Title from "./TripName";
import GMap from "../Map/GMap";
import { connect } from "react-redux";
import { axiosConfig } from "../Axios";
import { getTripById } from "../../store/actions/tripActions";

class TripInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripName: "",
      destinations: [],
      currentDestination: {
        geometry: {
          location: {
            lat: 0.0,
            lng: 0.0
          }
        }
      },
      tripId: this.props.match.params.tripId,
      favorites: [],
      participants: [],
      flight_info: "",
      todos: [],
      packing: []
    };
  }

  addFavorites = async favorite => {
    try {
      await axiosConfig.post(`/favorites/${this.state.tripId}`, favorite);
      this.getTrip();
    } catch (err) {
      console.log(err);
    }
  };

  getTrip = () => {
    axiosConfig
      .get(`/trip/${this.props.match.params.tripId}`)
      .then(res => {
        this.setState({
          ...res.data,
          currentDestination: res.data.destinations[0]
        });
      })
      .catch(err => console.log(err));
  };
  //check / uncheck list items
  togglePacking = item => {
    const newItem = { item: item.item, done: !item.done };
    // const newPacking = [...this.state.packing];
    // newPacking.push({ item: item.item, done: !item.done });
    // newPacking.splice(index, 1);
    // this.setState({ packing: newPacking });
    // this.updateItem(this.state.packing, "packing");
    console.log("toggle packing!");
    this.updateItem(newItem, "packing");
  };

  toggleTodo = item => {
    const newItem = { item: item.item, done: !item.done };
    this.updateItem(newItem, "todos");
  };

  //add list items
  addPacking = ({ item }) => {
    // const newList = [...this.state.packing];
    // newList.push({ item: item.item, done: false });
    // this.setState({ packing: newList });
    const newItem = { item, done: false };
    console.log("newItem: ", newItem);
    this.addItem(newItem, "packing");
  };

  addTodo = item => {
    // const newList = [...this.state.todos];
    // newList.push({ item: item.item, done: false });
    // this.setState({ todos: newList });
    this.addItem(item, "todos");
  };

  //backend interaction functions

  //add list item
  addItem = (item, listName) => {
    const updatedItem = { item: item.item, done: !item.done };
    console.log(updatedItem);
    axiosConfig
      .post(`/trip/${this.state.tripId}/${listName}`, updatedItem)
      .then(() => this.getTrip())
      .catch(err => console.log("Additem err: ", err));
  };

  //update list item
  updateItem = (item, listName) => {
    console.log("update", item, listName);
    axiosConfig
      .put(`/trip/${this.state.tripId}/${listName}`, item)
      .then(res => {
        console.log(res);
        this.getTrip();
      })
      .catch(err => console.log("updateItem err: ", err));
  };

  componentDidMount() {
    this.setState({ tripId: this.props.match.params.tripId });
    this.getTrip();
  }

  render() {
    return (
      <div className="page-container">
        <HeaderContainer />
        <Title className="trip-title" tripName={this.state.tripName} />
        <br />
        {/* <CheckListContainer /> */}
        <ListPanel
          packingList={this.state.packing}
          todoList={this.state.todos}
          togglePacking={this.togglePacking}
          toggleTodos={this.toggleTodo}
          addPacking={this.addPacking}
          addTodo={this.addTodo}
        />
        <div className="map-container">
          <GMap
            isMarkerShown
            addFavorite={this.addFavorites}
            defaultCenter={this.state.currentDestination.geometry.location}
            favorites={this.state.favorites}
          />
          <div className="space" />
        </div>
        {/* <div className="favorites-container">
          <FaveList favorites={this.state.favorites} />
        </div> */}
      </div>
    );
  }
}

const mstp = state => {
  return {
    trip: state.trips.singleTrip
  };
};

export default connect(
  mstp,
  { getTripById }
)(TripInfoContainer);
