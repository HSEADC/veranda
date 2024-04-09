import Airtable from 'airtable'

const token =
  'patQBveeQl0ifLo6i.b90574f7e9dbc913fb2df7c01be79b1be75b2e2af8fb484d3a5f773064caf851'

let Airtable = require('airtable')
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

let base = Airtable.base('app6xXNrXQb1jG82N')

base('Projects')
  .select({ maxRecords: 100 })
  .eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function (record) {
        console.log('Retrieved', record.get('Title'))
      })

      fetchNextPage()
    },
    function done(err) {
      if (err) {
        console.error(err)
        return
      }
    }
  )
