const books = [
  {
    name: "Odio quia quia quo voluptas et possimus.",
    genre: "sit fugiat deserunt",
    id: "afe991d8-1ace-471f-9f61-ebcb6a92fbe5",
    authorId: "30525301-6f83-49ff-be0a-452e76c0bacc"
  },
  {
    name:
      "Officia aliquam exercitationem recusandae quod alias velit suscipit commodi eos.",
    genre: "consequuntur fugit et",
    id: "580b346e-7eb0-4069-9099-adb66fb0a8be",
    authorId: "1df5158c-df2b-4c0a-8b3f-53b1267e33d2"
  },
  {
    name: "Distinctio excepturi voluptatem.",
    genre: "sunt est consequuntur",
    id: "66957d8a-8156-458e-9ea0-c92b218cfd6b",
    authorId: "5fc61bd1-a9fa-487c-91f6-93518f67b49d"
  },
  {
    name:
      "Sapiente quia possimus consectetur iusto et voluptas magnam blanditiis nesciunt.",
    genre: "dolores debitis vitae",
    id: "818dfbd1-8237-4bb2-b46f-bc67adb0ff3d",
    authorId: "5d63bf4c-b7e7-41ac-bc94-91d5a84404c8"
  },
  {
    name: "Excepturi possimus quia porro ut aliquid ut.",
    genre: "reprehenderit ullam dolorem",
    id: "826c93fc-da55-4672-834a-0c45383b55ef",
    authorId: "8cd356b1-a707-4886-be87-858c1febadb2"
  },
  {
    name: "Illum odio magni illo non.",
    genre: "earum dolores et",
    id: "c1be5500-53ff-4c3c-8d4d-7f3c35d99123",
    authorId: "6e46c55a-3dab-4baa-b6a6-130600033a8d"
  },
  {
    name: "Eum veniam quia nihil eos et veritatis perferendis.",
    genre: "suscipit non est",
    id: "e8737ede-e341-4023-9f1a-75cb5c6ee5ce",
    authorId: "ddec837c-9209-4f4b-b32e-305c3307e9ab"
  },
  {
    name: "Adipisci aut illo illum.",
    genre: "rerum aut quos",
    id: "ebda0e0e-6238-4dcc-8eb1-a9db0633ca3a",
    authorId: "a23236bc-cb43-4378-9154-db711c8473a7"
  },
  {
    name: "Nobis facere nobis in et.",
    genre: "corporis cum atque",
    id: "002ff9eb-0bcf-4059-a7d8-c28ab0e3607a",
    authorId: "7859e89a-56c9-42d0-89b8-cefe86faaf52"
  },
  {
    name: "Quia qui ad omnis odio.",
    genre: "aut aut magni",
    id: "189a32e0-916c-4d7d-85fb-2038e30a92cd",
    authorId: "055535f6-d78f-42ab-b28b-c26674ecc54c"
  },
  {
    name: "Voluptate nostrum delectus.",
    genre: "provident temporibus consequuntur",
    id: "2f1f6c55-a2c2-4bf5-9164-edda2932fc25",
    authorId: "282b5aa2-3c4b-4d7d-b029-7c687b33ae88"
  },
  {
    name: "Rerum a sit quia ut.",
    genre: "consequatur voluptatem nulla",
    id: "d1422020-9262-4fb8-8318-63564a59c53b",
    authorId: "fde66e98-3db7-4d3a-af0a-ed04eca51c36"
  },
  {
    name: "Eum doloribus est facere necessitatibus et.",
    genre: "qui omnis autem",
    id: "87969964-461b-42ab-98cf-6867a4e97271",
    authorId: "50e2a54d-8543-4683-8d68-21e451da0542"
  },
  {
    name: "Tempora maxime sint omnis et quo quo nesciunt.",
    genre: "dignissimos eum beatae",
    id: "5b5298a5-86cf-47a8-85d2-c5e4eef078a5",
    authorId: "a48a61b2-3b40-4223-a2ee-7a6ad2b21eca"
  },
  {
    name: "Rerum minus id et sit eos.",
    genre: "est incidunt sit",
    id: "dd49ff26-0605-474a-bd84-e59a37f0efc0",
    authorId: "f0b54624-dc3b-4bd5-adab-2bd4779f08fd"
  },
  {
    name: "Optio architecto ut qui nihil.",
    genre: "eos adipisci impedit",
    id: "cef68ad4-5b1c-4cbe-934a-9add1625e306",
    authorId: "709b720e-048e-4489-8c75-b42569611fce"
  },
  {
    name: "Quo reiciendis non sint optio voluptatem vitae est rerum veritatis.",
    genre: "commodi officia qui",
    id: "25aac812-4a19-4021-af62-6e1fa94bd390",
    authorId: "1d6e49a6-cf03-402e-a767-b61bf2136c07"
  },
  {
    name: "Aperiam cum dolorum molestiae impedit.",
    genre: "qui temporibus rerum",
    id: "89394c1f-4a1b-4920-9071-301cf4f319db",
    authorId: "a4a91ba4-fd4c-47fc-90cf-f14cbab88a51"
  },
  {
    name: "Amet sequi veniam voluptatum assumenda aut.",
    genre: "aut et voluptates",
    id: "995ac7dc-43be-4ec9-ad15-66668e702782",
    authorId: "ab872443-f840-4ee4-bc98-0ff08f0088a6"
  },
  {
    name: "Recusandae fuga quam beatae nisi officiis aspernatur.",
    genre: "perferendis non est",
    id: "7d8810a5-22ee-413a-b303-1b76f06a8873",
    authorId: "ab8da3c4-94fa-4abf-9a06-735829e2aae5"
  },
  {
    name: "Non est quibusdam iure sed.",
    genre: "fugit explicabo repudiandae",
    id: "e13d9328-2e75-4239-a7e5-2a1544857853",
    authorId: "8088b1d3-6473-4978-99ce-63d61ddaa2ad"
  },
  {
    name:
      "Quae repellat natus ducimus quo voluptatum voluptas laborum quas aperiam.",
    genre: "rerum inventore dolorem",
    id: "8c906632-00dc-4977-b5a5-25798077468d",
    authorId: "3abde67b-fee0-472a-84e4-ebd824d6a007"
  },
  {
    name: "Et veritatis iusto unde qui id molestiae qui mollitia et.",
    genre: "voluptatem at ad",
    id: "467bcda6-33a2-4bc2-be8c-68e7ef11dda3",
    authorId: "8b2060fe-6fbf-4d33-8d95-3650b378a00d"
  },
  {
    name:
      "Omnis exercitationem a tempore voluptatibus vel assumenda quas soluta perspiciatis.",
    genre: "sapiente eum et",
    id: "9e16aa4b-9090-4511-811d-75433e502674",
    authorId: "a4ac5ace-3c09-4e8e-8ce4-62e4fca329ab"
  },
  {
    name: "Nihil cumque aliquam nostrum quidem sapiente.",
    genre: "corrupti ea accusamus",
    id: "3131f563-0a26-4617-87a6-d233d9940044",
    authorId: "694560b7-130f-4078-acd2-480527a40f0e"
  }
]

const authors = [
  {
    name: "Mr. Adrienne Borer",
    age: 30,
    id: "30525301-6f83-49ff-be0a-452e76c0bacc",
    bookId: "afe991d8-1ace-471f-9f61-ebcb6a92fbe5"
  },
  {
    name: "Dr. Anabel Flatley",
    age: 30,
    id: "1df5158c-df2b-4c0a-8b3f-53b1267e33d2",
    bookId: "580b346e-7eb0-4069-9099-adb66fb0a8be"
  },
  {
    name: "Mortimer Leuschke",
    age: 38,
    id: "5fc61bd1-a9fa-487c-91f6-93518f67b49d",
    bookId: "66957d8a-8156-458e-9ea0-c92b218cfd6b"
  },
  {
    name: "Marian Renner",
    age: 21,
    id: "5d63bf4c-b7e7-41ac-bc94-91d5a84404c8",
    bookId: "818dfbd1-8237-4bb2-b46f-bc67adb0ff3d"
  },
  {
    name: "Isaac Cummings",
    age: 45,
    id: "8cd356b1-a707-4886-be87-858c1febadb2",
    bookId: "826c93fc-da55-4672-834a-0c45383b55ef"
  },
  {
    name: "Verda Krajcik",
    age: 33,
    id: "6e46c55a-3dab-4baa-b6a6-130600033a8d",
    bookId: "c1be5500-53ff-4c3c-8d4d-7f3c35d99123"
  },
  {
    name: "Rashad Pfeffer",
    age: 29,
    id: "ddec837c-9209-4f4b-b32e-305c3307e9ab",
    bookId: "e8737ede-e341-4023-9f1a-75cb5c6ee5ce"
  },
  {
    name: "Clovis Baumbach",
    age: 18,
    id: "a23236bc-cb43-4378-9154-db711c8473a7",
    bookId: "ebda0e0e-6238-4dcc-8eb1-a9db0633ca3a"
  },
  {
    name: "Rodrigo Schroeder DVM",
    age: 47,
    id: "7859e89a-56c9-42d0-89b8-cefe86faaf52",
    bookId: "002ff9eb-0bcf-4059-a7d8-c28ab0e3607a"
  },
  {
    name: "Stefanie Wunsch",
    age: 37,
    id: "055535f6-d78f-42ab-b28b-c26674ecc54c",
    bookId: "189a32e0-916c-4d7d-85fb-2038e30a92cd"
  },
  {
    name: "Jermey Terry",
    age: 32,
    id: "282b5aa2-3c4b-4d7d-b029-7c687b33ae88",
    bookId: "2f1f6c55-a2c2-4bf5-9164-edda2932fc25"
  },
  {
    name: "Rafael Ledner",
    age: 30,
    id: "fde66e98-3db7-4d3a-af0a-ed04eca51c36",
    bookId: "d1422020-9262-4fb8-8318-63564a59c53b"
  },
  {
    name: "Yessenia Kris",
    age: 45,
    id: "50e2a54d-8543-4683-8d68-21e451da0542",
    bookId: "87969964-461b-42ab-98cf-6867a4e97271"
  },
  {
    name: "Dawn Boehm I",
    age: 34,
    id: "a48a61b2-3b40-4223-a2ee-7a6ad2b21eca",
    bookId: "5b5298a5-86cf-47a8-85d2-c5e4eef078a5"
  },
  {
    name: "Asa Krajcik",
    age: 50,
    id: "f0b54624-dc3b-4bd5-adab-2bd4779f08fd",
    bookId: "dd49ff26-0605-474a-bd84-e59a37f0efc0"
  },
  {
    name: "Flo Homenick",
    age: 25,
    id: "709b720e-048e-4489-8c75-b42569611fce",
    bookId: "cef68ad4-5b1c-4cbe-934a-9add1625e306"
  },
  {
    name: "Vicky Schoen",
    age: 23,
    id: "1d6e49a6-cf03-402e-a767-b61bf2136c07",
    bookId: "25aac812-4a19-4021-af62-6e1fa94bd390"
  },
  {
    name: "Forrest Schaden",
    age: 28,
    id: "a4a91ba4-fd4c-47fc-90cf-f14cbab88a51",
    bookId: "89394c1f-4a1b-4920-9071-301cf4f319db"
  },
  {
    name: "Otto Schmitt",
    age: 19,
    id: "ab872443-f840-4ee4-bc98-0ff08f0088a6",
    bookId: "995ac7dc-43be-4ec9-ad15-66668e702782"
  },
  {
    name: "Cullen Leffler",
    age: 25,
    id: "ab8da3c4-94fa-4abf-9a06-735829e2aae5",
    bookId: "7d8810a5-22ee-413a-b303-1b76f06a8873"
  },
  {
    name: "Gunner Gleichner",
    age: 44,
    id: "8088b1d3-6473-4978-99ce-63d61ddaa2ad",
    bookId: "e13d9328-2e75-4239-a7e5-2a1544857853"
  },
  {
    name: "Constantin Feil",
    age: 41,
    id: "3abde67b-fee0-472a-84e4-ebd824d6a007",
    bookId: "8c906632-00dc-4977-b5a5-25798077468d"
  },
  {
    name: "Linnea Lueilwitz",
    age: 40,
    id: "8b2060fe-6fbf-4d33-8d95-3650b378a00d",
    bookId: "467bcda6-33a2-4bc2-be8c-68e7ef11dda3"
  },
  {
    name: "Autumn Gerlach IV",
    age: 25,
    id: "a4ac5ace-3c09-4e8e-8ce4-62e4fca329ab",
    bookId: "9e16aa4b-9090-4511-811d-75433e502674"
  },
  {
    name: "Mr. Myles Bashirian",
    age: 18,
    id: "694560b7-130f-4078-acd2-480527a40f0e",
    bookId: "3131f563-0a26-4617-87a6-d233d9940044"
  }
]

module.exports = { books, authors }
