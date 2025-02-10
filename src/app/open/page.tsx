"use client";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormTicket } from "./components/FormTicket";
import { Input } from "@/components/input";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { api } from "@/lib/api";
export interface CustomerDataInfo {
  name: string;
  id: string;
}

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
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [customer, setCustomer] = useState<CustomerDataInfo | null>(null);

  function handleClearCustomer() {
    setValue("email", "");
    setCustomer(null);
  }

  async function handleSearchCustomer(data: FormData) {
    const response = await api.get("/api/customer", {
      params: {
        email: data.email,
      },
    });

    if (response.data === null) {
      setError("email", {
        type: "custom",
        message: "Ops esse cliente não foi encontrado!",
      });
      return;
    }

    setCustomer({
      id: response.data.id,
      name: response.data.name,
    });
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-2">
      <h1 className="font-bold text-3xl text-center mt-24 ">Abrir Chamado</h1>
      <main className="flex flex-col mt-4 mb-2">
        {!customer ? (
          <form
            onSubmit={handleSubmit(handleSearchCustomer)}
            className="bg-slate-200 py-6 rounded border-2 px-2"
          >
            <div className="flex flex-col gap-3">
              <Input
                placeholder="Digite o email aqui"
                type="text"
                name="email"
                register={register}
                error={errors.email?.message}
              />

              <button
                type="submit"
                className="bg-blue-500 flex flex-row gap-3 items-center justify-center text-white font-bold  rounded h-11"
              >
                Procurar Cliente
                <FiSearch size={24} color="#FFF" />
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-slate-200 py-6 px-4 rounded border-2  flex  items-center justify-between">
            <p className="text-lg">Cliente selecionado: 
              <strong> {customer.name}</strong>
            </p>
            <button
              className="bg-red-600 h-11  px-2 flex items-center justify-center rounded"
              onClick={handleClearCustomer}
            >
              <FiX size={24} color="#FFF" />
            </button>
          </div>
        )}

        {customer !== null && <FormTicket customer={customer}/>}
      </main>
    </div>
  );
};

export default OpenTicket;
