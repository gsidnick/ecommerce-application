import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMember } from '@/data/teamMembersData';

import styles from './styles.module.css';

const TeamMember = ({
  memberData,
  isOdd,
}: {
  memberData: IMember;
  isOdd: boolean;
}): ReactElement => {
  const { fullName, position, photo, biography, gitHub, contribution } =
    memberData;
  return (
    <div className={styles.personElementWrapper}>
      <div className={`${styles.photoWrapper} ${isOdd ? 'order-1' : ''} order-0`}>
        <Image src={photo} alt={fullName} width={300} height={400} />
      </div>
      <div className={`${styles.infoWrapper}`}>
        <h1 className="text-base font-bold md:text-2xl lg:text-4xl">
          {fullName}
        </h1>
        <h2 className="mt-2 text-[16px] md:text-[20px] lg:text-[22px]">
          {position}
        </h2>
        <div className="mt-1 h-[1px] w-1/3 bg-orange-300" />
        <h2 className="mt-5 text-[18px] font-bold text-gray-500 md:text-[22px] lg:text-[26px]">
          Biography
        </h2>
        <p className="text-[14px] md:text-[16px] lg:text-[18px]">{biography}</p>
        <h2 className="mt-5 text-[18px] font-bold text-gray-500 md:text-[22px] lg:text-[26px]">
          GitHub:{' '}
        </h2>
        <Link href={`${gitHub}`} target="_blanc">
          <span className="text-[18px] text-blue-500 hover:text-blue-800">
            {gitHub}
          </span>
        </Link>
        <h2 className="mt-5 text-[18px] font-bold text-gray-500 md:text-[22px] lg:text-[26px]">
          Contributions to the project:
        </h2>
        <ul className="text-[14px] md:text-[16px] lg:text-[18px]">
          {contribution?.length &&
            contribution?.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default TeamMember;
