import { useState } from "react";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const hanldeScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", hanldeScroll);
  return (
    <div>
      <button
        onClick={scrollTop}
        className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      >
        Scroll to Top
      </button>
    </div>
  );
};

export default Scroll;
