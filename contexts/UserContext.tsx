import {createContext, useState, ReactNode, useEffect} from 'react';
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

interface User {
    $id: string;
    email: string;
    name?: string;
}

interface UserContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [authChecked, setAuthChecked] = useState(false);  // flag to set authentication status as false

    async function login(email: string, password: string){
        try {
            await account.createEmailPasswordSession(email, password)

            // reaches to appwrite and asks for a session if there is one
            const response = await account.get()
            setUser(response)
        } catch (error) {
            // @ts-ignore
            throw Error(error)
        }
    }

    async function register(email: string, password: string) {
        try {
            await account.create(ID.unique(), email, password)
            await login(email, password)
        } catch (error) {
            // @ts-ignore
            throw Error(error.message);
        }
    }

    async function logout(): Promise<void> {
        // stop current user session and log user out.
        await account.deleteSession("current")
        setUser(null)
    }

    async function getInitialUser() {
        try {
            const response = await account.get()
            setUser(response)
        } catch (error) {
            setUser(null)
        } finally {
            setAuthChecked(true)   // check user authentication status and update the flag
        }
    }

    useEffect(() =>  {
        getInitialUser()
    }, [])

    return (
        <UserContext.Provider value={{ user, login, register, logout, authChecked }}>
            {children}
        </UserContext.Provider>
    );
}