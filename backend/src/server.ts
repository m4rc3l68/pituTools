import app from './app'

const server = app.listen(3000, () => {
  console.log('Servidor rodando...')
})

process.on('SIGINT', () => {
  server.close()
  console.log('APP Finalizado!')
})
