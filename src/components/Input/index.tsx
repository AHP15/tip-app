import React from 'react';

type Options = {
    type: string,
    name: string,
    value: string | number ,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
};

const Input = (
    { options, icon_url, label }
    :{ options: Options, icon_url: string, label: string }
) => {
    return (
        <div>
            <label>{label}</label>
            <img src={icon_url} alt={options.name} />
            <input {...options} />
        </div>
    );
}

export default Input;
