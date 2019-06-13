import React, { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

function KeyboardDatePickerExample(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <KeyboardDatePicker
        clearable
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        minDate={new Date()}
        format="MM/dd/yyyy"
      />

      <KeyboardDatePicker
        placeholder="10/10/2018"
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        format="MM/dd/yyyy"
      />
    </Fragment>
  );
}

export default KeyboardDatePickerExample;


//export default InlineDatePickerDemo;