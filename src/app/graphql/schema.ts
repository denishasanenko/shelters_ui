

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
  shelter: pets_pets_shelter | null;
}

export interface pets {
  pets: pets_pets[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================