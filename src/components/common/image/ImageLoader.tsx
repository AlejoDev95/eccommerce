import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { ImageSkeleton } from "./ImageSkeleton";

type ImageLoaderProps = {
  src: string;
  alt: string;
  className?: string;
};

export const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setImageLoaded(true);
      setLoading(false);
    };

    img.onerror = () => {
      setLoading(false);
      setError(true);
    };
  }, [src]);

  const skeletonClasses = classNames("animate-fade-in", {
    "animate-fade-out": !loading && imageLoaded,
  });

  const imageClasses = classNames("opacity-0", {
    "animate-fade-in": !loading && imageLoaded,
  });

  return (
    <div className="relative">
      {(loading || error) && (
        <div
          className={`flex items-center justify-center w-full h-48 bg-gray-300 max-w-full rounded-t-lg ${skeletonClasses}`}
        >
          <ImageSkeleton />
        </div>
      )}
      {!loading && !error && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${imageClasses}`}
        />
      )}
    </div>
  );
};
