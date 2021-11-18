import './TableRow.css';
export const TableRow = ({ value }) => {
    return <td data-label={value}>{value}</td>;
};
