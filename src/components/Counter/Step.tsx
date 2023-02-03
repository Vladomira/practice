import { useState } from "react";
import { actions } from "../../redux/counter";
import { useAppDispatch } from "../../redux/hooks";

type StepComponentProps = { step: number };

const StepComponent = ({ step }: StepComponentProps) => {
    const [stepValue, setStepValue] = useState<number>(0);
    const dispatch = useAppDispatch();

    return (
        <>
            <label htmlFor="name">Type please the number</label>
            <input
                type="number"
                id="name"
                name="name"
                min={0}
                value={stepValue}
                required
                onChange={({ target: { value } }) =>
                    setStepValue(Number(value))
                }
            />
            <button onClick={() => dispatch(actions.changeStep(stepValue))}>
                Choose
            </button>
        </>
    );
};
export default StepComponent;
