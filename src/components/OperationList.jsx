import React from 'react';
import OperationItem from "./OperationItem";

const OperationList = ({operations, title}) => {
    const titles = ["ID", "Дата", "Расчетный счет", "Тип", "Категория", "Примечание", "Сумма"]

    return (
        <div align="center">
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            <table>
                <tr>
                    {titles.map((title) => <th key={title}>{title}</th>)}
                </tr>
                {operations.map((operation) =>
                    <OperationItem operation={operation} key={operation.id}/>)}
            </table>
        </div>
    );
};

export default OperationList;
