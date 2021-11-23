// import React, { useState, useEffect, useContext } from "react";
// import AccountNav from "../components/accountnav";
// import { Link } from "react-router-dom";
// import SalesTable from "../components/salesTable";
// import PurchasesTable from "../components/purchasesTable";
// import axios from "axios";
// import { server_uri } from "../config";
// import globalContext from "../context/globalContext";

// function Orders() {
//     const [isSalesLoading, setSalesLoading] = useState(true);
//     const [isPurchasedLoading, setPurchasedLoading] = useState(true);
//     const [userSoldBreaks, setUserSoldBreaks] = useState();
//     const [userPurchasedBreaks, setUserPurchasedBreaks] = useState();

//     const { user } = useContext(globalContext);

//     //selling breaks
//     useEffect(() => {
//         let sellerId = "acct_1IVTl0PIylH5GvoE";
//         const authToken = localStorage.getItem("AuthToken");
//         axios.defaults.headers.common = { Authorization: `${authToken}` };
//         axios
//             .get(server_uri + `/orders/selling/?sellerId=${sellerId}&limit=3`)
//             .then(response => {
//                 console.log(response.data);
//                 const allBreaks = Array.from(response.data);
//                 setUserSoldBreaks(allBreaks);
//                 setSalesLoading(false);
//             });
//     }, [user]);

//     //buying breaks
//     useEffect(() => {
//             let userId = user.userId;
//             const authToken = localStorage.getItem("AuthToken");
//             axios.defaults.headers.common = { Authorization: `${authToken}` };
//             axios
//                 <<
//                 << << < HEAD
//                 .get(server_uri + `/orders/buying/?userId=${userId}`)
//                 .then((response) => { ===
//                     === =
//                     .get(server_uri + `/orders/buying/?userId=${userId}&limit=3`)
//                         .then(response => { >>>
//                             >>> > 664 b397c8633b03e93ef16d68c31d9ace3bf800e
//                             console.log(response.data);
//                             const allBreaks = Array.from(response.data);
//                             setUserPurchasedBreaks(allBreaks);
//                             setPurchasedLoading(false);
//                         });
//                 }, [user]);

//             return ( <
//                     div className = "account-containers" >
//                     <
//                     AccountNav / >
//                     <
//                     div className = "bio" > < /div> <
//                     div >
//                     <
//                     h1 > BUYING < /h1> {
//                     isPurchasedLoading ? ( <
//                         p > Loading... < /p>
//                     ) : ( <
//                         div >
//                         <
//                         PurchasesTable userBreaks = { userPurchasedBreaks }
//                         /> < /
//                         div >
//                     )
//                 } <
//                 /div> <
//             div >
//                 <
//                 h1 > SELLING < /h1> {
//             isSalesLoading ? ( <
//                 p > Loading... < /p>
//             ) : ( <
//                 div >
//                 <
//                 SalesTable userBreaks = { userSoldBreaks }
//                 /> < /
//                 div >
//             )
//         } <
//         /div> < /
//         div >
//     );
// }

// export default Orders;