import express from 'express'

const app = express()

app.listen(5050, () => console.log(`Server running at http://localhost:${process.env.PORT ?? 5050}`))
