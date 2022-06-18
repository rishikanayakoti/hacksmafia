import { Link } from 'react-router-dom';


function Navbar() {
    return (
    <div>
        {/* nav bar */}
        <nav className="navbar navbar-expand-sm ">
            {/* <a className="navbar-brand">
                <img id="logo" src="https://f4.bcbits.com/img/a1063275714_10.jpg" />
            </a>
            <a className="navbar-brand" href="#">Zenith</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav mx-auto justify-content-center">
                    {/* link for Home */}
                    <li className="nav-item ">
                        <Link className="nav-link" to="">Home</Link>
                    </li>
                    {/* link for Aboutus */}
                    <li className="nav-item px-5">
                        <Link className="nav-link" to="Aboutus">About us</Link>
                    </li>
                    {/* link for Apply*/}
                    <li className="nav-item px-5">
                        <Link className="nav-link" to="Apply">Apply</Link>
                    </li>

                    {/* link for login */}
                    <li className="nav-item px-5">
                        <Link className="nav-link" to="Login">Login</Link>
                    </li>
            </ul>
            </div>
        </nav>
    </div>)
}

export default Navbar