import React, { createContext, useContext } from 'react';

const UserContext = createContext<{ username: string | null }>({ username: null });

export const useUserContext = () => useContext(UserContext);

export const UserProvider: React.FC<{ username: string; children: React.ReactNode }> = ({ username, children }) => (
    <UserContext.Provider value={{ username }}>
        {children}
    </UserContext.Provider>
);
