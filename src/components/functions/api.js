import axios from 'axios';
import {BASE_URL, IGDB_KEY, IGDB_USER} from '@env';

export default async function getApi(pesquisa,offsetNumber, start){
    var parametersSearch = ((start === true) ? 
    `fields id,name,summary,follows,platforms,cover.*,screenshots.*; offset ${offsetNumber || 0}; 
        where screenshots != null & cover != null & follows > 350;limit 40;` 
    : 
    `fields id,name,summary,follows,platforms,cover.*,screenshots.*;
            search "${pesquisa || 'metal'}*"; offset ${offsetNumber || 0}; 
            where screenshots != null & cover != null & follows > 1;limit 20;`);
            console.log(start)
    try {
        let response = await axios({
        url: `${BASE_URL}`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID' : `${IGDB_USER}`,
            'Authorization' : `${IGDB_KEY}`,
        },

        data: parametersSearch
        })
        const result = await response.data
        console.log(result)
        return(response.data)
    } catch (error) {
        alert(error)
    }
}
