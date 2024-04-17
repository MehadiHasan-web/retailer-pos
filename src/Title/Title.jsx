import { Helmet } from 'react-helmet-async';

const Title = ({ pageName }) => {
  return (
    <>
      <Helmet>
        <title>Xcode | {pageName}</title>
      </Helmet>
    </>
  );
};

export default Title;