import axios from "axios";
import {
  REACT_APP_BASE_URL,
  REACT_APP_IGDB_KEY,
  REACT_APP_IGDB_USER,
} from "@env";

export default async function getApi(pesquisa, offsetNumber, start) {
  //If (start === true) the game is starting, if false, the user is searching for something
  var parametersSearch =
    start === true
      ? `fields id,name,summary,follows,platforms,cover.*,screenshots.*; offset ${
          offsetNumber || 0
        }; 
        where screenshots != null & cover != null & follows > 350;limit 40;`
      : `fields id,name,summary,follows,platforms,cover.*,screenshots.*;
            search "${pesquisa || "metal"}*"; offset ${offsetNumber || 0}; 
            where screenshots != null & cover != null & follows > 1;limit 20;`;
  try {
    let response = await axios({
      url: `${REACT_APP_BASE_URL}`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": `${REACT_APP_IGDB_USER}`,
        Authorization: `${REACT_APP_IGDB_KEY}`,
      },

      data: parametersSearch,
    });
    const result = await response.data;
    return response.data;
  } catch (error) {
    alert(error);
  }
}
