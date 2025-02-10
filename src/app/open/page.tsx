"use client";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/input";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const OpenTicket = () => {
  const schema = z.object({
    email: z
      .string()
      .email("Digite o email do cliente para localizar.")
      .min(1, "O campo do email é obrigatório"),
  });
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  interface CustomerDataInfo {
    name: string;
    id: string;
  }
  const [customer, setCustomer] = useState<CustomerDataInfo | null>({
    id: "1",
    name: "hose",
  });

  return (
    <div className="w-full max-w-2xl mx-auto px-2">
      <h1 className="font-bold text-3xl text-center mt-24 ">Abrir Chamado</h1>
      <main className="flex flex-col mt-4 mb-2">
        {!customer ? (
          <form className="bg-slate-200 py-6 rounded border-2 px-2">
            <div className="flex flex-col gap-3">
              <Input
                placeholder="Digite o email aqui"
                type="text"
                name="email"
                register={register}
                error={errors.email?.message}
              />

              <button className="bg-blue-500 flex flex-row gap-3 items-center justify-center text-white font-bold  rounded h-11">
                Procurar Cliente
                <FiSearch size={24} color="#FFF" />
              </button>
            </div>
          </form>
        ) : (
          <div>teste</div>
        )}
      </main>
    </div>
  );
};

export default OpenTicket;
