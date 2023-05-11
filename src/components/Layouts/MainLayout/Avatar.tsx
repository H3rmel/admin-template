import Image from "next/image";
import Link from "next/link";

import { useAuthData } from "@/data/hooks";

export function Avatar() {
  const { user } = useAuthData();

  return (
    <Link href="/profile">
      <figure>
        <Image
          src={user?.imageUrl ?? "/avatar-placeholder.png"}
          width={48}
          height={48}
          alt={`${user?.name}'s profile`}
        />
      </figure>
    </Link>
  );
}
