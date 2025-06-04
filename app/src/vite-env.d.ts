/// <reference types="vite/client" />
// vite-env.d.ts
declare module "virtual:pwa-register" {
  export function registerSW(options?: { immediate?: boolean }): void;
}
