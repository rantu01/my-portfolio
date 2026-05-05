import React, { useEffect } from "react";

const ImageLightbox = ({ images = [], index = 0, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden"; // prevent background scroll
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!images || images.length === 0) return null;

  const src = images[index];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white bg-black/40 hover:bg-black/60 rounded-full p-2"
        aria-label="Close"
      >
        ✕
      </button>

      <button
        onClick={onPrev}
        className="absolute left-6 text-white bg-black/40 hover:bg-black/60 rounded-full p-2"
        aria-label="Previous"
      >
        ‹
      </button>

      <div className="max-w-[95%] max-h-[90%] flex items-center justify-center">
        <img src={src} alt={`lightbox-${index}`} className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg shadow-2xl" />
      </div>

      <button
        onClick={onNext}
        className="absolute right-6 text-white bg-black/40 hover:bg-black/60 rounded-full p-2"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
};

export default ImageLightbox;
