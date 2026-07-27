import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="gradient-text">{siteConfig.name}</span>. Сделано с
          вниманием к деталям.
        </p>
      </div>
    </footer>
  );
}
