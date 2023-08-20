import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getUserData } from '../helpers';
import { GitHubUser } from '../types/types';
import { ERROR_REASON_CODES } from '../constants';

interface UserContextType {
  userData: GitHubUser | null;
  error: string | null;
  searchUser: (username: string) => Promise<void>;
  clearUser: () => void;
  setError: (error: string | null) => void;
  setUserData: (data: GitHubUser | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [error, setError] = useState<string | null>(null);

  const searchUser = async (username: string) => {
    setError(null);

    try {
      const data: GitHubUser | null = await getUserData(username);
      setUserData(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  const clearUser = () => {
    setUserData(null);
    setError(null);
  };

  return (
    <UserContext.Provider value={{ userData, error, searchUser, clearUser, setError, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(ERROR_REASON_CODES.CONTEXT_ERROR);
  }
  return context;
};
