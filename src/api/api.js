const getEnvVar = (key) => {
    if (process.env[key] === undefined) {
        throw new Error(`Env variable ${key} is required`);
    }
    return process.env[key] || "" 
};
console.log(getEnvVar(API_URL))