import { useEffect, useState } from 'react';
import useSWR from 'swr';

interface SalesResult {
  id: any;
  username: any;
  volume: any;
}
const fetcher = (url: any) => fetch(url).then((res) => res.json());
const Sales = (props: any) => {
  const [sales, setSales] = useState<SalesResult[]>(props.loadedProduct);
  // const [loading, setLoading] = useState();
  const { data, error, isLoading } = useSWR(
    'https://nextjs-course-af4d9-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json',
    fetcher,
  );
  useEffect(() => {
    if (data) {
      const salesResult = [];
      for (const key in data) {
        salesResult.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(salesResult);
    }
    // fetch(
    //   'https://nextjs-course-af4d9-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json',
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }, [data]);

  if (isLoading && !sales) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <ul>
      {sales.map((sale) => {
        return <li key={sale.id}>{sale.username}</li>;
      })}
    </ul>
  );
};

export async function getStaticProps() {
  return fetch(
    'https://nextjs-course-af4d9-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json',
  )
    .then((res) => res.json())
    .then((data) => {
      const salesResult = [];
      for (const key in data) {
        salesResult.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      return {
        props: {
          loadedProduct: salesResult,
        },
        revalidate: 10,
      };
    });
}

export default Sales;
