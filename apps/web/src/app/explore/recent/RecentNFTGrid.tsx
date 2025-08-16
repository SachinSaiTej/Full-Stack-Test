import { RecentNFTCard } from "../recent/RecentNFTCard";
import { TextNormalSans, TextSemiBoldSans } from "ui";

interface RecentCreation {
  id: number;
  title: string;
  image: string;
  createdAt: string;
}

async function fetchRecentCreations(): Promise<RecentCreation[]> {
  try {
    const response = await fetch('http://localhost:3002/api/creations/recent', {
      cache: 'no-store', // Ensure fresh data
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch recent creations');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching recent creations:', error);
    return [];
  }
}

export async function RecentNFTGrid() {
  const recentCreations = await fetchRecentCreations();

  if (recentCreations.length === 0) {
    return (
      <section className="flex flex-col gap-y-6 md:gap-y-10">
        <div>
          <TextSemiBoldSans
            tag="h1"
            className="text-lg md:text-[38px] mb-0 md:mb-4 text-purple"
          >
            Recent NFTs
          </TextSemiBoldSans>
          <TextNormalSans tag="p" className="md:text-[22px]">
            Discover the 5 most recently created NFTs
          </TextNormalSans>
        </div>
        <div className="text-center text-gray-400 py-20">
          <p>No recent NFTs found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-y-6 md:gap-y-10">
      <div>
        <TextSemiBoldSans
          tag="h1"
          className="text-lg md:text-[38px] mb-0 md:mb-4 text-purple"
        >
          Recent NFTs
        </TextSemiBoldSans>
        <TextNormalSans tag="p" className="md:text-[22px]">
          Discover the 5 most recently created NFTs
        </TextNormalSans>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-7">
          {recentCreations.map((creation: RecentCreation, index) => (
            <div 
              key={`recent-nft-${creation.id}`} 
              className="transition-transform hover:scale-[1.02] duration-300 ease-in-out"
            >
              <RecentNFTCard {...creation} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 