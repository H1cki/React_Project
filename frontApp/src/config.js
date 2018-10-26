const envType = process.env.NODE_ENV;
const config = {};

switch (envType) {
 default:
   config.url = 'http://localhost:3000';
   break;
}

export default config;