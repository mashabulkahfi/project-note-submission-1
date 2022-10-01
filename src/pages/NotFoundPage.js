import React from 'react';
import { Link } from 'react-router-dom';
// import PageNotFound from '../assets/images/PageNotFound';

class NotFoundPage extends React.Component{
    render(){
        return <div>
            {/* <img src={PageNotFound}  /> */}
            <h2>404</h2>
            <p>Page not found.</p>
            <p>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;