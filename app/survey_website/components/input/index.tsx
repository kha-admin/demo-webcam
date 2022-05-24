import React from 'react';

export interface IProps {
    type?: React.HTMLInputTypeAttribute;
    value: string;
    label?: string;
    placeholder?: string;
    message?: string;
    maxLength?: number;
    disabled?: boolean; // no background
    ghost?: boolean; // no background
    success?: boolean; // success color
    error?: boolean; // error color
    showCount?: boolean;
    setValue: React.Dispatch<string>;
}

const Input: React.FC<IProps> = ({
    type = 'text',
    value = '',
    label,
    placeholder,
    message,
    maxLength,
    disabled,
    ghost,
    success,
    error,
    showCount,
    setValue,
}) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (type === 'number' && !!maxLength && e.target.value.length > maxLength) {
            return false;
        }

        setValue(e.target.value);
    };

    return (
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>

            <input
                type={type}
                value={value}
                placeholder={placeholder}
                maxLength={maxLength}
                disabled={disabled}
                className={[
                    'input w-full max-w-xs',
                    ghost ? 'input-ghost' : 'input-bordered',
                    success ? 'input-success' : '',
                    error ? 'input-error' : '',
                ].join(' ')}
                onChange={handleChange}
            />

            <label className="label">
                <span className="label-text-alt text-base-300">{message}</span>
                {showCount && (
                    <span className="label-text-alt text-base-300">{`${value.length} ${
                        maxLength ? `/ ${maxLength}` : ''
                    }`}</span>
                )}
            </label>
        </div>
    );
};

export default Input;