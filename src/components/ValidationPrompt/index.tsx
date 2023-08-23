import { NextPage } from 'next';
import React, { ReactElement } from 'react';
import CheckedIcon from '@/components/ui/icons/CheckedIcon';
import NonCheckedIcon from '@/components/ui/icons/NonCheckedIcon';
import { MIN_PASSWORD_LENGTH, EMPTY_PASSWORD_LENGTH } from '@/constants';

interface ValidationProps {
  validation: string;
}

const regExpLowerCase = /(?=.*[a-zа-яё])/;
const regExpUpperCase = /^(?=.*[A-ZА-ЯЁ])/;
const regExpNumber = /^(?=.*[0-9])/;
const regExpSymbol = /^(?=.*[^A-Za-zА-ЯЁа-яё0-9])/;

const ValidationPrompt: NextPage<ValidationProps> = ({
  validation,
}: ValidationProps): ReactElement => {
  const isPresentLowerCase = regExpLowerCase.test(validation);
  const isPresentUpperCase = regExpUpperCase.test(validation);
  const isPresentNumber = regExpNumber.test(validation);
  const isPresentSymbol = regExpSymbol.test(validation);
  const isMinCharacters = validation.length >= MIN_PASSWORD_LENGTH;
  const notEmpty = validation.length > EMPTY_PASSWORD_LENGTH;

  return (
    <div>
      <ul className="flex flex-wrap items-center justify-center gap-x-2">
        <li className="flex items-center gap-x-1" key="notEmpty">
          {notEmpty ? <CheckedIcon /> : <NonCheckedIcon />}{' '}
          <span className={notEmpty ? 'text-green-dark' : 'text-red-500'}>
            Not Empty
          </span>
        </li>
        <li className="flex items-center gap-x-1" key="isMinCharacters">
          {isMinCharacters ? <CheckedIcon /> : <NonCheckedIcon />}{' '}
          <span
            className={isMinCharacters ? 'text-green-dark' : 'text-red-500'}
          >
            8+ characters
          </span>
        </li>
        <li className="flex items-center  gap-x-1" key="isPresentLowerCase">
          {isPresentLowerCase ? <CheckedIcon /> : <NonCheckedIcon />}{' '}
          <span
            className={isPresentLowerCase ? 'text-green-dark' : 'text-red-500'}
          >
            Lower case
          </span>
        </li>
        <li className="flex items-center  gap-x-1" key="isPresentUpperCase">
          {isPresentUpperCase ? <CheckedIcon /> : <NonCheckedIcon />}{' '}
          <span
            className={isPresentUpperCase ? 'text-green-dark' : 'text-red-500'}
          >
            Upper case
          </span>
        </li>
        <li className="flex items-center  gap-x-1" key="isPresentNumber">
          {isPresentNumber ? <CheckedIcon /> : <NonCheckedIcon />}{' '}
          <span
            className={isPresentNumber ? 'text-green-dark' : 'text-red-500'}
          >
            Number
          </span>
        </li>
        <li className="flex items-center  gap-x-1" key="isPresentSymbol">
          {isPresentSymbol ? <CheckedIcon /> : <NonCheckedIcon />}{' '}
          <span
            className={isPresentSymbol ? 'text-green-dark' : 'text-red-500'}
          >
            Symbol
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ValidationPrompt;
