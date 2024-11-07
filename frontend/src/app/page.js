import React from "react";
import { CompanyCard } from "@/components/company-card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Shield,
  Clock,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const companies = [
    {
      name: "House of Edtech",
      logo: "https://github.com/polymet-ai.png",
      type: "Technology",
      description:
        "Leading AI solutions provider specializing in machine learning.",
      employees: "50-100",
      rating: 4.8,
    },
    {
      name: "TechCorp",
      logo: "https://picsum.photos/seed/tech1/200/200",
      type: "Software",
      description: "Enterprise software solutions for modern businesses.",
      employees: "100-200",
      rating: 4.5,
    },
    {
      name: "DataFlow",
      logo: "https://picsum.photos/seed/tech2/200/200",
      type: "Data",
      description: "Big data processing and analytics platform.",
      employees: "20-50",
      rating: 4.6,
    },
    {
      name: "CloudNine",
      logo: "https://picsum.photos/seed/tech3/200/200",
      type: "Cloud",
      description: "Cloud infrastructure and hosting solutions.",
      employees: "50-100",
      rating: 4.7,
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for quick task management",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security for your data",
    },
    {
      icon: Clock,
      title: "Time-Saving",
      description: "Streamlined workflows to boost productivity",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Work together seamlessly with your team",
    },
  ];

  const faqs = [
    {
      question: "How do I get started with TaskMaster?",
      answer:
        "Simply sign up for an account and follow our quick setup guide. You'll be managing tasks in minutes!",
    },
    {
      question: "Is TaskMaster free to use?",
      answer:
        "We offer both free and premium plans. The free plan includes all essential features for individual users.",
    },
    {
      question: "Can I collaborate with my team?",
      answer:
        "Yes! TaskMaster is built for collaboration. Share tasks, assign responsibilities, and track progress together.",
    },
    {
      question: "What makes TaskMaster different?",
      answer:
        "Our unique approach combines simplicity with powerful features, enhanced by AI-driven insights.",
    },
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <div className="text-center space-y-8">
        <h1
          className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient-x"
        >
          Welcome to TaskMaster
        </h1>
        <p
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Manage your tasks efficiently with our powerful todo application. Stay
          organized and boost your productivity.
        </p>
        <Button
          size="lg"
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
        >
        <Link href={"/todo"} className="flex">
          Get Started
          <ArrowRight
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
          />
          <div
            className="absolute inset-0 bg-white/20 transition-transform group-hover:translate-y-full"
          ></div>
        </Link>
        </Button>
      </div>

      {/* Companies Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {companies.map((company, index) => (
          <CompanyCard
            key={index}
            company={company}
          />
        ))}
      </div>

      {/* Advantages Section */}
      <div className="space-y-12">
        <h2
          className="text-4xl font-bold text-center text-white"
        >
          Why Choose TaskMaster?
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gray-900/50 rounded-2xl hover:bg-gray-800/50 transition-all duration-300"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <advantage.icon
                className="h-10 w-10 text-purple-500 mb-4"
              />
              <h3
                className="text-xl font-semibold text-white mb-2"
              >
                {advantage.title}
              </h3>
              <p className="text-gray-400">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Section */}
      <div
        className="relative p-8 bg-gray-900/50 rounded-2xl overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-50"
        ></div>
        <div className="relative space-y-8">
          <h2
            className="text-4xl font-bold text-center text-white mb-12"
          >
            How to Use TaskMaster
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div
              className="flex flex-col items-center text-center space-y-4"
            >
              <div
                className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center"
              >
                <span
                  className="text-2xl font-bold text-purple-500"
                >
                  1
                </span>
              </div>
              <h3
                className="text-xl font-semibold text-white"
              >
                Sign Up
              </h3>
              <p className="text-gray-400">
                Create your account in seconds
              </p>
            </div>
            <div
              className="flex flex-col items-center text-center space-y-4"
            >
              <div
                className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center"
              >
                <span
                  className="text-2xl font-bold text-purple-500"
                >
                  2
                </span>
              </div>
              <h3
                className="text-xl font-semibold text-white"
              >
                Create Tasks
              </h3>
              <p className="text-gray-400">
                Add and organize your tasks easily
              </p>
            </div>
            <div
              className="flex flex-col items-center text-center space-y-4"
            >
              <div
                className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center"
              >
                <span
                  className="text-2xl font-bold text-purple-500"
                >
                  3
                </span>
              </div>
              <h3
                className="text-xl font-semibold text-white"
              >
                Track Progress
              </h3>
              <p className="text-gray-400">
                Monitor and complete your tasks
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="space-y-8">
        <h2
          className="text-4xl font-bold text-center text-white"
        >
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
            >
              <AccordionTrigger
                className="text-white hover:text-purple-400 transition-colors"
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className="text-gray-400"
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA Section */}
      <div
        className="relative p-12 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl text-center space-y-6"
      >
        <Sparkles
          className="h-12 w-12 text-purple-400 mx-auto mb-6"
        />
        <h2
          className="text-4xl font-bold text-white"
        >
          Ready to Get Started?
        </h2>
        <p
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Join thousands of users who are already boosting their productivity
          with TaskMaster.
        </p>
        <Button
          size="lg"
          className="group relative overflow-hidden rounded-full bg-white text-purple-600 px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
        >
          <Link href={"/todo"} className="flex">
          Start For Free
          <ArrowRight
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
          />
          </Link>
        </Button>
      </div>
    </div>
  );
}
