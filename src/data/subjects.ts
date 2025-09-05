import bio from '../assets/bio.jpg';
import cs from '../assets/cs.jpg';
import math from '../assets/Math.jpg';
import english from '../assets/English.jpg';
import sst from '../assets/SST.jpg';
import urdu from '../assets/Language.jpg';

export interface Subject {
  id: string;
  title: {
    English: string;
    Sindhi: string;
    Urdu: string;
  };
  description: {
    English: string;
    Sindhi: string;
    Urdu: string;
  };
  image: string;
  keyTopics: {
    English: string[];
    Sindhi: string[];
    Urdu: string[];
  };
}

export const subjects: Subject[] = [
  {
    id: 'Computer-Science',
    title: {
      English: 'Computer Science',
      Sindhi: 'ڪمپيوٽر سائنس',
      Urdu: 'کمپیوٹر سائنس',
    },
    description: {
      English: 'Delving into the world of algorithms, data structures, and software development.',
      Sindhi: 'الگورٿمز، ڊيٽا جي جوڙجڪ، ۽ سافٽ ويئر ڊولپمينٽ جي دنيا ۾ وڃڻ.',
      Urdu: 'الگورتھم، ڈیٹا ڈھانچے، اور سافٹ ویئر ڈویلپمنٹ کی دنیا میں جانا۔',
    },
    image: cs,
    keyTopics: {
      English: ['Algorithms', 'Data Structures', 'Software Development', 'Artificial Intelligence'],
      Sindhi: ['الگورٿمز', 'ڊيٽا اسٽرڪچرز', 'سافٽ ويئر ڊولپمينٽ', 'مصنوعي ذهانت'],
      Urdu: ['الگورتھم', 'ڈیٹا سٹرکچرز', 'سافٹ ویئر ڈویلپment', 'مصنوعی ذہانت'],
    },
  },
  {
    id: 'Science',
    title: {
      English: 'Science',
      Sindhi: 'سائنس',
      Urdu: 'سائنس',
    },
    description: {
      English: 'Explore the wonders of science, including biology, chemistry, and physics.',
      Sindhi: 'سائنس جي عجائبات کي دريافت ڪريو، بشمول حياتيات، ڪيمسٽري ۽ فزڪس.',
      Urdu: 'سائنس کے عجائبات کو دریافت کریں، بشمول حیاتیات، کیمسٹری اور فزکس۔',
    },
    image: bio,
    keyTopics: {
      English: ['Biology', 'Chemistry', 'Physics', 'Environmental Science'],
      Sindhi: ['حياتيات', 'ڪيمسٽري', 'فزڪس', 'ماحولياتي سائنس'],
      Urdu: ['حیاتیات', 'کیمسٹری', 'فزکس', 'ماحولیاتی سائنس'],
    },
  },
  {
    id: 'Math',
    title: {
      English: 'Math',
      Sindhi: 'رياضي',
      Urdu: 'ریاضی',
    },
    description: {
      English: 'Develop mathematical skills and problem-solving abilities.',
      Sindhi: 'رياضي جي صلاحيتن ۽ مسئلا حل ڪرڻ جي صلاحيتن کي وڌايو.',
      Urdu: 'ریاضی کی مہارتیں اور مسائل کو حل کرنے کی صلاحیتوں کو فروغ دیں۔',
    },
    image: math,
    keyTopics: {
      English: ['Algebra', 'Geometry', 'Calculus', 'Statistics'],
      Sindhi: ['الجبرا', 'جاميٽري', 'ڪلڪيولس', 'شماريات'],
      Urdu: ['الجبرا', 'جیومیٹری', 'کیلکولس', 'شماریات'],
    },
  },
  {
    id: 'English',
    title: {
      English: 'English',
      Sindhi: 'انگريزي',
      Urdu: 'انگریزی',
    },
    description: {
      English: 'Master the English language through literature and communication.',
      Sindhi: 'ادب ۽ ڪميونيڪيشن ذريعي انگريزي ٻوليءَ ۾ مهارت حاصل ڪريو.',
      Urdu: 'ادب اور مواصلات کے ذریعے انگریزی زبان میں مہارت حاصل کریں۔',
    },
    image: english,
    keyTopics: {
      English: ['Grammar', 'Literature', 'Writing', 'Public Speaking'],
      Sindhi: ['گرامر', 'ادب', 'لکھڻ', 'عوامي ڳالهائڻ'],
      Urdu: ['گرامر', 'ادب', 'لکھنا', 'عوامی تقریر'],
    },
  },
  {
    id: 'SST',
    title: {
      English: 'SST',
      Sindhi: 'ايس ايس ٽي',
      Urdu: 'ایس ایس ٹی',
    },
    description: {
      English: 'Study Social Studies including history, geography, and civics.',
      Sindhi: 'تاريخ، جاگرافي ۽ شهريت سميت سماجي اڀياس جو مطالعو ڪريو.',
      Urdu: 'تاریخ، جغرافیہ اور شہریات سمیت سماجی علوم کا مطالعہ کریں۔',
    },
    image: sst,
    keyTopics: {
      English: ['History', 'Geography', 'Civics', 'Economics'],
      Sindhi: ['تاريخ', 'جاگرافي', 'شهريت', 'اقتصاديات'],
      Urdu: ['تاریخ', 'جغرافیہ', 'شہریات', 'اقتصادیات'],
    },
  },
  {
    id: 'Languages-&-Islamic-Studies',
    title: {
      English: 'Languages & Islamic Studies',
      Sindhi: 'ٻوليون ۽ اسلامي اڀياس',
      Urdu: 'زبانیں اور اسلامی علوم',
    },
    description: {
      English: 'Comprehensive program for Urdu, Sindhi, and Islamic studies.',
      Sindhi: 'اردو، سنڌي ۽ اسلامي اڀياس لاءِ جامع پروگرام.',
      Urdu: 'اردو، سندھی اور اسلامی علوم کے لیے جامع پروگرام۔',
    },
    image: urdu,
    keyTopics: {
      English: ['Urdu', 'Sindhi', 'Islamiat', 'Quranic Studies'],
      Sindhi: ['اردو', 'سنڌي', 'اسلاميات', 'قرآني اڀياس'],
      Urdu: ['اردو', 'سندھی', 'اسلامیات', 'قرآنی علوم'],
    },
  },
];
