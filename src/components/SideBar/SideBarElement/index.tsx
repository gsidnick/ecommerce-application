import { ReactElement } from 'react';
// import { ICategory } from '../../pages/catalog/categoriesData';

// interface ISideBarElementProps {
//   id: string;
//   name: string;
//   subcategories?: ICategory[];
// }
const SideBar = (): ReactElement => {
  console.log('SideBar');

  return (
    <div>
      <span>SidebBar Element</span>
    </div>
  );
};

export default SideBar;
