import React, { ReactElement } from 'react';
import Image from 'next/image';
import whatsapp from '@/assets/images/socials/whatsapp.png';
import viber from '@/assets/images/socials/viber.png';
import telegram from '@/assets/images/socials/telegram.png';
import vk from '@/assets/images/socials/vk.png';
import youtube from '@/assets/images/socials/youtube.png';
import instagram from '@/assets/images/socials/instagram.png';
import phone from '@/assets/images/phone-icon.png';

function HeaderBrow(): ReactElement {
  return (
    <div className="h-8 bg-gray-dark text-white60">
      <div className="flex justify-between border-solid border-b-text-white60 border-b-2">
        <div>
          <span>Ваш город:</span> <span>Самара</span>
        </div>
        <div className="flex items-center justify-center gap-x-5">
          <Image src={whatsapp} alt="whatsapp" />
          <Image src={telegram} alt="telegram" />
          <Image src={vk} alt="vk" />
          <Image src={viber} alt="viber" />
          <Image src={youtube} alt="youtube" />
          <Image src={instagram} alt="instagram" />
        </div>
        <div className="flex items-center justify-end gap-x-5">
          <Image src={phone} alt="phone" />
          <span>8 (800) 100 26 80</span>
          <span>Ежедневно 10:00-20:00</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderBrow;
