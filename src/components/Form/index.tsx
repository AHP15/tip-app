import { ChangeEvent} from 'react';
import { useAppState, initialState } from '../../context';
import Input from '../Input';
import Tip from '../Tip';

import dollar from '../../assets/dollar.png';
import person from '../../assets/person.png';

const Form = () => {

    const { state, setState } = useAppState();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    return (
        <form style={{ 'margin': '10px' }}>
            <Input
                options={{
                    type: 'number',
                    name: 'bill',
                    placeholder: '0',
                    dir: 'rtl',
                    value: state.bill,
                    onChange: handleChange
                }}
                icon_url={dollar}
                label='Bill'
                validation={{
                    valid: state.bill === initialState.bill || Number(state.bill) > 0,
                    message: "Can't be zero"
                }}
            />
            <p>Select Tip%</p>
            <Tip />
            <Input
                options={{
                    type: 'number',
                    name: 'people',
                    placeholder: '0',
                    dir: 'rtl',
                    value: state.people,
                    onChange: handleChange
                }}
                icon_url={person}
                label='Number of People'
                validation={{
                    valid: state.people === initialState.people || Number(state.people) > 0,
                    message: "Can't be zero"
                }}
            />
        </form>
    );
}

export default Form;
