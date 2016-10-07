# s2v-iia-nodejs-ardrone2-apis
s2v-iia-nodejs-ardrone2-apis


1.	Create a project directory by running the following command:
# Create a folder where you want to download the Rolling-spider NPM nodules

mkdir s2v-iia-nodejs-ardrone2-apis && cd s2v-iia-nodejs-ardrone2-apis


2.	Install pre-requites (Bluetooth Noble pre-requites as https://github.com/sandeepmistry/noble#prerequisites ):
sudo apt-get install bluetooth bluez libbluetooth-dev libudev-dev build-essential g++

3.	Install the Rolling-Spider node module
npm install ar-drone

If this completes successfully, continue with the supporting modules below:


npm install temporal express

At the end of this step, you should have 3 modules installed (i.e. ar-drone, express, temporal) – Make a ls -l node-modules, to confirm…
That’s it, congratulations, you can start using the examples provided within the ar-drone module.

Just run:

node app

// It will show you the port where it is running. Then you can simply invoke the APIs that it exposes...  The APIs can be invoked via any REST client program, such as Postman, SOAPUI. We have extended our "Shoppingcart" (see repo: s2v-iia-nodejs-shoppingcart-demo - as part of this account) to easily, graphically and interactively call these APIs.

Any question, please drop an email.

Thanks for watching.
