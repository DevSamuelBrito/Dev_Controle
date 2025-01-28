import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function NewCustomer() {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session || !session.user) {
    redirect("/");
  }
  return (
    <Container>
      <div>pagina de novos clientes</div>
    </Container>
  );
}
