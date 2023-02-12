const headerStyle = {
    width: "100%",
    backgroundColor: "grey",
    height: "100px",
    position: "fixed",
    top: "0",
}
const linkStyle = {
    textDecoration: "none",
    color: "white",
}
const listStyle = {
    listStyle: "none",
}
const navStyle = {
    display: "flex",
    justifyContent: "end",
    gap: "35px",
    marginRight: "20px",
}

const Header = () => {
    return (
    <header style ={headerStyle}>
        <ul style={navStyle}>
            <li style={listStyle}>
                <a style={linkStyle} href="#">Home</a>
            </li>
            <li style={listStyle}>
                <a style={linkStyle} href="#">About</a>
            </li>
            <li style={listStyle}>
                <a style={linkStyle} href="#">Contacts</a>
            </li>
        </ul>
    </header>)
}

export default Header;