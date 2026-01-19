class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }

    ageComparator(user2) {
        if (this.age === user2.age) {
            return `${this.firstName} ${this.lastName} e ${user2.firstName} ${user2.lastName} hanno la stessa età`;
        } else if (this.age > user2.age) {
            return `${this.firstName} ${this.lastName} è più vecchio di ${user2.firstName} ${user2.lastName}`;
        } else {
            return `${user2.firstName} ${user2.lastName} è più vecchio di ${this.firstName} ${this.lastName}`;
        }
    }
}

const u1 = new User("Gino", "Pilotino", 18, "Roma");
const u2 = new User("Andrea", "Oreo", 22, "Trento");
const u3 = new User("Gianni", "Trevisan", 22, "Gorizia");

console.log(u2.ageComparator(u1));
console.log(u1.ageComparator(u2));
console.log(u3.ageComparator(u2));
