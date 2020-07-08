

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: pets
// ====================================================

export interface pets_pets_shelter {
  id: string;
  name: string;
}

export interface pets_pets {
  id: string;
  name: string;
  picture: string;
  gender: PetGender | null;
  age: number | null;
  shelter: pets_pets_shelter | null;
}

export interface pets {
  pets: pets_pets[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: pet
// ====================================================

export interface pet_pet_shelter {
  id: string;
  name: string;
}

export interface pet_pet {
  id: string;
  name: string;
  picture: string;
  gender: PetGender | null;
  age: number | null;
  shelter: pet_pet_shelter | null;
}

export interface pet {
  pet: pet_pet;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signIn
// ====================================================

export interface signIn {
  signIn: string;
}

export interface signInVariables {
  input?: SignInput | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum PetGender {
  female = "female",
  male = "male",
  unknown = "unknown",
}

// 
export interface SignInput {
  email: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================