type Person =  {
    name: string;
    age: number;
    nickname: string;
    hobbies: string[]
    role: any
}
enum Role {
    ADMIN = 'admin',
    Customer = 20
};
const person: Person = {
    name: 'Eben',
    age: 40,
    nickname: 'Segz',
    hobbies: ['sports', 'Cooking'],
    role: Role.ADMIN
}
person.role[1] = '10'

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}
console.log(person)