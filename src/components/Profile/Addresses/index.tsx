import { Address } from '@commercetools/platform-sdk';
import { Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import {
  CSSProperties,
  ChangeEvent,
  FC,
  ReactElement,
  ReactNode,
  useRef,
  useState,
} from 'react';
import Select, { ActionMeta, SingleValue, StylesConfig } from 'react-select';
import { PostcodeName } from '../../../types';
import { postcodes } from '../../../validation/patterns';
import CustomBillingInput from '../../CustomInput/CustomBillingInput';
import {
  addressSchema,
  citySchema,
  countrySchema,
  getPostcodeSchema,
} from '../../../validation/schemas';

interface IAddressesProps {
  inEditMode: boolean;
  addresses: IAddressesListProps;
  version: number;
}

export interface IAddressesListProps {
  addresses: Address[];
  billingAddressIds: string[];
  defaultBillingAddressId: string;
  defaultShippingAddressId: string;
  shippingAddressIds: string[];
}

const postcodeKeys = Object.keys(postcodes);

const dot = {
  alignItems: 'center',
  display: 'flex',
  alignContent: 'center',
  ':before': {
    backgroundColor: '#FF8B00',
    color: '#000',
    borderRadius: '4px',
    content: '"Default"',
    display: 'block',
    verticalAlign: 'middle',
    marginRight: '8px',
    padding: '0 2px',
    height: '24px',
  },
};

export interface AddressOption {
  readonly value: string;
  readonly label: string;
  readonly address?: Address;
  readonly isDefault: boolean;
}

export interface GroupedOption {
  readonly label: string;
  readonly options: readonly AddressOption[];
}

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles: CSSProperties = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = (data: GroupedOption): ReactElement => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const selectStyles: StylesConfig<AddressOption, false, GroupedOption> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'var(--background-main)',
    border: 'solid 1px gray',
  }),
  singleValue: (styles, { data }) => {
    const { isDefault } = data;

    return { ...styles, ...(isDefault ? dot : ''), color: 'white' };
  },
  option: (styles, { data }) => {
    const { isDefault } = data;

    return {
      ...styles,
      ...(isDefault ? dot : ''),
    };
  },
};

const initialValues: Address = {
  country: 'US',
  streetName: '',
  city: '',
  postalCode: '',
};

const Addresses: FC<IAddressesProps> = ({
  addresses,
  inEditMode,
  version,
}: IAddressesProps) => {
  console.log(version);

  const [country, setCountry] = useState<PostcodeName>('US');
  const countryRef = useRef<HTMLSelectElement>(null);
  const addressTypeRef = useRef<HTMLSelectElement>(null);
  const defaultAddressRef = useRef<HTMLInputElement>(null);

  const validationSchema = Yup.object({
    country: countrySchema,
    streetName: addressSchema,
    city: citySchema,
    postalCode: getPostcodeSchema(country),
  });

  const getAddrById = (id: string): Address | undefined =>
    addresses.addresses.find((addr) => addr.id === id);

  const groupedOptions: readonly GroupedOption[] = [
    {
      label: 'Actions',
      options: [
        {
          value: 'ship',
          address: undefined,
          label: 'Add new shipping address',
          isDefault: false,
        },
        {
          value: 'bill',
          address: undefined,
          label: 'Add new billing address',
          isDefault: false,
        },
      ],
    },
    {
      label: 'Shipping addresses',
      options: addresses.shippingAddressIds.map((id) => {
        const addrInfo = getAddrById(id);

        return {
          value: id,
          address: addrInfo,
          label: `${addrInfo?.country} ${addrInfo?.postalCode} ${addrInfo?.city} ${addrInfo?.streetName}`,
          isDefault: addrInfo?.id === addresses.defaultShippingAddressId,
        };
      }),
    },
    {
      label: 'Billing addresses',
      options: addresses.billingAddressIds.map((id) => {
        const addrInfo = getAddrById(id);

        return {
          value: id,
          address: addrInfo,
          label: `${addrInfo?.country} ${addrInfo?.postalCode} ${addrInfo?.city} ${addrInfo?.streetName}`,
          isDefault: addrInfo?.id === addresses.defaultBillingAddressId,
        };
      }),
    },
  ];

  const onAddressChange = (
    newValue: SingleValue<AddressOption>,
    actionMeta: ActionMeta<AddressOption>,
    setFieldValue: FormikProps<Address>['setFieldValue']
  ): void => {
    console.log(newValue, actionMeta);
    const id = newValue?.value;

    const isBillingAddress = !!addresses.billingAddressIds.find(
      (addr) => addr === id
    );
    const isShippingAddress = !!addresses.shippingAddressIds.find(
      (addr) => addr === id
    );

    console.log(isBillingAddress, isShippingAddress);

    let addressType = '';

    if (isBillingAddress) {
      addressType = 'billing';
    }

    if (isShippingAddress) {
      addressType = 'shipping';
    }

    if (isBillingAddress && isShippingAddress) {
      addressType = 'both';
    }

    console.log(addressType);

    if (newValue?.address) {
      // eslint-disable-next-line no-void
      void setFieldValue('addressType', addressType);

      if (addressTypeRef.current) {
        addressTypeRef.current.value = addressType;
      }
      // eslint-disable-next-line no-void
      void setFieldValue('country', newValue?.address.country);

      if (countryRef.current) {
        countryRef.current.value = newValue?.address.country;
      }
      // eslint-disable-next-line no-void
      void setFieldValue('streetName', newValue?.address.streetName);
      // eslint-disable-next-line no-void
      void setFieldValue('city', newValue?.address.city);
      // eslint-disable-next-line no-void
      void setFieldValue('postalCode', newValue?.address.postalCode);
      // eslint-disable-next-line no-void
      void setFieldValue('defaultAddress', newValue?.isDefault);

      if (defaultAddressRef.current) {
        defaultAddressRef.current.checked = newValue?.isDefault;
      }
    }
  };

  const handleSelectCountry = (
    e: ChangeEvent<HTMLSelectElement>,
    values: Address,
    resetForm: FormikProps<Address>['resetForm'],
    setFieldValue: FormikProps<Address>['setFieldValue']
  ): void => {
    setCountry(e.target.value);
    resetForm({
      values: {
        ...values,
        city: '',
        streetName: '',
        postalCode: '',
      },
    });
    // eslint-disable-next-line no-void
    void setFieldValue('country', e.target.value);
  };

  const handleDefault = (
    e: ChangeEvent<HTMLInputElement>,
    handleChange: FormikProps<Address>['handleChange']
  ): void => {
    console.log(e);
    handleChange(e);
  };

  const handleSubmit = (values: Address): void => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        resetForm,
        setFieldValue,
        handleChange,
        touched,
        errors,
      }): ReactNode => (
        <Form>
          <div className="mt-4 mb-4">
            <h2 className="my-2 font-bold text-white">Select address:</h2>
            <Select<AddressOption, false, GroupedOption>
              styles={selectStyles}
              options={groupedOptions}
              formatGroupLabel={formatGroupLabel}
              onChange={(newValue, actionMeta): void =>
                onAddressChange(newValue, actionMeta, setFieldValue)
              }
            />
            <h2 className="mt-4 mb-2 font-bold text-white">Address info:</h2>
            <div className="mb-4">
              <select
                id="addressType"
                disabled={!inEditMode}
                ref={addressTypeRef}
                name="addressType"
                className="w-full p-2 text-white border rounded-md border-neutral-800 bg-background-main focus:border-neutral-500 focus:outline-none"
              >
                <option value="" disabled>
                  Choose address type...
                </option>
                <option value="shipping">Shipping</option>
                <option value="billing">Billing</option>
                <option value="both">Billing and shipping</option>
              </select>
            </div>
            <div className="mb-4">
              <select
                id="country"
                disabled={!inEditMode}
                name="country"
                ref={countryRef}
                defaultValue="US"
                placeholder="Select a country..."
                onChange={(e): void =>
                  handleSelectCountry(e, values, resetForm, setFieldValue)
                }
                className="w-full p-2 text-white border rounded-md border-neutral-800 bg-background-main focus:border-neutral-500 focus:outline-none"
              >
                <option value="" disabled hidden>
                  Choose a country...
                </option>
                {postcodeKeys.map((key) => (
                  <option key={key} value={key}>
                    {postcodes[key].label}
                  </option>
                ))}
              </select>
              {touched.country && errors.country && (
                <div className="text-rose-500">{errors.country}</div>
              )}
            </div>
            <div className="mb-4">
              <CustomBillingInput
                name="streetName"
                disabled={!inEditMode}
                type="text"
                placeholder="Street Address"
                isWhiteSpacesAllowed
              />
            </div>
            <div className="mb-4">
              <CustomBillingInput
                name="city"
                disabled={!inEditMode}
                type="text"
                placeholder="City / Town"
                isWhiteSpacesAllowed
              />
            </div>
            <div className="mb-4">
              <CustomBillingInput
                name="postalCode"
                type="text"
                disabled={!inEditMode}
                placeholder="Postcode / ZIP"
                isWhiteSpacesAllowed
              />
            </div>
            <div className="mb-4">
              <label
                className={inEditMode ? 'text-white' : 'text-neutral-400'}
                htmlFor="defaultAddress"
              >
                <input
                  type="checkbox"
                  name="defaultAddress"
                  id="defaultAddress"
                  disabled={!inEditMode}
                  defaultChecked={false}
                  defaultValue=""
                  ref={defaultAddressRef}
                  onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                    handleDefault(e, handleChange)
                  }
                  className="mr-2"
                />
                Set address as default
              </label>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Addresses;
