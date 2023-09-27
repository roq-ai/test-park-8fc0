interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator', 'Developer', 'Designer', 'End User'],
  tenantName: 'Team',
  applicationName: 'test park',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user information',
    'Manage team information',
    'Manage widget information',
    'Manage parking information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/74c35591-1da3-40a0-b7b4-29878d56b71b',
};
