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
        // wszystko z winogrady
      },
      {
        id: 'room-b',
        name: 'Room B',
        patientDistrictId: 'wilda',
        // wszystko z wildy
      },
    ]
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
        // wszystko z pragi
      },
      {
        id: 'room-b',
        name: 'Room B',
        patientDistrictId: 'tarchomin',
        // wszystko z tarchomina
      },
    ]
  },
];

export default laboratories;
