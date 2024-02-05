import { PatientCompany } from 'types/patientCompany.type';
import { PatientLocation } from 'types/patientLocation.type';
import { VisionDefect } from 'types/visionDefect.type';

export const companies = [
  {
    id: 'company-a',
    name: 'Company A',
  },
  {
    id: 'company-b',
    name: 'Company B',
  },
] satisfies PatientCompany[];

export const patientLocations = [
  {
    name: 'Poznań',
    id: 'poznan',
    districts: [
      {
        id: 'wilda',
        name: 'Poznań - Wilda',
      },
      {
        id: 'winogrady',
        name: 'Poznań - Winogrady',
      },
    ],
  },
  {
    name: 'Warszawa',
    id: 'warsaw',
    districts: [
      {
        id: 'praga',
        name: 'Warszawa - Praga',
      },
      {
        id: 'tarchomin',
        name: 'Warszawa - Tarchomin',
      },
    ],
  },
] satisfies PatientLocation[];

export const visionDefects = [
  {
    name: 'Myopia',
    id: 'vision-defect-1',
  },
  {
    name: 'Astigmatism',
    id: 'vision-defect-2',
  },
] satisfies VisionDefect[];
