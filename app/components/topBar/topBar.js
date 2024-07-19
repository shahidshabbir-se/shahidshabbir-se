import './topBar.sass';
import Link from 'next/link';
import Icon from '../../icons';

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="upDownfavicon">
        <span className="dot" />
      </div>
      <Link href={'/'} className="name">
        shahid <span className="lastName">{`<shabbir>`}</span>
      </Link>
    </div>
  );
};

export default TopBar;
