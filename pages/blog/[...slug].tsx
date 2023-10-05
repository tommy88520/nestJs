import { useRouter } from 'next/router';
import path from 'path';

function BlogPostsPage() {
  const router = useRouter();

  const pathquery = router.query;
  console.log(pathquery);
  return <div>{pathquery[0]}+1</div>;
}

export default BlogPostsPage;

//..slug 會拿到url的參數用array呈現
