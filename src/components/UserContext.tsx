import React, { createContext, useContext, useState } from 'react';

type UserContextType = {
  username: string | null;
  setUsername: (username: string | null) => void;
};

const UserContext = createContext<UserContextType>({
  username: null,
  setUsername: () => {},
});

export const useUserContext = () => useContext(UserContext);

type UserProviderProps = {
  username: string | null;
  children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ username: initialUsername, children }) => {
  const [username, setUsername] = useState<string | null>(initialUsername);
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
