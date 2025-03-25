const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="text text-center">
          <p>
            @ Martin_JS {new Date().getFullYear()}, tous droits réservés. | Réalisé par{" "}
            <a target="_blank" href="https://www.linkedin.com/in/martindohou/">
              Martin Dohou
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
