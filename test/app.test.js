const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

const should = chai.should();

describe('Server', () => {
  it('Welcome client to the API', (done) => {
    chai
    .request(server)
    .get('/')
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body.message).to.equals('Hello testing');
      done();
    })
  })
})