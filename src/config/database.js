module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gymdb',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
