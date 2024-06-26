import { Helmet } from 'react-helmet-async';

const Title = ({ pageName }) => {
  return (
    <>
      <Helmet>
        <title>Demo | {pageName}</title>
      </Helmet>
    </>
  );
};

export default Title;