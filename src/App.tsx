import "./App.css";
import { Example1 } from "./components/Example1";
import { Example2 } from "./components/Example2";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Example3 } from "./components/Example3";
import React from "react";
import { CircleButton } from "./components/CircleButton";
import { Stars } from "./components/Stars";
import { Accordion } from "./components/Accordion";

type ValueType = {
    id: string;
    objValue: string;
    isEdited: boolean;
};

export type StarType = 0 | 1 | 2 | 3 | 4 | 5;

function App() {
    const [value, setValue] = useState<Array<ValueType>>([]);
    const [update, setUpdate] = useState<string>("");

    // useEffect(() => console.log("data", value), [value]);
    // useEffect(() => console.log("data", update), [update]);

    let getValue = (param: string) => {
        setValue([
            ...value,
            { id: uuidv4(), objValue: param, isEdited: false },
        ]);
    };

    let deleteValue = (id: string) => {
        setValue(value.filter((item: any) => item.id !== id));
    };

    let editTodo = (id: string) => {
        setValue(
            value.map((item) =>
                item.id === id ? { ...item, isEdited: !item.isEdited } : item
            )
        );
    };

    let updateTodo = (id: string) => {
        setValue(
            value.map((item) =>
                item.id === id
                    ? { ...item, objValue: update, isEdited: !item.isEdited }
                    : item
            )
        );
    };

    const [isEnabled, setEnabled] = useState(false);
    const [name, setName] = useState("");
    // React.useEffect(() => console.log("data", isEnabled), [isEnabled]);
    // React.useEffect(() => console.log("data", name), [name]);

    let setControl = (title: any) => {
        // console.log(title);
        title === "On" ? setEnabled(true) : setEnabled(false);
        setName(title);
    };

    // ------------------------------------
    // ---------------> STAR  -------------
    // ------------------------------------
    // ------------------------------------
    const [star, setStar] = useState<StarType>(0);
    // useEffect(() => console.log("Stars", star), [star]);

    // ------------------------------------
    // ---------------> ACCORDION  --------
    // ------------------------------------
    // ------------------------------------
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    // useEffect(() => console.log("Accordion colapsed: ", accordionCollapsed), [accordionCollapsed]);

    return (
        <div className="App">
            <Example1 />

            <Example2 value={getValue} />
            <hr />
            <ul>
                {value.map((item) => {
                    if (item.isEdited) {
                        return (
                            <div key={item.id}>
                                <li>
                                    <input
                                        placeholder={item.objValue}
                                        onChange={(e) => {
                                            e.preventDefault();

                                            setUpdate(e.target.value);
                                        }}
                                        type="text"
                                    />
                                </li>
                                <input
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // editTodo(item.id);
                                        updateTodo(item.id);

                                        setUpdate("");
                                    }}
                                    value={"update"}
                                    type="button"
                                />
                            </div>
                        );
                    } else {
                        return (
                            <div key={item.id}>
                                <li>
                                    {item.objValue + " "}
                                    <input
                                        onClick={(e) => {
                                            e.preventDefault();
                                            deleteValue(item.id);
                                        }}
                                        value={"X"}
                                        type="button"
                                    />
                                </li>
                                <input
                                    onClick={() => {
                                        editTodo(item.id);
                                    }}
                                    value={"edit"}
                                    type="button"
                                />
                            </div>
                        );
                    }
                })}
            </ul>
            <hr />
            <hr />

            <Example3
                name={`${name === "On" ? "active" : "disabled"}`}
                activeAttr={isEnabled}
                title="On"
                isEnabled={setControl}
            />
            <Example3
                name={`${name === "Off" ? "active" : "disabled"}`}
                activeAttr={isEnabled}
                title="Off"
                isEnabled={setControl}
            />
            <CircleButton activeAttr={isEnabled} />
            <hr />
            <div>* * * * * * * * * * * *</div>
            <hr />

            <Stars value={star} setValue={setStar} />

            <hr />
            <div>* * * * * * * * * * * *</div>
            <hr />
            <Accordion collapsed={accordionCollapsed} setCollapsed={setAccordionCollapsed} />

            <hr />
            <div>* * * * * * * * * * * *</div>
            <hr />
        </div>
    );
}

export default App;
