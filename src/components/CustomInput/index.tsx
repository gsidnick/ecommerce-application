import { FC } from 'react';
import { useField, FieldHookConfig } from 'formik';

type InputProps = FieldHookConfig<string> & {
  isSignUpPassInput?: boolean;
};

const CustomInput: FC<InputProps> = (props) => {
  const { type, placeholder, isSignUpPassInput } = props;

  const [field, meta] = useField(props);
  const { error, touched } = meta;
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
