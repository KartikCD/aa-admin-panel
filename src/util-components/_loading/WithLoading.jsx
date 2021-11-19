import * as React from "react";
import { Spinner } from "../../ui-components/spinner/Spinner";

export const WithLoading = React.memo(({ loading, children }) => {
  if (loading) {
    return <Spinner />;
  }
  return <React.Fragment>{children}</React.Fragment>;
});
