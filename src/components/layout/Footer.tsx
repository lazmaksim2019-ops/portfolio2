import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Александр Лазаренко · Fullstack / AI Developer
        </p>
        <p className="footer-links">
          <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          {" · "}
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {" · "}
          <a href={`mailto:${siteConfig.email}`}>Email</a>
        </p>
        <p>© {new Date().getFullYear()} Александр Лазаренко</p>
      </div>
    </footer>
  );
}
