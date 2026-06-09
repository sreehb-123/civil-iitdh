import { useEffect, useState } from "react";
import { ArrowUpCircle } from "lucide-react";

const SCROLL_THRESHOLD = 320;

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <span
        className="flex h-12 w-12 items-center justify-center rounded-full shadow-lg ring-2 ring-white/70"
        style={{
          background: "linear-gradient(135deg, #89288f 0%, #faa519 100%)",
          color: "#ffffff",
        }}
      >
        <ArrowUpCircle className="h-8 w-8" strokeWidth={1.8} />
      </span>
    </button>
  );
}