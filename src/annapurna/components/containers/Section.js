import React from "react";

const Section = ({ children, className }) => (
  <section
    className={`${className} py-12 md:py-24 2xl:py-44`}
  >
    {children}
  </section>
);

export default React.memo(Section);
