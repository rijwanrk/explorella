

import React, { useEffect, useMemo } from "react";
import Card from "../shared/card/Card";
import SkeletonCard from "../shared/card/SkeletonCard";
import { useGetFilteredRentsMutation } from "@/services/rent/rentApi";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const FilteredTours = () => {
  const filter = useSelector((state) => state.filter);
  const [addFilter, { data, isLoading, error }] = useGetFilteredRentsMutation();
  const tours = useMemo(() => data?.data || [], [data]);

  useEffect(() => {
    if (isLoading) {
      toast.loading("Fetching filtered rents...", { id: "filteredTours" });
    }

    if (data) {
      toast.success(data?.message, { id: "filteredTours" });
    }

    if (error?.data) {
      toast.error(error?.data?.message, { id: "filteredTours" });
    }
  }, [data, isLoading, error]);

  useEffect(() => {
    addFilter(filter);
  }, [addFilter, filter]);

  return (
    <section className="lg:col-span-9 md:col-span-8 col-span-12 flex flex-col gap-y-4">
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {isLoading && tours?.length === 0
          ? Array.from({ length: 9 }, (_, index) => (
              <SkeletonCard key={index} />
            ))
          : tours.map((tour) => <Card key={tour._id} tour={tour} />)}
        {!isLoading && tours?.length === 0 && (
          <span>No tours found for this filter !</span>
        )}
      </div>
    </section>
  );
};

export default FilteredTours;
