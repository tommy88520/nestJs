import Link from 'next/link';

const ClientsPage = () => {
  const clients = [
    { id: 'max', name: 'maxil' },
    { id: 'max2', name: 'maxil2' },
  ];
  return (
    <div>
      <h1>The clients Page</h1>
      <div>
        <h1>that is selectClientProjectPage</h1>
        <ul>
          {clients.map((client) => (
            <li key={client.id}>
              <Link
                href={{
                  pathname: '/clients/[id]',
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ClientsPage;
