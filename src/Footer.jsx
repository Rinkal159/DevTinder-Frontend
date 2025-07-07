import ToggleButton from "./ToggleButton";

export default function Footer() {
  return (
    <footer className="footer-bg">

      <nav>
        <h6 className="footer-heading">Services</h6>
        <a className="footer-content">Branding</a>
        <a className="footer-content">Design</a>
        <a className="footer-content">Marketing</a>
        <a className="footer-content">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-heading">Company</h6>
        <a className="footer-content">About us</a>
        <a className="footer-content">Contact</a>
        <a className="footer-content">Jobs</a>
        <a className="footer-content">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-heading">Legal</h6>
        <a className="footer-content">Terms of use</a>
        <a className="footer-content">Privacy policy</a>
        <a className="footer-content">Cookie policy</a>
      </nav>
    </footer>
  );
}
