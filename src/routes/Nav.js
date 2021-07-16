import {Link} from 'react-router-dom';

function Nav() {
 return (
  <div>
   <Link to="/">홈으로</Link>
   <Link to="/about">다른곳으로</Link>
  </div>
 );
}

export default Nav;