export const LINKapi = "https://pletnevd.com/api/";

export async function getDATA(nameService: string, params?: any): Promise<any> {
  let data: [] = [];
  try {
    await fetch(`${LINKapi}${nameService}?${params}`)
      .then((response) => response.json())
      .then((json) => (data = json));
    return data;
  } catch (err) {
    console.error(err);
    return data;
  }
}

export async function postDATA(
  nameService: string,
  params?: object
): Promise<any> {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  };
  let data: object = {};
  try {
    await fetch(LINKapi + nameService, requestOptions)
      .then((response) => response.json())
      .then((json) => (data = json));
    return data;
  } catch (err) {
    return err;
  }
}
