import { Suspense } from "react";
import { RecentNFTGrid } from "./RecentNFTGrid";
import { SectionsContainer } from "ui";

export default function RecentPage() {
  return (
    <div className="flex flex-col gap-y-12 md:gap-y-16 lg:gap-y-20 w-full pt-8 pb-20">
      <SectionsContainer>
        <Suspense fallback={
          <div className="text-white flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple mx-auto mb-4"></div>
              <p>Loading recent NFTs...</p>
            </div>
          </div>
        }>
          <RecentNFTGrid />
        </Suspense>
      </SectionsContainer>
    </div>
  );
} 