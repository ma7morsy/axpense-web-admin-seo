import { SeoRoute, seoMetadata, seoParams } from '@/lib/seo-route';

export const dynamicParams = false;
export function generateStaticParams() {
  return seoParams('industry');
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  return seoMetadata(`/industries/${params.slug}`, 'ar');
}

export default function Page({ params }: { params: { slug: string } }) {
  return <SeoRoute enPath={`/industries/${params.slug}`} lang="ar" />;
}
