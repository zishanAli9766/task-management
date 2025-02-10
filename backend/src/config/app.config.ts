import { getEnv } from "../utils/get-env";

const appConfig = () => ({
  NODE_ENV: getEnv("NODE_ENV", "development"),
  PORT: getEnv("PORT", "8000"),
  BASE_PATH: getEnv("BASE_PATH", "/api"),
  MONGO_URI: getEnv(
    "MONGO_URI",
    "mongodb+srv://zishanali:EHf9CbSx9s8FyEoj@cluster0.vq7ai.mongodb.net/test"
  ),

  // SESSION_SECRET: getEnv("SESSION_SECRET"),
  // SESSION_EXPIRES_IN: getEnv("SESSION_EXPIRES_IN"),
  SESSION_SECRET: getEnv("session_secret_key", "fallback_secret"), // Fixed default value
  SESSION_EXPIRES_IN: getEnv("SESSION_EXPIRES_IN", "1d"), // Added a default for safety

  // GOOGLE_CLIENT_ID: getEnv("GOOGLE_CLIENT_ID"),
  // GOOGLE_CLIENT_SECRET: getEnv("GOOGLE_CLIENT_SECRET"),
  // GOOGLE_CALLBACK_URL: getEnv("GOOGLE_CALLBACK_URL"),
  GOOGLE_CLIENT_ID: getEnv("GOOGLE_CLIENT_ID", "fallback_google_client_id"),
  GOOGLE_CLIENT_SECRET: getEnv(
    "GOOGLE_CLIENT_SECRET",
    "fallback_google_client_secret"
  ),
  GOOGLE_CALLBACK_URL: getEnv(
    "GOOGLE_CALLBACK_URL",
    "http://localhost:5173/auth/google/callback"
  ),

  FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN", "localhost"),
  //   FRONTEND_GOOGLE_CALLBACK_URL: getEnv("FRONTEND_GOOGLE_CALLBACK_URL"),
  FRONTEND_GOOGLE_CALLBACK_URL: getEnv(
    "FRONTEND_GOOGLE_CALLBACK_URL",
    "http://localhost:5173/google/ouath/callback"
  ),
});

export const config = appConfig();
