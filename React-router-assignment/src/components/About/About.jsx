import "./about.css";
import {Link} from 'react-router-dom'

function About() {
  return (
    <div>
      <div className="about">
        <div className="header">
          <h1>About This Project</h1>
        </div>
        <div className="text">
          <p>
            &nbsp;This project was created in order to know how to setup
            and use React-router, gain more understanding of nested routes,
            create an error page in case user goes to an unknown route and
            stategically place error boundaries in order to catch and eliminate
            errors in the app.
            <br />
            <br />
            &nbsp;We are also meant to setup client-side
            pagination (changing of contents within a single page through the
            click of numbered buttons) by fetching an API from{" "}
           <a href="https://randomuser.me" target='_blank'><i>
              <code>randomuser.me</code>
            </i></a>{' '}
			and making it display contents accordingly.
			&nbsp;We are to implement accessibility like setting a
			disabled state when the API is loading, etc.
          </p>
        </div>
      </div>
	  <Link to='/users'><button className="users-btn">Users Page</button></Link>
    </div>
  );
}

export default About;
