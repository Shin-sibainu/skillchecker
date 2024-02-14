import Link from "next/link";
import React from "react";
import NextLink from "../../elements/links/Link";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-4 py-2.5 bg-white border-gray-200">
        <div>
          <Link href={"/"} className="font-semibold text-2xl">
            Skill Checker
          </Link>
        </div>

        <nav className="flex items-center gap-3">
          <NextLink href="/login" bgColor="bg-blue-500" textColor="text-white">
            ログイン
          </NextLink>
          <NextLink href={"/skillCheck"}>スキルチェック</NextLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
