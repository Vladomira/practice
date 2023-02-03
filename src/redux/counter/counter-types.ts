export interface CounterAction {
    type: string;
    payload: number;
}

export interface CounterState {
    counter: {
        value: number;
        step: number;
    };
}
