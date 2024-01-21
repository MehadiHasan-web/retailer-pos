import { Helmet} from 'react-helmet-async';

const Title = ({pageName}) => {
  return (
    <>
      <Helmet>
          <title>Holos-techies | {pageName}</title>
      </Helmet>
    </>
  );
};

export default Title;