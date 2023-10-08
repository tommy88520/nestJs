import { useRouter } from 'next/router';

const PortfolioProjectPage = (props: any) => {
  const router = useRouter();

  // const pathname = router.pathname;
  // const pathquery = router.query;
  return <div>hi {props.id}</div>;
};
export default PortfolioProjectPage;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const userId = params.id;

  return {
    props: {
      id: 'userId' + userId,
    },
  };
}
