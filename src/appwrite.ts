import { Client, Account } from 'appwrite';

const client = new Client();
const account = new Account(client);

client
    .setEndpoint('http://localhost/v1') 
    .setProject('6774db4f0019e0f9e984')

export { client, account };