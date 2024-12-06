/// <reference types="vite/client" />
// This file to get Typscript IntelliSense for user defined env variables prefixed with VITE_


interface ImportMetaEnv {
  //Declaring what environment variables exist and that they shouldnt be changed during runtime
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
}

interface ImportMeta {
  // This augments the existing ImportMeta interface. This means import.meta.env will adhere to the structure defined in ImportMetaEnv
  readonly env: ImportMetaEnv
}

