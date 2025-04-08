// app/components/ProfileDropdownWrapper.tsx
import { checkIfUserIsAdmin } from "@/utils/admin";
import { ProfileDropdown } from "./profile-dropdown";

type Props = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};

export default async function ProfileDropdownWrapper({ user }: Props) {
  const isAdmin = await checkIfUserIsAdmin();

  return <ProfileDropdown user={user} isAdmin={isAdmin} />;
}
