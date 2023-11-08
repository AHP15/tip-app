import { ChangeEvent, useState } from 'react';
import { initialState, useAppState } from '../../context';
import Input from '../Input';
import TipButton from '../TipButton';

const tips = [5, 10, 15, 25, 50];
const Tip = () => {

    const { state, setState } = useAppState();
    const [custom, setCustom] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleClick = (tip: number) => {
        setCustom(false);
        setState(prev => ({ ...prev, tip }));
    }

    return (
        <div>
            {
                tips.map(tip => (
                    <TipButton key={tip} tip={tip} setState={handleClick} />
                ))
            }
            {
                custom ? (
                    <Input
                        options={{
                            type: 'number',
                            name: 'tip',
                            placeholder: '0',
                            value: state.tip,
                            onChange: handleChange
                        }}
                        icon_url=''
                        label=''
                        validation={{
                            valid: state.tip === initialState.tip || Number(state.tip) > 0,
                            message: "Can't be zero"
                        }}
                    />
                ) : (
                    <button type="button" onClick={() => setCustom(true)}>Custom</button>
                )
            }
        </div>
    );
};

export default Tip;
