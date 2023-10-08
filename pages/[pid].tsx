import { Fragment } from 'react';
import path from 'path';
import fs from 'fs';

const ProductsDetail = (props: any) => {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p> loading ....</p>;
  }
  return (
    <Fragment>
      <h1>Title</h1>
      <p>content</p>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');

  async function readFile() {
    const result = await fs.promises.readFile(filePath);
    return result;
  }
  const dataObject: any = await readFile();
  const { products } = JSON.parse(dataObject);

  return products;
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const productId = params.pid;

  const products: any = await getData();

  const product = products.find((item: any) => item.id === productId);
  if (!product) {
    return { notFound: true };
  }
  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data: any = await getData();
  const ids = await data.map((product: any) => product.id);
  const pathParams = ids.map((productId: any) => ({ params: { pid: productId } }));
  return {
    paths: pathParams,

    fallback: true, //這個會把除了p1以外的頁面不會預先載入 (限動態路由) 設定blocking可以不用給laoding畫面
  };
}
export default ProductsDetail;
