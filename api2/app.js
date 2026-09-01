const express = require('express')
const cors = require('cors')

const app = express()


app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id": 0,
      "title": "this is API 2"
    },
    {
      "id":"1",
      "title":"Book Review: The Bear & The Nightingale...27-Aug-2026...omg it worked =P =)  ..."
    },
    {
      "id":"2",
      "title":"Game Review: Pokemon Brillian Diamond"
    },
    {
      "id":"3",
      "title":"Show Review: Alice in Borderland"
    }
  ])
})

app.listen(5000, () => {
  console.log('listening for requests on port 5000')
}); 