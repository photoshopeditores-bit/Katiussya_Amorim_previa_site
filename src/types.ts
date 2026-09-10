export interface ServiceItem {
  id: string;
  title: string;
  category: 'neuro' | 'speech' | 'motor' | 'adult' | 'eval';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  indications: string[];
  howItWorks: string;
  iconName: string;
  badge?: string;
}

export interface MilestoneGroup {
  ageBand: string;
  label: string;
  expectedMilestones: string[];
  warningSigns: {
    id: string;
    text: string;
    severity: 'mild' | 'moderate' | 'high';
  }[];
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  verifiedGoogle: boolean;
  category: string;
}

export interface BookingState {
  patientType: 'child' | 'teen' | 'adult' | 'senior' | '';
  patientName: string;
  patientAge: string;
  contactName: string;
  phone: string;
  primaryConcern: string;
  preferredShift: 'morning' | 'afternoon' | 'flexible' | '';
  additionalNotes: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
