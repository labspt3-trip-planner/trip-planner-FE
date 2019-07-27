// import React from "./node_modules/react";
// import { Link } from "./node_modules/react-router-dom";
// import { withFirebase } from "../Firebase";
// import { withRouter } from "./node_modules/react-router-dom";

// const Navigation = props => {
//   const signOut = e => {
//     props.history.push("/");
//     props.firebase.signOut();
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-start">
//         <Link to="/triplist">
//           <a href="/" id="header-buttons">My Trips</a>
//         </Link>
//         <Link to="/billing">
//           <a href= "/" id="header-buttons">Billing</a>
//         </Link>
//       </div>
//       <div className="navbar-end">
//         <Link to="/about">
//           <a href="/" id="navbar-end-buttons">Meet The Team</a>
//         </Link>
//         <a href="/" onClick={signOut} id="navbar-end-buttons">
//           Signout
//         </a>
//       </div>
//     </div>
//   );
// };

// export default withFirebase(withRouter(Navigation));
