import { BlogRoute, blogMetadata, blogParams } from '@/lib/blog-route';

export const dynamicParams = false;
export function generateStaticParams() {
  return blogParams('en');
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  return blogMetadata(params.slug, 'en');
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogRoute slug={params.slug} lang="en" />;
}
