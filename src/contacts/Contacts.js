import React, { useMemo, memo } from "react";
import { MyTable } from "../ui-components/table/MyTable";
import { TableHead } from "../ui-components/table/_head/TableHead";
import { useContacts } from "./useContacts";

export const Contacts = memo(() => {
  const { rows } = useContacts();

  const listTableHeadings = useMemo(() => {
    return rows.map((headings) => {
      return <TableHead>{headings}</TableHead>;
    });
  }, [rows]);

  return <MyTable tableHead={listTableHeadings}></MyTable>;
});
