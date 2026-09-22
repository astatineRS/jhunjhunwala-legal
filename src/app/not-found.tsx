import { ButtonLink } from "@/components/ui/Button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60svh] md:min-h-[70vh] flex-col items-center justify-center pt-[calc(var(--header-h)+2rem)] md:pt-[calc(var(--header-h)+3rem)] pb-12 md:pb-24 text-center">
      <p className="eyebrow text-gold-deep">404</p>
      <h1 className="display-1 mt-4 text-ink">This page could not be found</h1>
      <p className="mt-4 md:mt-5 max-w-lg text-balance-pretty text-[0.9375rem] md:text-[1.0625rem] text-ink/65">
        The page you were looking for may have been moved or removed. You can return to the homepage or browse our
        areas of expertise.
      </p>
      <div className="mt-7 md:mt-9 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Back To Home</ButtonLink>
        <ButtonLink href="/expertise" variant="ghost">
          Explore Expertise
        </ButtonLink>
      </div>
    </section>
  );
}
