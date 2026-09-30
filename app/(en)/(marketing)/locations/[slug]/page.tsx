import { SeoRoute, seoMetadata, seoParams } from '@/lib/seo-route';

export const dynamicParams = false;
export function generateStaticParams() {
  return seoParams('location');
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  return seoMetadata(`/locations/${params.slug}`, 'en');
}

export default function Page({ params }: { params: { slug: string } }) {
  return <SeoRoute enPath={`/locations/${params.slug}`} lang="en" />;
}
