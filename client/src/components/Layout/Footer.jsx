function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {currentYear} Gym Management System. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;