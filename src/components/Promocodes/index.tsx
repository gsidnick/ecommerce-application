import React, { ReactElement } from 'react';

const Promocodes = (): ReactElement => (
  <div className="bg-white py-8 sm:py-12">
    <div className="mx-auto mb-8 text-center text-2xl text-gray-600 sm:text-3xl">
      Promocodes
    </div>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <dl className="grid grid-cols-1 gap-x-8 gap-y-16 rounded-lg bg-gray-100 p-8 text-center lg:grid-cols-3">
        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt className="text-base leading-7 text-gray-600">
            30% off on everything
          </dt>
          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            30ALL
          </dd>
        </div>
        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt className="text-base leading-7 text-gray-600">
            5% off on Bass guitars
          </dt>
          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            5BASS
          </dd>
        </div>
        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt className="text-base leading-7 text-gray-600">
            10% off on Acoustic guitars
          </dt>
          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            10ACOUSTIC
          </dd>
        </div>
      </dl>
    </div>
  </div>
);

export default Promocodes;
