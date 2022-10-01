import axios from 'axios';

export default async function getApi(pesquisa,offsetNumber,rating){
    try {
        let response = await axios({
        url: process.env.REACT_APP_BASE_URL,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID' : process.env.REACT_APP_IGDB_USER,
            'Authorization' : process.env.REACT_APP_IGDB_KEY,
        },
        data: `fields id,name,summary,follows,platforms,cover.*,screenshots.*;
            search "${pesquisa || 'metal'}*"; offset ${offsetNumber || 0}; where screenshots != null & cover != null & rating > ${rating || "0"};limit 30;`
        })
        const result = await response.data
        return(response.data)
    } catch (error) {
        alert(error)
    }
}
