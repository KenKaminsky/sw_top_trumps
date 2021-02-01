import React from 'react';

export const PAGE_NOT_FOUND_MESSAGE = '404 - This is not the page you are looking for';

const PageNotFound: React.FC = () => {
  return <div>{PAGE_NOT_FOUND_MESSAGE}</div>;
};

export default PageNotFound;
