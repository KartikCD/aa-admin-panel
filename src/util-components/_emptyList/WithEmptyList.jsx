import * as React from "react";

export const WithEmptyList = React.memo(({ listLength, children, errorMessage }) => {
  if (listLength === 0) {
    return <h3>{errorMessage}</h3>;
  }
  return <React.Fragment>{children}</React.Fragment>;
});
