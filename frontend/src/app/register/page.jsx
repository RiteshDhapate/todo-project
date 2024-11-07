"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, User, ArrowRight, Loader } from "lucide-react";
import Link from "next/link";
import { registerUser } from "@/functions/register.function";
import { useRouter } from 'nextjs-toploader/app';

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

const router = useRouter();
  
  const handleRegister = async() => {
    try {
     await registerUser(name,email,password,setLoading,setError,router);
    } catch (error) {
      console.log("error",error);
    }
  };

  return (
    <div className="h-screen/2 flex items-center justify-center relative overflow-hidden">
      <Card className="w-full max-w-md mx-4 relative z-10 animate-fade-up backdrop-blur-lg bg-black/40 border-2 border-white/10 group">
        {/* Animated border gradient */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient blur"></div>

        <div className="relative bg-black/60 rounded-lg p-6">
          <CardHeader className="space-y-1 text-center pb-8">
            <CardTitle className="text-3xl font-bold tracking-tight text-white">
              Create Account
            </CardTitle>
            <p className="text-gray-400">
              Enter your information to get started
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            <div className="space-y-4">
              <div className="relative group/input">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-hover/input:text-purple-400 transition-colors duration-300" />
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="pl-10 py-5 bg-black/50 border-white/10 text-white placeholder:text-gray-400 focus:border-purple-500 transition-all duration-300 hover:border-white/20"
                />

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-pink-500 to-purple-500 group-hover/input:w-full transition-all duration-500"></div>
              </div>

              <div className="relative group/input">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-hover/input:text-purple-400 transition-colors duration-300" />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 py-5 bg-black/50 border-white/10 text-white placeholder:text-gray-400 focus:border-purple-500 transition-all duration-300 hover:border-white/20"
                />

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-pink-500 to-purple-500 group-hover/input:w-full transition-all duration-500"></div>
              </div>

              <div className="relative group/input">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-hover/input:text-purple-400 transition-colors duration-300" />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 py-5 bg-black/50 border-white/10 text-white placeholder:text-gray-400 focus:border-purple-500 transition-all duration-300 hover:border-white/20"
                />

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-pink-500 to-purple-500 group-hover/input:w-full transition-all duration-500"></div>
              </div>
            </div>

            <Button
              onClick={handleRegister}
              disabled={loading}
              className="w-full group relative overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center">
                {loading ? (
                  <Loader className="animate-spin" />
                ) : (
                  <>
                    Register
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300"></div>
            </Button>
            {error&&<div className="text-red-700 uppercase font-semibold">{error}</div>}

            <div className="text-center">
              <Link
                href={"/login"}
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors relative group/link"
              >
                Already have an account?{" "}
                <span className="font-semibold">Login</span>
                <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-purple-400 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
