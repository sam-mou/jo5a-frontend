import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <Link to="/">
                <h3>Home</h3>
            </Link>
            <Link to="/pitches">
            <div>
                <p>Book a Game</p>
            </div>
            </Link>
            <div>
                <p>Where to Play?</p>
            </div>
            <div>
                <p>Organize a Game</p>
            </div>
            <Link to="/signup">
            <div>
                <button>Sign Up</button>
            </div>
            </Link>
            <Link to="/login">
            <div>
                <button>Login</button>
            </div>
            </Link>
        </>
    );
}

export default NavBar;
