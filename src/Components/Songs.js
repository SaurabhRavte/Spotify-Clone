const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "As It was",
    artist: "Harry Styles",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Songs%2FHarry%20Styles%20As%20It%20Was.mp3?alt=media&token=cd19aee7-911d-4061-9355-d71e12808d46",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Images%2Fas%20it%20was.png?alt=media&token=80b8e62b-dead-4f00-9999-b0d7e3650b26",
  },
  {
    id: 2,
    favourite: false,
    songName: "Bones",
    artist: "Imagine Dragons",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Songs%2FImagine%20Dragons%20Bones.mp3?alt=media&token=59549b68-8977-4285-a4c1-ab3120472aec",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Images%2Fimagine-dragons-bones.png?alt=media&token=928727d0-bbc0-468a-ac1d-0e043ba068c3",
  },
  {
    id: 3,
    favourite: false,
    songName: "Calm Down",
    artist: "Rema",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Songs%2FCalm%20Down.mp3?alt=media&token=4e241e74-1d20-4b12-a576-7f03ef01709d",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Images%2Fcalm-down.png?alt=media&token=554c93df-c9de-4a86-834f-38c312e48556",
  },
  {
    id: 4,
    favourite: false,
    songName: "Beliver",
    artist: "Imagine Dragons",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Songs%2FImagine%20Dragons%20Believer.mp3?alt=media&token=85784e79-6d2a-48b3-8bc3-4e46abf7937c",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Images%2Fimagine-dragons-beliver.png?alt=media&token=851ebdfd-7765-4ce0-b25c-c9a7e8233263",
  },
  {
    id: 5,
    favourite: false,
    songName: "Sweater Weather",
    artist: "The Neighbourhood",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Songs%2FThe%20Neighbourhood%20Sweater%20Weather.mp3?alt=media&token=1873084f-2735-4ad7-8616-045ca9e00689",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Images%2FNeighbourhood.png?alt=media&token=67dfbf86-5f1a-44f7-8cf7-f1833796f737",
  },
  {
    id: 6,
    songName: "Aai Shappat",
    artist: "RUTVIK TALASHILKAR",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Songs%2FAai_Shappat.mp3?alt=media&token=8954b7e2-94af-426d-969a-5708a4f63f27",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Images%2FAai_Shappat.png?alt=media&token=9b771723-5fbe-47ba-970c-831b082cdd18",
  },
  {
    id: 7,
    favourite: false,
    songName: "Laung Da Lashkara",
    artist: "Jasbir Jassi, Hard Kaur, Mahalakshmi Iyer",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Songs%2FLaung%20Da%20Lashkara.mp3?alt=media&token=a43a12db-c264-44e9-9834-7b91217964de",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Images%2Flaund-da-lashkara.png?alt=media&token=7028f4b6-ec75-4df2-9ab4-a2124feb76e6",
  },
  {
    id: 8,
    favourite: false,
    songName: "London Thumakda",
    artist: "Neha Kakkar, Sonu Kakkar, Labh Janjua",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Songs%2FQueen%20London%20Thumakda.mp3?alt=media&token=29017636-fe30-4101-a430-d31db5c814c4",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Images%2Flondon-thumakda.png?alt=media&token=782b82ad-1c0b-407d-8357-1f7a2fe53bb7",
  },
  {
    id: 9,
    favourite: false,
    songName: "Chalao N Naino Se",
    artist: "Shreya Ghoshal, Himesh Reshammiya",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Songs%2FChalao%20Na%20Naino%20Se%20Baan%20Re.mp3?alt=media&token=1c6ffc85-1022-4f4d-935e-e26974a3e679",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Images%2FChalao-Na-Naino-se.png?alt=media&token=7b64e423-6a56-4785-be39-465ff1068b54",
  },
  {
    id: 10,
    favourite: false,
    songName: "O Bedardeya",
    artist: "Arijit Singh ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Songs%2FO%20Bedardeya.mp3?alt=media&token=a5b6e8d0-05cc-4056-950b-ce1f1b0fedb8",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-6c6ad.appspot.com/o/Images%2Fo-bedardeya.png?alt=media&token=6dde042b-f738-4910-9184-b1a840213e84",
  },
];

export { Songs };
