import React, { ReactElement } from 'react';

interface ProductDetailProps {
  details: {
    name: string;
    description: string;
  };
}
const ProductDetail = ({ details }: ProductDetailProps): ReactElement => {
  const { name, description } = details;

  return (
    <div className="pl-8 pr-8">
      <h1 className="mb-4 text-4xl">{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ProductDetail;
