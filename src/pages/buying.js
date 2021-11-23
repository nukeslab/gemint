// import React, { useState, useEffect, useContext } from "react";
// import AccountNav from "../components/accountnav";
// import { Link } from "react-router-dom";
// import PurchasesTable from "../components/purchasesTable";
// import axios from "axios";
// <<<<<<< HEAD
// import { server_uri } from "../config";
// import globalContext from "../context/globalContext";
// =======
// import { userContext } from "../userContext";
// import Footer from "../components/footer";
// >>>>>>> 664b397c8633b03e93ef16d68c31d9ace3bf800e

// function Buying() {
//   const [isLoading, setLoading] = useState(true);
//   const [userBreaks, setUserBreaks] = useState();
//   const user = useContext(globalContext);

//   //buying breaks
//   useEffect(() => {
//     let userId = user.userId;
//     const authToken = localStorage.getItem("AuthToken");
//     axios.defaults.headers.common = { Authorization: `${authToken}` };
//     axios
//       .get(server_uri + `/orders/buying/?userId=${userId}&limit=3`)
//       .then((response) => {
//         console.log("breaks", response.data);
//         const allBreaks = Array.from(response.data);
//         setUserBreaks(allBreaks);
//         setLoading(false);
//       });
//   }, [user]);

//   return (
//     <div className="account-containers">
//       <AccountNav />
// <<<<<<< HEAD
//       <h1>Purchases</h1>
// =======
//       <h1>Buying</h1>
//       <p>
//         NOTES -- Completed’ - shows shipping status and cost of what
//         product/spot was purchased in which break on what date and with which
//         breaker ‘Pending’ - shows what product/spot in which break was purchased
//         with which breaker and current status of the break (ie. how many spots
//         left)
//       </p>
// >>>>>>> 664b397c8633b03e93ef16d68c31d9ace3bf800e

//       {isLoading ? <p>Loading</p> : <PurchasesTable userBreaks={userBreaks} />}
//     </div>
//   );
// }

// export default Buying;