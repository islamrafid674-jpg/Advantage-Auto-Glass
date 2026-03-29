export default function Footer() {
  return (
    <footer className="bg-black py-12 px-6 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-shrink-0">
          <img 
            src="https://i.imgur.com/WTETu2O.png" 
            alt="Advantage Auto Glass" 
            className="h-24 md:h-32 w-auto object-contain" 
            referrerPolicy="no-referrer" 
          />
        </div>
        
        <p className="text-white/40 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Advantage Auto Glass. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
