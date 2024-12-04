import { Input } from "@/components/ui/input";
import Image from "next/image";
import bannerImg from "@/public/home/homeBanner.jpg";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Hero() {
  return (
    <div className="relative">
      {/* Image overlay */}
      <div className="absolute inset-0 z-10 bg-black/10"></div>

      {/* Background Image */}
      <Image
        className="w-full h-auto object-cover rounded"
        src={
          bannerImg ||
          "https://t3.ftcdn.net/jpg/05/59/09/50/360_F_559095057_YeiS6zTM107wRlnenmZZ8ztDjOmG8858.jpg"
        }
        alt="Home Banner"
        layout="responsive"
        priority={true}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4">
        <h1 className="text-center text-black sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight">
          Find Your Nest
        </h1>
        <div className="w-full max-w-2xl p-6 mt-8 bg-foreground/70 backdrop-blur-lg rounded-lg shadow-lg grid gap-4">
          {/* Input Field and Select Dropdown in the Same Row */}
          <div className="flex items-center gap-4">
            {/* Input Field */}
            <Input
              type="text"
              placeholder="Enter a location"
              className="text-lg dark:bg-primary dark:text-black"
            />

            {/* Select Dropdown */}
            <Select>
              <SelectTrigger className="w-full dark:bg-primary dark:text-black md:w-[180px]">
                <SelectValue placeholder="Select Price" />
              </SelectTrigger>
              <SelectContent className="text-lg dark:bg-primary dark:text-black">
                <SelectItem value="5-10">5-20</SelectItem>
                <SelectItem value="20-50">20-50</SelectItem>
                <SelectItem value="50-100">50 and above</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <Button
            className="w-full text-lg"
            type="button"
            variant="destructive"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
