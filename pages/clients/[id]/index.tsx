import Link from 'next/link';
import { useRouter } from 'next/router';
const SelectClientProjectPage = () => {
  const router = useRouter();
  function loadProject() {
    // router.push('/clients/max/projectsA');
    router.push({
      pathname: '/clients/[id]/[clientprojectId]',
      query: { id: 'max', clientprojectId: 'projectsA' },
    });
    //一樣可以用pathname那個寫法
  }
  return (
    <div>
      <h1>that is selectClientProjectPage</h1>
      <button onClick={loadProject}>Load Project A</button>
    </div>
  );
};

export default SelectClientProjectPage;
