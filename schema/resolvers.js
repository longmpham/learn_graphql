const { UserList } = require("../FakeData")

const resolvers = {
  Query: {
    users: () => UserList
    // users () {
    //   return UserList
    // },

  },
}

module.exports = { resolvers }