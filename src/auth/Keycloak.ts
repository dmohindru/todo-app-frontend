import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8180/",
    realm: "todoapp",
    clientId: "todo-react-client",
});

export default keycloak;