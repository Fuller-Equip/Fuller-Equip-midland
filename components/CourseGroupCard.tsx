"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

export interface SubCourse {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  courseUrl: string;
}

export interface CourseGroup {
  label: string;
  title: string;
  description: React.ReactNode;
  imageUrl: string;
  courses: SubCourse[];
}

interface CourseGroupCardProps {
  group: CourseGroup;
  defaultOpen?: boolean;
}

/**
 * CourseGroupCard Component
 *
 * A course group row that mirrors the CourseCollapsibleCard layout
 * (title + description left, image right) and expands to reveal the
 * courses that belong to the group as slim inline rows: small thumbnail,
 * gold "COURSE" eyebrow, title, one-line description, and a VIEW COURSE pill.
 * A left accent border and hairline dividers provide nesting cues.
 */
export function CourseGroupCard({
  group,
  defaultOpen = false,
}: CourseGroupCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      {/* Group Header Row — mirrors CourseCollapsibleCard layout exactly */}
      <div className="flex flex-col items-start w-full gap-4 sm:flex-row sm:gap-6 lg:gap-8">
        {/* Group Image — mobile-first, pushed right on sm+ */}
        <div className="relative order-first w-full overflow-hidden sm:w-35 md:w-48 lg:w-54 aspect-4/3 sm:aspect-auto sm:h-48 md:h-54 lg:h-64 shrink-0 sm:order-last">
          <Image
            src={group.imageUrl}
            alt={group.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 184px"
          />
        </div>

        {/* Group Content */}
        <div className="flex flex-col flex-1 gap-3 md:gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs md:text-sm font-normal leading-4 md:leading-5 uppercase text-[#cab777]">
              {group.label}
            </p>
            <h3 className="text-lg font-medium leading-6 text-gray-900 md:text-xl md:leading-7 font-reckless-medium">
              {group.title}
            </h3>
            <div className="flex flex-col gap-2 text-sm font-normal leading-4 text-gray-600 md:leading-5 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1">
              {group.description}
            </div>
          </div>

          {/* Expand / Collapse Trigger */}
          <CollapsibleTrigger asChild>
            <button
              aria-expanded={isOpen}
              className="inline-flex items-center cursor-pointer gap-1.5 md:gap-2 px-3 py-1.5 md:py-2 bg-black rounded-full shadow-sm text-[10px] md:text-xs font-semibold leading-4 text-white uppercase hover:bg-gray-900 transition-colors w-fit"
            >
              {isOpen ? "Hide Courses" : `View ${group.courses.length} Courses`}
              <ChevronDown
                className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
          </CollapsibleTrigger>

          {/* Expanded Sub-course Rows */}
          <CollapsibleContent className="overflow-hidden duration-300 data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
            <div className="flex flex-col mt-2 border-l-2 border-gray-200 pl-4 sm:pl-6 animate-in fade-in slide-in-from-top-2 duration-300">
              {group.courses.map((course, idx) => (
                <div key={course.id}>
                  {/* Slim course row: thumbnail left, content right */}
                  <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:gap-4">
                    {/* Small Thumbnail */}
                    <div className="relative w-full aspect-4/3 sm:w-24 sm:h-16 sm:aspect-auto overflow-hidden shrink-0">
                      <Image
                        src={course.imageUrl}
                        alt={course.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 96px"
                      />
                    </div>

                    {/* Sub-course Details */}
                    <div className="flex flex-col flex-1 min-w-0 gap-2 sm:flex-row sm:items-center sm:gap-4">
                      <div className="flex flex-col flex-1 min-w-0 gap-0.5">
                        <p className="text-[10px] font-normal leading-3.5 uppercase text-[#cab777]">
                          Course
                        </p>
                        <h2 className="text-lg font-medium leading-5 text-gray-900 font-reckless-medium">
                          {course.title}
                        </h2>
                        {/* <p className="text-xs font-normal leading-4 text-gray-500 line-clamp-1">
                          {course.description}
                        </p> */}
                      </div>
                      <Link
                        href={course.courseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center cursor-pointer justify-center px-3 py-1.5 bg-black rounded-full text-[10px] font-semibold leading-4 text-white uppercase hover:bg-gray-900 transition-colors whitespace-nowrap w-fit shrink-0"
                      >
                        View Course
                      </Link>
                    </div>
                  </div>

                  {/* Hairline divider between sub-courses */}
                  {idx < group.courses.length - 1 && (
                    <div className="w-full h-px bg-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </div>
      </div>
    </Collapsible>
  );
}
