import { FieldHookConfig, useField, useFormikContext } from 'formik';
import { FC, useEffect } from 'react';
import { EMPTY_PASSWORD_LENGTH } from '@/constants';

type InputProps = FieldHookConfig<string> & {
  isBillingIdenticalAsShipping?: boolean;
  isWhiteSpacesAllowed?: boolean;
  isTrailingWhiteSpacesAllowed?: boolean;
};

const CustomBillingInput: FC<InputProps> = (props) => {
  const {
    type,
    placeholder,
    isWhiteSpacesAllowed,
    isTrailingWhiteSpacesAllowed,
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
    if (isBillingIdenticalAsShipping) {
      switch (name) {
        case 'billingAddress':
          // eslint-disable-next-line no-void
          void setFieldValue('shippingAddress', value);
          break;
        case 'billingCity':
          setFieldValue('shippingCity', value).catch(() => {
            console.log('Error while setting value');
          });
          break;
        case 'billingPostcode':
          setFieldValue('shippingPostcode', value).catch(() => {
            console.log('Error while setting value');
          });
          break;
        default:
          break;
      }
    }
  }, [value]);

  const handleOnChangeBillingAddress = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (e.target.value === ' ' && !isTrailingWhiteSpacesAllowed) return;

    const withoutSpaces = e.target.value.replace(/\s/g, '');
    setValue(isWhiteSpacesAllowed ? e.target.value : withoutSpaces).catch(
      () => {
        console.log('Error while setting value');
      }
    );
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
  isTrailingWhiteSpacesAllowed: false,
};

export default CustomBillingInput;
