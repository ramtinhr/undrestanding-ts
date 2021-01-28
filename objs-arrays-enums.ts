// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'ramtin',
//   age: 21,
//   hobbies: ['Sports', 'Coding'],
//   role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 'Admin',
  READ_ONLY = 1,
  AUTHOR = 2,
};

const person = {
  name: 'ramtin',
  age: 21,
  hobbies: ['Sports', 'Coding'],
  role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[0] = 10;

let favriteActivities: string[];
favriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log('hi admin');
}
