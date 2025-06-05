
import { Skeleton } from "@/components/ui/skeleton";

const ProjectsSkeleton = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Skeleton */}
        <div className="mb-16">
          <Skeleton className="h-12 w-1/3 mb-6" />
          <div className="space-y-3 max-w-3xl">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
          </div>
        </div>

        {/* Projects Grid Skeleton */}
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="notion-card overflow-hidden">
              <div className="md:flex">
                {/* Project Image Skeleton */}
                <div className="md:w-1/2">
                  <Skeleton className="aspect-video w-full" />
                </div>

                {/* Project Info Skeleton */}
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Skeleton className="h-4 w-20" />
                    <span className="text-gray-300">•</span>
                    <Skeleton className="h-4 w-12" />
                  </div>
                  
                  <Skeleton className="h-8 w-3/4 mb-4" />
                  
                  <div className="space-y-2 mb-6">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {[1, 2, 3, 4].map((j) => (
                      <Skeleton key={j} className="h-6 w-20 rounded-full" />
                    ))}
                  </div>

                  <Skeleton className="h-5 w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section Skeleton */}
        <div className="mt-20 text-center">
          <div className="notion-card p-12">
            <Skeleton className="h-8 w-1/2 mx-auto mb-4" />
            <div className="space-y-2 mb-8 max-w-2xl mx-auto">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4 mx-auto" />
            </div>
            <Skeleton className="h-12 w-32 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSkeleton;
