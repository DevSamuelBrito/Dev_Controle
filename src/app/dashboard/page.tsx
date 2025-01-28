import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { TicketItem } from "./components/ticket";

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
          <Link
            href="/dashboard/new"
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Abrir Chamado
          </Link>
        </div>
        <table className="min-w-full my-2">
          <thead>
            <tr>
              <th className="font-medium text-left pl-1">CLIENTE</th>
              <th className="font-medium text-left hidden sm:table-cell">
                DATA DA CRIAÇÃO
              </th>
              <th className="font-medium text-left">STATUS</th>
              <th className="font-medium text-left">#</th>
            </tr>
          </thead>

          <tbody>
            <TicketItem />
            <TicketItem />
          </tbody>
        </table>
      </main>
    </Container>
  );
}
