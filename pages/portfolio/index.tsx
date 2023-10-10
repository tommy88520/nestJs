const PortfolioPage = (props: any) => {
  const { username } = props;
  return (
    <div>
      <p>{username}</p>
    </div>
  );
};
export default PortfolioPage;

export async function getServerSideProps(context: any) {
  const { params, res, req } = context;
  return {
    props: {
      username: 'tommys',
    },
  };
}
