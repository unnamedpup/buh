import React from 'react';

const OperationItem = ({ operation }) => {
    const tds = [];
    for (const key in operation) {
            tds.push(<td>{operation[key]}</td>);
    }
    return (
        <tr key={operation.id} align="center">
            {tds}
        </tr>
    )
};

export default OperationItem;