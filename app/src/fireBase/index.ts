import { fireBaseInitial } from "./InitializeFireBase";
import { authState } from "./authState";

const LINK: string = "https://pletnevd.com/api/json/?file=firebaseConfig";

function startBase(link_config_json: string) {
  fireBaseInitial(link_config_json);
}

export const FireBase = {
  fireBaseApp: startBase(LINK),
  authState: authState,
};
