import { FC } from 'react';
import classes from './profilemenu.module.scss';

export const PROFILE_TAB = 0;
export const ADDRESS_TAB = 1;

interface ProfileMenuProps {
  activeContentIndex: number;
  setActiveContentIndex: (index: number) => void;
}

const ProfileMenu: FC<ProfileMenuProps> = ({
  activeContentIndex,
  setActiveContentIndex,
}) => (
  <div className={classes.menu}>
    <button
      type="button"
      className={activeContentIndex === PROFILE_TAB ? classes.active : ''}
      onClick={(): void => setActiveContentIndex(PROFILE_TAB)}
    >
      Profile
    </button>
    <button
      type="button"
      className={activeContentIndex === ADDRESS_TAB ? classes.active : ''}
      onClick={(): void => setActiveContentIndex(ADDRESS_TAB)}
    >
      Addresses
    </button>
  </div>
);

export default ProfileMenu;
