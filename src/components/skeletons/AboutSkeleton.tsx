
import { Skeleton } from "@/components/ui/skeleton";

const AboutSkeleton = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header Skeleton */}
        <div className="mb-16">
          <Skeleton className="h-12 w-1/3 mb-6" />
          <div className="space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-5 w-3/4" />
          </div>
        </div>

        {/* Personal Story Skeleton */}
        <div className="notion-card p-8 mb-16">
          <Skeleton className="h-8 w-1/4 mb-6" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>

        {/* Experience Skeleton */}
        <div className="mb-16">
          <Skeleton className="h-8 w-1/4 mb-8" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="notion-card p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-48" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <Skeleton className="w-6 h-6 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Skeleton */}
        <div>
          <Skeleton className="h-8 w-1/3 mb-8" />
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="notion-card p-6">
                <Skeleton className="h-6 w-1/2 mb-4" />
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="flex items-center">
                      <Skeleton className="w-1.5 h-1.5 rounded-full mr-3" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkeleton;
