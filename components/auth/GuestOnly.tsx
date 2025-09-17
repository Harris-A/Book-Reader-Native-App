import {useUser} from "../../hooks/userUser";
import {useRouter} from "expo-router";
import {useEffect, ReactNode} from "react";
import { ThemedLoader } from "../ThemedLoader";

interface GuestOnlyProps {
    children: ReactNode;
}

const GuestOnly = ({ children }: GuestOnlyProps) => {
    // @ts-ignore
    const { user, authChecked } = useUser()
    const router = useRouter()

    useEffect(() => {
        // if the user is not null and authChecked is true, redirect to the profile page
        if (authChecked && user !== null) {
            router.replace('/profile')
        }
    }, [user, authChecked])

    // if the user exists, show a loading message, do not render children components
    if (!authChecked || user) {
        return (
            // Themed activity indicator
            <ThemedLoader />
        )
    }

    return children
}

export default GuestOnly