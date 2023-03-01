import { AfterAll } from "@cucumber/cucumber";
// import a from "../services/utils"

AfterAll(async () => {
    // await removeAccessToken();
})

const removeAccessToken = async () => {
    console.log("-- removeAccessToken");
    // await a.storeToken('');
}