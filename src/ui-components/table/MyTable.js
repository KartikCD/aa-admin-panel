import React from 'react';

import './MyTable.css';
export const MyTable = ({ tableHead, children }) => {
    return (
        <table>
            <thead>{tableHead}</thead>

            <tbody>{children}</tbody>
        </table>
    );
};
