import { PiUserBold } from 'react-icons/pi';
import { BiEnvelope } from 'react-icons/bi';
import { GrHomeRounded } from 'react-icons/gr';
import { FaLaptopCode } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io5';
import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { FaHandsClapping } from 'react-icons/fa6';

const icons = {
  home: GrHomeRounded,
  user: PiUserBold,
  email: BiEnvelope,
  code: FaLaptopCode,
  linkedin: FaLinkedin,
  github: IoLogoGithub,
  facebook: IoLogoFacebook,
  instagram: IoLogoInstagram,
  twitter: FaXTwitter,
  mail: IoMdMail,
  clap: FaHandsClapping,
};

const Icon = ({ name, className = '' }) => {
  const IconComponent = icons[name];
  if (!IconComponent) return null;

  return <IconComponent className={className} />;
};

export default Icon;
