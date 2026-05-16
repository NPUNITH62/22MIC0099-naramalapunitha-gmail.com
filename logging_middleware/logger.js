const axios = require("axios");
require("dotenv").config();

const Log = async (stack, level, pkg, message) => {

    try {

        console.log("TOKEN:");
        console.log(process.env.ACCESS_TOKEN);

        const response = await axios({
            method: "POST",

            url: "http://4.224.186.213/evaluation-service/logs",

            headers: {
                'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN,
                'Content-Type': 'application/json'
            },

            data: {
                stack: stack,
                level: level,
                package: pkg,
                message: message
            }
        });

        console.log("SUCCESS");
        console.log(response.data);

    } catch (error) {

        console.log("ERROR");

        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
};

module.exports = Log;