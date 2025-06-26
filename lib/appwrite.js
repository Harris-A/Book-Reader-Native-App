import { Client, Account, Avatars } from "react-native-appwrite";

// set new constant called 'client'
const client = new Client()

    // set project ID from appwrite.io
    .setProject('68542aea00304005aa76')
    .setPlatform('dev.reactapp.cozyreader');


export const account = new Account(client);   // create a new instance of account class which connects to backend using above details
export const avatars = new Avatars(client);