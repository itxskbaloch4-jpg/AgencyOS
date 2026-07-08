import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createClient() {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch {
            // set() from a Server Component will throw — this is expected
            // and safe to ignore as long as middleware is also refreshing
            // the session (which it now does).
          }
        },
        remove(name: string, options: any) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch {
            // Same as above — no-op when called from a Server Component.
          }
        },
      },
    }
  );
}
