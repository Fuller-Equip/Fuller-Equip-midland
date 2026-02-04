"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Module {
  id: string;
  title: string;
  duration: string;
}

interface CourseCollapsibleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  modules: Module[];
  defaultOpen?: boolean;
}

/**
 * Newspaper Icon Component
 * Matches the Figma design for module type indicator
 */
function NewspaperIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * CourseCollapsibleCard Component
 *
 * A course card with expandable/collapsible module list.
 * Uses shadcn/ui Collapsible primitive for smooth animations.
 * Fully responsive for mobile, tablet, and desktop.
 */
export function CourseCollapsibleCard({
  title,
  description,
  imageUrl,
  modules,
  defaultOpen = false,
}: CourseCollapsibleCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const hasModules = modules.length > 0;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex flex-col items-start w-full gap-4 sm:flex-row sm:gap-6 lg:gap-8">
        {/* Course Image - Shows first on mobile, right side on desktop */}
        <div className="relative order-first w-full overflow-hidden sm:w-35 md:w-48 lg:w-54 aspect-4/3 sm:aspect-auto sm:h-48 md:h-54 lg:h-64 shrink-0 sm:order-last">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 740px) 100vw, 184px"
          />
        </div>

        {/* Course Content */}
        <div className="flex flex-col flex-1 gap-3 md:gap-4">
          {/* Course Header */}
          <div className="flex flex-col gap-1">
            <p className="text-xs md:text-sm font-normal leading-4 md:leading-5 uppercase text-[#cab777]">
              Course
            </p>
            <h3 className="text-lg font-medium leading-6 text-gray-900 md:text-xl md:leading-7 font-reckless-medium">
              {title}
            </h3>
            <p className="text-xs font-normal leading-4 text-gray-600 md:text-sm md:leading-5">
              {description}
            </p>
          </div>
          {/* Toggle Button */}
          {hasModules && (
            <CollapsibleTrigger asChild>
              <button className="inline-flex items-center justify-center gap-1.5 md:gap-2 px-3 py-1.5 md:py-2 bg-black rounded-full shadow-sm text-[10px] md:text-xs font-semibold leading-4 text-white uppercase hover:bg-gray-900 transition-colors w-fit">
                {isOpen ? "HIDE COURSE" : "VIEW COURSE"}
                {isOpen ? (
                  <ChevronUp className="w-3 h-3 md:w-4 md:h-4" />
                ) : (
                  <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                )}
              </button>
            </CollapsibleTrigger>
          )}

          {/* Collapsible Modules */}
          {hasModules && (
            <CollapsibleContent>
              <div className="flex flex-col w-full gap-2 md:gap-1 lg:max-w-3xl">
                {modules.map((module) => (
                  <div
                    key={module.id}
                    className="flex items-stretch overflow-hidden bg-white border border-gray-200"
                  >
                    {/* Color Bar */}
                    <div className="w-1 bg-[#6c83b0] shrink-0" />

                    {/* Module Content */}
                    <div className="flex flex-col flex-1 gap-2 px-3 py-3 sm:flex-row sm:items-center sm:gap-3 md:px-4 md:py-4">
                      {/* Icon and Title/Duration */}
                      <div className="flex items-start flex-1 gap-2 sm:items-center sm:gap-3">
                        {/* Icon */}
                        <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 shrink-0">
                          <NewspaperIcon className="w-5 h-5 text-gray-900 md:w-6 md:h-6" />
                        </div>

                        {/* Title and Duration */}
                        <div className="flex flex-col flex-1 min-w-0">
                          <h4 className="text-sm font-bold leading-5 text-gray-900 truncate md:text-lg md:leading-6 font-reckless">
                            {module.title}
                          </h4>
                          <p className="text-xs font-medium leading-4 text-gray-400 md:text-sm md:leading-5">
                            {module.duration}
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className="w-full px-4 py-2 text-xs font-medium leading-4 text-gray-900 transition-colors bg-white border border-gray-300 rounded-full shadow-sm sm:w-auto md:px-6 md:text-sm md:leading-5 hover:bg-gray-50 whitespace-nowrap">
                        Launch Module
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          )}
        </div>
      </div>
    </Collapsible>
  );
}
