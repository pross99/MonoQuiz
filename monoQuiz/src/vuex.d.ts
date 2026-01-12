import { Store } from 'vuex';
import { State } from '@/store'; // Adjust path to your store file

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>;
    $route: RouteLocationNormalizedLoaded;
    $router: Router;
  }
}