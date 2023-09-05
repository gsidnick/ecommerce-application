import {
  Address,
  MyCustomerAddAddressAction,
  MyCustomerAddBillingAddressIdAction,
  MyCustomerAddShippingAddressIdAction,
  MyCustomerChangeAddressAction,
  MyCustomerRemoveAddressAction,
  MyCustomerSetDefaultBillingAddressAction,
  MyCustomerSetDefaultShippingAddressAction,
} from '@commercetools/platform-sdk';
import { Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import {
  CSSProperties,
  ChangeEvent,
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import Select, { SingleValue, StylesConfig } from 'react-select';
import { HttpErrorType } from '@commercetools/sdk-client-v2';
import { PostcodeName } from '../../../types';
import { postcodes } from '../../../validation/patterns';
import CustomBillingInput from '../../CustomInput/CustomBillingInput';
import {
  addressSchema,
  citySchema,
  countrySchema,
  getPostcodeSchema,
} from '../../../validation/schemas';
import Loader from '../../ui/loader/Loader';
import CustomerController from '../../../api/controllers/CustomerController';

interface IAddressesProps {
  inEditMode: boolean;
  addresses: IAddressesListProps;
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

interface IAddressProps {
  id: string;
  addressId: string;
  addressType: string;
  country: string;
  defaultAddress: boolean;
  streetName: string;
  city: string;
  postalCode: string;
}

const initialValues: IAddressProps = {
  id: '',
  addressId: '',
  addressType: '',
  country: 'US',
  defaultAddress: false,
  streetName: '',
  city: '',
  postalCode: '',
};

const Addresses: FC<IAddressesProps> = ({
  addresses,
  inEditMode,
}: IAddressesProps) => {
  const [country, setCountry] = useState<PostcodeName>('US');
  const [isLoading, setIsLoading] = useState(false);
  const [addingAddress, setAddingAddress] = useState(true);
  const countryRef = useRef<HTMLSelectElement>(null);
  const addressTypeRef = useRef<HTMLSelectElement>(null);
  const defaultAddressRef = useRef<HTMLInputElement>(null);
  const [selectAddressValue, setSelectAddressValue] =
    useState<SingleValue<AddressOption>>(null);
  const addressIdRef = useRef<HTMLInputElement>(null);
  const [groupedOptions, setGroupedOptions] = useState<GroupedOption[]>();
  const [newAddresses, setNewAddresses] = useState(addresses);

  const validationSchema = Yup.object({
    country: countrySchema,
    streetName: addressSchema,
    city: citySchema,
    postalCode: getPostcodeSchema(country),
  });

  const getAddrById = (id: string): Address | undefined =>
    newAddresses.addresses.find((addr) => addr.id === id);

  useEffect(() => {
    setGroupedOptions([
      {
        label: 'Actions',
        options: [
          {
            value: 'shipping',
            address: undefined,
            label: 'Add new shipping address',
            isDefault: false,
          },
          {
            value: 'billing',
            address: undefined,
            label: 'Add new billing address',
            isDefault: false,
          },
          {
            value: 'both',
            address: undefined,
            label: 'Add new billing and shipping address',
            isDefault: false,
          },
        ],
      },
      {
        label: 'Shipping addresses',
        options: newAddresses.shippingAddressIds.map((id) => {
          const addrInfo = getAddrById(id);

          return {
            value: id,
            address: addrInfo,
            label: `${addrInfo?.country} ${addrInfo?.postalCode} ${addrInfo?.city} ${addrInfo?.streetName}`,
            isDefault: addrInfo?.id === newAddresses.defaultShippingAddressId,
          };
        }),
      },
      {
        label: 'Billing addresses',
        options: newAddresses.billingAddressIds.map((id) => {
          const addrInfo = getAddrById(id);

          return {
            value: id,
            address: addrInfo,
            label: `${addrInfo?.country} ${addrInfo?.postalCode} ${addrInfo?.city} ${addrInfo?.streetName}`,
            isDefault: addrInfo?.id === newAddresses.defaultBillingAddressId,
          };
        }),
      },
    ]);
  }, [newAddresses]);

  const onAddressChange = (
    newValue: SingleValue<AddressOption>,
    setFieldValue: FormikProps<Address>['setFieldValue']
  ): void => {
    if (!newValue) {
      return;
    }

    setSelectAddressValue(newValue);
    const id = newValue?.value;

    const isBillingAddress = !!addresses.billingAddressIds.find(
      (addr) => addr === id
    );
    const isShippingAddress = !!addresses.shippingAddressIds.find(
      (addr) => addr === id
    );

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

    if (['shipping', 'billing', 'both'].includes(id)) {
      addressType = id;
    }

    setAddingAddress(['shipping', 'billing', 'both'].includes(newValue.value));

    if (newValue) {
      void setFieldValue('addressId', newValue.value, false);

      if (addressIdRef.current) {
        addressIdRef.current.value = newValue.value;
      }

      if (
        ['billing', 'shipping', 'both'].includes(newValue.value) &&
        addressTypeRef.current
      ) {
        addressTypeRef.current.value = newValue.value;
        void setFieldValue('addressType', addressType);
      }
    }

    if (newValue?.address) {
      void setFieldValue('addressType', addressType);

      if (addressTypeRef.current) {
        addressTypeRef.current.value = addressType;
      }

      void setFieldValue('country', newValue?.address.country);

      if (countryRef.current) {
        countryRef.current.value = newValue?.address.country;
      }

      void setFieldValue('streetName', newValue?.address.streetName);
      void setFieldValue('city', newValue?.address.city);
      void setFieldValue('postalCode', newValue?.address.postalCode);
    }

    void setFieldValue('defaultAddress', newValue?.isDefault);

    if (defaultAddressRef.current) {
      defaultAddressRef.current.checked = newValue?.isDefault ?? false;
    }
  };

  const handleSelectCountry = (
    e: ChangeEvent<HTMLSelectElement>,
    values: IAddressProps,
    resetForm: FormikProps<IAddressProps>['resetForm'],
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
    handleChange(e);
  };

  const handleSubmit = async (values: IAddressProps): Promise<void> => {
    setIsLoading(true);

    const customerController = new CustomerController();

    let currentVersion;

    if (['shipping', 'billing', 'both'].includes(values.addressId)) {
      const addAddress: MyCustomerAddAddressAction = {
        action: 'addAddress',
        address: {
          country: values.country,
          city: values.city,
          streetName: values.streetName,
          postalCode: values.postalCode,
        },
      };

      currentVersion = (await customerController.getCustomer()).body?.version;

      if (currentVersion) {
        const response = await customerController.updateCustomer({
          version: currentVersion,
          actions: [addAddress],
        });

        const LAST_INDEX = -1;

        const newAddressId = response.body?.addresses.at(LAST_INDEX)?.id;
        const isDefault = values.defaultAddress;

        const actionsList = [];

        if (['billing', 'both'].includes(values.addressType)) {
          const setBillingAddress: MyCustomerAddBillingAddressIdAction = {
            action: 'addBillingAddressId',
            addressId: newAddressId,
          };

          actionsList.push(setBillingAddress);

          if (isDefault) {
            const setDefaultBillingAddress: MyCustomerSetDefaultBillingAddressAction =
              {
                action: 'setDefaultBillingAddress',
                addressId: newAddressId,
              };

            actionsList.push(setDefaultBillingAddress);
          }
        }

        if (['shipping', 'both'].includes(values.addressType)) {
          const setShippingAddress: MyCustomerAddShippingAddressIdAction = {
            action: 'addShippingAddressId',
            addressId: newAddressId,
          };

          actionsList.push(setShippingAddress);

          if (isDefault) {
            const setDefaultShippingAddress: MyCustomerSetDefaultShippingAddressAction =
              {
                action: 'setDefaultShippingAddress',
                addressId: newAddressId,
              };

            actionsList.push(setDefaultShippingAddress);
          }
        }

        currentVersion = (await customerController.getCustomer()).body?.version;

        if (currentVersion) {
          const addAddressResponse = await customerController.updateCustomer({
            version: currentVersion,
            actions: actionsList,
          });

          toast.success('Add address was successful');

          setIsLoading(false);

          if (addAddressResponse.body) {
            setNewAddresses({
              addresses: addAddressResponse.body.addresses,
              billingAddressIds:
                addAddressResponse.body.billingAddressIds ?? [],
              shippingAddressIds:
                addAddressResponse.body.shippingAddressIds ?? [],
              defaultBillingAddressId:
                addAddressResponse.body.defaultBillingAddressId ?? '',
              defaultShippingAddressId:
                addAddressResponse.body.defaultShippingAddressId ?? '',
            });
          }
        }
      }

      return;
    }

    const changeAddress: MyCustomerChangeAddressAction = {
      action: 'changeAddress',
      addressId: values.addressId,
      address: {
        country: values.country,
        city: values.city,
        streetName: values.streetName,
        postalCode: values.postalCode,
      },
    };

    currentVersion = (await customerController.getCustomer()).body?.version;

    if (currentVersion) {
      const response = await customerController.updateCustomer({
        version: currentVersion,
        actions: [changeAddress],
      });

      const actionsList = [];

      const wasAddressDefault = !!(
        response.body?.defaultBillingAddressId === values.addressId ||
        response.body?.defaultShippingAddressId === values.addressId
      );

      const isDefault = values.defaultAddress;

      if (['billing', 'both'].includes(values.addressType)) {
        const setBillingAddress: MyCustomerAddBillingAddressIdAction = {
          action: 'addBillingAddressId',
          addressId: values.addressId,
        };

        actionsList.push(setBillingAddress);

        if (isDefault) {
          const setDefaultBillingAddress: MyCustomerSetDefaultBillingAddressAction =
            {
              action: 'setDefaultBillingAddress',
              addressId: values.addressId,
            };

          actionsList.push(setDefaultBillingAddress);
        }

        if (wasAddressDefault && !isDefault) {
          const setDefaultBillingAddress: MyCustomerSetDefaultBillingAddressAction =
            {
              action: 'setDefaultBillingAddress',
              addressId: undefined,
            };

          actionsList.push(setDefaultBillingAddress);
        }
      }

      if (['shipping', 'both'].includes(values.addressType)) {
        const setShippingAddress: MyCustomerAddShippingAddressIdAction = {
          action: 'addShippingAddressId',
          addressId: values.addressId,
        };

        actionsList.push(setShippingAddress);

        if (isDefault) {
          const setDefaultShippingAddress: MyCustomerSetDefaultShippingAddressAction =
            {
              action: 'setDefaultShippingAddress',
              addressId: values.addressId,
            };

          actionsList.push(setDefaultShippingAddress);
        }

        if (wasAddressDefault && !isDefault) {
          const setDefaultShippingAddress: MyCustomerSetDefaultShippingAddressAction =
            {
              action: 'setDefaultShippingAddress',
              addressId: undefined,
            };

          actionsList.push(setDefaultShippingAddress);
        }
      }

      currentVersion = (await customerController.getCustomer()).body?.version;

      if (currentVersion) {
        const changeAddressResponse = await customerController.updateCustomer({
          version: currentVersion,
          actions: actionsList,
        });

        if (changeAddressResponse.body) {
          setNewAddresses({
            addresses: changeAddressResponse.body.addresses,
            billingAddressIds:
              changeAddressResponse.body.billingAddressIds ?? [],
            shippingAddressIds:
              changeAddressResponse.body.shippingAddressIds ?? [],
            defaultBillingAddressId:
              changeAddressResponse.body.defaultBillingAddressId ?? '',
            defaultShippingAddressId:
              changeAddressResponse.body.defaultShippingAddressId ?? '',
          });
        }

        toast.success('Change address was successful');

        setIsLoading(false);
      }
    }
  };

  const handleAddressTypeChange = (
    e: ChangeEvent<HTMLSelectElement>,
    values: IAddressProps,
    resetForm: FormikProps<IAddressProps>['resetForm']
  ): void => {
    resetForm({
      values: {
        ...values,
        addressType: (e.target as HTMLSelectElement).value,
      },
    });
  };

  const handleAddressDelete = (values: IAddressProps): void => {
    (async (): Promise<void> => {
      const deleteAddressAction: MyCustomerRemoveAddressAction = {
        action: 'removeAddress',
        addressId: values.addressId,
      };

      const customerController = new CustomerController();

      const currentVersion = (await customerController.getCustomer()).body
        ?.version;

      if (currentVersion) {
        const deleteAddressResponse = await customerController.updateCustomer({
          version: currentVersion,
          actions: [deleteAddressAction],
        });

        if (deleteAddressResponse.body) {
          setNewAddresses({
            addresses: deleteAddressResponse.body.addresses,
            billingAddressIds:
              deleteAddressResponse.body.billingAddressIds ?? [],
            shippingAddressIds:
              deleteAddressResponse.body.shippingAddressIds ?? [],
            defaultBillingAddressId:
              deleteAddressResponse.body.defaultBillingAddressId ?? '',
            defaultShippingAddressId:
              deleteAddressResponse.body.defaultShippingAddressId ?? '',
          });
        }

        setSelectAddressValue(null);

        toast.success('Delete address was successful');
      }
    })().catch((e: HttpErrorType) => {
      toast.error(e.message);
    });
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
              value={selectAddressValue}
              styles={selectStyles}
              options={groupedOptions}
              formatGroupLabel={formatGroupLabel}
              onChange={(newValue): void =>
                onAddressChange(newValue, setFieldValue)
              }
            />
            <h2 className="mt-4 mb-2 font-bold text-white">Address info:</h2>
            <input type="hidden" name="id" id="addressId" ref={addressIdRef} />
            <div className="mb-4">
              <select
                id="addressType"
                disabled={!inEditMode}
                ref={addressTypeRef}
                defaultValue=""
                name="addressType"
                onChange={(e): void =>
                  handleAddressTypeChange(e, values, resetForm)
                }
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
                defaultValue=""
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
            <div className="flex gap-4">
              <button
                type="submit"
                className={`flex w-full items-center justify-center rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 ${
                  isLoading ? 'cursor-not-allowed' : ''
                }`}
                disabled={isLoading}
              >
                {isLoading ? <Loader /> : ''}
                <span className="mx-[4px]">
                  {addingAddress ? 'Add' : 'Change'}
                </span>
              </button>
              {!addingAddress && (
                <button
                  type="button"
                  className="flex items-center justify-center w-full py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                  onClick={(): void => handleAddressDelete(values)}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Addresses;
