import { FC, useEffect, useState } from 'react';
import { useField, FieldHookConfig, useFormikContext } from 'formik';
import { EMPTY_PASSWORD_LENGTH } from '@/constants';
import EyePassVisible from '@/components/ui/icons/EyePassVisible';
import EyePass from '@/components/ui/icons/EyePass';

type InputProps = FieldHookConfig<string> & {
  isSignUpPassInput?: boolean;
  isWhiteSpacesAllowed?: boolean;
};

const CustomInput: FC<InputProps> = (props) => {
  const [visionPass, setVisionPass] = useState<boolean>(false);
  const { type, placeholder, isSignUpPassInput, isWhiteSpacesAllowed } = props;

  const { setFieldTouched } = useFormikContext();

  const [field, meta, helpers] = useField(props);

  const { setValue } = helpers;
  const { error, touched } = meta;
  const { value, name } = field;

  useEffect(() => {
    if (value.length > EMPTY_PASSWORD_LENGTH && !touched) {
      setFieldTouched(name, true, true).catch(() => {
        console.log('Error while setting field touched');
      });
    }
  }, [value]);

  const toggleVisionPass = (): void => {
    setVisionPass(!visionPass);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === ' ') return;

    const withoutSpaces = e.target.value.replace(/\s/g, '');
    setValue(isWhiteSpacesAllowed ? e.target.value : withoutSpaces).catch(() => {
      console.log('Error while setting value');
    });
  };

  return (
    <>
      <input
        {...field}
        type={visionPass ? 'text' : type}
        placeholder={placeholder}
        className={
          type === 'checkbox'
            ? 'rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none'
            : 'w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none'
        }
        onChange={handleChange}
      />
      {type === 'password' && (
        <button
          type="button"
          className={`absolute right-3 top-3 text-white transition-transform ease-in-out ${
            visionPass ? 'rotate-0' : 'rotate-180'
          }`}
          onClick={toggleVisionPass}
        >
          {visionPass ? <EyePassVisible /> : <EyePass />}
        </button>
      )}
      {!isSignUpPassInput && error ? (
        <p className="text-red-500">{touched && error}</p>
      ) : (
        ''
      )}
    </>
  );
};

CustomInput.defaultProps = {
  isSignUpPassInput: false,
  isWhiteSpacesAllowed: false,
};

export default CustomInput;
