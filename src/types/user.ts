export type UserRole = 'student' | 'admin';
export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  studentId?: string;
  department?: string;
  avatar?: string;
  status?: 'active' | 'inactive';
}
