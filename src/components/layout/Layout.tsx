import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div>
    <nav className="bg-blue-800 text-white p-4 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/industries">Industries</Link>
      <Link to="/case-studies">Case Studies</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <main className="p-4">{children}</main>
  </div>
);

export default Layout;