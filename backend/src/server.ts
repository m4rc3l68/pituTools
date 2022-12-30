import app from './app'
import database from './database'

database.sync({ force: true })
console.log('Database running at 3306')

const server = app.listen(3000, () => {
  console.log('Servidor rodando...')
})

process.on('SIGINT', () => {
  server.close()
  console.log('APP Finalizado!')
})
