

import Link from "next/link";
import React from "react";

const FooterCredit = () => {
  return (
    <section>
      <p className="text-sm lg:text-right md:text-left text-center">
        Team Members{" "}
        <Link
          href="https://www.linkedin.com/in/rizwan-khan-640417247"
          className="text-primary hover:text-primary/50"
        >
          @Rizwan
        </Link>{" "}
        &{" "}
        <Link
          href="https://www.linkedin.com/in/sachin-bamniya-869a81248"
          className="text-primary hover:text-primary/50"
        >
          @Sachin
        </Link>
        &{" "}
        <Link
          href="https://www.linkedin.com/in/utkarshbhaskar258"
          className="text-primary hover:text-primary/50"
        >
          @Utkarsh
        </Link>
      </p>
    </section>
  );
};

export default FooterCredit;
