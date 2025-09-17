import {useUser} from "../../hooks/userUser";
import {useRouter} from "expo-router";
import {useEffect, ReactNode} from "react";
import { ThemedLoader } from "../ThemedLoader";

interface UserOnlyProps {
    children: ReactNode;
}

const UserOnly = ({ children }: UserOnlyProps) => {
    // @ts-ignore
    const { user, authChecked } = useUser()
    const router = useRouter()

    useEffect(() => {
        // if the user is null and authChecked is true, redirect to the login page
        if (authChecked && user === null) {
            router.replace('/login')
        }
    }, [user, authChecked, router])
    
    // if the user is null and authChecked is false, show a loading message
    if (!authChecked || user === null) {
        return (
            //Themed activity indicator
            <ThemedLoader />
        )
    }

    // if the user is not null, show children components (layout file)
    return children
}

export default UserOnly