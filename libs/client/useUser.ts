import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    fetch("/api/users/me")
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          return router.replace("/enter"); //push -> replace 브라우저에게 홈 화면 히스토리를 기록하지 말것
        }
        setUser(data.profile);
      });
  }, [router]);
  return user;
}
