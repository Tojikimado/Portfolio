export default function Footer() {
  return (
    <footer className="relative z-10 w-full py-6 border-t border-gray-800 text-center text-gray-400 bg-black/80">
      <p className="text-sm">
        © {new Date().getFullYear()} Hugo Taurand — Tous droits réservés.
      </p>
    </footer>
  );
}
