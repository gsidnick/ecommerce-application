import { FC, useEffect } from 'react';
import { useField, FieldHookConfig, useFormikContext } from 'formik';
import { EMPTY_PASSWORD_LENGTH } from '@/constants';

type InputProps = FieldHookConfig<string> & {
  isBillingIdenticalAsShipping?: boolean;
  isWhiteSpacesAllowed?: boolean;
};

const CustomBillingInput: FC<InputProps> = (props) => {
  const {
    type,
    placeholder,
    isWhiteSpacesAllowed,
    isBillingIdenticalAsShipping,
  } = props;

  const { setFieldTouched, setFieldValue } = useFormikContext();

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

  const handleOnChangeBillingAddress = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const withoutSpaces = e.target.value.replace(/\s/g, '');
    setValue(isWhiteSpacesAllowed ? e.target.value : withoutSpaces).catch(
      () => {
        console.log('Error while setting value');
      }
    );
    if (isBillingIdenticalAsShipping) {
      switch (name) {
        case 'billingAddress':
          setFieldValue('shippingAddress', e.target.value).catch(() => {
            console.log('Error while setting value');
          });
          break;
        case 'billingCity':
          setFieldValue('shippingCity', e.target.value).catch(() => {
            console.log('Error while setting value');
          });
          break;
        case 'billingPostcode':
          setFieldValue('shippingPostcode', e.target.value).catch(() => {
            console.log('Error while setting value');
          });
          break;
        default:
          break;
      }
    }
  };

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
        onChange={handleOnChangeBillingAddress}
      />
      {error ? <p className="text-red-500">{touched && error}</p> : ''}
    </>
  );
};

CustomBillingInput.defaultProps = {
  isBillingIdenticalAsShipping: false,
  isWhiteSpacesAllowed: true,
};

export default CustomBillingInput;
