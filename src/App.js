import './styles/App.css';
import { useState } from "react";
import React from "react";
import OperationList from "./components/OperationList";
import factories from "./factories"
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const service = factories.getOperationService();
    const [operations, setOperations] = useState([
       {id: 1, date: '01.01.2022', check: 'Прораб', type: 'Расход', category: 'Питание', desc: 'try', sum: 100},
       {id: 2, date: '01.01.2022', check: 'Прораб', type: 'Расход', category: 'Питание', desc: 'try', sum: 100},
       {id: 3, date: '01.01.2022', check: 'Прораб', type: 'Расход', category: 'Питание', desc: 'try', sum: 100},
    ])

    const [check, setCheck] = useState('');
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');
    const [desc, setDesc] = useState('');
    const [sum, setSum] = useState(0);

    const addNewOperation = (e) => {
        e.preventDefault()
        const op = {
            id: null,
            date: Date.now(),
            check,
            type,
            category,
            desc,
            sum
        }

        service.createOperation(op)
            .then((newOperation) => {
                console.log(check)
                setOperations([...operations, newOperation])
            });
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={check}
                    onChange={e => setCheck(e.target.value)}
                    type="text"
                    placeholder="Расчетный счет"
                />
                <MyInput
                    value={type}
                    onChange={e => setType(e.target.value)}
                    type="text"
                    placeholder="Тип операции"
                />
                <MyInput
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    type="text"
                    placeholder="Категория"
                />
                <MyInput
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                    type="text"
                    placeholder="Примечание"
                />
                <MyInput
                    value={sum}
                    onChange={e => setSum(e.target.value)}
                    type="text"
                    placeholder="Сумма"
                />
                <MyButton onClick={addNewOperation}>Внести операцию</MyButton>
            </form>
            <OperationList operations={operations}/>
        </div>
    );
}

export default App;
