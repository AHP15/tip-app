import { ChangeEvent} from 'react';
import { useAppState, initialState } from '../../context';
import Input from '../Input';
import Tip from '../Tip';


const Form = () => {

    const { state, setState } = useAppState();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    return (
        <form>
            <Input
                options={{
                    type: 'number',
                    name: 'bill',
                    placeholder: '0',
                    value: state.bill,
                    onChange: handleChange
                }}
                icon_url=''
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
                    value: state.people,
                    onChange: handleChange
                }}
                icon_url=''
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
