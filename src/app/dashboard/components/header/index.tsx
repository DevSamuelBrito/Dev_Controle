import { Container } from "@/components/container";
import Link from "next/link";

export function DashBoardHeader() {
  return (
    <Container>
      <header className="bg-black w-full p-3 my-4 flex rounded gap-4">
        <Link
          href="/dashboard"
          className="text-white hover:font-bold duration-300"
        >
          Chamados
        </Link>
        <Link
          href="/dashboard/customer"
          className="text-white hover:font-bold duration-300"
        >
          Clientes
        </Link>
      </header>
    </Container>
  );
}
