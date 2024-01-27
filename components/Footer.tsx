import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start gap-6 items-start">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="footerLogo"
            className="object-contain"
          />
          <p className="text-base text-gray-500">
            CarHud <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links ">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3>{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  className="text-gray-500"
                  href={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p className="footer__copyrights-link">@CarHub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Term of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
