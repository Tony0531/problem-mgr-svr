import { Service } from './app'

const app = new Service("demo", console)
app.startup()

console.log('app started at port 3000...')
const server = app.listen(3000, () => console.log('Example app listening on port 3000!'))
export default server
