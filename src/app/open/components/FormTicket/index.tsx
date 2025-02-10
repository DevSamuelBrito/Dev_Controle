"use client";
import { Input } from "@/components/input";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CustomerDataInfo } from "@/app/open/page";
import { api } from "@/lib/api";

interface FormTicketProps {
  customer: CustomerDataInfo;
}

export function FormTicket({ customer }: FormTicketProps) {
  const schema = z.object({
    name: z.string().min(1, "O nome do chamado é obrigatório"),
    description: z.string().min(1, "Descreva um pouco sobre o seu problema..."),
  });

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function handleRegister(data: FormData) {
    const response = await api.post("/api/ticket", {
      name: data.name,
      description: data.description,
      customerId: customer.id,
    });
    setValue("name", "");
    setValue("description", "");
  }

  return (
    <form
      className="bg-slate-200 mt-6 px-4 py-6 rounded border-2"
      onSubmit={handleSubmit(handleRegister)}
    >
      <label className="mb-1 font-medium text-lg">Nome do Chamado:</label>
      <Input
        placeholder="Digite o nome do chamado"
        name="name"
        type="text"
        register={register}
        error={errors.name?.message}
      />
      <label className="mb-1 font-medium text-lg">Descreva o problema:</label>
      <textarea
        className="w-full border-2 rounded-md h-24 resize-none  px-2"
        placeholder="Descreva o seu problema..."
        id="description"
        {...register("description")}
      ></textarea>
      {errors.description && (
        <p className="bg-red-200 my-1 mt-1 mb-4">
          {errors.description.message}
        </p>
      )}
      <button
        type="submit"
        className="bg-blue-500 rounded-md w-full h-11 px-2 text-white font-bold"
      >
        Cadastrar
      </button>
    </form>
  );
}
