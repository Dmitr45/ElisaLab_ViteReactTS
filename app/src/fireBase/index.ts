import { fireBaseInitial } from "./InitializeFireBase";

const LINK: string = "https://pletnevd.com/api/json/?file=firebaseConfig";

function startBase(link_config_json: string) {
  fireBaseInitial(link_config_json);
}

export default startBase(LINK);
