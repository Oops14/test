import React from "react";
import { StarType } from "../App";

type StarPropsType = {
    value: number;
    setValue: (value: StarType) => void;
};

type StarItemType = {
    selected: boolean ;
    setValue: () => void;
};

export const Stars = (props: StarPropsType) => {
    return (
        <div>
            <StarItem selected={props.value > 0 } setValue={() => props.setValue(1)} />
            <StarItem selected={props.value > 1 } setValue={() => props.setValue(2)} />
            <StarItem selected={props.value > 2 } setValue={() => props.setValue(3)} />
            <StarItem selected={props.value > 3 } setValue={() => props.setValue(4)} />
            <StarItem selected={props.value > 4 } setValue={() => props.setValue(5)} />
        </div>
    );
};

const StarItem = (props: StarItemType) => {
    return (
        <span
            onClick={() => {
                props.setValue();
            }}
        >
            {props.selected ? <b> star </b> : " star "}
        </span>
    );
};
