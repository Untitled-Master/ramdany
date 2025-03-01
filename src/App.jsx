import RamadanHeroSection from "./components/Home/Hero";
import DuaGrid from "./components/Home/DuaGrid";
import CountdownTimer from "./components/Home/CountdownTimer";
function App() {
  const duas = [
    {
      arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
      translation: "Our Lord, give us in this world good and in the Hereafter good and protect us from the punishment of the Fire.",
      reference: "Quran 2:201"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
      translation: "O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.",
      reference: "Sahih Muslim"
    },
    {
      arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
      translation: "My Lord, expand my chest for me and make my task easy for me.",
      reference: "Quran 20:25-26"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ وَمِنْ عَذَابِ جَهَنَّمَ",
      translation: "O Allah, I seek refuge in You from the punishment of the grave and from the torment of Hellfire.",
      reference: "Sahih Bukhari"
    },
    {
      arabic: "رَبِّ زِدْنِي عِلْمًا",
      translation: "My Lord, increase me in knowledge.",
      reference: "Quran 20:114"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ",
      translation: "O Allah, I ask You for Paradise and seek refuge in You from the Fire.",
      reference: "Sunan Abu Dawood"
    },
    {
      arabic: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
      translation: "Our Lord, forgive me and my parents and the believers the Day the account is established.",
      reference: "Quran 14:41"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
      translation: "O Allah, I ask You for pardon and well-being in this life and the Hereafter.",
      reference: "Sunan Ibn Majah"
    },
    {
      arabic: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي",
      translation: "My Lord, make me and my descendants establishers of prayer.",
      reference: "Quran 14:40"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ فِعْلَ الْخَيْرَاتِ وَتَرْكَ الْمُنْكَرَاتِ",
      translation: "O Allah, I ask You to enable me to do good deeds and abandon evil deeds.",
      reference: "Tirmidhi"
    },
    {
      arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا",
      translation: "Our Lord, do not let our hearts deviate after You have guided us.",
      reference: "Quran 3:8"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ وَأَعُوذُ بِكَ مِنْ سَخَطِكَ وَالنَّارِ",
      translation: "O Allah, I ask You for Your pleasure and Paradise, and I seek refuge in You from Your displeasure and the Fire.",
      reference: "Sunan An-Nasa'i"
    },
    {
      arabic: "رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
      translation: "My Lord, grant me wisdom and join me with the righteous.",
      reference: "Quran 26:83"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالسَّدَادَ",
      translation: "O Allah, I ask You for guidance and uprightness.",
      reference: "Sahih Muslim"
    },
    {
      arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
      translation: "Our Lord, grant us from among our wives and offspring comfort to our eyes.",
      reference: "Quran 25:74"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
      translation: "O Allah, I ask You for well-being in this life and the Hereafter.",
      reference: "Sunan Ibn Majah"
    },
    {
      arabic: "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ",
      translation: "My Lord, I seek refuge in You from the whispers of the devils.",
      reference: "Quran 23:97"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْفِرْدَوْسَ الْأَعْلَى",
      translation: "O Allah, I ask You for the highest level of Paradise.",
      reference: "Sahih Bukhari"
    },
    {
      arabic: "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ",
      translation: "Our Lord, upon You we have relied, and to You we have returned, and to You is the destination.",
      reference: "Quran 60:4"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعِلْمَ النَّافِعَ وَالرِّزْقَ الطَّيِّبَ",
      translation: "O Allah, I ask You for beneficial knowledge and wholesome provision.",
      reference: "Ibn Majah"
    },
    {
      arabic: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ",
      translation: "My Lord, forgive and have mercy, for You are the best of the merciful.",
      reference: "Quran 23:118"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ",
      translation: "O Allah, I ask You for Paradise and for that which brings one closer to it, in word and deed.",
      reference: "Tirmidhi"
    },
    {
      arabic: "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَ",
      translation: "Our Lord, do not make us a trial for the wrongdoing people.",
      reference: "Quran 10:85"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَصْمَةَ فِي الْأَرْضِ وَالسَّمَاءِ",
      translation: "O Allah, I ask You for protection on earth and in the heavens.",
      reference: "Sahih Bukhari"
    },
    {
      arabic: "رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ",
      translation: "My Lord, cause me to enter a sound entrance and to exit a sound exit.",
      reference: "Quran 17:80"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ",
      translation: "O Allah, I ask You for pardon and well-being in my religion and my worldly life.",
      reference: "Sunan Abu Dawood"
    },
    {
      arabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا",
      translation: "Our Lord, do not hold us accountable if we forget or make a mistake.",
      reference: "Quran 2:286"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْبَرَكَةَ فِي كُلِّ أَمْرِي",
      translation: "O Allah, I ask You for blessings in all my affairs.",
      reference: "Sahih Bukhari"
    },
    {
      arabic: "رَبِّ اجْعَلْنِي شَاكِرًا لِنِعْمَتِكَ",
      translation: "My Lord, make me grateful for Your favor.",
      reference: "Quran 27:19"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعِصْمَةَ مِنْ كُلِّ ذَنْبٍ",
      translation: "O Allah, I ask You for protection from every sin.",
      reference: "Sahih Muslim"
    },
    {
      arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً",
      translation: "Our Lord, do not let our hearts deviate after You have guided us, and grant us mercy from Yourself.",
      reference: "Quran 3:8"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ",
      translation: "O Allah, I ask You for Paradise and seek refuge in You from the Fire.",
      reference: "Sunan Abu Dawood"
    },
    {
      arabic: "رَبِّ أَعُوذُ بِكَ مِنْ خَزْيِ يَوْمِ الدِّينِ",
      translation: "My Lord, I seek refuge in You from the disgrace of the Day of Judgment.",
      reference: "Quran 3:16"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعِلْمَ النَّافِعَ وَالرِّزْقَ الطَّيِّبَ",
      translation: "O Allah, I ask You for beneficial knowledge and wholesome provision.",
      reference: "Ibn Majah"
    },
    {
      arabic: "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَ",
      translation: "Our Lord, do not make us a trial for the wrongdoing people.",
      reference: "Quran 10:85"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَصْمَةَ فِي الْأَرْضِ وَالسَّمَاءِ",
      translation: "O Allah, I ask You for protection on earth and in the heavens.",
      reference: "Sahih Bukhari"
    },
    {
      arabic: "رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ",
      translation: "My Lord, cause me to enter a sound entrance and to exit a sound exit.",
      reference: "Quran 17:80"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ",
      translation: "O Allah, I ask You for pardon and well-being in my religion and my worldly life.",
      reference: "Sunan Abu Dawood"
    },
    {
      arabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا",
      translation: "Our Lord, do not hold us accountable if we forget or make a mistake.",
      reference: "Quran 2:286"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْبَرَكَةَ فِي كُلِّ أَمْرِي",
      translation: "O Allah, I ask You for blessings in all my affairs.",
      reference: "Sahih Bukhari"
    },
    {
      arabic: "رَبِّ اجْعَلْنِي شَاكِرًا لِنِعْمَتِكَ",
      translation: "My Lord, make me grateful for Your favor.",
      reference: "Quran 27:19"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعِصْمَةَ مِنْ كُلِّ ذَنْبٍ",
      translation: "O Allah, I ask You for protection from every sin.",
      reference: "Sahih Muslim"
    },
    {
      arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً",
      translation: "Our Lord, do not let our hearts deviate after You have guided us, and grant us mercy from Yourself.",
      reference: "Quran 3:8"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ",
      translation: "O Allah, I ask You for Paradise and seek refuge in You from the Fire.",
      reference: "Sunan Abu Dawood"
    },
    {
      arabic: "رَبِّ أَعُوذُ بِكَ مِنْ خَزْيِ يَوْمِ الدِّينِ",
      translation: "My Lord, I seek refuge in You from the disgrace of the Day of Judgment.",
      reference: "Quran 3:16"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعِلْمَ النَّافِعَ وَالرِّزْقَ الطَّيِّبَ",
      translation: "O Allah, I ask You for beneficial knowledge and wholesome provision.",
      reference: "Ibn Majah"
    },
    {
      arabic: "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَ",
      translation: "Our Lord, do not make us a trial for the wrongdoing people.",
      reference: "Quran 10:85"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَصْمَةَ فِي الْأَرْضِ وَالسَّمَاءِ",
      translation: "O Allah, I ask You for protection on earth and in the heavens.",
      reference: "Sahih Bukhari"
    },
    {
      arabic: "رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ",
      translation: "My Lord, cause me to enter a sound entrance and to exit a sound exit.",
      reference: "Quran 17:80"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ",
      translation: "O Allah, I ask You for pardon and well-being in my religion and my worldly life.",
      reference: "Sunan Abu Dawood"
    },
    {
      arabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا",
      translation: "Our Lord, do not hold us accountable if we forget or make a mistake.",
      reference: "Quran 2:286"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْبَرَكَةَ فِي كُلِّ أَمْرِي",
      translation: "O Allah, I ask You for blessings in all my affairs.",
      reference: "Sahih Bukhari"
    },
    {
      arabic: "رَبِّ اجْعَلْنِي شَاكِرًا لِنِعْمَتِكَ",
      translation: "My Lord, make me grateful for Your favor.",
      reference: "Quran 27:19"
    },
    {
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعِصْمَةَ مِنْ كُلِّ ذَنْبٍ",
      translation: "O Allah, I ask You for protection from every sin.",
      reference: "Sahih Muslim"
    }
  ];
  const aya = {
    arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ ۖ فَلْيَسْتَجِيبُوا لِي وَلْيُؤْمِنُوا بِي لَعَلَّهُمْ يَرْشُدُونَ",
    translation: "And when My servants ask you concerning Me, indeed I am near. I respond to the invocation of the supplicant when he calls upon Me. So let them respond to Me and believe in Me that they may be guided.",
    reference: "Quran 2:186"
  };
  return (
    <div>
      
      <RamadanHeroSection />
      <DuaGrid duas={duas} /> 
    </div>
  )
}

export default App
