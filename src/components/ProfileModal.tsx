import { useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { useApplication } from '../hooks/useApplication';

import { Check, CircleNotch } from 'phosphor-react';
import { languages } from '../constants/data';
import { useUpdateSubscriberByEmailMutation } from '../graphql/generated';
import { toast } from 'react-hot-toast';

export function ProfileModal() {
  const { user } = useApplication();

  const [language, setLanguage] = useState(languages[0].title);

  const [updateSubscriber, { loading }] = useUpdateSubscriberByEmailMutation();

  async function handleUpdateSubscriber() {
    await updateSubscriber({
      variables: {
        email: user?.email!,
        language: language,
      }
    })

    toast.success("Usuário atualizado!", {
      position: 'bottom-center',
    });
  }

  return (
    <Dialog.Portal className="relative">
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-violet-500 py-4 px-4 sm:py-8 sm:px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[350px] sm:w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">
          Edite o seu perfil
        </Dialog.Title>

        <div className="mt-6 sm:mt-8 flex flex-col gap-2 sm:gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-bold">Seu nome</label>

            <input
              name="name"
              id="name"
              type="text"
              value={user?.name}
              readOnly={true}
              className="bg-white py-3 px-4 rounded text-sm text-black placeholder:text-zinc-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="text-sm sm:text-base font-bold">Língua Estrangeira</label>
            <select
              name="game"
              id="game"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white py-3 px-4 rounded text-sm text-black placeholder:text-zinc-500"
            >
              <option disabled>Selecione a sua linguagem</option>

              {languages.map((item) => {
                return <option key={item.title} value={item.title}>{item.title}</option>
              })}
            </select>
          </div>
          
          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-red-500 px-5 h-12 rounded-md font-semibold hover:bg-red-600 transition-colors duration-150"
            >
              Cancelar
            </Dialog.Close>

            <button
              onClick={handleUpdateSubscriber}
              disabled={!language || loading}
              className="bg-emerald-400 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-emerald-500 transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-75"
            >
              {loading ? (
                <CircleNotch className="flex-1 animate-spin" />
              ) : (
                <Check className="w-6 h-6" />
              )}
              Confirmar
            </button>
          </footer>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
