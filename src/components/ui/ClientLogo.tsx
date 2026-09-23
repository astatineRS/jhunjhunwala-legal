import Image from "next/image";
import type { Client } from "@/content/home";

/**
 * Client badge for the Trusted By strip. The supplied artwork is a mix of
 * transparent marks and full-bleed coloured tiles, so each logo is contained
 * inside the same white card rather than dropped straight onto the dark band.
 */
export default function ClientLogo({ client }: { client: Client }) {
  return (
    <span className="grid h-14 w-[8.75rem] place-items-center rounded-[10px] bg-white px-3.5 py-2.5 md:h-16 md:w-[10.5rem]">
      <span className="relative block size-full">
        <Image src={client.logo} alt={client.name} fill sizes="168px" className="object-contain" />
      </span>
    </span>
  );
}
