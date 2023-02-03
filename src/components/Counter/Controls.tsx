type ControlsProps = {
    step: number;
    onIncrement: () => void;
    onDecrement: () => void;
};
const Controls = ({ step, onIncrement, onDecrement }: ControlsProps) => {
    return (
        <div className="Counter__controls">
            <button type="button" onClick={onDecrement}>
                Уменьшить на {step}
            </button>
            <button type="button" onClick={onIncrement}>
                Увеличить на {step}
            </button>
        </div>
    );
};

export default Controls;
