type ValueProp = {
    value: number;
};
const Value = ({ value }: ValueProp) => (
    <span className="Counter__value">{value}</span>
);

export default Value;
