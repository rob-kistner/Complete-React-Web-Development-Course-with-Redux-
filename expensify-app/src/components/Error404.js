import React from 'react';

/**
 * the <Link> component will prevent a full-page
 * refresh. Any normal <a> tag would actually
 * fully refresh every time.
 */
const Error404 = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page Not Found.</p>
    </div>
  );
}

export default Error404;