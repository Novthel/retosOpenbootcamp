import axios from 'axios'


async function getjokeChuckNorris () {

    try {
        let response = await axios('https://api.chucknorris.io/jokes/random')
        return response.data

    } catch (error) {
        console.log(error)
    }
   
}

export default getjokeChuckNorris