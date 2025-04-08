import { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { checkIfUserIsAdmin } from "@/utils/admin";

export default async function PageLayout({
  children,
}: {
  children: ReactNode;
}) {
  const isAdmin = await checkIfUserIsAdmin();
  return (
    <div className="min-h-svh flex flex-col">
      <Header isAdmin={isAdmin} />
      {children}
      <Footer />
    </div>
  );
}
