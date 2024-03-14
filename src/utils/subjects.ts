export const subjects: { label: string; value: string }[] = [
  {
    label: 'Physics/Mechanics',
    value: 'Physics/Mechanics',
  },
  {
    label: 'Physics/Heat and Thermodynamics',
    value: 'Physics/Heat and Thermodynamics',
  },
  {
    label: 'Physics/Waves and Optics',
    value: 'Physics/Waves and Optics',
  },
  {
    label: 'Physics/Electricity and Magnetism',
    value: 'Physics/Electricity and Magnetism',
  },
  {
    label: 'Physics/Modern Physics',
    value: 'Physics/Modern Physics',
  },

  {
    label: 'Chemistry',
    value: 'Chemistry',
  },
  {
    label: 'Botany',
    value: 'Botany',
  },
  {
    label: 'Zoology',
    value: 'Zoology',
  },
  {
    label: 'MAT',
    value: 'MAT',
  },
];

export type SubjectData = {
  [key: string]: string[];
};

export const PhysicsData: SubjectData = {
  Mechanics: [
    'Physical quantities',
    'Vectors',
    'Kinematics',
    'Dynamics',
    'Work, energy and power',
    'Circular motion',
    'Gravitation',
    'Elasticity',
    'Rotational dynamics',
    'Periodic motion',
    'Fluid statics',
  ],
  'Heat and Thermodynamics': [
    'Heat and temperature',
    'Thermal expansion',
    'Quantity of heat',
    'Rate of heat flow',
    'Ideal gas',
    'First law of thermodynamics',
    'Second law of thermodynamics',
  ],
  'Wave and Optics': [
    'Reflection at curved mirror',
    'Refraction at plane surfaces',
    'Refraction through prisms',
    'Lenses',
    'Dispersion',
    'Wave motion',
    'Mechanical waves',
    'Wave in pipes and strings',
    'Acoustic phenomena',
    'Nature and propagation of light',
    'Interference',
    'Diffraction',
    'Polarization',
  ],
  'Electricity and Magnetism': [
    'Electric charges',
    'Electric field',
    'Potential, potential difference and potential energy',
    'Capacitor',
    'DC circuits',
    'Electrical circuits',
    'Thermoelectric effects',
    'Magnetic field',
    'Magnetic properties of materials',
    'Electromagnetic Induction',
    'Alternating currents',
  ],
  'Modern Physics': [
    'Nuclear physics',
    'Solids',
    'Recent trends in physics',
    'Electrons',
    'Photons',
    'Semiconductor devices',
    'Quantization of energy',
    'Radioactivity and nuclear reaction',
    'Recent trends in physics',
  ],
};

export const chemistryData: SubjectData = {
  'General and Physical Chemistry': [
    'Foundation and Fundamentals',
    'Stoichiometry',
    'Atomic structure',
    'Classification of elements and periodic table',
    'Chemical bonding and shapes of molecules',
    'Oxidation and reduction',
    'States of matter',
    'Chemical equilibrium',
    'Volumetric analysis',
    'Ionic equilibrium',
    'Chemical kinetics',
    'Thermodynamics',
    'Electrochemistry',
  ],
  'Inorganic Chemistry': [
    'Chemistry of Non-metals',
    'Chemistry of metals',
    'Bio-inorganic chemistry',
    'Transition metals',
    'Studies of heavy metals',
  ],
  'Organic Chemistry': [
    'Basic concept of organic chemistry',
    'Fundamental principles',
    'Hydrocarbons',
    'Aromatic hydrocarbons',
    'Haloalkanes',
    'Haloarenes',
    'Alcohols',
    'Phenols',
    'Ethers',
    'Aldehydes and ketones',
    'Carboxylic acid and its derivatives',
    'Nitro compounds',
    'Amines',
    'Organometallic compounds',
  ],
  'Applied Chemistry': [
    'Fundamentals of applied chemistry',
    'Modern chemical manufactures',
    'Chemistry in the service of mankind',
    'Cement',
    'Paper and pulp',
    'Nuclear chemistry and application of radioactivity',
  ],
};

export const biologyData: SubjectData = {
  Botany: [
    'Biomolecules and cell biology',
    'Floral diversity',
    'Introductory microbiology',
    'Ecology',
    'Vegetation',
    'Plant anatomy',
    'Plant physiology',
    'Genetics',
    'Embryology',
    'Biotechnology',
  ],
  Zoology: [
    'Introduction to biology',
    'Evolutionary biology',
    'Faunal diversity',
    'Biota and environment',
    'Conservation biology',
    'Animal tissues',
    'Development biology',
    'Human biology',
    'Human population and health disorders',
    'Applied biology',
  ],
};
