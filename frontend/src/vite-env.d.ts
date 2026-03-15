interface ImportMetaEnv {
    readonly VITE_PUBLIC_GOOGLE_MAPS_API_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

/// <reference types="vite/client" />

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.webm' {
  const src: string;
  export default src;
}

declare module '*.ogg' {
  const src: string;
  export default src;
}

declare module '*.mov' {
  const src: string;
  export default src;
}