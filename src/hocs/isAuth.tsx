import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase.config";

export default function isAuth(Component: React.FC) {
    return function AuthComponent(props: any) {
        const router = useRouter();
        const [user, setUser] = useState<User>();

        useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                if(user == null) {
                    router.push('/');
                }
                setUser(user as User);
            });
        }, []);

        return user ? <Component {...props} />: null;
    }
}