import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  const { id } = await request.json();

  const findTicket = await prismaClient.ticket.findUnique({
    where: {
      id: id as string,
    },
  });

  if (!findTicket) {
    return NextResponse.json(
      { error: { message: "Failed to update" } },
      { status: 400 }
    );
  }

  try {
    await prismaClient.ticket.update({
      where: {
        id: id as string,
      },
      data: {
        status: "FECHADO",
      },
    });

    return NextResponse.json({ message: "Chamado atualizado" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: { message: "Failed to update" } },
      { status: 400 }
    );
  }
}

export async function POST(request: Request) {
  const { name, description, customerId } = await request.json();
  if (!customerId || !name || !description) {
    return NextResponse.json(
      { error: { message: "Failed to create new Ticket" } },
      { status: 400 }
    );
  }
  try {
    await prismaClient.ticket.create({
      data: {
        name: name,
        description: description,
        status: "ABERTO",
        customerId: customerId,
      },
    });
    return NextResponse.json({ message: "Chamado criado com sucesso!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: { message: "Failed to create new Ticket" } },
      { status: 400 }
    );
  }

  return NextResponse.json({ message: "Chamado criado com sucesso!" });
}
