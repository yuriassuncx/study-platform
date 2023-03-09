import { NavLink } from 'react-router-dom';
import { menuData } from '../constants/data';

import { Robot } from 'phosphor-react';
import { useApplication } from '../hooks/useApplication';

export function Sidebar() {
  const { logout } = useApplication();

  const activeLink = 'flex items-center gap-5 py-3 px-3 rounded-lg text-white bg-[#6b22fc] text-md w-full shadow-md shadow-violet-500/30';
  const normalLink = 'flex items-center gap-5 py-3 px-3 rounded-lg text-md text-white hover:bg-[#6b22fc] w-full';

  return (
    <section className="flex flex-col items-start gap-3 md:w-1/5 h-full lg:h-[45vh] bg-[#1f1a44] rounded-md p-3 drop-shadow-lg">
      {menuData.map((item) => (
        <NavLink
          to={`/${item.path}`}
          key={item.title}
          className={({ isActive }) => isActive ? activeLink : normalLink}
        >
          <div>{item.icon}</div>
          <p className="font-bold">{item.title}</p>
        </NavLink>
      ))}

      <button
        className={normalLink}
        onClick={logout}
      >
        <Robot size={22} />
        <p className="font-bold">Sair</p>
      </button>
    </section>
  )
}
