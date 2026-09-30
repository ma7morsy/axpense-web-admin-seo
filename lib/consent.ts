// Consent storage shared by the banner and the GTM loader.
export const CONSENT_KEY = 'axpense-consent-v1';
export type ConsentChoice = { analytics: boolean; ads: boolean; ts: string };

export function readConsent(): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    return raw ? (JSON.parse(raw) as ConsentChoice) : null;
  } catch {
    return null;
  }
}

export function saveConsent(c: Omit<ConsentChoice, 'ts'>) {
  const value: ConsentChoice = { ...c, ts: new Date().toISOString() };
  try { window.localStorage.setItem(CONSENT_KEY, JSON.stringify(value)); } catch { /* private mode */ }
  applyConsent(value);
  return value;
}

/** Consent Mode v2 update. */
export function applyConsent(c: Pick<ConsentChoice, 'analytics' | 'ads'>) {
  const w = window as Window & { gtag?: (...a: unknown[]) => void };
  w.gtag?.('consent', 'update', {
    analytics_storage: c.analytics ? 'granted' : 'denied',
    ad_storage: c.ads ? 'granted' : 'denied',
    ad_user_data: c.ads ? 'granted' : 'denied',
    ad_personalization: c.ads ? 'granted' : 'denied',
  });
}

/** GTM only loads when an ID is set AND the owner has switched it on (legal pages final). */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
export const GTM_ENABLED = !!GTM_ID && process.env.NEXT_PUBLIC_ENABLE_GTM === 'true';
