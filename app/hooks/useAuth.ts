"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import type { Session } from "@supabase/supabase-js";

export function useAuth(requireAuth = true) {
  const router = useRouter();
  const supabase = createClient();

  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // getSession
    const checkSession = async () => { 
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session && requireAuth) {
          router.push("/login");
          return;
        }

        setSession(session);

      } catch (error) {
        console.log("Fehler beim Abrufen der Session aufgetreten: " + error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      if ((event === "SIGNED_OUT" || !currentSession) && requireAuth) {
        router.push("/login");
      } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
        setSession(currentSession);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase, requireAuth]);

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push("/login");
    } catch (error) {
      console.error("Logout Fehler:", error);
      throw error;
    }
  };

  return { session, loading, logout, user: session?.user };
}
