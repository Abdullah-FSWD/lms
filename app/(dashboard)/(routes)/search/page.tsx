import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { SearchInput } from "@/components/seach-input";
import { getCourses } from "@/actions/get-courses";

import { Categories } from "./_components/categories";
import { CoursesList } from "@/components/courses-list";
import { Suspense } from "react";

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/");
  }
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCourses({
    userId,
    ...searchParams,
  });
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <div className="px-6 pt-6 md:hidden md:mb-0 block">
          <SearchInput />
        </div>
      </Suspense>
      <div className="p-6 space-y-4">
        <Suspense fallback={<div>loading...</div>}>
          <Categories items={categories} />
        </Suspense>
        <Suspense fallback={<div>loading...</div>}>
          <CoursesList items={courses} />
        </Suspense>
      </div>
    </>
  );
};
export default SearchPage;
