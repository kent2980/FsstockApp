import Constants from "expo-constants";

const ENVs = {
  dev: {
    // 開発環境の変数
    environment: "dev",
    apiUrl: "https://api.fs-stock.net",
    googleWebKey:
      "707999097098-l9k2tr1lvovt3onamghnhqs9sob6spb0.apps.googleusercontent.com",
    googleWebSecret: "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",
    googleApkKey:
      "707999097098-j31vir82b8lolb5esk49kaeal804rmpf.apps.googleusercontent.com",
    googleDrfKey: "LHH199woceOguYope3FVVWxV4wrHl36ZZLXl1bZ2",
    googleDrfSecret:
      "FBnwJnU6WHoKiEJjShf8zFv6gx3gDy0zz4IM7zJMFckVZ9j6YoCRAcL0zVnirlwvYgCPj2sTo93cl8wOkPLdoegR5hFTotAbTLBowIaOYxwbFO3ZjGxnpZpjAvw2Ze0W",
  },
  staging: {
    // ステージング環境の変数
    environment: "staging",
    apiUrl: "https://api.fs-stock.net",
    googleWebKey:
      "707999097098-l9k2tr1lvovt3onamghnhqs9sob6spb0.apps.googleusercontent.com",
    googleWebSecret: "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",
    googleApkKey:
      "707999097098-j31vir82b8lolb5esk49kaeal804rmpf.apps.googleusercontent.com",
    googleDrfKey: "LHH199woceOguYope3FVVWxV4wrHl36ZZLXl1bZ2",
    googleDrfSecret:
      "FBnwJnU6WHoKiEJjShf8zFv6gx3gDy0zz4IM7zJMFckVZ9j6YoCRAcL0zVnirlwvYgCPj2sTo93cl8wOkPLdoegR5hFTotAbTLBowIaOYxwbFO3ZjGxnpZpjAvw2Ze0W",
  },
  production: {
    // 本番環境の変数
    environment: "production",
    apiUrl: "https://api.fs-stock.net",
    googleWebKey:
      "707999097098-l9k2tr1lvovt3onamghnhqs9sob6spb0.apps.googleusercontent.com",
    googleWebSecret: "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",
    googleApkKey:
      "707999097098-j31vir82b8lolb5esk49kaeal804rmpf.apps.googleusercontent.com",
    googleDrfKey: "LHH199woceOguYope3FVVWxV4wrHl36ZZLXl1bZ2",
    googleDrfSecret:
      "FBnwJnU6WHoKiEJjShf8zFv6gx3gDy0zz4IM7zJMFckVZ9j6YoCRAcL0zVnirlwvYgCPj2sTo93cl8wOkPLdoegR5hFTotAbTLBowIaOYxwbFO3ZjGxnpZpjAvw2Ze0W",
  },
};

const ENVIRONMENT = process.env.ENVIRONMENT || "dev"; // デフォルトは 'dev'

function getEnvVars() {
  switch (ENVIRONMENT) {
    case "dev":
      return ENVs.dev;
    case "staging":
      return ENVs.staging;
    case "production":
      return ENVs.production;
    default:
      return ENVs.dev;
  }
}

export const ENV = getEnvVars();
