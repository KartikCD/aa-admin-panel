import * as React from "react";

export const WithEmptyList = React.memo(({ list, children, errorMessage }) => {
  if (list?.length === 0) {
    return <h3>{errorMessage}</h3>;
  }
  return <React.Fragment>{children}</React.Fragment>;
});
