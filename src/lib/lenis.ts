import type Lenis from "lenis";

/**
 * The live Lenis instance, published by `SmoothScroll`. Scroll-driven controls
 * read it so programmatic jumps travel with the page's inertia instead of
 * fighting it; it is `null` whenever smooth scrolling is off (reduced motion).
 */
export const lenisRef: { current: Lenis | null } = { current: null };
