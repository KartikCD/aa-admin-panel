// import React, { useState } from "react";
// import { TYPE } from "../../constants";
// import { getInstance } from "./getInstance";

// export function makeGetRequest(endpoint, params, type) {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [data, setData] = useState([]);

//   const axiosInstance = getInstance();

//   if (type === TYPE.PATH_PARAMS) {
//     axiosInstance
//       .get(`${endpoint}/${params}`)
//       .then((response) => {
//         setLoading(false);
//         setData(response);
//       })
//       .catch((error) => {
//         setLoading(false);
//         setError(error);
//       });
//   }

//   return { loading, error, data };
// }
