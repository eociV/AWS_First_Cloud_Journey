
import { NavItem, StudentInfo } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'worklog',
    number: 1,
    title: 'Worklog',
    path: '/worklog',
    hasChildren: true,
    subItems: Array.from({ length: 12 }, (_, i) => ({
      id: `week-${i + 1}`,
      title: `Week ${i + 1} Worklog`,
      path: `/worklog/week-${i + 1}`,
    })),
  },
  { id: 'proposal', number: 2, title: 'Proposal', path: '/proposal' },
  { id: 'translated-blogs', number: 3, title: 'Translated Blogs', path: '/translated-blogs' },
  { id: 'events', number: 4, title: 'Events Participated', path: '/events' },
  { id: 'workshop', number: 5, title: 'Workshop', path: '/workshop', hasChildren: true },
  { id: 'assessment', number: 6, title: 'Self-Assessment', path: '/assessment' },
  { id: 'feedback', number: 7, title: 'Sharing and Feedback', path: '/feedback' },
];

export const STUDENT_INFO: StudentInfo = {
  fullName: "Nguyen Van A",
  phoneNumber: "0989888999",
  email: "Anguyenvan@gmail.com",
  university: "Ho Chi Minh City University of Technology and Education",
  major: "Information Technology",
  class: "AWS082025",
  internshipCompany: "Amazon Web Services Vietnam Co., Ltd.",
  internshipPosition: "FCJ Cloud Intern",
  internshipDuration: "From 12/08/2025 to 12/11/2025",
};
