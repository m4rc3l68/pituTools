import app from './app'
import database from './database'

database.sync()
console.log('Database running at 3306')

const server = app.listen(3001, () => {
  console.log('Server running at 3001')
})

process.on('SIGINT', () => {
  server.close()
  console.log('APP Finishing!')
})
