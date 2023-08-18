import { FC } from 'react';
import { useField, FieldHookConfig } from 'formik';

const CustomInput: FC<FieldHookConfig<string>> = (props) => {
  const { type, placeholder } = props;

  const [field] = useField(props);
  // const [field, meta] = useField(props);
  // const { error, touched } = meta;
  return (
    <>
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
      />
      {/* {error ? <p className='text-red-500'>{touched && error}</p> : ''} */}
    </>
  );
};

export default CustomInput;
