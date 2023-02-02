import styles from "../styles/Layout.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Layout({ children }) {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <Navbar handleSidebar={() => setSidebar((sidebar) => !sidebar)} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <main className={`container ${styles.layout}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
