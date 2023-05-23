/**
 * Title: person.class.ts
 * Author: Zahava Gopin
 * Date: 23 May 2023
 * Description: Person class
 */

//Implement the IPerson interface 
import { IPerson } from "./person.interface";

class Person implements IPerson {
    firstName: string;
    lastName: string;

//Accept two arguments (firstName and lastName) and assign the values to the implemented IPerson fields 
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
//a new Person object passing-in my first and last name
let myName = new Person("Zahava", "Gopin");

//output the Person objects first and last name values
console.log(`My name is ${myName.firstName} ${myName.lastName}`);