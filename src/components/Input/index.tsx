import React from 'react';

type Options = {
    type: string,
    name: string,
    value: number | string,
    placeholder: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
    dir: string
};

type Validation = {
    valid: boolean,
    message: string,
};

const Input = (
    { options, icon_url, label, validation }
        : {
            options: Options,
            icon_url: string,
            label: string,
            validation: Validation
        }
) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between items-center">
                <label className="text-gray-600 font-semibold">{label}</label>
                {!validation.valid
                    ? <p data-testid={`error-${options.name}`} className="text-red-500 text-sm">
                        {validation.message}
                    </p> : null}
            </div>

            <div className={`flex items-center border rounded-md p-2 ${validation.valid ? 'border-gray-300' : 'border-red-500'}`}>
                {icon_url !== '' && <img src={icon_url} alt={options.name} className="w-5 h-5 mr-2" />}
                <input className="w-full text-right outline-none" data-testid={`${options.name}`} {...options} />
            </div>
        </div>
    );
}

export default Input;

