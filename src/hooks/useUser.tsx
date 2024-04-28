import { auth } from "@/config/firebase.config";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


export default function useUser() {

    const [user, setUser] = useState<User>();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user as User);
        });
    }, []);

    return user;
}