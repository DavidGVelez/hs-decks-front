import axios from 'axios'

const getCards = async () => {
  console.log('hola')
  try {
    let res = await axios.get(`${process.env.VUE_APP_API}/bnet/cards`, {
      headers: {
        'Content-Type': 'application-json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    return res
  } catch (e) {
    console.error('Error fetching cards')
  }
}

export default { getCards }
