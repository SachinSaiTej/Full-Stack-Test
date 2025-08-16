import Image from "next/image";
import { TextNormalMono, TextSemiBoldSans, TextXSNormalMono } from "ui";

interface Props {
  id: number;
  image: string;
  title: string;
  createdAt: string;
}

export function RecentNFTCard({ title, image, createdAt }: Props) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-dark-gray rounded-20px overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative w-full h-[238px] md:h-[295px]">
        <Image
          src={image}
          alt={`Picture of ${title}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 315px"
          className="object-cover transition-transform duration-300 hover:scale-[1.05]"
          fill
          priority={false}
        />
      </div>

      <div className="pt-5 pb-[25px] px-30px">
        <TextSemiBoldSans tag="h3" className="text-[22px] pb-1 capitalize text-white">
          {title}
        </TextSemiBoldSans>
        
        <div className="pt-4">
          <div className="flex flex-col gap-2">
            <TextXSNormalMono className="text-gray-400">Created Date</TextXSNormalMono>
            <TextNormalMono className="text-white font-medium">{formatDate(createdAt)}</TextNormalMono>
          </div>
        </div>
      </div>
    </div>
  );
} 