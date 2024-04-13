import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "@/config/firebase.config";
import { Auth } from "@/models/user.model";
import { useRouter } from "next/router";
import { MessageTypes, Message } from "@/models/util.model";

export const AuthContext = createContext<any>(null);

type ComponentProps = {
    children: React.ReactNode, 
}


const AuthContextProvider = (props: ComponentProps) => {
    const [isLoading, setLoading] = useState(false);
    const [message, setMessage] = useState<Message>();

    const register = async ({ email, password }: Auth) => {
        setLoading(true);

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setMessage({ type: MessageTypes.SUCCESS, message: 'You have successfully registered.' });
        })
        .catch((error) => {
            setMessage({ type: MessageTypes.ERROR, message: error.message });
        }).finally(() => setLoading(false));
    }

    return (
        <AuthContext.Provider 
            value={{
                register,
                isLoading,
                message,
            }}
            {...props}
        />
    )
}

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext }