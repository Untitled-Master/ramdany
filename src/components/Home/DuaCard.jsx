import { Card, CardContent } from '@/components/ui/card';   
import { Button } from '@/components/ui/button';
import { BookOpenIcon, ShareIcon, HeartIcon } from 'lucide-react';

const DuaCard = ({ arabic, translation, reference }) => {
  return (
    <Card className="bg-white/80 backdrop-blur-md shadow-xl border border-[#3D8D7A]/10 overflow-hidden">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="text-2xl font-arabic text-right leading-loose">
            {arabic}
          </div>
          <div className="text-lg opacity-80">
            {translation}
          </div>
          <div className="text-sm opacity-60">
            {reference}
          </div>
        </div>
        
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
  );
};

export default DuaCard;