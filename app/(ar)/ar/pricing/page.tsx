import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PricingView } from '@/components/pages/FormViews';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: "الأسعار",
  description: "خطط أكسبنس تبدأ من 2,000 جنيه شهريًا (40 دولارًا · 150 ريالًا). ابدأ بتجربة مجانية 14 يومًا بدون بطاقة ائتمان أو احجز عرضًا تجريبيًا مع فريقنا.",
  path: '/ar/pricing',
  enPath: '/pricing',
  pageType: 'page',
});

export default function Page() {
  return <PricingView lang={LANG} />;
}
