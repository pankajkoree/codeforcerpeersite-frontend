"use client";

import React, { createContext, useContext, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api/api";

// ---------- Interfaces ----------
interface User {
    _id: string;
    name: string;
    email: string;
    gender: string,
    university: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    refetchUser: () => void
}

// ---------- Context ----------
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ---------- Provider ----------
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const queryClient = useQueryClient();
    const [token, setToken] = useState<string | null>(null)

    const refetchUser = () => queryClient.invalidateQueries({ queryKey: ["currentUser"] });

    const loginMutation = useMutation({
        mutationKey: ['login'],
        mutationFn: async (data: { email: string; password: string }) => {
            try {
                const res = await api.post("/login", data, { withCredentials: true })
                return res.data
            } catch (error: any) {
                throw new Error(error.response?.data?.message || "Login failed")
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["currentUser"] });
        },
    });

    const logoutMutation = useMutation({
        mutationKey: ['logout'],
        mutationFn: async () => {
            await api.post("/logout", {}, { withCredentials: true });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["currentUser"] });
        },
    });

    const { data: user, isLoading } = useQuery<User | null>({
        queryKey: ["currentUser"],
        queryFn: async () => {
            if (!token) return null
            try {
                const res = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (res.data?.user) {
                    return res.data.user
                }
                return null;
            } catch (error) {
                return null
            }
        },
        enabled: !!token,
        retry: false,
        staleTime: 1000 * 60 * 5
    });


    const login = async (email: string, password: string) => {

        const data = await loginMutation.mutateAsync({ email, password });
        setToken(data.token)
        return data.data

    };

    const logout = async () => {
        await logoutMutation.mutateAsync();
    };



    return (
        <AuthContext.Provider
            value={{
                user: user ?? null,
                isAuthenticated: !!user,
                isLoading,
                login,
                logout,
                refetchUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// ---------- Hook ----------
export const useAuth = (): AuthContextType => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
    return ctx;
};