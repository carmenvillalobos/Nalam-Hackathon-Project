import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
        <nav>
            <ul>
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/donate">Donate</Link></li> */}
            </ul>
        </nav>

      <h1>Changing Lives One Girl At A Time</h1>
      <p>Website under construction. Relaunch in early November. Until the relaunch, please note that all values are conceptual and non-binding. Any questions or inquiries, please contact ulrichkeller@gmail.com. Thanks for your patience :)</p>

      {/* <Link to="/donate" className='btn btn-primary'>Donate</Link> */}
    </div>
  );
};

export default HomePage;