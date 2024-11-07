"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, KeyRound, Mail } from "lucide-react";
// import { Link } from "react-router-dom";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import Link from "next/link";

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP submitted:", otp);
  };

  return (
    <div
      className="h-full flex items-center justify-center relative overflow-hidden"
    >

      <Card
        className="w-full max-w-md mx-4 relative z-10 animate-fade-up backdrop-blur-lg bg-black/40 border-2 border-white/10 group"
      >
        {/* Animated border gradient */}
        <div
          className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient blur"
        ></div>

        <div
          className="relative bg-black/60 rounded-lg p-6"
        >
          <CardHeader
            className="space-y-1 text-center pb-8"
          >
            <div
              className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <KeyRound
                className="w-8 h-8 text-purple-500"
              />
            </div>
            <CardTitle
              className="text-3xl font-bold tracking-tight text-white"
            >
              Verify Your Email
            </CardTitle>
            <p className="text-gray-400">
              We've sent a verification code to your email
            </p>
            <div
              className="flex items-center justify-center gap-2 mt-2"
            >
              <Mail
                className="w-4 h-4 text-purple-500"
              />
              <span
                className="text-sm text-gray-400"
              >
                example@email.com
              </span>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div className="space-y-4">
                <InputOTP
                  value={otp}
                  onChange={setOtp}
                  maxLength={6}
                  className="gap-2 text-white flex justify-center"
                >
                  <InputOTPGroup className="gap-2">
                    <InputOTPSlot
                      index={0}
                      className="h-12 w-12 border-white/10 bg-black/50 text-white"
                    />

                    <InputOTPSlot
                      index={1}
                      className="h-12 w-12 border-white/10 bg-black/50 text-white"
                    />

                    <InputOTPSlot
                      index={2}
                      className="h-12 w-12 border-white/10 bg-black/50 text-white"
                    />
                  </InputOTPGroup>
                  <InputOTPSeparator
                    className="text-white"
                  >
                    -
                  </InputOTPSeparator>
                  <InputOTPGroup className="gap-2">
                    <InputOTPSlot
                      index={3}
                      className="h-12 w-12 border-white/10 bg-black/50 text-white"
                    />

                    <InputOTPSlot
                      index={4}
                      className="h-12 w-12 border-white/10 bg-black/50 text-white"
                    />

                    <InputOTPSlot
                      index={5}
                      className="h-12 w-12 border-white/10 bg-black/50 text-white"
                    />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button
                type="submit"
                className="w-full group relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300"
              >
                <span
                  className="relative z-10 flex items-center justify-center"
                >
                  Verify Code
                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
                <div
                  className="absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300"
                ></div>
              </Button>
            </form>

            <div className="text-center space-y-4">
              <p className="text-sm text-gray-400">
                Didn't receive the code?{" "}
                <button
                  className="text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                >
                  Resend
                </button>
              </p>

              <Link
                href={"/login"}
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors relative group/link inline-block"
              >
                <span className="font-semibold">
                  Back to Login
                </span>
                <span
                  className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-purple-400 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"
                ></span>
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
