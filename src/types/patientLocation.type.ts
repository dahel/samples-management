interface Discrict {
  id: string;
  name: string;
}

export interface PatientLocation {
  name: string;
  id: string;
  districts: Discrict[];
}
