import { NavLink } from 'react-router-dom';
import { subjectsData } from '../../constants/data';

export function Subjects() {
  return (
    <main className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 items-center justify-center">
      {subjectsData.map((item) => (
        <NavLink
          to={`/materias/${item.path}`}
          key={item.title}
          className="flex flex-col items-center justify-between gap-5 h-full text-white bg-[#0e0737] rounded-lg p-4 hover:bg-[#0e0737]/80 transition-colors duration-150"
        >
          <img src={item.image} alt="Imagem da matéria" className="w-48 hover:-translate-y-2 transition duration-300" />
          <span>{item.title}</span>
        </NavLink>
      ))}
    </main>
  )
}
