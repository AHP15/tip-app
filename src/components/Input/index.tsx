import React from 'react';

import styles from './Input.module.css';

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
    :{ options: Options,
       icon_url: string,
       label: string, 
       validation: Validation
    }
) => {
    return (
        <div className={styles.input_container}>

            <div className={styles.input_head}>
                <label>{label}</label>
                {!validation.valid 
                ? <p data-testid={`error-${options.name}`} style={{ 'color': 'red' }}>
                    {validation.message}
                </p> : null}
            </div>

            <div className={styles[`${validation.valid ? 'input_body':'input_body_invalid'}`]}>
              {icon_url !== '' && <img src={icon_url} alt={options.name} />}
              <input data-testid={`${options.name}`} {...options} />
            </div>
        </div>
    );
}

export default Input;
