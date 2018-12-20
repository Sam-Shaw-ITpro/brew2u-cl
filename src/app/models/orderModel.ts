import { Drink } from "./drinkModel";

export interface Order {
    drinks: Drink [],
    id: number,
    email: string,
    password: string,
    username: string,
    userAddress: string,
    userSecondAddress: string,
    userState: string,
    userCity: string,
    userZipcode: number,
    phoneNumber: string,
    firstName: string,
    lastName: string,
    isAdmin: boolean,
}