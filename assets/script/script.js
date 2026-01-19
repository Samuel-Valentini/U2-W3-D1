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

class Pet {
    constructor(_petName, _petOwner, _species, _breed) {
        this.petName = _petName;
        this.petOwner = _petOwner;
        this.species = _species;
        this.breed = _breed;
    }

    sameOwner(pet2) {
        return this.petOwner === pet2.petOwner;
    }
}

const form = document.getElementById("formA");

const allAnimals = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("petName");
    const owner = document.getElementById("ownerName");
    const spec = document.getElementById("species");
    const bre = document.getElementById("breed");

    const pet = new Pet(name.value, owner.value, spec.value, bre.value);

    const tableRow = document.getElementById("tableA");
    const createTr = document.createElement("tr");
    const createTd1 = document.createElement("td");
    const createTd2 = document.createElement("td");
    const createTd3 = document.createElement("td");
    const createTd4 = document.createElement("td");
    const newText1 = document.createTextNode(pet.petName);
    const newText2 = document.createTextNode(pet.petOwner);
    const newText3 = document.createTextNode(pet.species);
    const newText4 = document.createTextNode(pet.breed);
    createTd1.appendChild(newText1);
    createTd2.appendChild(newText2);
    createTd3.appendChild(newText3);
    createTd4.appendChild(newText4);
    createTr.append(createTd1, createTd2, createTd3, createTd4);
    tableRow.appendChild(createTr);
    name.value = "";
    owner.value = "";
    spec.value = "";
    bre.value = "";
    allAnimals.push(pet);
});
