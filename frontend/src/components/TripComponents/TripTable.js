import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import NewTripModal from "./NewTripModal";

const TableTest = props => {
  const goToTrip = tripId => {
    console.log("Trip id: ", tripId);
    props.history.push(`/trip/${tripId}`);
  };

  const data = props.trips.map(trip => {
    return {
      name: trip.tripName,
      destination: trip.destinations[0].name,
      start: trip.startDate,
      end: trip.endDate,
      id: trip.tripId
    };
  });

  const columns = [
    {
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "Destination",
      accessor: "destination"
    },
    {
      Header: "Start",
      accessor: "start",
      Cell: props => <span className="number">{props.value}</span>
    },
    {
      Header: "End",
      accessor: "end",
      Cell: props => <span className="number">{props.value}</span>
    }
  ];
  {
    console.log("Props", props);
  }

  return (
    <div className="react-table">
      {props.trips.length ? (
        <ReactTable
          getTrProps={(state, rowInfo) => {
            return {
              onClick: () => {
                goToTrip(rowInfo.row._original.id);
              }
            };
          }}
          className="table"
          data={data}
          columns={columns}
          showPagination={false}
          defaultPageSize={5}
        />
      ) : <div>...Loading</div>}
      <NewTripModal />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    trips: state.trips.trips
  };
};

export default connect(
  mapStateToProps,
  {}
)(withRouter(TableTest));
