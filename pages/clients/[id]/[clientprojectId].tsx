import { useRouter } from 'next/router';
const SelectClientProjectinnerPage = () => {
  const router = useRouter();

  const pathquery = router.query;
  console.log(pathquery);
  return <div>that is SelectClientProjectinnerPage in tommy</div>;
};

export default SelectClientProjectinnerPage;
