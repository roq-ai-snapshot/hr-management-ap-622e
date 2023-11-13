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
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read project information', 'Read personal user information', 'Read company information'],
  ownerAbilities: ['Manage projects', 'Manage user information', 'Manage company information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/75e285ab-a7f6-41c6-a17c-ddabfd49c294',
};
