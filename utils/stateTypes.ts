export interface UserState {
  userData: {
    // Define the properties of userData here
    displayName: string | null;
    email: string;
    emailVerified: boolean;
    phoneNumber: string | null;
    photoURL: string | null;
    uid: string;
    // Add other properties as needed
  };
  userDetails: {
    firstName: string;
    lastName: string;
    role: "owner" | "player";
  };
  isLoading: boolean;
}

export interface RootState {
  user: UserState;
  // Define other slices of your state here
}
