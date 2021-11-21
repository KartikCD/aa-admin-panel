import React, { memo, useMemo } from 'react';
import { MyTable, TableHead, TableRow } from '../ui-components/table';
import { WithEmptyList, WithError, WithLoading } from '../util-components';
import { useSubscribers } from './useSubscribers'

const Subscribers = memo(() => {
    const { rows, isLoading, apiData, serverError } = useSubscribers();

    const listTableHeadings = useMemo(() => {
        return rows.map((headings) => {
            return <TableHead>{headings}</TableHead>;
        });
    }, [rows]);

    const listItems = useMemo(() => {
        return apiData?.data.map((d) => {
          return (
            <tr>
              <TableRow value={d.email} label={rows[0]} />
            </tr>
          );
        });
      }, [apiData, rows]);

      return (
        <WithLoading loading={isLoading}>
            <WithError error={serverError}>
                <WithEmptyList
                    listLength={apiData}
                    errorMessage="No Contact details found."
                >
                    <h1>Contacts</h1>
                    <MyTable tableHead={listTableHeadings}>{listItems}</MyTable>
                </WithEmptyList>
            </WithError>
        </WithLoading>
    );
});

export default Subscribers;