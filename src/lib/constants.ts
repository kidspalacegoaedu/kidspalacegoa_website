export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#gallery", label: "Gallery" },
  { href: "#activities", label: "Activities" },
  { href: "#admissions", label: "Admissions" },
  { href: "#contact", label: "Contact" },
] as const;

export const PHONE_NUMBERS = [
  { display: "+91 99231 19071", href: "tel:+919923119071" },
  { display: "+91 85540 60072", href: "tel:+918554060072" },
] as const;
export const PHONE_NUMBER = "+91 99231 19071 / +91 85540 60072";
export const PHONE_HREF = PHONE_NUMBERS[0].href;
export const WHATSAPP_NUMBER = "919923119071";
export const WHATSAPP_MESSAGE =
  "Hello Kids Palace! I would like to know more about admissions.";

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
] as const;

export const PROGRAMS = [
  {
    title: "Toddlers",
    age: "1.5–2 Years",
    description:
      "Gentle introduction to social settings with sensory play, music, and motor skill development.",
    icon: "Baby",
    color: "orange" as const,
  },
  {
    title: "Playgroup",
    age: "2–3 Years",
    description:
      "Exploration through creative play, language building, and early social interaction.",
    icon: "Blocks",
    color: "pink" as const,
  },
  {
    title: "Nursery",
    age: "3–4 Years",
    description:
      "Structured learning through stories, art, numbers, and collaborative activities.",
    icon: "BookOpen",
    color: "blue" as const,
  },
  {
    title: "Jr. KG",
    age: "4–5 Years",
    description:
      "Building literacy, numeracy, and confidence through guided play and discovery.",
    icon: "Pencil",
    color: "green" as const,
  },
  {
    title: "Sr. KG",
    age: "5–6 Years",
    description:
      "School readiness with phonics, problem-solving, and independent learning skills.",
    icon: "GraduationCap",
    color: "orange" as const,
  },
  {
    title: "Daycare",
    age: "Full Day Care",
    description:
      "Safe, nurturing full-day care with meals, rest time, and supervised activities.",
    icon: "Home",
    color: "pink" as const,
  },
  {
    title: "Vacation Workshops",
    age: "Seasonal",
    description:
      "Fun-filled holiday programs with art, dance, science experiments, and field trips.",
    icon: "Sun",
    color: "blue" as const,
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Holistic Learning",
    description:
      "We nurture cognitive, emotional, social, and physical development in every child.",
    icon: "Sparkles",
    color: "orange" as const,
  },
  {
    title: "Play-Based Education",
    description:
      "Learning happens naturally through curiosity, exploration, and joyful discovery.",
    icon: "Gamepad2",
    color: "pink" as const,
  },
  {
    title: "Caring Teachers",
    description:
      "Experienced, compassionate educators who treat every child like family.",
    icon: "HeartHandshake",
    color: "blue" as const,
  },
  {
    title: "Safe Daycare",
    description:
      "Secure premises, CCTV monitoring, and strict hygiene protocols for peace of mind.",
    icon: "ShieldCheck",
    color: "green" as const,
  },
  {
    title: "Parent Partnership",
    description:
      "Regular updates, open communication, and collaborative goal-setting with families.",
    icon: "Users",
    color: "orange" as const,
  },
  {
    title: "Future Ready Skills",
    description:
      "Critical thinking, creativity, and confidence to thrive in tomorrow's world.",
    icon: "Rocket",
    color: "pink" as const,
  },
] as const;

export const ACTIVITIES = [
  {
    title: "Dance",
    description: "Rhythm, expression, and coordination through joyful movement.",
    icon: "Music",
    color: "pink" as const,
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
  },
  {
    title: "Gymnastics",
    description: "Building strength, balance, and body awareness in a fun setting.",
    icon: "Dumbbell",
    color: "orange" as const,
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
  },
  {
    title: "Storytelling",
    description: "Imagination and language skills through captivating stories.",
    icon: "BookOpen",
    color: "blue" as const,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
  },
  {
    title: "Art & Craft",
    description: "Creative expression through colors, textures, and hands-on projects.",
    icon: "Palette",
    color: "green" as const,
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80",
  },
  {
    title: "Science Activities",
    description: "Curiosity-driven experiments that make learning come alive.",
    icon: "FlaskConical",
    color: "orange" as const,
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
  },
  {
    title: "Festivals",
    description: "Celebrating culture, traditions, and community together.",
    icon: "PartyPopper",
    color: "pink" as const,
    image:
      "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&q=80",
  },
] as const;

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
    alt: "Children playing together",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    alt: "Happy kids in classroom",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",
    alt: "Art and craft activity",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    alt: "Story time session",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80",
    alt: "Outdoor play area",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80",
    alt: "Learning through play",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80",
    alt: "Group activity",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80",
    alt: "Preschool environment",
    tall: false,
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Gabriel Pereira",
    role: "Parent",
    content:
      "Great place for daycare, one be stressed free after living their children there.",
    rating: 5,
  },
  {
    name: "Imtiaz Sheikh",
    role: "Parent of Aayat",
    content:
      "Its very difficult to express my feelings here cos it's was a second home for my daughter Aayat. We had started with kids place when my daughter was of just 19 months old . Madam Sangeeta n Team of Kids palace have taken care of her till date today she 6 years old. Ma'am n the entire teams is just incredible. the care the love the education, the manners, the creativity ideas n lots more guidance are been given here.Yes it's 200% correct that Kids palace is best place for our little ones; a way away from ur homes.Thank you Sangeeta Ma'am...",
    rating: 5,
  },
  {
    name: "Pallavi Naik",
    role: "Parent of saket",
    content:
      "KIDS PALACE,a home away from your little ones homes! Yes it is true As a parents I have experienced it I took admission for my son Saket for KG2 + daycare It was my decision to put him in good school and daycare and now I feel proud to say that I have selected the best school for my son.Really the entire team of kids palace is very good caring and loving and friendly, It’s a place where they encourage children to groom to participate to be confident. I am very much happy with school’s teaching technology, activities. It’s so different and practical. Also in daycare he learnt to eat systematically, all discipline do his own things independently. Teacher and daycare staff is so humble,I will say its not just a school it’s a blessings for working women who can able to work without any worry of their child and I will highly recommend all the parents to enroll their kids to KIDS PALACE.Thanque very much sangeeta madam and all team and staff of kids palace",
    rating: 5,
  },
  {
    name: "Meghana Gaonkar",
    role: "Parent",
    content:
      "Amazing place for your little ones, my own experience says it. The Principal of this school Mrs. Sangeeta and all her staff take personal care of each and every child attached to their school. The teaching strategies are so amazing that each child just enjoys to be in the school. This school not only makes their students feel confirmable with each other and creates a bond amongst them but even the parents of each child is given opportunities to interact with the other parents by engaging them in various activities... such friendly atmosphere school. I strongly recommend parents to select this wonderful Kid's Palace school for your child.. thanks Kids Palace school for taking care of my son🙏🙏🙏",
    rating: 5,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What age groups do you accept?",
    answer:
      "We welcome children from 2 years onwards, with programs tailored for toddlers, playgroup, nursery, Jr. KG, Sr. KG, and full-day daycare.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Our preschool operates from 9:00 AM to 12:30 PM, Monday through Saturday. Daycare extends until 6:00 PM for working parents.",
  },
  {
    question: "How do you ensure child safety?",
    answer:
      "Our premises are fully secured with CCTV monitoring, verified staff, strict pick-up protocols, and regular safety drills.",
  },
  {
    question: "What is the teacher-to-child ratio?",
    answer:
      "We maintain small class sizes with a ratio of 1:10 for all students, ensuring personalized attention.",
  },
  {
    question: "How do I begin the admission process?",
    answer:
      "Simply schedule a school visit during our office hours (10AM-12PM). We'll guide you through meeting the principal and completing enrollment.",
  },
] as const;

export const ADMISSION_STEPS = [
  {
    step: 1,
    title: "Visit School",
    description:
      "Experience Kids Palace in person. A school is best felt, not just heard about. We warmly invite families to visit our campus so your child can explore the environment, become familiar with the classrooms, and feel safe and excited before their very first day.",
    icon: "MapPin",
  },
  {
    step: 2,
    title: "Meet the Principal",
    description:
      "During your visit, parents can tour the campus, meet our teachers, explore the learning environment, and have all their questions answered. It also gives us an opportunity to understand your child better and build a strong foundation of trust from the very beginning.",
    icon: "MessageCircle",
  },
  {
    step: 3,
    title: "Complete Admission",
    description:
      "Submit required documents, choose your program, and welcome your child to the Kids Palace family.",
    icon: "CheckCircle2",
  },
] as const;

export type AccentColor = "orange" | "pink" | "blue" | "green";

export const COLOR_MAP: Record<
  AccentColor,
  { bg: string; text: string; gradient: string; light: string }
> = {
  orange: {
    bg: "bg-palace-orange",
    text: "text-palace-orange",
    gradient: "bg-gradient-orange",
    light: "bg-palace-orange/10",
  },
  pink: {
    bg: "bg-palace-pink",
    text: "text-palace-pink",
    gradient: "bg-gradient-pink",
    light: "bg-palace-pink/10",
  },
  blue: {
    bg: "bg-palace-blue",
    text: "text-palace-blue",
    gradient: "bg-gradient-blue",
    light: "bg-palace-blue/10",
  },
  green: {
    bg: "bg-palace-green",
    text: "text-palace-green",
    gradient: "bg-gradient-green",
    light: "bg-palace-green/10",
  },
};
