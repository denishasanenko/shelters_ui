

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allShelters
// ====================================================

export interface allShelters_allShelters {
  id: string;
  name: string;
  category: ShelterCategory;
  created_at: any | null;
}

export interface allShelters {
  allShelters: allShelters_allShelters[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ShelterCategory {
  BOTH = "BOTH",
  CATS = "CATS",
  DOGS = "DOGS",
}

//==============================================================
// END Enums and Input Objects
//==============================================================