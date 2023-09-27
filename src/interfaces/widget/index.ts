import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface WidgetInterface {
  id?: string;
  name: string;
  type: string;
  user_id: string;
  is_active?: boolean;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface WidgetGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
  user_id?: string;
}
