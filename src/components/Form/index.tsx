import { ChangeEvent} from 'react';
import { useAppState } from '../../context';
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
                    value: state.bill,
                    onChange: handleChange
                }}
                icon_url=''
                label='Bill'
            />
            <p>Select Tip%</p>
            <Tip />
            <Input
                options={{
                    type: 'number',
                    name: 'people',
                    value: state.people,
                    onChange: handleChange
                }}
                icon_url=''
                label='Number of People'
            />
        </form>
    );
}

export default Form;
