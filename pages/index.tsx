import { getFeaturedEvents } from '@/data/api-util';
import EventList from '@/components/events/events-list';
import fs from 'fs';
import Link from 'next/link';
import path from 'path';

function HomePage(props: any) {
  const { featureEvents } = props;

  return (
    <div>
      <EventList events={featureEvents} />
      {/* <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export async function getStaticProps() {
  // const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');

  // async function readFile() {
  //   const result = await fs.promises.readFile(filePath);
  //   return result;
  // }

  // const dataObject: any = await readFile();
  // const { products } = JSON.parse(dataObject);
  const featureEvents = await getFeaturedEvents();
  if (!featureEvents) {
    return {
      redirect: {
        destination: 'no/data',
      },
    };
  }

  if (!featureEvents.length) {
    return { notFound: true };
  }
  return {
    props: {
      featureEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
