import * as React from "react";
import { WithEmptyList, WithError, WithLoading } from "../util-components";
import { usePlanTrip } from "./usePlanTrip";
import { PlanTripListItem } from "./_item/PlanTripListItem";

const PlanTrip = React.memo(() => {
  const { isLoading, apiData, serverError } = usePlanTrip();

  const listItems = React.useMemo(() => {
    return apiData?.data.map((d) => {
      return <PlanTripListItem planTrip={d} />;
    });
  }, [apiData]);

  return (
    <WithLoading loading={isLoading}>
      <WithError error={serverError}>
        <WithEmptyList
          listLength={apiData}
          errorMessage="No Trip Details found."
        >
          <h1>Plan Trip Section</h1>
          {listItems}
        </WithEmptyList>
      </WithError>
    </WithLoading>
  );
});

export default PlanTrip;
