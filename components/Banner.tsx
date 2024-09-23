type BannerProps = {
  content: string
}

export default function Banner({ content }: BannerProps) {
  
  return (
    <div className="h-[36px] w-full animate-slide-up origin-top">
      <div className="h-[36px] w-full flex justify-center
      items-center bg-dark-midnight absolute z-10">
        <h1 className="text-[14px] font-semibold text-white z-10">
          {content}
        </h1>
      </div>
    </div>
  );
}

