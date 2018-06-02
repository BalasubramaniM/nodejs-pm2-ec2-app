module.exports = {
  apps: [
    {
      name: "nodejs-pm2-ec2-app",
      script: "./bin/www",
      env: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-xx-xxx-xxx-xx.us-east-2.compute.amazonaws.com",
      key: "~/.ssh/AWS-EC2-INSTANCE-LIVE.pem",
      ref: "origin/master",
      repo: "git@github.com:BalasubramaniM/nodejs-pm2-ec2-app.git",
      path: "/home/ubuntu/my-app",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
