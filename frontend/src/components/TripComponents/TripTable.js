import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import NewTripModal from "./NewTripModal";

class TableTest extends Component {
    render() {
        const data =[
        {
            name: 'Honeymoon',
            destination: 'Maui HI',
            start: '12/13/19',
            end: '12/20/19'
        },
        {
            name: 'Girls Trip',
            destination: 'Las Vegas Tahoe',
            start: '2/3/20',
            end: '2/10/20'
        },
        {
            name: 'Spring Break',
            destination: 'Cancun Cozumel',
            start: '4/14',
            end: '4/21'
        }]

        const columns = [
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Destination',
            accessor: 'destination'
        },
        {
            Header: 'Start',
            accessor: 'start',
            Cell: props => <span className='number'>{props.value}</span>
        },
        {
            Header: 'End',
            accessor: 'end',
            Cell: props => <span className='number'>{props.value}</span>
        }]

        return (
        <div className="react-table">
            <ReactTable 
            className="table"
            data={data}
            columns={columns}
            showPagination={false}
            defaultPageSize={5}
            /> 
            <NewTripModal/>
        </div>     
    
        )}
}

export default TableTest;