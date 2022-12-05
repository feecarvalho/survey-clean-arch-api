import app from './config/app'

app.listen(5050, () => console.log(`Server running at http://localhost:${process.env.PORT ?? 5050}`))
