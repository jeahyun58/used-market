import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function useUser() {
  const { data, error } = useSWR("/api/users/me");
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/enter"); //push -> replace 브라우저에게 홈 화면 히스토리를 기록하지 말것
    }
  }, [data, router]);

  return { user: data?.profile, isLoading: !data && !error };
}
