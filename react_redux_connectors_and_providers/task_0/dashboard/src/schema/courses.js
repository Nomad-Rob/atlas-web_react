import { normalize, schema } from 'normalizr';

// Define the course schema
const course = new schema.Entity('courses');

// Normalizer function for courses
export const coursesNormalizer = (data) => normalize(data, [course]);
