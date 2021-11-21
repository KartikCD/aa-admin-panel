import * as React from 'react';

export const WithError = React.memo(({ error, children }) => {
    if (error) {
        return <h3>{error}</h3>;
    }
    return <React.Fragment>{children}</React.Fragment>;
});
