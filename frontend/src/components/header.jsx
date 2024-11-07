"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckSquare, Moon, Sun, User, LogIn, KeyRound } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const tokenData = localStorage.getItem("token");
    if (tokenData) {
      setToken(tokenData);
    }
  },[]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href={"/"}
            className="flex items-center space-x-2 group transition-colors"
          >
            <CheckSquare className="h-6 w-6 text-purple-500 animate-pulse group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-white hover:text-purple-400 transition-colors">
              TaskMaster
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href={"/todo"}>
              <Button
                variant="ghost"
                className="relative group text-gray-400  transition-colors overflow-hidden"
              >
                <span>My Tasks</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
              </Button>
            </Link>

            {!token ? (
              <Link href={"/login"}>
                <Button
                  variant="ghost"
                  className="relative group text-gray-400  transition-colors overflow-hidden"
                >
                  <LogIn className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span>Login</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
                  <span className="absolute inset-0 bg-purple-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                </Button>
              </Link>
            ) : (
              <Link href={"/"} onClick={handleLogOut}>
                <Button
                  variant="ghost"
                  className="relative group text-gray-400  transition-colors overflow-hidden"
                >
                  {/* <LogIn className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" /> */}
                  <span>Log Out</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
                  <span className="absolute inset-0 bg-purple-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
