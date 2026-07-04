import { initFederation } from '@angular-architects/native-federation';

initFederation({
  dashboard: 'http://localhost:4201/remoteEntry.json',
  products: 'http://localhost:4202/remoteEntry.json',
  users: 'http://localhost:4203/remoteEntry.json',
})
  .catch((err) => console.error(err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
