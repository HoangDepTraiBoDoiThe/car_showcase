"use client";

import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const NavBar = () => {
  const handleSignIn = () => {};

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            width={120}
            height={120}
            alt="logo"
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign in"
          handleClick={handleSignIn}
          btnType="button"
          containerStyle="text-blue-500 rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default NavBar;
