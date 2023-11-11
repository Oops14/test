import "./App.css";
import { Example1 } from "./components/Example1";
import { Example2 } from "./components/Example2";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
    const [value, setValue]: any = useState([]);
    const [update, setUpdate]: any = useState('');

    useEffect(() => console.log("data", value), [value]);
    useEffect(() => console.log("data", update), [update]);

    let getValue = (param: any) => {
        setValue([...value, { id: uuidv4(), objValue: param, isEdited: false, }]);
    };

    let deleteValue = (id: any) => {
        setValue(value.filter((item: any) => item.id !== id));
    };

    let editTodo = (id: any) => {
        setValue(value.map((item: any) => item.id === id ? {...item, isEdited: !item.isEdited } : item ));
    }

    let updateTodo = (id: any) => {
        setValue(value.map((item: any) => item.id === id ? {...item, objValue: update, isEdited: !item.isEdited} : item ));
    }

    return (
        <div className="App">
            <Example1 />

            <Example2 value={getValue} />
            <hr />
            <ul>
                {value.map((item: any) => {
                    if (item.isEdited) {
                        return (
                            <div key={item.id}>
                                <li>
                                    <input placeholder={item.objValue} value={update} onChange={(e) => {
                                        e.preventDefault();

                                        setUpdate(e.target.value);
                                        
                                    }} type="text" />
                                </li>
                                <input onClick={(e) => {
                                    e.preventDefault();
                                    // editTodo(item.id);
                                    updateTodo(item.id);

                                    setUpdate("");
                                }} value={"update"} type="button" />
                            </div>
                        );
                    } else {
                        return (
                            <div key={item.id}>
                                <li>
                                    {item.objValue + ' '}
                                    <input
                                        onClick={(e) => {
                                            e.preventDefault();
                                            deleteValue(item.id);
                                        }}
                                        value={"X"}
                                        type="button"
                                    />
                                </li>
                                <input onClick={() => {
                                    editTodo(item.id)
                                    
                                    }} value={"edit"} type="button" />
                            </div>
                        );
                    }
                })}
            </ul>
            <hr />
        </div>
    );
}

export default App;
