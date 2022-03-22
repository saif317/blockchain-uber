import React from 'react';
import Image from 'next/image';
import { BsPerson } from 'react-icons/bs';

import avatar from '../public/avatar2.jpg';

const styles = {
  wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
  leftMenu: `flex gap-3`,
  logo: `text-3xl text-white flex cursor-pointer mr-16`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
};

const currentAccount = '0x7f27F68216F81Ae0D9Db309e5C24D9f60046dd49';

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftMenu}>
        <div className={styles.logo}>Uber</div>
        <div className={styles.menuItem}>Ride</div>
        <div className={styles.menuItem}>Drive</div>
        <div className={styles.menuItem}>More</div>
      </div>
      <div className={styles.rightMenu}>
        <div className={styles.menuItem}>Help</div>
        <div className={styles.menuItem}>Lance</div>
        <div className={styles.userImageContainer}>
          <Image
            src={avatar}
            width={40}
            height={40}
            alt=''
            className={styles.userImage}
          />
        </div>
        {currentAccount ? (
          <div>
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <div className={styles.loginButton}>
            <BsPerson />
            <span className={styles.loginText}>Log in</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
