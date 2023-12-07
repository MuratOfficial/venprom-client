import Link from "next/link";
import React from "react";

function ClientFooter() {
  return (
    <footer className="py-4 text-center">
      <p className="text-center text-xs text-black">
        &copy; 2023 ТОО &ldquo;Венпром&rdquo;. Все права защищены. Разработал
        <span className="font-semibold bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 p-1 rounded-md hover:text-white">
          <Link target="blank" href="https://toimet.tech">
            Toimet Tech
          </Link>
        </span>
      </p>
    </footer>
  );
}

export default ClientFooter;
