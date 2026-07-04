import { initFederation } from '@angular-architects/native-federation';

initFederation({
  dashboard: 'http://localhost:4200/remoteEntry.json',
  products: 'http://localhost:4200/remoteEntry.json',
  users: 'http://localhost:4200/remoteEntry.json',
})
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
