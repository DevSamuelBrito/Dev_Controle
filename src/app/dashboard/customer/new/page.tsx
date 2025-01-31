import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { NewCostumerForm } from "../components/form";

export default async function NewCustomer() {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session || !session.user) {
    redirect("/");
  }
  return (
    <Container>
      <main className="flex flex-col mt-9 mb-2">
        <div className="flex items-center gap-3">
          <Link
            className="bg-gray-800 text-white px-3 py-1 rounded"
            href="/dashboard/customer"
          >
            Voltar
          </Link>
          <h1 className="text-3xl font-bold">Novo Cliente</h1>
        </div>
        <NewCostumerForm /> 
      </main>
    </Container>
  );
}
