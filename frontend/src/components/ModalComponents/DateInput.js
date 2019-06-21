import React, { Fragment, useState, useEffect } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { componentDidUpdate } from "react-google-maps/lib/utils/MapChildHelper";

function KeyboardDatePickerExample(props) {
  const [startDate, handleStartChange] = useState(new Date());
  const [endDate, handleEndChange] = useState(new Date());

  return (
    <Fragment>
      <KeyboardDatePicker
        clearable
        name="startDate"
        value={startDate}
        onChange={date => {
          handleStartChange(date);
          props.startHandler(startDate);
        }}
        minDate={new Date()}
        format="MM/dd/yyyy"
      />

      <KeyboardDatePicker
        placeholder="10/10/2018"
        name="endDate"
        value={endDate}
        onChange={date => {
          handleEndChange(date);
          props.endHandler(endDate);
        }}
        minDate={startDate}
        format="MM/dd/yyyy"
      />
    </Fragment>
  );
}

export default KeyboardDatePickerExample;

//export default InlineDatePickerDemo;
