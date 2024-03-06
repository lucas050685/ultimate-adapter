export const payload = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 32,
  gender: 'female',
  email: 'alice.johnson@example.com',
  phone: '+1234567890',
  address: {
    street: '123 Main St',
    city: 'Springfield',
    state: 'IL',
    zipCode: '12345',
    country: 'USA',
  },
  interests: ['hiking " and other', 'reading', 'cooking', 'photography'],
  education: {
    degree: 'Bachelor of Science',
    major: 'Computer Science',
    university: 'University of Springfield',
    graduationYear: 2012,
  },
  employment: {
    company: 'Tech Innovations Inc.',
    position: 'Senior Software Engineer',
    yearsOfExperience: 8,
    previousCompanies: ['Big Data Solutions', 'Software Co. Ltd'],
  },
  socialMedia: {
    linkedin: 'https://www.linkedin.com/in/alicejohnson',
    twitter: 'https://twitter.com/alice_j',
    github: 'https://github.com/alicej',
  },
  family: {
    spouse: {
      firstName: 'Bob',
      lastName: 'Johnson',
      age: 35,
      gender: 'male',
      occupation: 'Financial Analyst',
      email: 'bob.johnson@example.com',
    },
    children: [
      {
        firstName: 'Emma',
        age: 6,
        gender: 'female',
      },
      {
        firstName: 'Jack',
        age: 4,
        gender: 'male',
      },
    ],
  },
  pets: [
    {
      name: 'Buddy',
      type: 'Dog',
      breed: 'Golden Retriever',
      age: 4,
    },
    {
      name: 'Whiskers',
      type: 'Cat',
      breed: 'Siamese',
      age: 2,
    },
  ],
  hobbies: [
    {
      name: 'Painting',
      description: 'Watercolor landscapes',
    },
    {
      name: 'Gardening',
      description: 'Growing organic vegetables',
    },
  ],
};

export const sys = {
  date: new Date(),
  transactionId: 'XYZ',
};

export const origin = { sys, payload };
