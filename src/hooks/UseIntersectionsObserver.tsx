import { useEffect, useState } from 'react';

const useIntersectionObserver = (options: IntersectionObserverInit) => {
    const [ref, setRef] = useState<Element | null>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(ref);

        return () => {
            if (ref) observer.unobserve(ref);
        };
    }, [ref, options]);

    return [setRef, isIntersecting] as const;
};

export default useIntersectionObserver;