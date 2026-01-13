
export interface SubItem {
  id: string;
  title: string;
  path: string;
}

export interface NavItem {
  id: string;
  number: number;
  title: string;
  path: string;
  hasChildren?: boolean;
  subItems?: SubItem[];
}

export interface StudentInfo {
  fullName: string;
  phoneNumber: string;
  email: string;
  university: string;
  major: string;
  class: string;
  internshipCompany: string;
  internshipPosition: string;
  internshipDuration: string;
}
