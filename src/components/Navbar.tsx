import { List, ToggleRight } from 'phosphor-react';

export function Navbar() {
  return (
    <div className="flex justify-between items-center w-full text-white p-3">
      <button className="flex items-center gap-1 hover:scale-110 transition duration-150">
        <List size={28} />
        <p className="font-bold uppercase">Menu</p>
      </button>

      <button className="flex items-center gap-1">
        <ToggleRight size={28} />
        <p className="font-bold">Trocar tema</p>
      </button>
    </div>
  )
}
