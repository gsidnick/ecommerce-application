import { useField, FieldHookConfig, useFormikContext } from 'formik';
import { FC, useEffect, useState } from 'react';
import { EMPTY_PASSWORD_LENGTH } from '@/constants';
import EyePassVisible from '@/components/ui/icons/EyePassVisible';
import EyePass from '@/components/ui/icons/EyePass';
import ValidationPrompt from '@/components/ValidationPrompt';

type InputProps = FieldHookConfig<string> & {
  isSignUpPassInput?: boolean;
  isWhiteSpacesAllowed?: boolean;
  isTrailingWhiteSpacesAllowed?: boolean;
  disabled?: boolean;
  label?: string;
};

const CustomInput: FC<InputProps> = (props) => {
  const [visionPass, setVisionPass] = useState<boolean>(false);
  const {
    label,
    type,
    placeholder,
    isSignUpPassInput,
    isWhiteSpacesAllowed,
    isTrailingWhiteSpacesAllowed,
    disabled,
  } = props;

  const { setFieldTouched } = useFormikContext();

  const [field, meta, helpers] = useField(props);

  const { setValue } = helpers;
  const { error, touched } = meta;

  const { value, name } = field;

  useEffect(() => {
    if (value?.length > EMPTY_PASSWORD_LENGTH && !touched) {
      setFieldTouched(name, true, true).catch(() => {
        console.log('Error while setting field touched');
      });
    }
  }, [value]);

  const toggleVisionPass = (): void => {
    setVisionPass(!visionPass);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === ' ' && !isTrailingWhiteSpacesAllowed) {
      return;
    }

    const withoutSpaces = e.target.value.replace(/\s/g, '');
    const resultValue = isWhiteSpacesAllowed ? e.target.value : withoutSpaces;
    setValue(resultValue).catch(() => {
      console.log('Error while setting value');
    });
  };

  const makeClassName = (): string => {
    let result = '';

    switch (type) {
      case 'checkbox':
        result =
          'rounded-md border border-neutral-800 bg-background-main p-2 focus:border-neutral-500 focus:outline-none';
        break;
      case 'password':
        result =
          'w-full rounded-md border border-neutral-800 bg-background-main p-2 focus:border-neutral-500 focus:outline-none pr-11 pl-3';
        break;
      default:
        result =
          'w-full rounded-md border border-neutral-800 bg-background-main p-2 focus:border-neutral-500 focus:outline-none pr-3 pl-3';
        break;
    }

    const disabledClass = disabled ? 'text-gray-600' : 'text-white';

    return `${result} ${disabledClass}`;
  };
  return (
    <>
      {label && (
        <label className="text-sm text-white" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        {...field}
        type={visionPass ? 'text' : type}
        placeholder={placeholder}
        className={makeClassName()}
        onChange={handleChange}
        disabled={disabled}
      />
      {type === 'password' && !disabled && (
        <button
          type="button"
          className={`absolute ${
            label ? 'right-3 top-8' : 'right-3 top-3'
          } text-white transition-transform ease-in-out ${
            visionPass ? 'rotate-0' : 'rotate-180'
          }`}
          onClick={toggleVisionPass}
        >
          {visionPass ? <EyePassVisible /> : <EyePass />}
        </button>
      )}
      {!isSignUpPassInput && error && !disabled ? (
        <p className="text-red-500">{touched && error}</p>
      ) : (
        ''
      )}
      {isSignUpPassInput && touched && !disabled && (
        <ValidationPrompt validation={value} />
      )}
    </>
  );
};

CustomInput.defaultProps = {
  isSignUpPassInput: false,
  isWhiteSpacesAllowed: false,
  isTrailingWhiteSpacesAllowed: false,
  disabled: false,
  label: '',
};

export default CustomInput;
