import Image from 'next/image';
import React from 'react';

interface ContactItemProps {
  photo: string;
  title: string;
  details: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ photo, title, details }) => {
  return (
    <div className="firstsection flex gap-5">
      <Image src={photo} alt="Contact Image" width={50} height={50} />
      <div className="child flex flex-col items-start gap-4">
        <h3 className="text-white uppercase text-[16px] font-medium leading-normal">{title}</h3>
        {details}
      </div>
    </div>
  );
};

export default ContactItem;
