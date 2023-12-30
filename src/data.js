import katie from "./assets/images/katie-zaferes.png";
import wedding from "./assets/images/wedding-photography.png";
import mountainBike from "./assets/images/mountain-bike.png";
import flea from "./assets/images/fleab.jpeg";
export default [
  {
    id: 1,
    title: "Fleabag Watch Party",
    description:
      "Experience the beautiful series Fleabag by Phoebe waller bridget",
    price: 0,
    coverImg: flea,
    stats: {
      rating: 5.0,
      reviewCount: 8,
    },
    location: "India",
    openSpots: 3,
  },
  {
    id: 2,
    title: "Life Lessons with Katie Zaferes",
    description:
      'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.',
    price: 136,
    coverImg: katie,
    stats: {
      rating: 5.0,
      reviewCount: 6,
    },
    location: "Online",
    openSpots: 0,
  },
  {
    id: 3,
    title: "Learn Wedding Photography",
    description:
      "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
    price: 125,
    coverImg: wedding,
    stats: {
      rating: 4.9,
      reviewCount: 30,
    },
    location: "Online",
    openSpots: 27,
  },
  {
    id: 4,
    title: "Group Mountain Biking",
    description:
      "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
    price: 50,
    coverImg: mountainBike,
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: "Norway",
    openSpots: 3,
  },
];
