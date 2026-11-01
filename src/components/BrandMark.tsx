import Image from "next/image";

/**
 * The Squadify logo (public/Squadify-logo.png, used as supplied). The mark is
 * black on transparent, so it sits on a small light tile to stay legible on
 * the site's near-black header and footer. The image itself is not altered.
 * Decorative here: the surrounding link carries the accessible name.
 */
export default function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <span className="brand-mark" style={{ width: size, height: size }} aria-hidden="true">
      <Image
        src="/Squadify-logo.png"
        alt=""
        // Display-scale intrinsic size (388x302 source, same 1.286 ratio) so the
        // optimiser serves a small variant instead of a full-width one.
        width={54}
        height={42}
        className="brand-mark__img"
        loading="eager"
      />
    </span>
  );
}
