
import 'dotenv/config';

console.log(process.env);


const {INIT_CWD,TEMP} =  process.env;
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT;
const DB_PWD = process.env.DB_PWD;
const USERDOMAIN_ROAMINGPROFILE =  process.env.USERDOMAIN_ROAMINGPROFILE;

// console.log(process.env.PORT ?? 8080);
console.log(INIT_CWD);
console.log(TEMP);
console.log(DB_NAME);
console.log(PORT);
console.log(DB_PWD);
console.log(USERDOMAIN_ROAMINGPROFILE);