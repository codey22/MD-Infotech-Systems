import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/70">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} MD Infotech Systems. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
