import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo"><Link to='/'>Sobayo <span>Tobiloba</span></Link></div>
			<nav>
				<Link to='/' className='link'>Home</Link>
				<Link to='/about' className='link'>About</Link>
				<Link to='./users' className='link'>Users</Link>
			</nav>
		</div>
	);
}

export default Navbar;
