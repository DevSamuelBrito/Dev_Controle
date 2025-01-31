"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
  name:z.string().min(1, "campo é obrigatorio"),
})

export function NewCostumerForm() {

  const {} = useForm({
    resolver: zodResolver(schema)
  })

  return (
    <form>
      <label>Nome Completo:</label>
      <input type="text" placeholder="Nome Completo..." />
    </form>
  );
}
