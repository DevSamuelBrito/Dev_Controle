import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CardCustomer } from "@/app/dashboard/customer/components/card";

export default async function Customer() {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session || !session.user) {
    redirect("/");
  }
  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex item-center justify-between">
          <h1 className="text-3xl font-bold">Meus Clientes</h1>
          <Link
            href="/dashboard/customer/new"
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Novo Cliente
          </Link>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <CardCustomer />
          <CardCustomer />
          <CardCustomer />
        </section>
      </main>
    </Container>
  );
}
