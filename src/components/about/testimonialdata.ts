import story1 from '../../assets/images/story1.webp';
import story2 from '../../assets/images/story2.webp';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
};

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'John Mwangi',
    role: 'Full Stack Developer',
    image: story1,
    content:
      'Smart Contact Form Builder gave me total control over backend integration and frontend design. I built, tested, and deployed forms with perfect API handling in record time.',
  },
  {
    id: 2,
    name: 'Mwangi Gikundi',
    role: 'Website Developer',
    image: story2,
    content:
      'I love how seamless it is to connect forms directly to email using Nodemailer. It makes the user experience smooth and ensures no message gets lost.',
  },
  {
    id: 3,
    name: 'John Gikundi',
    role: 'QA/QE Software Tester',
    image: story1,
    content:
      'Testing the Smart Contact Form Builder showed how stable and efficient it is. The validation system and error handling work perfectly under both manual and automated testing.',
  },
  {
    id: 4,
    name: 'Mwangi John',
    role: 'Manual & Automation Tester',
    image: story2,
    content:
      'The form’s submission workflow and dashboard made it easy to verify data integrity. Each component is consistent, reliable, and built with precision.',
  },
  {
    id: 5,
    name: 'Gikundi Mwangi',
    role: 'Frontend Developer',
    image: story1,
    content:
      'The clean interface and responsive layout design made implementation a breeze. Smart Contact Form Builder is built for scalability and simplicity.',
  },
  {
    id: 6,
    name: 'John M. Gikundi',
    role: 'Backend Developer',
    image: story2,
    content:
      'Integrating form submissions with the MS SQL backend worked flawlessly. The architecture is lightweight, modular, and follows clean Express conventions.',
  },
  {
    id: 7,
    name: 'Mwangi J.',
    role: 'QA Engineer',
    image: story1,
    content:
      'Testing authentication and token flow was smooth — JWT integration worked without errors. It’s exactly how a professional-grade form builder should perform.',
  },
  {
    id: 8,
    name: 'J. M. Gikundi',
    role: 'Software Developer',
    image: story2,
    content:
      'Smart Contact Form Builder reflects best coding practices — modular components, reusable hooks, and excellent API structure. I’m proud of how this system came together.',
  },
];
