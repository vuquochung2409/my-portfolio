import { Helmet } from "react-helmet-async";
import React, { Suspense } from "react";

export const Route = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default React.memo(Route);
