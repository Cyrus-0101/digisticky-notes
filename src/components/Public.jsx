import { Link } from "react-router-dom";

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">0101 Solutions!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Uptown Nairobi City, 0101 Solutions  provides a tailored approach to your custom business enterprise needs.</p>
                <address className="public__addr">
                    0101 Solutions<br />
                    102289 Nairobi<br />
                    Nairobi City, NBO 00101<br />
                    <a href="tel:++254736745458">(073) 674-5458</a>
                </address>
                <br />
                <p>Owner: Cyrus Ndirangu</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}

export default Public;