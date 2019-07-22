import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import NewTripModal from "./NewTripModal";

import moment from "moment";

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
			Header: "Start Date",
			accessor: "start",
			Cell: props => (
				<span className="number">
					{moment(props.value).format("MM/DD/YY")}
				</span>
			)
		},
		{
			Header: "End Date",
			accessor: "end",
			Cell: props => (
				<span className="number">
					{moment(props.value).format("MM/DD/YY")}
				</span>
			)
		}
	];

	return (
		<div className="react-table">
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
				defaultPageSize={7}
			/>
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
