import { createContext, useState } from 'react';
import { toast } from 'react-hot-toast';

import { GetSubscriberByEmailQuery } from '../graphql/generated';

type User = {
  name?: string;
  email?: string;
  languageType?: string | null;
}

type AppContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isActiveMenu: boolean;
  setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  signIn: (data?: GetSubscriberByEmailQuery | undefined, password?: string) => void;
  logout: () => void;
}

type ChildrenProps = {
  children: React.ReactNode;
}

export const AppContext = createContext({} as AppContextType);

export function AppProvider({ children }: ChildrenProps) {
  const [user, setUser] = useState<User | null>(() => 
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : null
  );

  const [isActiveMenu, setIsActiveMenu] = useState(false);

  async function signIn(data?: GetSubscriberByEmailQuery | undefined, password?: string) {
    const isUserValid = !!data;

    if (!isUserValid) {
      alert("Usuário não encontrado!");

      return;
    }

    if (password === data.subscriber?.password) {
      localStorage.setItem("user", JSON.stringify({
        id: data?.subscriber?.id,
        name: data?.subscriber?.name,
        email: data?.subscriber?.email,
        languageType: data.subscriber?.languageType,
        password: undefined,
      }));

      setUser({
        name: data.subscriber?.name,
        email: data.subscriber?.email,
        languageType: data.subscriber?.languageType,
      });

      toast.success("Logado com sucesso!", {
        position: 'bottom-center',
      });
    } else {
      toast.error("Email ou senha está incorreto", {
        position: 'bottom-center',
      });
    }
  }

  async function logout() {
    setUser(null);
    localStorage.removeItem("user");

    toast.success("Saiu com sucesso!", {
      position: 'bottom-center',
    });
  }
  
  return (
    <AppContext.Provider value={{ isActiveMenu, setIsActiveMenu, user, setUser, signIn, logout }}>
      {children}
    </AppContext.Provider>
  )
}
