"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "campo é obrigatorio"),
  email: z
    .string()
    .email("Digite um email valido")
    .min(1, "o campo é obrigatorio"),
  phone: z.string().refine(
    (value) => {
      return (
        /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) ||
        /^\d{2}\s\d{9}$/.test(value) ||
        /^\d{11}$/.test(value)
      );
    },
    { message: "O numero de telefone deve estar (17) 123456789" }
  ),
  address: z.string().min(1, "campo é obrigatorio"),
});

type FormData = z.infer<typeof schema>;

export function NewCostumerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form className="flex flex-col mt-6">
      <label className="mb-1 text-lg font-medium">Nome Completo:</label>
      <Input />
    </form>
  );
}
