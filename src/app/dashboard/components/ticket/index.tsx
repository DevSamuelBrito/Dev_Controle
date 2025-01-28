import { FiTrash2, FiFile } from "react-icons/fi";

export function TicketItem() {
  return (
    <>
      <tr className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-100 hover:bg-gray-200 duration-300 ">
        <td className="text-lef pl-1">Mercado do Silva</td>
        <td className="text-lef hidden sm:table-cell">01/02/2024</td>
        <td className="text-lef">
          <span className="bg-green-500 px-4 py-1 rounded">Aberto</span>
        </td>
        <td className="text-lef">
          <button className="mr-2">
            <FiTrash2 size={24} color="#EF4444" />
          </button>

          <button>
            <FiFile size={24} color="#3b82f6" />
          </button>
        </td>
      </tr>
    </>
  );
}
