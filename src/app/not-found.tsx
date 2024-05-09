import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>

      <p>The page you're looking for doesn't exist.</p>
      <Link href="/">Go home</Link>
    </div>
  );
};

export default NotFound;
