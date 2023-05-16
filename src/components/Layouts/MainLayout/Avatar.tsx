import Image from "next/image";
import Link from "next/link";

import { useAuthData } from "@/data/hooks";

export function Avatar() {
  const { user } = useAuthData();

  return (
    <Link href="/profile">
      <figure>
        <Image
          className="rounded-2xl"
          src={user?.photoURL ?? "/avatar-placeholder.png"}
          width={48}
          height={48}
          alt={`${user?.displayName}'s profile`}
        />
      </figure>
    </Link>
  );
}
