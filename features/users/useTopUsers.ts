import { useEffect, useState } from "react";

import { User } from "../../business/user";
import { getTopUsers } from "../../api/stackexchange";

export function useTopUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    getTopUsers(controller.signal)
      .then((users) => {
        setUsers(users);
        setError(null);
      })
      .catch((error) =>
        setError(error instanceof Error ? error.message : "Unknown error"),
      )
      .finally(() => setIsLoading(false));
  }, []);

  return { users, isLoading, error };
}
