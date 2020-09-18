'use strict'

const accessrol = [{
  AccessId: 'de989354-2121-4e83-8f8b-d67b63d3f031',
  UserId: 'dc971f3f-7127-429d-8d16-5c08d521a07d',
  Rol: 'aenean',
  Level: 11
}, {
  AccessId: '140daf65-250a-455d-8f99-21bf1d45ff44',
  UserId: 'b6f10ab6-f2ab-48e5-be1c-be1aa8f53bdd',
  Rol: 'eget',
  Level: 4
}, {
  AccessId: 'cb98e276-9d1e-4112-b404-151860d679b9',
  UserId: 'f3f13dbb-686f-4762-9edd-dd39a4c70267',
  Rol: 'congue',
  Level: 6
}, {
  AccessId: '3c08d202-dc53-4648-a9bd-678be6ceeff4',
  UserId: '28a24c6c-4aff-45e2-9dfd-e9e0f2321904',
  Rol: 'turpis',
  Level: 10
}, {
  AccessId: 'fe3da3bb-a853-491b-83d4-36c0d94c2583',
  UserId: 'ff25cff0-d4db-4d08-87ab-29fef9d58277',
  Rol: 'dolor',
  Level: 20
}, {
  AccessId: 'e25ceb70-dbe8-457b-ad89-4399df1ebf2e',
  UserId: '48163cb9-8eb6-44a2-a1d1-7c11090bd26b',
  Rol: 'amet',
  Level: 9
}, {
  AccessId: 'f8cee65e-a7e1-4d1a-9222-aea451733f8f',
  UserId: '1e0da812-eb23-4ecb-84fe-2ca6947b4731',
  Rol: 'vestibulum',
  Level: 7
}, {
  AccessId: '6ff6ed52-f736-4001-93ad-143c928db86b',
  UserId: 'ef2a68c0-a0a8-476e-b2ac-d93d75c4c0e9',
  Rol: 'consequat',
  Level: 12
}, {
  AccessId: 'b43751f7-7288-4cfb-a42e-6c2e88010f16',
  UserId: '8769f5de-e460-4944-97cc-f61fce700744',
  Rol: 'ut',
  Level: 12
}, {
  AccessId: 'd9e3ed54-097c-4372-98d9-2bcf37f1b92b',
  UserId: 'f2749fca-7924-4ce0-aa2a-f0cd008f187e',
  Rol: 'est',
  Level: 1
}]

const users = [{
  UserId: 'dc971f3f-7127-429d-8d16-5c08d521a07d',
  Nickname: 'Gilstoun',
  Name: 'Myrvyn Gilstoun',
  Country: 'Japan',
  PostalCode: '818-0138',
  ContactId: '8dd1d4de-bc50-4627-b11d-331f987f2efd',
  Birthday: '11/30/2004',
  DateCreated: '4/5/2020',
  PlatformId: 'ccd663a1-60fe-4601-9f38-93c5d7ad0c82',
  RolId: 'de989354-2121-4e83-8f8b-d67b63d3f031',
  Status: 1
}, {
  UserId: 'b6f10ab6-f2ab-48e5-be1c-be1aa8f53bdd',
  Nickname: 'Atger',
  Name: 'Wilt Atger',
  Country: 'Jordan',
  PostalCode: null,
  ContactId: '63c99afd-1ba1-4eb6-a6f3-e1b4c65d88cf',
  Birthday: '6/3/2004',
  DateCreated: '1/15/2020',
  PlatformId: '17da6a99-dd8a-44d8-87fc-4a38326c21b6',
  RolId: '140daf65-250a-455d-8f99-21bf1d45ff44',
  Status: 0
}, {
  UserId: 'f3f13dbb-686f-4762-9edd-dd39a4c70267',
  Nickname: 'McLennan',
  Name: 'Mimi McLennan',
  Country: 'Mauritius',
  PostalCode: null,
  ContactId: '96622a6c-09e0-48bb-9bb0-8016adb31785',
  Birthday: '6/12/1966',
  DateCreated: '3/14/2020',
  PlatformId: 'c27f2c7b-6ffc-4a97-952b-e47d891d1f64',
  RolId: 'cb98e276-9d1e-4112-b404-151860d679b9',
  Status: 1
}, {
  UserId: '28a24c6c-4aff-45e2-9dfd-e9e0f2321904',
  Nickname: 'Ridger',
  Name: 'Isabeau Ridger',
  Country: 'Indonesia',
  PostalCode: null,
  ContactId: '5bc13c77-2de3-4f94-a260-ba5fb818b337',
  Birthday: '6/11/1973',
  DateCreated: '2/2/2020',
  PlatformId: '1da0a3a9-2b4b-42db-a865-93206e1e5a3d',
  RolId: '3c08d202-dc53-4648-a9bd-678be6ceeff4',
  Status: 0
}, {
  UserId: 'ff25cff0-d4db-4d08-87ab-29fef9d58277',
  Nickname: 'Blaase',
  Name: 'Arv Blaase',
  Country: 'Czech Republic',
  PostalCode: '793 51',
  ContactId: 'f9911b60-8cbd-4478-bf42-a340fde954dc',
  Birthday: '1/10/1996',
  DateCreated: '10/6/2019',
  PlatformId: 'bb946a50-8478-4613-b631-03aa7d0e84cc',
  RolId: 'fe3da3bb-a853-491b-83d4-36c0d94c2583',
  Status: 1
}, {
  UserId: '48163cb9-8eb6-44a2-a1d1-7c11090bd26b',
  Nickname: 'Seabert',
  Name: 'Ellie Seabert',
  Country: 'Indonesia',
  PostalCode: null,
  ContactId: '5ec0b89b-fd99-45ef-ace4-a63815e0c8b6',
  Birthday: '3/9/1992',
  DateCreated: '11/16/2019',
  PlatformId: 'ccd663a1-60fe-4601-9f38-93c5d7ad0c82',
  RolId: 'e25ceb70-dbe8-457b-ad89-4399df1ebf2e',
  Status: 0
}, {
  UserId: '1e0da812-eb23-4ecb-84fe-2ca6947b4731',
  Nickname: 'Fewings',
  Name: 'Brady Fewings',
  Country: 'Philippines',
  PostalCode: '1211',
  ContactId: 'a299633d-c013-4e22-bb4e-1c41d1eac186',
  Birthday: '7/9/1981',
  DateCreated: '8/22/2020',
  PlatformId: '17da6a99-dd8a-44d8-87fc-4a38326c21b6',
  RolId: 'f8cee65e-a7e1-4d1a-9222-aea451733f8f',
  Status: 1
}, {
  UserId: 'ef2a68c0-a0a8-476e-b2ac-d93d75c4c0e9',
  Nickname: 'Dirkin',
  Name: 'Page Dirkin',
  Country: 'Thailand',
  PostalCode: '72130',
  ContactId: 'a842e77b-d2cc-45b5-8674-6dd2a2f2c8eb',
  Birthday: '12/3/2000',
  DateCreated: '12/2/2019',
  PlatformId: '17da6a99-dd8a-44d8-87fc-4a38326c21b6',
  RolId: '6ff6ed52-f736-4001-93ad-143c928db86b',
  Status: 0
}, {
  UserId: '8769f5de-e460-4944-97cc-f61fce700744',
  Nickname: 'Harmant',
  Name: 'Jeralee Harmant',
  Country: 'Portugal',
  PostalCode: '4635-005',
  ContactId: '63005464-022d-4354-b968-9b7724ab5a8a',
  Birthday: '4/12/1998',
  DateCreated: '11/28/2019',
  PlatformId: 'bb946a50-8478-4613-b631-03aa7d0e84cc',
  RolId: 'b43751f7-7288-4cfb-a42e-6c2e88010f16',
  Status: 1
}, {
  UserId: 'f2749fca-7924-4ce0-aa2a-f0cd008f187e',
  Nickname: 'Averill',
  Name: 'Dannye Averill',
  Country: 'Indonesia',
  PostalCode: null,
  ContactId: '83576897-2da0-4889-85d3-50baa957e4e1',
  Birthday: '8/30/1967',
  DateCreated: '5/17/2020',
  PlatformId: 'bb946a50-8478-4613-b631-03aa7d0e84cc',
  RolId: 'd9e3ed54-097c-4372-98d9-2bcf37f1b92b',
  Status: 1
}]

const contact = [{
  ContactId: '8dd1d4de-bc50-4627-b11d-331f987f2efd',
  Email: 'atrenear0@wunderground.com',
  Phone: '849 786 9589'
}, {
  ContactId: '63c99afd-1ba1-4eb6-a6f3-e1b4c65d88cf',
  Email: 'bcrocetto1@sun.com',
  Phone: '849 555 7459'
}, {
  ContactId: '96622a6c-09e0-48bb-9bb0-8016adb31785',
  Email: 'dconnal2@ftc.gov',
  Phone: '388 591 0764'
}, {
  ContactId: '5bc13c77-2de3-4f94-a260-ba5fb818b337',
  Email: 'lklejna3@npr.org',
  Phone: '765 289 5694'
}, {
  ContactId: 'f9911b60-8cbd-4478-bf42-a340fde954dc',
  Email: 'fcornilleau4@salon.com',
  Phone: '848 705 8094'
}, {
  ContactId: '5ec0b89b-fd99-45ef-ace4-a63815e0c8b6',
  Email: 'vpynner5@jiathis.com',
  Phone: '857 687 7254'
}, {
  ContactId: 'a299633d-c013-4e22-bb4e-1c41d1eac186',
  Email: 'awayper6@washington.edu',
  Phone: '265 488 8621'
}, {
  ContactId: 'a842e77b-d2cc-45b5-8674-6dd2a2f2c8eb',
  Email: 'mdoerffer7@people.com.cn',
  Phone: '316 401 0210'
}, {
  ContactId: '63005464-022d-4354-b968-9b7724ab5a8a',
  Email: 'kjoules8@cbc.ca',
  Phone: '404 284 9866'
}, {
  ContactId: '83576897-2da0-4889-85d3-50baa957e4e1',
  Email: 'hmaudett9@diigo.com',
  Phone: '361 761 7019'
}]

const platform = [
  {
    PlatId: 'ccd663a1-60fe-4601-9f38-93c5d7ad0c82',
    Plataform: 'Playstation'
  }, {
    PlatId: '17da6a99-dd8a-44d8-87fc-4a38326c21b6',
    Plataform: 'Xbox'
  }, {
    PlatId: 'c27f2c7b-6ffc-4a97-952b-e47d891d1f64',
    Plataform: 'Pc'
  }, {
    PlatId: '1da0a3a9-2b4b-42db-a865-93206e1e5a3d',
    Plataform: 'Android'
  }, {
    PlatId: 'bb946a50-8478-4613-b631-03aa7d0e84cc',
    Plataform: 'Apple'
  }
]

module.exports = {
  users,
  contact,
  platform,
  accessrol
}
