import React, { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

function KeyboardDatePickerExample(props) {
  const [startDate, handleStartChange] = useState(new Date());
  const [endDate, handleEndChange] = useState(new Date());

  return (
    <Fragment>
      <KeyboardDatePicker
        clearable
        value={startDate}
        onChange={date => handleStartChange(date)}
        minDate={new Date()}
        format="MM/dd/yyyy"
      />

      <KeyboardDatePicker
        placeholder="10/10/2018"
        value={endDate}
        onChange={date => handleEndChange(date)}
        format="MM/dd/yyyy"
      />
    </Fragment>
  );
}

export default KeyboardDatePickerExample;

//export default InlineDatePickerDemo;
