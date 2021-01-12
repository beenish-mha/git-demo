class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
}

const user1 = new User("beeni@gmail.com", "beeni");
const user2 = new User("khu@gmail.com", "khurram");
console.log(user1);
console.log(user2);