
type CircleButtonPropsType = {
    activeAttr: boolean;
}

export const CircleButton = (props: CircleButtonPropsType) => {
    return (
        <div className="on-off-buttons">
            <button className={`${ props.activeAttr ? "button-circle active" : "button-circle"}`}></button>
        </div>
    );
};
