import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const OperationForm = ({create}) => {
    const [operation, setOperation] = useState({check: '', type: ''})

    const addNewOperation = (e) => {
        e.preventDefault()
        const newOperation = {
            ...operation, id: Date.now()
        }
        create(newOperation)
        setOperation({check: '', type: ''})
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={operation.check}
                onChange={e => setOperation({...operation, check: e.target.value})}
                type="text"
                placeholder="Расчетный счет"
            />
            {/*Неуправляемый\Неконтролируемый компонент*/}
            <MyInput
                value={operation.type}
                onChange={e => setOperation({...operation, type: e.target.value})}
                type="text"
                placeholder="Тип операции"
            />
            <MyButton onClick={addNewOperation}>Внести операцию</MyButton>
        </form>
    );
};

export default OperationForm;