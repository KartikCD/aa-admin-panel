import * as React from 'react';
import { useIntl } from 'react-intl';
// const Dashboard = () => {
//   return <h1>Hello</h1>;
// };
const Dashboard = React.memo(() => {
  const intl = useIntl();
  const rows = intl.messages["contactSection"]
  console.log(rows);

  return <h1>Hello</h1>
})
export default Dashboard;
