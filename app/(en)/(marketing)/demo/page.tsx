import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { LeadFormView } from '@/components/pages/FormViews';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: "Book a Demo",
  description: "Book a free Axpense demo. Tell us about your vehicles and we will show you km-based maintenance, inspections and cost tracking with your own fleet.",
  path: '/demo',
  arPath: '/ar/demo',
  pageType: 'page',
});

export default function Page() {
  return <LeadFormView kind="demo" lang={LANG} />;
}
