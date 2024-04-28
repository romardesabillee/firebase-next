import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";
import { useEffect } from "react";

export default function isAuth(Component: React.FC) {
    return function AuthComponent(props: any) {
        const user = useUser();
        const router = useRouter();

        useEffect(() => {
            if (user == null) {
                router.push('/');
            }
        }, []);

        return user ? <Component {...props} /> : null;
    }
}