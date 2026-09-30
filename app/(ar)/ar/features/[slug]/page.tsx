import { SeoRoute, seoMetadata, seoParams } from '@/lib/seo-route';

export const dynamicParams = false;
export function generateStaticParams() {
  return seoParams('feature');
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  return seoMetadata(`/features/${params.slug}`, 'ar');
}

export default function Page({ params }: { params: { slug: string } }) {
  return <SeoRoute enPath={`/features/${params.slug}`} lang="ar" />;
}
