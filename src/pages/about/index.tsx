import { ReactElement } from 'react';
import Link from 'next/link';
import TeamMember from '@/components/TeamMember';
import { membersData } from '../../data/teamMembersData';

import RSSchoolIcon from '@/components/ui/icons/RSSchoolIcon';

import styles from './styles.module.css';

const DIVISOR_EVEN_NUMBER = 2;
const REMAINDER_OF_DIVISION = 0;

function About(): ReactElement {
  return (
    <div className={styles.container}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-[36px] font-bold text-gray-800">
          Introduction
        </h1>
        <div className="mb-3 mt-1 h-[3px] w-1/4 bg-orange-300" />
      </div>
      <p className="mt-6">
        The project was created as part of the course work of the students of
        the RSSchool from EPAM. The project is a web application for an online
        store. The project is a web application for online shopping. The
        application allows you to view products, add them to the cart, place an
        order, etc. The application is implemented using the React library and
        the Next.js framework. The application uses the eCommerce Tools API for
        communication with the server. The application is implemented in
        accordance with the requirements of the technical task.
      </p>
      <h3 className="mt-3 font-semibold">
        Effective team work was achieved thanks to many factors, including the
        following:
      </h3>
      <ol className={styles.effectiveListWrapper}>
        <li>
          The team used the Task Board to create tasks, distribute them among
          developers, and track progress. This allowed each developer to clearly
          understand the essence of the task and plan the time for its
          completion.
        </li>
        <li>
          At the beginning of each sprint, current tasks were determined and
          distributed among the developers. Therefore, each team member knew
          what was expected of him.{' '}
        </li>{' '}
        <li>
          Dividing tasks into smaller subtasks helped organize work in such a
          way that that one participant did not affect the work of the others.
          Thus, merging the development results of individual parts of the
          application as a whole did not lead to conflicts in the code.{' '}
        </li>{' '}
        <li>
          Regular meetings, rallies were held as necessary to discuss current
          progress, challenges and next steps.{' '}
        </li>{' '}
        <li>
          The team maintained open communication at all times to resolve issues
          and share ideas.{' '}
        </li>{' '}
        <li>
          As Pull Requests were created, code reviews were carried out, details
          were discussed and feedback was given.
        </li>
      </ol>
      <p className="mt-3">
        Effective work was largely achieved thanks to the correctly selected
        tools and skillful work of team leader Nikolai, who organized the
        coordinated work of all team members. Each team member has extensive
        knowledge of the selected technology stack, which completely covers the
        entire scope of tasks whose solution was necessary to develop the
        application. All above specified allowed us to complete all points of
        the task, and in some cases even complete it beyond what was necessary.
      </p>
      <div className="mt-10 flex flex-col items-center">
        <h2 className="border-orange-400 text-center text-[28px] font-bold text-gray-800">
          Team
        </h2>
        <div className="mb-10 mb-3 mt-1 h-[2px] w-[100px] bg-orange-300" />
      </div>
      {membersData.map((member, index) => (
        <TeamMember
          key={member.fullName}
          memberData={member}
          isOdd={index % DIVISOR_EVEN_NUMBER !== REMAINDER_OF_DIVISION}
        />
      ))}
      <div className="mt-10 flex items-center justify-center">
        <span className="mr-5">Copyright</span>
        <Link href="https://rs.school" target="_blanc">
          <div className="m-auto flex w-[120px] justify-center">
            <RSSchoolIcon />
          </div>
        </Link>
        <span className="ml-5">2023</span>
      </div>
    </div>
  );
}

export default About;
