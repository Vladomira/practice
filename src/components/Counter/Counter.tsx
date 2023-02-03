import { useSelector } from "react-redux";
import Controls from "./Controls";
import Value from "./Value";
import { getValue, getStep, actions } from "../../redux/counter";
import { useAppDispatch } from "../../redux/hooks";
import StepComponent from "./Step";

export default function Counter() {
    const value = useSelector(getValue);
    const step = useSelector(getStep);
    const dispatch = useAppDispatch();

    return (
        <div className="Counter">
            <Value value={value} />
            <Controls
                step={step}
                onIncrement={() => dispatch(actions.increment(step))}
                onDecrement={() => dispatch(actions.decrement(step))}
            />
            <StepComponent step={step} />
        </div>
    );
}
