import "./navBar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">MidmoonBooking</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">login</button>
                  
                </div>
            </div>
        </div>
    )
}

export default Navbar