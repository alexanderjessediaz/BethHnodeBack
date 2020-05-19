const db = new HarperDBConnect('AJ_Diaz', 'Jackie')

// useful for quick auth credentials
const authToken = db.setAuthorization('AJ_Diaz', 'Jackie')

const connectToDB = async () => {
    let db
    try {
        db = await new HarperDBConnect('Aj_Diaz','Jackie', 'http://localhost:9925' )
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}

// example of a default options for request method
db.setDefaultOptions({
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    json: true
})

// attemps to connect to the HarperDB Database. Returns a promist and will set the url on the default options if successful

db.connect('http://localhost:9925')
    .then(() => console.log("Connected!"))
    .catch(err => console.log(err))



// without defaults(defaults recommended):
const db = new HarperDBConnect('admin', 'Password123!', 'http://localhost:5000')
db.request({
    method: 'POST',
    url: db.options.url,
    headers: {
      'content-type': 'application/json',
      authorization: db.authorization,
    },
    json: true,
    body: { operation: 'describe_all' },
  })
  .then(res => console.log(res))
  .catch(err => console.error(err))