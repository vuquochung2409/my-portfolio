import { useState, useMemo, useEffect, useRef } from "react";

export default function useIsInViewport<Element extends HTMLElement>(
  rootMargin = "0px",
  threshold = 0.5
): [boolean, React.RefObject<Element>] {
  const currentElement = useRef<Element>(null);

  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
          threshold,
        }
      ),
    [rootMargin, threshold]
  );

  useEffect(() => {
    if (!currentElement.current) return;
    observer.observe(currentElement.current);
    return () => {
      observer.disconnect();
    };
  }, [observer, currentElement.current]);

  return [isIntersecting, currentElement];
}
