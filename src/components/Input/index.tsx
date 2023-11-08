import React from 'react';

type Options = {
    type: string,
    name: string,
    value: number | string,
    placeholder: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
};

type Validation = {
    valid: boolean,
    message: string,
};

const Input = (
    { options, icon_url, label, validation }
    :{ options: Options,
       icon_url: string,
       label: string, 
       validation: Validation
    }
) => {
    return (
        <div>
            {!validation.valid ?  <p data-testid={`error-${options.name}`}>
                {validation.message}
            </p>: null}
            <label>{label}</label>
            <img src={icon_url} alt={options.name} />
            <input data-testid={`${options.name}`} {...options} />
        </div>
    );
}

export default Input;
