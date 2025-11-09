"use client";

import React, { createContext, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api/api";

// ---------- Interfaces ----------
interface User {
    _id: string;
    name: string;
    email: string;
    university: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

// ---------- Context ----------
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ---------- Provider ----------
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const queryClient = useQueryClient();

    const { data: user, isLoading } = useQuery<User | null>({
        queryKey: ["currentUser"],
        queryFn: async () => {
            const res = await api.get("/me");
            return res.data.user;
        },
        retry: false,
    });

    const loginMutation = useMutation({
        mutationFn: async (data: { email: string; password: string }) => {
            await api.post("/login", data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["currentUser"] });
        },
    });

    const logoutMutation = useMutation({
        mutationFn: async () => {
            await api.post("/logout");
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["currentUser"] });
        },
    });

    const login = async (email: string, password: string) => {
        await loginMutation.mutateAsync({ email, password });
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