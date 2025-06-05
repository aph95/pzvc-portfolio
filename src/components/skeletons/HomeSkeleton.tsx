
import { Skeleton } from "@/components/ui/skeleton";

const HomeSkeleton = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            {/* Title skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-16 w-3/4 mx-auto" />
              <Skeleton className="h-12 w-1/2 mx-auto" />
            </div>
            
            {/* Description skeleton */}
            <div className="space-y-3 max-w-2xl mx-auto">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-4/5 mx-auto" />
            </div>
            
            {/* Buttons skeleton */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Skeleton className="h-12 w-40" />
              <Skeleton className="h-12 w-48" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="notion-card p-8">
                <Skeleton className="w-12 h-12 rounded-lg mb-6" />
                <Skeleton className="h-6 w-3/4 mb-4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSkeleton;
