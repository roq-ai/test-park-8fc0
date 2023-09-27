const mapping: Record<string, string> = {
  menus: 'menu',
  'nav-bars': 'nav_bar',
  parkings: 'parking',
  teams: 'team',
  users: 'user',
  widgets: 'widget',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
