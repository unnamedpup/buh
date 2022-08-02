import './styles/App.css';
import { useEffect, useState } from "react";
import React from "react";
import OperationList from "./components/OperationList";
import factories from "./factories"
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [operations, setOperations] = useState([])
    const [service, _] = useState(factories.getOperationService());
    const [operation, setOperation] = useState({id: null, date: null, check: '', type: '', category: '', desc: '', sum: ''})

    useEffect(() => {
        service.getOperations()
            .then((ops) => setOperations(ops))
            .catch((err) => console.error(err));
    }, [service]);


    const addNewOperation = (e) => {
        console.log(operation)
        e.preventDefault()
        service.createOperation(operation)
            .then((newOperation) => {
                setOperations([...operations, newOperation])
            });
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={operation.check}
                    onChange={e => setOperation({...operation, check: e.target.value})}
                    type="text"
                    placeholder="Расчетный счет"
                />
                <MyInput
                    value={operation.type}
                    onChange={e => setOperation({...operation, type: e.target.value})}
                    type="text"
                    placeholder="Тип операции"
                />
                <MyInput
                    value={operation.category}
                    onChange={e => setOperation({...operation, category: e.target.value})}
                    type="text"
                    placeholder="Категория"
                />
                <MyInput
                    value={operation.desc}
                    onChange={e => setOperation({...operation, desc: e.target.value})}
                    type="text"
                    placeholder="Примечание"
                />
                <MyInput
                    value={operation.sum}
                    onChange={e => setOperation({...operation, sum: e.target.value})}
                    placeholder="Сумма"
                />
                <MyButton onClick={addNewOperation}>Внести операцию</MyButton>
            </form>
            <OperationList operations={operations} title={"Архив операций"}/>
        </div>
    );
}

export default App;
