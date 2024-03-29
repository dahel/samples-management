const laboratories = [
  {
    id: 'lab-a',
    name: 'Laboratory A',
    address: 'ul. Nowowiejskiego 5',
    city: 'Poznan',
    rooms: [
      {
        id: 'room-a',
        name: 'Room A',
        patientDistrictId: 'winogrady',
      },
      {
        id: 'room-b',
        name: 'Room B',
        patientDistrictId: 'wilda',
      },
    ],
  },
  {
    id: 'lab-b',
    name: 'Laboratory B',
    address: 'ul. Wiejska 6',
    city: 'Poznan',
    rooms: [
      {
        id: 'room-a',
        name: 'Room A',
        patientDistrictId: 'praga',
      },
      {
        id: 'room-b',
        name: 'Room B',
        patientDistrictId: 'tarchomin',
      },
    ],
  },
];

export default laboratories;
