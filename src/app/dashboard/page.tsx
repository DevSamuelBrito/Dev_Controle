import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <Container>
      <main className="mt-9 b-2">
        <div className="flex item-center justify-between">
          <h1 className="text-3xl font-bold">Chamados</h1>
          <Link href="/dashboard/new" className="bg-blue-500 text-white px-4 py-1 rounded">
          Abrir Chamado
          </Link>
        </div>
      </main>
    </Container>
  );
}
