// const chai = require('chai')
// const chaiAsPromised = require('chai-as-promised')
// const chaiHttp = require('chai-http')
import chai = require('chai')
import chaiAsPromised = require('chai-as-promised')
import chaiHttp = require('chai-http')

let should = chai.should()
chai.use(chaiAsPromised)
chai.use(chaiHttp)

process.env.PORT = '3102'
const server = require('./index.ts')

describe('Sample Tests', function () {

  it('should return success = true', function () {
    return chai.request(server)
      .get('/test')
      .then((res) => {
        res.should.have.status(200)
        res.body.success.should.equal(true)
      })
      .catch((err) => {
        throw err
      })
  })

})