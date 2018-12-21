export const typeDefs = /* GraphQL */ `type AggregateCard {
  count: Int!
}

type AggregateDeck {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Card {
  id: ID!
  author: User!
  deck: Deck!
  front: String!
  back: String!
  progress: Int!
  dueDate: DateTime!
}

type CardConnection {
  pageInfo: PageInfo!
  edges: [CardEdge]!
  aggregate: AggregateCard!
}

input CardCreateInput {
  author: UserCreateOneWithoutCardsInput!
  deck: DeckCreateOneWithoutCardsInput!
  front: String!
  back: String!
  progress: Int!
  dueDate: DateTime!
}

input CardCreateManyWithoutAuthorInput {
  create: [CardCreateWithoutAuthorInput!]
  connect: [CardWhereUniqueInput!]
}

input CardCreateManyWithoutDeckInput {
  create: [CardCreateWithoutDeckInput!]
  connect: [CardWhereUniqueInput!]
}

input CardCreateWithoutAuthorInput {
  deck: DeckCreateOneWithoutCardsInput!
  front: String!
  back: String!
  progress: Int!
  dueDate: DateTime!
}

input CardCreateWithoutDeckInput {
  author: UserCreateOneWithoutCardsInput!
  front: String!
  back: String!
  progress: Int!
  dueDate: DateTime!
}

type CardEdge {
  node: Card!
  cursor: String!
}

enum CardOrderByInput {
  id_ASC
  id_DESC
  front_ASC
  front_DESC
  back_ASC
  back_DESC
  progress_ASC
  progress_DESC
  dueDate_ASC
  dueDate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CardPreviousValues {
  id: ID!
  front: String!
  back: String!
  progress: Int!
  dueDate: DateTime!
}

input CardScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  front: String
  front_not: String
  front_in: [String!]
  front_not_in: [String!]
  front_lt: String
  front_lte: String
  front_gt: String
  front_gte: String
  front_contains: String
  front_not_contains: String
  front_starts_with: String
  front_not_starts_with: String
  front_ends_with: String
  front_not_ends_with: String
  back: String
  back_not: String
  back_in: [String!]
  back_not_in: [String!]
  back_lt: String
  back_lte: String
  back_gt: String
  back_gte: String
  back_contains: String
  back_not_contains: String
  back_starts_with: String
  back_not_starts_with: String
  back_ends_with: String
  back_not_ends_with: String
  progress: Int
  progress_not: Int
  progress_in: [Int!]
  progress_not_in: [Int!]
  progress_lt: Int
  progress_lte: Int
  progress_gt: Int
  progress_gte: Int
  dueDate: DateTime
  dueDate_not: DateTime
  dueDate_in: [DateTime!]
  dueDate_not_in: [DateTime!]
  dueDate_lt: DateTime
  dueDate_lte: DateTime
  dueDate_gt: DateTime
  dueDate_gte: DateTime
  AND: [CardScalarWhereInput!]
  OR: [CardScalarWhereInput!]
  NOT: [CardScalarWhereInput!]
}

type CardSubscriptionPayload {
  mutation: MutationType!
  node: Card
  updatedFields: [String!]
  previousValues: CardPreviousValues
}

input CardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CardWhereInput
  AND: [CardSubscriptionWhereInput!]
  OR: [CardSubscriptionWhereInput!]
  NOT: [CardSubscriptionWhereInput!]
}

input CardUpdateInput {
  author: UserUpdateOneRequiredWithoutCardsInput
  deck: DeckUpdateOneRequiredWithoutCardsInput
  front: String
  back: String
  progress: Int
  dueDate: DateTime
}

input CardUpdateManyDataInput {
  front: String
  back: String
  progress: Int
  dueDate: DateTime
}

input CardUpdateManyMutationInput {
  front: String
  back: String
  progress: Int
  dueDate: DateTime
}

input CardUpdateManyWithoutAuthorInput {
  create: [CardCreateWithoutAuthorInput!]
  delete: [CardWhereUniqueInput!]
  connect: [CardWhereUniqueInput!]
  disconnect: [CardWhereUniqueInput!]
  update: [CardUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [CardUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [CardScalarWhereInput!]
  updateMany: [CardUpdateManyWithWhereNestedInput!]
}

input CardUpdateManyWithoutDeckInput {
  create: [CardCreateWithoutDeckInput!]
  delete: [CardWhereUniqueInput!]
  connect: [CardWhereUniqueInput!]
  disconnect: [CardWhereUniqueInput!]
  update: [CardUpdateWithWhereUniqueWithoutDeckInput!]
  upsert: [CardUpsertWithWhereUniqueWithoutDeckInput!]
  deleteMany: [CardScalarWhereInput!]
  updateMany: [CardUpdateManyWithWhereNestedInput!]
}

input CardUpdateManyWithWhereNestedInput {
  where: CardScalarWhereInput!
  data: CardUpdateManyDataInput!
}

input CardUpdateWithoutAuthorDataInput {
  deck: DeckUpdateOneRequiredWithoutCardsInput
  front: String
  back: String
  progress: Int
  dueDate: DateTime
}

input CardUpdateWithoutDeckDataInput {
  author: UserUpdateOneRequiredWithoutCardsInput
  front: String
  back: String
  progress: Int
  dueDate: DateTime
}

input CardUpdateWithWhereUniqueWithoutAuthorInput {
  where: CardWhereUniqueInput!
  data: CardUpdateWithoutAuthorDataInput!
}

input CardUpdateWithWhereUniqueWithoutDeckInput {
  where: CardWhereUniqueInput!
  data: CardUpdateWithoutDeckDataInput!
}

input CardUpsertWithWhereUniqueWithoutAuthorInput {
  where: CardWhereUniqueInput!
  update: CardUpdateWithoutAuthorDataInput!
  create: CardCreateWithoutAuthorInput!
}

input CardUpsertWithWhereUniqueWithoutDeckInput {
  where: CardWhereUniqueInput!
  update: CardUpdateWithoutDeckDataInput!
  create: CardCreateWithoutDeckInput!
}

input CardWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  author: UserWhereInput
  deck: DeckWhereInput
  front: String
  front_not: String
  front_in: [String!]
  front_not_in: [String!]
  front_lt: String
  front_lte: String
  front_gt: String
  front_gte: String
  front_contains: String
  front_not_contains: String
  front_starts_with: String
  front_not_starts_with: String
  front_ends_with: String
  front_not_ends_with: String
  back: String
  back_not: String
  back_in: [String!]
  back_not_in: [String!]
  back_lt: String
  back_lte: String
  back_gt: String
  back_gte: String
  back_contains: String
  back_not_contains: String
  back_starts_with: String
  back_not_starts_with: String
  back_ends_with: String
  back_not_ends_with: String
  progress: Int
  progress_not: Int
  progress_in: [Int!]
  progress_not_in: [Int!]
  progress_lt: Int
  progress_lte: Int
  progress_gt: Int
  progress_gte: Int
  dueDate: DateTime
  dueDate_not: DateTime
  dueDate_in: [DateTime!]
  dueDate_not_in: [DateTime!]
  dueDate_lt: DateTime
  dueDate_lte: DateTime
  dueDate_gt: DateTime
  dueDate_gte: DateTime
  AND: [CardWhereInput!]
  OR: [CardWhereInput!]
  NOT: [CardWhereInput!]
}

input CardWhereUniqueInput {
  id: ID
}

scalar DateTime

type Deck {
  id: ID!
  author: User!
  title: String!
  description: String
  slug: String!
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card!]
  published: Boolean!
}

type DeckConnection {
  pageInfo: PageInfo!
  edges: [DeckEdge]!
  aggregate: AggregateDeck!
}

input DeckCreateInput {
  author: UserCreateOneWithoutDecksInput!
  title: String!
  description: String
  slug: String!
  cards: CardCreateManyWithoutDeckInput
  published: Boolean
}

input DeckCreateManyWithoutAuthorInput {
  create: [DeckCreateWithoutAuthorInput!]
  connect: [DeckWhereUniqueInput!]
}

input DeckCreateOneWithoutCardsInput {
  create: DeckCreateWithoutCardsInput
  connect: DeckWhereUniqueInput
}

input DeckCreateWithoutAuthorInput {
  title: String!
  description: String
  slug: String!
  cards: CardCreateManyWithoutDeckInput
  published: Boolean
}

input DeckCreateWithoutCardsInput {
  author: UserCreateOneWithoutDecksInput!
  title: String!
  description: String
  slug: String!
  published: Boolean
}

type DeckEdge {
  node: Deck!
  cursor: String!
}

enum DeckOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  slug_ASC
  slug_DESC
  published_ASC
  published_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DeckPreviousValues {
  id: ID!
  title: String!
  description: String
  slug: String!
  published: Boolean!
}

input DeckScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  published: Boolean
  published_not: Boolean
  AND: [DeckScalarWhereInput!]
  OR: [DeckScalarWhereInput!]
  NOT: [DeckScalarWhereInput!]
}

type DeckSubscriptionPayload {
  mutation: MutationType!
  node: Deck
  updatedFields: [String!]
  previousValues: DeckPreviousValues
}

input DeckSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DeckWhereInput
  AND: [DeckSubscriptionWhereInput!]
  OR: [DeckSubscriptionWhereInput!]
  NOT: [DeckSubscriptionWhereInput!]
}

input DeckUpdateInput {
  author: UserUpdateOneRequiredWithoutDecksInput
  title: String
  description: String
  slug: String
  cards: CardUpdateManyWithoutDeckInput
  published: Boolean
}

input DeckUpdateManyDataInput {
  title: String
  description: String
  slug: String
  published: Boolean
}

input DeckUpdateManyMutationInput {
  title: String
  description: String
  slug: String
  published: Boolean
}

input DeckUpdateManyWithoutAuthorInput {
  create: [DeckCreateWithoutAuthorInput!]
  delete: [DeckWhereUniqueInput!]
  connect: [DeckWhereUniqueInput!]
  disconnect: [DeckWhereUniqueInput!]
  update: [DeckUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [DeckUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [DeckScalarWhereInput!]
  updateMany: [DeckUpdateManyWithWhereNestedInput!]
}

input DeckUpdateManyWithWhereNestedInput {
  where: DeckScalarWhereInput!
  data: DeckUpdateManyDataInput!
}

input DeckUpdateOneRequiredWithoutCardsInput {
  create: DeckCreateWithoutCardsInput
  update: DeckUpdateWithoutCardsDataInput
  upsert: DeckUpsertWithoutCardsInput
  connect: DeckWhereUniqueInput
}

input DeckUpdateWithoutAuthorDataInput {
  title: String
  description: String
  slug: String
  cards: CardUpdateManyWithoutDeckInput
  published: Boolean
}

input DeckUpdateWithoutCardsDataInput {
  author: UserUpdateOneRequiredWithoutDecksInput
  title: String
  description: String
  slug: String
  published: Boolean
}

input DeckUpdateWithWhereUniqueWithoutAuthorInput {
  where: DeckWhereUniqueInput!
  data: DeckUpdateWithoutAuthorDataInput!
}

input DeckUpsertWithoutCardsInput {
  update: DeckUpdateWithoutCardsDataInput!
  create: DeckCreateWithoutCardsInput!
}

input DeckUpsertWithWhereUniqueWithoutAuthorInput {
  where: DeckWhereUniqueInput!
  update: DeckUpdateWithoutAuthorDataInput!
  create: DeckCreateWithoutAuthorInput!
}

input DeckWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  author: UserWhereInput
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  cards_every: CardWhereInput
  cards_some: CardWhereInput
  cards_none: CardWhereInput
  published: Boolean
  published_not: Boolean
  AND: [DeckWhereInput!]
  OR: [DeckWhereInput!]
  NOT: [DeckWhereInput!]
}

input DeckWhereUniqueInput {
  id: ID
  slug: String
}

scalar Long

type Mutation {
  createCard(data: CardCreateInput!): Card!
  updateCard(data: CardUpdateInput!, where: CardWhereUniqueInput!): Card
  updateManyCards(data: CardUpdateManyMutationInput!, where: CardWhereInput): BatchPayload!
  upsertCard(where: CardWhereUniqueInput!, create: CardCreateInput!, update: CardUpdateInput!): Card!
  deleteCard(where: CardWhereUniqueInput!): Card
  deleteManyCards(where: CardWhereInput): BatchPayload!
  createDeck(data: DeckCreateInput!): Deck!
  updateDeck(data: DeckUpdateInput!, where: DeckWhereUniqueInput!): Deck
  updateManyDecks(data: DeckUpdateManyMutationInput!, where: DeckWhereInput): BatchPayload!
  upsertDeck(where: DeckWhereUniqueInput!, create: DeckCreateInput!, update: DeckUpdateInput!): Deck!
  deleteDeck(where: DeckWhereUniqueInput!): Deck
  deleteManyDecks(where: DeckWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum Permission {
  ADMIN
  USER
}

type Query {
  card(where: CardWhereUniqueInput!): Card
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card]!
  cardsConnection(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardConnection!
  deck(where: DeckWhereUniqueInput!): Deck
  decks(where: DeckWhereInput, orderBy: DeckOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Deck]!
  decksConnection(where: DeckWhereInput, orderBy: DeckOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DeckConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  card(where: CardSubscriptionWhereInput): CardSubscriptionPayload
  deck(where: DeckSubscriptionWhereInput): DeckSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  permissions: [Permission!]!
  decks(where: DeckWhereInput, orderBy: DeckOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Deck!]
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  permissions: UserCreatepermissionsInput
  decks: DeckCreateManyWithoutAuthorInput
  cards: CardCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutCardsInput {
  create: UserCreateWithoutCardsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutDecksInput {
  create: UserCreateWithoutDecksInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

input UserCreateWithoutCardsInput {
  name: String!
  email: String!
  password: String!
  permissions: UserCreatepermissionsInput
  decks: DeckCreateManyWithoutAuthorInput
}

input UserCreateWithoutDecksInput {
  name: String!
  email: String!
  password: String!
  permissions: UserCreatepermissionsInput
  cards: CardCreateManyWithoutAuthorInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  permissions: [Permission!]!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  permissions: UserUpdatepermissionsInput
  decks: DeckUpdateManyWithoutAuthorInput
  cards: CardUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  permissions: UserUpdatepermissionsInput
}

input UserUpdateOneRequiredWithoutCardsInput {
  create: UserCreateWithoutCardsInput
  update: UserUpdateWithoutCardsDataInput
  upsert: UserUpsertWithoutCardsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutDecksInput {
  create: UserCreateWithoutDecksInput
  update: UserUpdateWithoutDecksDataInput
  upsert: UserUpsertWithoutDecksInput
  connect: UserWhereUniqueInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserUpdateWithoutCardsDataInput {
  name: String
  email: String
  password: String
  permissions: UserUpdatepermissionsInput
  decks: DeckUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutDecksDataInput {
  name: String
  email: String
  password: String
  permissions: UserUpdatepermissionsInput
  cards: CardUpdateManyWithoutAuthorInput
}

input UserUpsertWithoutCardsInput {
  update: UserUpdateWithoutCardsDataInput!
  create: UserCreateWithoutCardsInput!
}

input UserUpsertWithoutDecksInput {
  update: UserUpdateWithoutDecksDataInput!
  create: UserCreateWithoutDecksInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  decks_every: DeckWhereInput
  decks_some: DeckWhereInput
  decks_none: DeckWhereInput
  cards_every: CardWhereInput
  cards_some: CardWhereInput
  cards_none: CardWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`