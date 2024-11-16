

import React from "react";

const FooterCopyright = () => {
  return (
    <section>
      <p className="text-sm text-center">
        © {new Date().getFullYear()} IIIT Bhopal <b>Major project</b>
      </p>
    </section>
  );
};

export default FooterCopyright;
