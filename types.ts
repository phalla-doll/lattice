export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  company?: string;
  location?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
