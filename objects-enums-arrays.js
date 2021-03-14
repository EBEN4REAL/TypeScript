"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role[Role["Customer"] = 20] = "Customer";
})(Role || (Role = {}));
;
var person = {
    name: 'Eben',
    age: 40,
    nickname: 'Segz',
    hobbies: ['sports', 'Cooking'],
    role: Role.ADMIN
};
person.role[1] = '10';
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person);
