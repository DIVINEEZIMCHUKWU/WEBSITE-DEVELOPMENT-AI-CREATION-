export interface CourseModule {
  id: number;
  number: string;
  title: string;
  shortDesc: string;
  topics: string[];
  highlight?: string;
  specialCallout?: {
    type: 'domain-hosting' | 'flow' | 'debugging' | 'payments' | 'monetization';
    content: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProofItem {
  id: string;
  category: 'STUDENT FEEDBACK' | 'STUDENT PROJECTS' | 'STUDENT EXPERIENCE' | 'STUDENT SCREENSHOTS' | 'STUDENT RESULTS';
  title: string;
  description: string;
  imageUrl?: string;
  date?: string;
  authorLabel?: string;
}
