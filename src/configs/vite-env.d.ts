interface ImportMetaEnv {
    readonly VITE_BASE_URL: string
    // readonly VITE_OPENAI_BASE_URL: string
    // readonly VITE_OPENAI_API_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
