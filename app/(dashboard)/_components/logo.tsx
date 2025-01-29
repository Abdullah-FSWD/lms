import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      className="m-4 mt-0"
      height={130}
      width={130}
      alt="logo"
      src="/logo.svg"
    />
  );
};
