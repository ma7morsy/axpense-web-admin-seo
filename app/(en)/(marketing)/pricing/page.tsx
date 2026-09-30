import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PricingView } from '@/components/pages/FormViews';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description: "Axpense plans start at $40 a month (2,000 EGP · 150 SAR). Start with a 14-day free trial, no credit card required, or book a demo with our team.",
  path: '/pricing',
  arPath: '/ar/pricing',
  pageType: 'page',
});

export default function Page() {
  return <PricingView lang={LANG} />;
}
