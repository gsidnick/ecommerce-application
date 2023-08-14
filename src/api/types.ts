export interface UserCredentialData {
  email: string;
  password: string;
}

export interface UserRegistrationData {
  email: string;
  password: string;
}

export interface ExistingTokenFlowOptions {
  authorization: string;
  options: {
    force: boolean;
  };
}
