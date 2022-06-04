import axios from 'axios'

const URL = `${process.env.VUE_APP_API}/bnet/cards`

const getCards = async () => {
  try {
    let res = await axios.get(URL, {
      headers: {
        'Content-Type': 'application-json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    return res.data
  } catch (e) {
    console.error('Error fetching cards')
  }
}

const getCard = async (params) => {
  try {
    let res = await axios.get(URL + '/' + params.slug || params.id, {
      headers: {
        'Content-Type': 'application-json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    return res.data
  } catch (e) {
    console.error('Error fetching card ', { params })
  }
}

export default { getCards, getCard }
