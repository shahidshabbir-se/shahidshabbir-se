import Icon from '../../icons';
import './nav.sass';
import Link from 'next/link';

const Icons = [
  {
    icon: '/svg/nav/home.svg',
    href: '/',
  },
  {
    icon: '/svg/nav/user.svg',
    href: '/about',
  },
  {
    icon: '/svg/nav/mail.svg',
    href: '/contact',
  },
  {
    icon: '/svg/nav/project.svg',
    href: '/projects',
  },
];

const Nav = () => {
  return (
    <aside className="nav">
      <div className="icons">
        {Icons.map(({ icon, href }) => (
          <Link key={icon} className="iconWrapper" href={href}>
            <img src={icon} alt="" />
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Nav;
