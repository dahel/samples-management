namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined;
    REST_API_URL: string;
    MONGODB_URL: string;
  }
}
