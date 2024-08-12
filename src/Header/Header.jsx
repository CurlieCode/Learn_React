import styles from "./Header.module.css"

function Header() {
    return(
        <header>
            <h1 className={styles.Header}> Our website </h1>
            <nav>
                <ul>
                    <li><a href = "#">Home</a></li>
                    <li><a href = "#">About</a></li>
                    <li><a href = "#">Services</a></li>
                    <li><a href = "#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );

}
export default Header;