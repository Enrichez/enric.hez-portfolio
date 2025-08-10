import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-text", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".footer-icon", {
        opacity: 0,
        y: 10,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      className="py-8 border-t border-gray-300 dark:border-gray-700 mt-16"
      ref={footerRef}
    >
      <div className="px-4 text-center">
        <p className="footer-text mb-4 text-sm text-gray-600 dark:text-gray-300">
          <b>© 2025 Enrico Hezkiel Sirait</b> — Made with passion and coffee.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
