import { useAppContext } from "../context/ContextProvider";

const data = { username: "example" };

interface ResponseType {


};



export async function RequestPOSTApi(baseURL:string, paramsURL:string):Promise<ResponseType>{
    console.log("Принял задание на отправку запроса к серверу: " + baseURL + paramsURL )
    const response = await fetch(baseURL+paramsURL, {
        method: "POST",
        body: JSON.stringify({ text: "example" }),

    })
        .then(data => {
            console.table(data);
            return data;
          })
          .catch(e => {
            console.log(e);
            return e;
          });
    return response
}

