import { useEffect, useRef, useMemo } from "react";

export const Intersection = ({ onIntersect = () => {} }) => {
  const element = useRef();
  const observer = useMemo(
    () => new IntersectionObserver(([entry]) => onIntersect(entry)),
    [onIntersect]
  );

  useEffect(() => {
    const target = element.current;

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [observer, element]);

  return <div ref={element} />;
};
