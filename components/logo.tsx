import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";
import Link, { LinkProps } from "next/link";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

type Props = Omit<LinkProps, "href"> & {
  href?: LinkProps["href"];
};

export const Logo = ({ href = "/", ...rest }: Props) => {
  return (
    <Link href={href} {...rest}>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/images/logo.svg" alt="logo" height={30} width={30} />

        <p className={cn("text-lg text-neutral-700", headingFont.className)}>
          Taskify
        </p>
      </div>
    </Link>
  );
};
