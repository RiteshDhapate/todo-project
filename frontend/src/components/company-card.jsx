import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Star } from "lucide-react";

export function CompanyCard({ company }) {
  return (
    <div className="relative group">
      {/* Animated border gradient */}
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"
      ></div>

      <Card
        className="relative bg-gray-900/90 rounded-xl"
      >
        <CardContent className="p-6 space-y-4">
          <div
            className="flex items-center justify-between"
          >
            <Avatar
              className="h-12 w-12 ring-2 ring-purple-500/20"
            >
              <AvatarImage
                src={company.logo}
                alt={company.name}
              />
              <AvatarFallback>
                {company.name[0]}
              </AvatarFallback>
            </Avatar>
            <Badge
              variant="outline"
              className="bg-transparent border-purple-500/20 text-purple-400"
            >
              {company.type}
            </Badge>
          </div>

          <div>
            <h3
              className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors"
            >
              {company.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {company.description}
            </p>
          </div>

          <div
            className="flex items-center justify-between text-sm text-gray-400"
          >
            <div
              className="flex items-center space-x-2"
            >
              <Users
                className="h-4 w-4 text-purple-400"
              />
              <span>
                {company.employees} employees
              </span>
            </div>
            <div
              className="flex items-center space-x-1"
            >
              <Star
                className="h-4 w-4 text-yellow-500"
              />
              <span>{company.rating}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
