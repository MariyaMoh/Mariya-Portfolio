import { ApolloClient , InMemoryCache }  from "@apollo/client";


const client = new ApolloClient ({
    uri: "https://api-eu-central-1.graphcms.com/v2/cl39wyq4n1x9u01xs1qzu0rsa/master",
    cache: new InMemoryCache(), 

});

export default client;