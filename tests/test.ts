class Student {
    // thuoc tinh chung
    name: string;
    city: string;

    // ham khoi tao
    constructor(name:string, city:string) {
        this.name = name;
        this.city = city;
    }

    sayMyName() {
        console.log(`My name is: ${this.name}`);
    }

    saySomething(message?: string) {
        if (message) {
            console.log(`${this.name} says: ${message}`);
        } else {
            console.log("nothing");
        }
    }
}

let student1 = new Student("Dat", "HCM");
student1.sayMyName();
student1.saySomething("hi there");