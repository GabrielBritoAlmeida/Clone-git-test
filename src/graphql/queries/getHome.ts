const GET_HOME = /* GraphQL  */ `

fragment headline on Organization {
  description
  location
  login
  websiteUrl
}

fragment menu on Organization {
  repositories {
    totalCount
  }
  membersWithRole {
    totalCount
  }
}

query GET_HOME {
  organization(login: "facebook") {
    ...headline
    ...menu
  }
}


`
export default GET_HOME
