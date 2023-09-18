import type { StaticImageData } from 'next/image';
import photoNikolay from '../assets/images/team/photo_Nikolay.jpg';
import photoKirill from '../assets/images/team/photo_Kirill.jpg';
import photoSergey from '../assets/images/team/photo_Sergey.png';

export interface IMember {
  fullName: string;
  position: string;
  biography: string;
  photo: StaticImageData;
  gitHub: string;
  contribution: string[];
}

export const membersData: IMember[] = [
  {
    fullName: 'NIKOLAY SIDORENKO',
    position: 'Engeneer (TeamLead)',
    biography:
      'For the first 6 years of his work experience, he worked as a system administrator in the IT department of an company. For the last 5 years he have been working as an engineer in the automation, metrological support and communications service. Main responsibilities - maintenance of automated process control systems (APCS). Additionally, Nikolay combine the responsibilities of an information security engineer in APCS.',
    photo: photoNikolay,
    gitHub: 'https://github.com/gsidnick',
    contribution: [
      'Application development in order of working with the eCommerce Tools API',
      'Working with the database, filling the database with products',
      'Developing a user registration page',
    ],
  },
  {
    fullName: 'KIRILL NAZAROV',
    position: 'FrontEnd Developer',
    biography:
      'Kirill began to be interested in programming back in school. At the age of 15-16 he was interested in the programming languages Basic and Pascal. However, after school he did not continue to study programming and graduated from the Kharkov National University of Internal Affairs, where he received 2 higher educations: economics and law. Until 2021, he has worked as a lawyer in a group of private companies. Kirill started learning JavaScript in 2021. At the beginning of 2022, he finished JavaScript + React courses from the Israel company DAN.IT Education. In 2022, he took part in commercial projects (JS+React, JS+React+Flow).',
    photo: photoKirill,
    gitHub: 'https://github.com/deep-logic2000',
    contribution: [
      'Development of the main page, header',
      'Product card development',
      'Catalog page developmentCatalog page development',
      'Implementation of products sorting',
      'Implementation of filters by category, brand, prices of products',
      'Implementation of adding and removing products to the cart from the catalog page and from the product page',
      'Implementation of the "About us" page',
    ],
  },
  {
    fullName: 'SERGEY GRABAK',
    position: 'FrontEnd Developer',
    biography:
      'For 15 years he worked in various positions at AGBIS Company, including web developer and product manager of the web department.',
    photo: photoSergey,
    gitHub: 'https://github.com/ToLive',
    contribution: [
      'Initial project setup and working with addresses in the user profile',
      'Developing of the cart page',
      'Implementation of increasing/decreasing the quantity of products in the cart',
      'Implementation delete products from the cart',
      'Implementation of the opportunity to apply promo code',
      'Implementation of the clear shopping cart',
    ],
  },
];
