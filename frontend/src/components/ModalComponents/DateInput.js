//import React, { useState } from "react";
//import { KeyboardDatePicker } from "@material-ui/pickers";

//function InlineDatePickerDemo(props) {
  //const [selectedDate, handleDateChange] = useState(new Date());

  //return (
   // <div>
   //   <KeyboardDatePicker
   //     autoOk
    //    variant="inline"
    //    inputVariant="outlined"
    //    label="Start date"
    //    format="MM/dd/yyyy"
    //    value={selectedDate}
    //    onChange={date => handleDateChange(date)}
     // />

     // <KeyboardDatePicker
     //   autoOk
//variant="inline"
      //  inputVariant="outlined"
      //  label="End date"
      //  format="MM/dd/yyyy"
      //  value={selectedDate}
      //  onChange={date => handleDateChange(date)}
      ///>
    //</div>
      
   
  //);
//}

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