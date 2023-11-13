import { ProjectsInterface } from 'interfaces/projects';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  projects?: ProjectsInterface[];

  _count?: {
    projects?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  tenant_id?: string;
}
