import { ReactElement } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import image from './1.png';

const products = [
  {
    id: '1',
    img: image,
    // img: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/bag-371ygCjz.png',
    // img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/HD28_%28R.Waller%29.jpg/318px-HD28_%28R.Waller%29.jpg',
    name: 'Guitar',
    model: 'Model 1',
    description:
      "The new Les Paul™ Standard returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 60s features a satin nitrocellulose lacquer finish that gives it the look and feel of a long-treasured musical companion. It has a solid mahogany body with an AA figured maple top and a SlimTaper™ 60s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1 Tune-O-Matic™ bridge, aluminum Stop Bar tailpiece, Grover® Rotomatic 'Kidney' tuners, and gold Top Hat knobs with Silver Reflectors and Dial Pointers. The open-coil 60s Burstbucker™ pickups are loaded with Alnico 5 magnets and hand-wired to audio taper potentiometers and Orange Drop® capacitors.",
    price: 'Price 1',
    oldPrice: 'Old Price 1',
    currency: '$',
  },
  {
    id: '2',
    img: image,
    // img: 'https://images.ctfassets.net/3xaxfhpie9jb/5l48jpVs0vtl2AeU0UTqXP/729769f06f117d0863d9931937899671/electromatic-sub.jpg',
    name: 'Product 2',
    model: 'Model 2',
    description: 'Description 2',
    price: 'Price 2',
    oldPrice: 'Old Price 2',
    currency: '$',
  },
  {
    id: '3',
    img: image,
    // img: 'https://w.forfun.com/fetch/8d/8dde83c7013e9ba6817324993afbc918.jpeg',
    name: 'Product 3',
    model: 'Model 3',
    description: 'Description 3',
    price: 'Price 3',
    oldPrice: 'Old Price 3',
    currency: '$',
  },
  {
    id: '4',
    img: image,
    // img: 'https://www.guitarworld.com/wp-content/uploads/2019/10/PRS-SE-Parlor-P20E-1.jpg?w=1200',
    name: 'Product 4',
    model: 'Model 4',
    description: 'Description 4',
    price: 'Price 4',
    oldPrice: 'Old Price 4',
    currency: '$',
  },
];

function Catalog(): ReactElement {
  return (
    <>
      <h1 className="text-white">Catalog Page</h1>;
      <Link href="/" className="border-2 text-white">
        To Home
      </Link>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            img={product.img}
            name={product.name}
            model={product.model}
            description={product.description}
            price={product.price}
            oldPrice={product.oldPrice}
            currency={product.currency}
          />
        ))}
      </div>
    </>
  );
}

export default Catalog;
