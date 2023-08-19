import { FC, useEffect } from 'react';
import { useField, FieldHookConfig, useFormikContext } from 'formik';
import { EMPTY_PASSWORD_LENGTH } from '@/constants';

type InputProps = FieldHookConfig<string> & {
  isSignUpPassInput?: boolean;
};

const CustomInput: FC<InputProps> = (props) => {
  const { type, placeholder, isSignUpPassInput } = props;

  const { setFieldTouched } = useFormikContext();

  const [field, meta] = useField(props);
  const { error, touched } = meta;

  const { value, name } = field;

  useEffect(() => {
    if (value.length > EMPTY_PASSWORD_LENGTH && !touched) {
      setFieldTouched(name, true, true).catch(() => {
        console.log('Error while setting field touched');
      });
    }
  }, [value]);

  return (
    <>
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        className={
          type === 'checkbox'
            ? 'rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none'
            : 'w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none'
        }
      />
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
};

export default CustomInput;
