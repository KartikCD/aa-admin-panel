import React, { useMemo, memo } from "react";
import { MyTable } from "../ui-components/table/MyTable";
import { TableHead, TableRow } from "../ui-components/table";
import { useContacts } from "./useContacts";
import { WithEmptyList, WithError, WithLoading } from "../util-components";

const Contacts = memo(() => {
  const { data, loading, error, rows } = useContacts();
  const listTableHeadings = useMemo(() => {
    return rows.map((headings) => {
      return <TableHead>{headings}</TableHead>;
    });
  }, [rows]);

  const listItems = useMemo(() => {
    return data.data.map((d) => {
      return (
        <tr key={d.name}>
          <TableRow value={d.name} label={rows[0]} />
          <TableRow value={d.email} label={rows[1]} />
          <TableRow value={d.phoneNumber} label={rows[2]} />
          <TableRow value={d.enquiry} label={rows[3]} />
        </tr>
      );
    });
  }, [data]);

  // return (
  //   <React.Fragment>
  //     <h1>Contacts</h1>
  //     <MyTable tableHead={listTableHeadings}>{listItems}</MyTable>
  //   </React.Fragment>
  // );

  console.log(loading);

  return (
    <WithLoading loading={loading}>
      <WithError error={error}>
        <WithEmptyList
          listLength={data.data.length}
          errorMessage="No Contact details found."
        >
          <h1>Contacts</h1>
          <MyTable tableHead={listTableHeadings}>{listItems}</MyTable>
        </WithEmptyList>
      </WithError>
    </WithLoading>
  );
});

export default Contacts;
