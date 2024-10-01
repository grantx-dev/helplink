import { redirect } from "next/navigation";

const RedirectPage: React.FC = () => {
  redirect("/dashboard")

  return null;
};

export default RedirectPage;
