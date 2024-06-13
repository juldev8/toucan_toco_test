
# prerequisites
install postgres

# installation
git clone https://github.com/juldev8/toucan_toco_test.git
cd back
npm i
npm run prisma:generate
npm run migrate:dev

# create .env
APP_PORT=3000
DATABASE_URL="postgresql://[name]:[password]@localhost:5432/[db]?schema=public"


# running
npm run start:dev


# test
npm run test:integration
