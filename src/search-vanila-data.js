// patwrAk6UV3MCu9k6.ffb941cbed52585800fc41fe696b973a2c292f368197eae119421cde989f97b7
import Airtable, { Record } from 'airtable'

const token =
  'patwrAk6UV3MCu9k6.ffb941cbed52585800fc41fe696b973a2c292f368197eae119421cde989f97b7'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

let base = Airtable.base('app6xXNrXQb1jG82N')

function getPostTeasures() {
  return new Promise((resolve, reject) => {
    const content = []

    base('veranda-data')
      .select({ maxRecords: 30 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields['Title'],
            description: record.fields['description'],
            tags: record.fields['Tags'],
            url: record.fields['Url']
          })
        })
        resolve(content)
      })
    console.log(content)
  })
}
export { getPostTeasures }
