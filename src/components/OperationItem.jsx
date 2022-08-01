import React from 'react';

const OperationItem = ({ operation }) => {
    console.log('keys:', Object.keys(operation));
    return (
        <tr align="center">
          {Object.keys(operation).map((key) =>
            <td key={key}>{operation[key]}</td>)}
        </tr>
    )
};

export default OperationItem;
