module.exports = {
  HOST: "localhost",
  USER: "jwt",
  PASSWORD: "StrantCello82",
  DB: "auth",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
