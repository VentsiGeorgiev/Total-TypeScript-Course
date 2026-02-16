type Environment = "development" | "production" | "staging";

// solution 1
// type ConfigurationsUrl = {
//   apiBaseUrl: string;
//   timeout: number;
// };
// type Configurations = Record<Environment, ConfigurationsUrl>;

type ConfigurationsUrl = {
  apiBaseUrl: string;
  timeout: number;
};
type Configurations = {
  [Env in Environment]: ConfigurationsUrl;
};

const configurations: Configurations = {
  development: {
    apiBaseUrl: "http://localhost:8080",
    timeout: 5000,
  },
  production: {
    apiBaseUrl: "https://api.example.com",
    timeout: 10000,
  },
  staging: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
  // @ts-expect-error
  notAllowed: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
};
