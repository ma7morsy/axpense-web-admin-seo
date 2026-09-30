import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { LeadFormView } from '@/components/pages/FormViews';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: "احجز عرضًا تجريبيًا",
  description: "احجز عرضًا تجريبيًا مجانيًا لأكسبنس. أخبرنا عن مركباتك وسنعرض لك الصيانة حسب الكيلومترات والفحوصات ومتابعة التكاليف على أسطولك أنت.",
  path: '/ar/demo',
  enPath: '/demo',
  pageType: 'page',
});

export default function Page() {
  return <LeadFormView kind="demo" lang={LANG} />;
}
