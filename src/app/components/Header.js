import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav";

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                    {/* <Image src="/netflixlogo.png" alt="my logo image" width={150} height={40}/> */}
                    <h3 className={styles.navh3}>Netflix Info</h3>
                </Link>

            </div>
            <Nav/>
        </header>
    );
};

export default Header;