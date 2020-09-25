module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    {
      script: 'src/process.js',
      name: 'trail-back',
      exec_mode: 'cluster',
      instances: 1,
      watch: './src',
    },

  ],
};
