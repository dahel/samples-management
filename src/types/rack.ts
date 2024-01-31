export interface Rack {
  id: string;
  location: {
    laboratoryId: string;
    roomId: string;
  },
  storageConditions: {
    ageMin: number;
    ageMax: number;
    cityId: string;
    cityDistrictId: string;
    companyId: string;
    vistionDefectId: string;
  }
}
