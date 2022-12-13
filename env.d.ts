/// <reference types="vite/client" />

interface Window {
  readonly VITE_MODE_ENV: string
  readonly VITE_BASE_URL: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
