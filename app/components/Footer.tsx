export default function Footer() {
  const instagramLink = "https://www.instagram.com/aswhitening_store";
  const whatsappNumber = "918310424827";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-white/30 text-xs">
          © 2025 AS Whitening Cream. All rights reserved.
        </p>

        {/* Social Links - Only Instagram & WhatsApp */}
        <div className="flex gap-6">
          <a 
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 text-xs hover:text-yellow-400 transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
            </svg>
            Instagram
          </a>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 text-xs hover:text-yellow-400 transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.167 2.132-.646c.999.573 2.052.858 3.199.859 3.18 0 5.767-2.587 5.768-5.766.001-3.18-2.586-5.767-5.768-5.767zm3.392 8.244c-.165.467-.551.837-1.004.978-.453.142-.945.188-1.438.154-.521-.038-.9-.156-1.479-.391-.68-.276-1.277-.766-1.737-1.374-.46-.609-.717-1.305-.743-2.033-.012-.369.038-.739.15-1.095.111-.356.275-.69.49-.992.43-.602 1.058-1.035 1.757-1.27.699-.236 1.45-.285 2.177-.156.572.102 1.09.346 1.497.699.407.353.666.778.765 1.229.088.4.06.815-.08 1.199-.14.385-.379.72-.683.969l.509-1.902c-.421-.168-.864-.252-1.312-.246-.388.006-.771.083-1.128.228-.357.144-.679.362-.946.638-.267.277-.471.608-.6.971-.129.362-.18.749-.15 1.134.029.385.117.756.26 1.101.143.345.339.658.577.921.239.263.515.471.815.616.301.144.622.223.948.23.536.013 1.063-.14 1.506-.438l-2.046.676z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Designed & Developed by */}
        <p className="text-white/20 text-[10px] tracking-wide">
          Designed & Developed by{" "}
          <a 
            href="#" 
            className="text-white/40 hover:text-yellow-400 transition-colors duration-300"
          >
            Adfora Digital
          </a>
        </p>
      </div>
    </footer>
  );
}