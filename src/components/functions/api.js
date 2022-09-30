import axios from 'axios';

export default async function getApi(pesquisa,offsetNumber,rating){
    try {
        let response = await axios({
        url: "https://api.igdb.com/v4/games/",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID' : 'o74awu8vxryi9gcwdnlut4lunh9w70',
            'Authorization' : 'Bearer 3lokooazshz7u0mgsmnsvhvya1x85a',
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
