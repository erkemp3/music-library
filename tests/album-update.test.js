const { expect } = require('chai');
const request = require('supertest');
const getDb = require('../src/services/db');
const app = require('../src/app');

describe('update album', () => {
  let db;
  let albums;
  beforeEach(async () => {
    db = await getDb();
    await Promise.all([
      db.query('INSERT INTO Album (name, year) VALUES(?, ?)', ['Kylie', 1998]),
      db.query('INSERT INTO Album (name, year) VALUES(?, ?)', [
        'El Camino',
        2011,
      ]),
      db.query('INSERT INTO Album (name, year) VALUES(?, ?)', [
        'Is This It',
        2001,
      ]),
    ]);

    [albums] = await db.query('SELECT * from Album');
  });

  afterEach(async () => {
    await db.query('DELETE FROM Album');
    await db.close();
  });

  describe('/album/:albumId', () => {
    describe('PATCH', () => {
      it('updates a single album with the correct id', async () => {
        const album = albums[0];
        const res = await request(app)
          .patch(`/album/${album.id}`)
          .send({ name: 'new name', year: 2009 });

        expect(res.status).to.equal(200);

        const [[newAlbumRecord]] = await db.query(
          'SELECT * FROM Album WHERE id = ?',
          [album.id]
        );

        expect(newAlbumRecord.name).to.equal('new name');
      });

      it('returns a 404 if the album is not in the database', async () => {
        const res = await request(app)
          .patch('/album/999999')
          .send({ name: 'new name' });

        expect(res.status).to.equal(404);
      });
    });
  });
});
