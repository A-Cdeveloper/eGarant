import FilterInput from "@/components/filters/FilterInput";
import FilterSelector from "@/components/filters/FilterSelector";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import { authSecurityPatch } from "@/lib/authSecurityPatch";
import { Suspense } from "react";
import { Invoices } from "./_components/Invoices";

const InvoicesPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  await authSecurityPatch();
  const { filter, sort } = await searchParams;
  return (
    <>
      <h2>Moji računi</h2>
      <Suspense fallback={<TableSkeleton n={5} />}>
        <div className="my-3 flex flex-wrap justify-between gap-3 sm:gap-0">
          <div className="w-full sm:w-1/2 max-w-full sm:max-w-[280px]">
            <FilterInput />
          </div>
          <div className="w-full sm:w-1/2 max-w-full sm:max-w-[280px]">
            <FilterSelector />
          </div>
        </div>

        <Invoices filter={filter} sort={sort || ""} />
      </Suspense>
    </>
  );
};

export default InvoicesPage;
