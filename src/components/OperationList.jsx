import React from 'react';
import OperationItem from "./OperationItem";

const OperationList = ({operations}) => {
    const titles = ["ID", "Дата", "Расчетный счет", "Тип", "Категория", "Примечание", "Сумма"]
/*    for (const title in operations[0]) {
        titles.push(title)
    }*/
    return (
        <div align="center" title={"Архив операций"}>
            <table>
                <tr>
                    {titles.map((title) => <th>{title}</th>)}
                </tr>
                {operations.map((operation) =>
                    <OperationItem operation={operation} key={operation.id}/>)}
            </table>
        </div>
    );
};

export default OperationList;