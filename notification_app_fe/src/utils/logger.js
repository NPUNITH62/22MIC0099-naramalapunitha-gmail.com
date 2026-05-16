import axios from "axios";

const Log = async (
    stack,
    level,
    pkg,
    message
) => {

    try {

        await axios.post(

            "http://4.224.186.213/evaluation-service/logs",

            {
                stack,
                level,
                package: pkg,
                message
            },

            {
                headers: {

                    Authorization:
                        "Bearer " +
                        process.env.REACT_APP_ACCESS_TOKEN,

                    "Content-Type":
                        "application/json"
                }
            }
        );

    } catch (error) {

        console.log(error);
    }
};

export default Log;