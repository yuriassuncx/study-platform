import { NotePencil } from "phosphor-react";
import { useApplication } from "../hooks/useApplication";

export function ProfileSection() {
  const { user } = useApplication();

  return (
    <section className="flex flex-col w-full gap-1 pt-24">
      <div className="flex items-center justify-between bg-violet-500 rounded-lg h-[140px] p-4 shadow-lg shadow-violet-500">
        <div className="flex items-center text-center gap-3">
          <img src="/profilePicture.png" alt="Imagem de Perfil" className="w-32 h-32 cursor-pointer rounded-full hover:-translate-y-3 duration-200 transition" />
          <span className="text-white font-bold text-2xl">Olá, {user?.name}!</span>
        </div>

        <div className="flex flex-col items-end gap-1 text-white font-bold">
          <NotePencil
            size={20}
            color="#47f0ce"
            weight="bold"
            className="absolute -translate-y-[175%] sm:-translate-y-3/4 cursor-pointer hover:opacity-80"
          />
          
          <div className="hidden sm:flex items-center gap-2 pt-4">
            <span className="text-yellow-300">Email:</span>
            <p>{user?.email}</p>
          </div>
          
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-emerald-300">Língua Estrangeira:</span>
            <p>Inglês</p>
          </div>
        </div>
      </div>
    </section>
  )
}
