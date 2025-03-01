import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarIcon, MoonIcon, StarIcon, SunIcon, Clock, InfoIcon } from 'lucide-react';
import { Tooltip } from '@/components/ui/tooltip';
import CountdownTimer from './CountdownTimer';
const RamadanHeroSection = () => {
  // State management
  const [currentDate, setCurrentDate] = useState(new Date());
  const [ramadanDay, setRamadanDay] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  
  // Ramadan dates and information
  const ramadanStart = new Date(2025, 2, 1); // March 1, 2025
  const hijriYear = 1446;
  
  // Prayer times example data - would come from API in production
  const prayerTimes = {
    fajr: "5:42 AM",
    sunrise: "7:08 AM",
    dhuhr: "12:49 PM",
    asr: "4:02 PM",
    maghrib: "6:31 PM",
    isha: "7:52 PM"
  };
  
  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Calculate current Ramadan day
  useEffect(() => {
    const today = new Date();
    const diffTime = Math.abs(today - ramadanStart);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (today >= ramadanStart && diffDays <= 30) {
      setRamadanDay(diffDays);
      setSelectedDay(diffDays);
    } else if (today < ramadanStart) {
      // Countdown to Ramadan
      setRamadanDay(-diffDays);
    } else {
      setRamadanDay(0);
    }
  }, [currentDate]);
  
  // Format current time
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };
  
  // Generate calendar with proper offset for day of week
  const generateCalendarDays = () => {
    const days = [];
    
    // Calculate first day of Ramadan
    const firstDay = new Date(ramadanStart);
    const startDayOfWeek = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Add empty cells for days before Ramadan starts
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push({ day: null, empty: true });
    }
    
    // Add the actual Ramadan days
    for (let i = 1; i <= 30; i++) {
      const dayDate = new Date(ramadanStart);
      dayDate.setDate(dayDate.getDate() + i - 1);
      
      days.push({
        day: i,
        date: dayDate,
        active: i === ramadanDay,
        selected: i === selectedDay,
        passed: i < ramadanDay && ramadanDay > 0
      });
    }
    
    return days;
  };
  
  // Time remaining calculation
  const getTimeRemaining = (targetTime) => {
    const now = new Date();
    const [hour, minute, period] = targetTime.match(/(\d+):(\d+) (\w+)/).slice(1);
    
    let targetHour = parseInt(hour);
    if (period === "PM" && targetHour !== 12) targetHour += 12;
    if (period === "AM" && targetHour === 12) targetHour = 0;
    
    const target = new Date();
    target.setHours(targetHour, parseInt(minute), 0);
    
    if (target < now) target.setDate(target.getDate() + 1);
    
    const diff = target - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m`;
  };
  
  return (
    <div className="w-full bg-gradient-to-b from-[#FBFFE4] to-[#FBFFE4]/70 text-[#3D8D7A] min-h-screen py-12 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-12 opacity-20 animate-pulse">
        <StarIcon size={48} />
      </div>
      <div className="absolute top-40 left-12 opacity-15 animate-pulse" style={{ animationDelay: "1s" }}>
        <StarIcon size={32} />
      </div>
      <div className="absolute bottom-32 left-24 opacity-20 animate-pulse" style={{ animationDelay: "2.5s" }}>
        <StarIcon size={24} />
      </div>
      <div className="absolute -bottom-16 -left-16 opacity-10">
        <MoonIcon size={200} />
      </div>
      <div className="absolute top-0 -right-16 opacity-10 rotate-45">
        <MoonIcon size={100} />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight flex items-center">
            <MoonIcon className="mr-3" /> Ramadan {hijriYear}
          </h1>
          <div className="bg-[#3D8D7A] text-[#FBFFE4] px-4 py-2 rounded-full text-sm font-medium flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {formatTime(currentTime)}
          </div>
        </div>
        
        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold tracking-tight">Ramadan Kareem</h2>
            <p className="text-xl opacity-80">
              A blessed month of spiritual reflection, improvement, and growth.
            </p>
            
            <div className="grid grid-cols-2 gap-4 my-8">
              {ramadanDay > 0 ? (
                <div className="bg-[#3D8D7A] text-[#FBFFE4] px-6 py-8 rounded-lg shadow-lg">
                  <p className="text-lg font-medium opacity-90">Today is</p>
                  <h2 className="text-4xl font-bold">Day {ramadanDay}</h2>
                  <p className="mt-2 text-sm opacity-90">of Ramadan {hijriYear}</p>
                </div>
              ) : ramadanDay < 0 ? (
                <div className="bg-[#3D8D7A] text-[#FBFFE4] px-6 py-8 rounded-lg shadow-lg">
                  <p className="text-lg font-medium opacity-90">Ramadan begins in</p>
                  <h2 className="text-3xl font-bold">{Math.abs(ramadanDay)} Days</h2>
                  <p className="mt-2 text-sm opacity-90">{ramadanStart.toDateString()}</p>
                </div>
              ) : (
                <div className="bg-[#3D8D7A] text-[#FBFFE4] px-6 py-8 rounded-lg shadow-lg">
                  <p className="text-lg font-medium opacity-90">Ramadan</p>
                  <h2 className="text-3xl font-bold">has ended</h2>
                  <p className="mt-2 text-sm opacity-90">Eid Mubarak!</p>
                </div>
              )}
              
              <div className="bg-[#3D8D7A]/10 px-6 py-8 rounded-lg shadow-lg border border-[#3D8D7A]/20">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-md font-medium">Next Prayer</p>
                    <h3 className="text-2xl font-bold">Maghrib</h3>
                    <p className="text-xl">{prayerTimes.maghrib}</p>
                  </div>
                  <div className="bg-[#3D8D7A] text-[#FBFFE4] px-3 py-1 rounded-full text-sm">
                    {getTimeRemaining(prayerTimes.maghrib)}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Prayer times compact view */}
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-[#3D8D7A]/10 shadow">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <InfoIcon className="w-4 h-4 mr-2" /> Daily Prayer Times
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <p className="text-xs opacity-70">Fajr</p>
                  <p className="font-medium">{prayerTimes.fajr}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs opacity-70">Dhuhr</p>
                  <p className="font-medium">{prayerTimes.dhuhr}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs opacity-70">Asr</p>
                  <p className="font-medium">{prayerTimes.asr}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs opacity-70">Maghrib</p>
                  <p className="font-medium">{prayerTimes.maghrib}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs opacity-70">Isha</p>
                  <p className="font-medium">{prayerTimes.isha}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs opacity-70">Sunrise</p>
                  <p className="font-medium">{prayerTimes.sunrise}</p>
                </div>
              </div>
            </div>
            <CountdownTimer label="Time until Iftar" />
          </div>
          
          {/* Calendar Card */}
          <Card className="bg-white/80 backdrop-blur-md shadow-xl border border-[#3D8D7A]/10 overflow-hidden">
            <div className="bg-[#3D8D7A] text-[#FBFFE4] p-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" /> Ramadan Calendar
              </h3>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="h-8 text-[#FBFFE4] hover:text-[#FBFFE4] hover:bg-[#3D8D7A]/80">
                  Today
                </Button>
                <Button variant="outline" size="sm" className="h-8 text-[#3D8D7A] border-[#FBFFE4]/20 hover:bg-[#3D8D7A]/80">
                  <InfoIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-center font-medium text-sm py-1">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {generateCalendarDays().map((day, index) => (
                  <div 
                    key={index}
                    className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all
                      ${day.empty ? '' : 'cursor-pointer hover:bg-[#3D8D7A]/5'}
                      ${day.selected ? 'bg-[#3D8D7A] text-[#FBFFE4] shadow-md' : ''}
                      ${!day.selected && day.passed ? 'bg-[#3D8D7A]/10' : ''}
                    `}
                    onClick={() => day.day && setSelectedDay(day.day)}
                  >
                    {day.day}
                  </div>
                ))}
              </div>
              
              {selectedDay && (
                <div className="mt-6 p-4 bg-[#3D8D7A]/5 rounded-lg border border-[#3D8D7A]/20">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">Day {selectedDay} of Ramadan</h4>
                    <p className="text-sm opacity-70">
                      {new Date(ramadanStart.getTime() + ((selectedDay - 1) * 24 * 60 * 60 * 1000)).toDateString()}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Iftar</p>
                      <p className="text-xl font-bold flex items-center">
                        <SunIcon className="w-4 h-4 mr-2" /> {prayerTimes.maghrib}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Suhoor ends</p>
                      <p className="text-xl font-bold flex items-center">
                        <MoonIcon className="w-4 h-4 mr-2" /> {prayerTimes.fajr}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Quick actions */}
        <div className="flex justify-center space-x-4 mt-12">
          <Button className="bg-[#3D8D7A] text-[#FBFFE4] hover:bg-[#3D8D7A]/90">
            Dua Collection
          </Button>
          <Button variant="outline" className="border-[#3D8D7A] text-[#3D8D7A] hover:bg-[#3D8D7A]/10">
            Quran Recitation
          </Button>
          <Button variant="ghost" className="text-[#3D8D7A] hover:bg-[#3D8D7A]/10">
            Donate to Charity
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RamadanHeroSection;