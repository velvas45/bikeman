import React, { useContext } from 'react'
import { auth }  from '../firebaseAuth/base'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = React.useState()
    const [loading, setLoading] = React.useState(true)
    
    function register(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }

    function logout(){
        return auth.signOut()
    }

    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }

    React.useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unSubscribe
    },[])

    const value={
        currentUser,
        register,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
