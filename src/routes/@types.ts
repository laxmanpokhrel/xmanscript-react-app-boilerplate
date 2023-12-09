import Permission from '@/constants/Permission';

export default interface IRoute {
  id?: number;
  path: string;
  name: string;
  component: React.ComponentType<any>;
  authenticated: boolean;
  permissionType?: Permission | undefined;
  fallback?: React.ComponentType<any>;
}
