import { NextPage } from 'next';
import EyePass from '@/components/ui/icons/EyePass';

// eslint-disable-next-line max-lines-per-function
const RegisterPage: NextPage = () => (
  <div className="flex items-center justify-center">
    <div className="w-96 rounded bg-background-main p-6 shadow-modal">
      <h1 className="mb-4 text-2xl font-semibold text-white">Registration</h1>
      <form>
        <div className="border-b border-gray-900/10">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email*"
              name="email"
              className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
            />
          </div>
          <div className="relative mb-4">
            <input
              type="password"
              placeholder="Password*"
              name="password"
              className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-white transition-transform ease-in-out"
            >
              <EyePass />
            </button>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name*"
              name="firstname"
              className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name*"
              name="lastname"
              className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              name="date"
              className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <select
              name="country"
              className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
            >
              <option value="">Select country...</option>
              <option value="">USA</option>
              <option value="">United Kingdom</option>
              <option value="">Mexico</option>
            </select>
          </div>
        </div>

        <div className="mb-4 mt-8">
          <h2 className="mb-2 font-bold text-white">Billing Address:</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Street Address*"
              name="billingAddress"
              className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="City / Town*"
              name="billingCity"
              className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Postcode / ZIP*"
              name="billingPostcode"
              className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
            />
          </div>
          <label className="text-white" htmlFor="billingDefaultAddress">
            <input
              type="checkbox"
              name="billingDefaultAddress"
              id="billingDefaultAddress"
              className="mr-2"
            />
            Set as address for billing and shipping
          </label>
        </div>
        <div className="mb-4 mt-8">
          <h2 className="mb-2 font-bold text-white">Shipping Address:</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Street Address*"
              name="shippingAddress"
              className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="City / Town*"
              name="shippingCity"
              className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Postcode / ZIP*"
              name="shippingPostcode"
              id="shippingPostcode"
              className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600"
        >
          Sign Up
        </button>
        <button
          type="button"
          className="mt-2 w-full rounded-md bg-gray-600 py-2 text-white hover:bg-gray-700"
        >
          Log In
        </button>
      </form>
    </div>
  </div>
);
export default RegisterPage;
