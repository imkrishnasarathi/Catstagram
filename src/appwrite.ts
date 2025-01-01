import { Client, Account } from 'appwrite';

const client = new Client();
const account = new Account(client);

client
    .setEndpoint('http://localhost/v1') 
    .setProject('5fca3f6d5fb7a')

export { client, account };