export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs">
        <p>© 2025 AS Whitening Cream. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white/60 transition">Instagram</a>
          <a href="#" className="hover:text-white/60 transition">Facebook</a>
          <a href="#" className="hover:text-white/60 transition">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}