import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartIcon, ShareIcon, BookOpenIcon } from 'lucide-react';

const DuaGrid = ({ duas }) => {
  return (
    <div className="w-full bg-gradient-to-b from-[#FBFFE4] to-[#FBFFE4]/70 text-[#3D8D7A] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Dua Collection</h2>
          <Button variant="outline" className="border-[#3D8D7A] text-[#3D8D7A] hover:bg-[#3D8D7A]/10">
            View All Duas
          </Button>
        </div>

        {/* Grid of Duas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {duas.map((dua, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-md shadow-xl border border-[#3D8D7A]/10 overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Arabic Text */}
                  <div className="text-2xl font-arabic text-right leading-loose">
                    {dua.arabic}
                  </div>

                  {/* Translation */}
                  <div className="text-lg opacity-80">
                    {dua.translation}
                  </div>

                  {/* Reference */}
                  <div className="text-sm opacity-60">
                    {dua.reference}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-2 mt-4">
                  <Button variant="ghost" size="sm" className="text-[#3D8D7A] hover:bg-[#3D8D7A]/10">
                    <HeartIcon className="w-4 h-4 mr-2" /> Save
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[#3D8D7A] hover:bg-[#3D8D7A]/10">
                    <ShareIcon className="w-4 h-4 mr-2" /> Share
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[#3D8D7A] hover:bg-[#3D8D7A]/10">
                    <BookOpenIcon className="w-4 h-4 mr-2" /> Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DuaGrid;