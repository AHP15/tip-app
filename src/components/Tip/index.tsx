import { ChangeEvent, useState } from 'react';
import { useAppState } from '../../context';
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
                            value: state.tip,
                            onChange: handleChange
                        }}
                        icon_url=''
                        label=''
                    />
                ) : (
                    <button type="button" onClick={() => setCustom(true)}>Custom</button>
                )
            }
        </div>
    );
};

export default Tip;
