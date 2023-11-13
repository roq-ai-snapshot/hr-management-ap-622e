import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ProjectsInterface {
  id?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface ProjectsGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
