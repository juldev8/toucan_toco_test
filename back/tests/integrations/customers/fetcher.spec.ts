import { httpGetAllRequest } from '@tests/shared/http';

describe('Customers fetcher Controller', () => {
  describe('GET /api/public/customers', () => {
    const data = {} as any;
    beforeEach(async () => {
      data.response = await httpGetAllRequest('/api/public/customers');
      data.body = JSON.parse(data.response.text);
    });

    it('Should have status code 200', async () => {
      expect(data.response.statusCode).toBe(200);
    });

    it('Should return an array', async () => {
        expect(data.body.data.length).toBeGreaterThan(0);
    });

    it('Should return customer object', async () => {
        // verify the object
    });

    it('Should return customer entity', async () => {
        // verify the entity in database
    });
  });
  describe('GET /api/public/customers/<customer-id>', () => {
    describe('With valid customer-id', () => {
      const data = {} as any;
      beforeEach(async () => {
        data.response = await httpGetAllRequest('/api/public/customers/808cc483-54ea-4185-804a-01a22745c508');
        data.body = JSON.parse(data.response.text);
      });
      it('Should have status code 200', async () => {
        expect(data.response.statusCode).toBe(200);
      });

      it('Should return review with an id', async () => {});
    });

    describe('With wrong customer-id uuid', () => {
      const data = {} as any;
      beforeEach(async () => {
        data.response = await httpGetAllRequest('/api/public/customers/808cc483-54ea-4185-804a-01a22745c5');
      });

      it('Should have status code 400', async () => {
        expect(data.response.statusCode).toBe(400);
      });
    });

    describe('With invalid customer-id', () => {
        const data = {} as any;
        beforeEach(async () => {
          data.response = await httpGetAllRequest('/api/public/customers/808cc483-54ea-4185-804a-01a22745c501');
        });

        it('Should have status code 404', async () => {
          expect(data.response.statusCode).toBe(404);
        });
    });
  });
});
