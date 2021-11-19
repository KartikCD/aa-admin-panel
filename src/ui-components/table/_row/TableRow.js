import React from 'react';
export const TableRow = ({ value, label }) => {
    return <td data-label={label}>{value}</td>;
};
