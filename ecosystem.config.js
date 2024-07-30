module.exports = {
  apps: [
    {
      name: 'gondli',
      script: 'npm',
      args: 'run start',
      env: {
        PORT: 3000,
        NODE_ENV: 'production',
      },
    },
  ],
};
