import React from "react";
import TopSection from "./TopSection";
import ImageSlider from "./ImageSlider";

const GameUnfold = () => {
  document.title = "Game Unfold";

  const carouselSongPotContent = [
    {
      imgLink: `./Carousel_Images/song-pot-img (1).png`,
      title: `SongPot`,
      para1: `FUNR Games Management has taken a line from a song and spread it all over a game board. Descramble the song, win the game. Practice and Tournament Modes will be made available.`,
      li: [
        `Game Timer`,
        `Word Hint.`,
        `Player feedback`
      ],
      para2: ``,
      btnText: `Released`,
    },
    {
      imgLink: `./Carousel_Images/song-pot-img (1).png`,
      title: `SongPot`,
      para1: `FUNR Games Management has taken a line from a song and spread it all over a game board. Descramble the song, win the game. Practice and Tournament Modes will be made available.`,
      li: [
        `Game Timer`,
        `Word Hint.`,
        `Player feedback`
      ],
      para2: ``,
      btnText: `Released`,
    },
    {
      imgLink: `./Carousel_Images/song-pot-img (1).png`,
      title: `SongPot`,
      para1: `FUNR Games Management has taken a line from a song and spread it all over a game board. Descramble the song, win the game. Practice and Tournament Modes will be made available.`,
      li: [
        `Game Timer`,
        `Word Hint.`,
        `Player feedback`
      ],
      para2: ``,
      btnText: `Released`,
    },
  ];

  const carouselQuickeeContent = [
    {
      imgLink: `./Carousel_Images/Rectangle 91.png`,
      title: `Quickee`,
      para1: `FUNR Games Management (FGM) used A.I. to try and a make an interesting and 
        exciting worded game. FGM added:`,
      li: [
        `Game Timer`,
        `Longer words and even sentences.`,
        `Multiplayer option.`,
        `Word Hint.`,
        `Player feedback`,
        `Prize ?`,
      ],
      para2: ``,
      btnText: `Coming Soon`,
    },
    {
      imgLink: `./Carousel_Images/Rectangle 91.png`,
      title: `Quickee`,
      para1: `FUNR Games Management (FGM) used A.I. to try and a make an interesting and 
        exciting worded game. FGM added:`,
      li: [
        `Game Timer`,
        `Longer words and even sentences.`,
        `Multiplayer option.`,
        `Word Hint.`,
        `Player feedback`,
        `Prize ?`,
      ],
      para2: ``,
      btnText: `Coming Soon`,
    },
    {
      imgLink: `./Carousel_Images/Rectangle 91.png`,
      title: `Quickee`,
      para1: `FUNR Games Management (FGM) used A.I. to try and a make an interesting and 
        exciting worded game. FGM added:`,
      li: [
        `Game Timer`,
        `Longer words and even sentences.`,
        `Multiplayer option.`,
        `Word Hint.`,
        `Player feedback`,
        `Prize ?`,
      ],
      para2: ``,
      btnText: `Coming Soon`,
    },
  ];

  const carouselRainGameContent = [
    {
      imgLink: ``,
      title: `Rain Game`,
      para1: `A visual word puzzle explosion with movie trivia.`,
      li: [
        `Descramble the line.`,
        `Figure out who said the line.`,
        `Then tell us the Seinfeld episode it came from.`,
        `Do this first and win the game prize.`,
      ],
      para2: `Estimated Release Date: 3rd Quarter 2023`,
      btnText: `Coming Soon`,
    },
    {
      imgLink: ``,
      title: `Rain Game`,
      para1: `A visual word puzzle explosion with movie trivia.`,
      li: [
        `Descramble the line.`,
        `Figure out who said the line.`,
        `Then tell us the Seinfeld episode it came from.`,
        `Do this first and win the game prize.`,
      ],
      para2: `Estimated Release Date: 3rd Quarter 2023`,
      btnText: `Coming Soon`,
    },
    {
      imgLink: ``,
      title: `Rain Game`,
      para1: `A visual word puzzle explosion with movie trivia.`,
      li: [
        `Descramble the line.`,
        `Figure out who said the line.`,
        `Then tell us the Seinfeld episode it came from.`,
        `Do this first and win the game prize.`,
      ],
      para2: `Estimated Release Date: 3rd Quarter 2023`,
      btnText: `Coming Soon`,
    },
  ];

  const carouselCocainPandaContent = [
    {
      imgLink: `./Carousel_Images/cocain-panda.png`,
      title: `Cocaine Panda. Adults Only.`,
      para1: `Panda goes berserk and embarks on rampage`,
      li: [`Continuous Challenge`, `Flexibility`, `Immediate, useful rewards`],
      para2: `Estimated Release Date: 3rd Quarter 2023`,
      btnText: `Coming Soon`,
    },
    {
      imgLink: `./Carousel_Images/cocain-panda.png`,
      title: `Cocaine Panda. Adults Only.`,
      para1: `Panda goes berserk and embarks on rampage`,
      li: [`Continuous Challenge`, `Flexibility`, `Immediate, useful rewards`],
      para2: `Estimated Release Date: 3rd Quarter 2023`,
      btnText: `Coming Soon`,
    },
    {
      imgLink: `./Carousel_Images/cocain-panda.png`,
      title: `Cocaine Panda. Adults Only.`,
      para1: `Panda goes berserk and embarks on rampage`,
      li: [`Continuous Challenge`, `Flexibility`, `Immediate, useful rewards`],
      para2: `Estimated Release Date: 3rd Quarter 2023`,
      btnText: `Coming Soon`,
    },
  ];

  const carouselSeinFeldContent = [
    {
      imgLink : `./Carousel_Images/quickee-slide-background-img (1).png`,
      title : `Seinfeld Said`,
      para1 : `FUNR Games Management takes the best lines from Seinfeld and scrambledthem all over a game board.`,
      li : [`Descramble the line.`,`Figure out who said the line.`,`Then tell us the Seinfeld episode it came from.`,`Do this first and win the game prize.`],
      para2 : `Estimated Release Date: 3rd Quarter 2023`,
      btnText : `Coming Soon`
    },
    {
      imgLink : `./Carousel_Images/quickee-slide-background-img (1).png`,
      title : `Seinfeld Said`,
      para1 : `FUNR Games Management takes the best lines from Seinfeld and scrambledthem all over a game board.`,
      li : [`Descramble the line.`,`Figure out who said the line.`,`Then tell us the Seinfeld episode it came from.`,`Do this first and win the game prize.`],
      para2 : `Estimated Release Date: 3rd Quarter 2023`,
      btnText : `Coming Soon`
    },
    {
      imgLink : `./Carousel_Images/quickee-slide-background-img (1).png`,
      title : `Seinfeld Said`,
      para1 : `FUNR Games Management takes the best lines from Seinfeld and scrambledthem all over a game board.`,
      li : [`Descramble the line.`,`Figure out who said the line.`,`Then tell us the Seinfeld episode it came from.`,`Do this first and win the game prize.`],
      para2 : `Estimated Release Date: 3rd Quarter 2023`,
      btnText : `Coming Soon`
    },
  ]

  const carouselTicToeContent = [
    {
      imgLink : `./Carousel_Images/tic-tac-dough-slide-background-img.png`,
      title : `Tic Tac Dough.`,
      para1 : `Under design `,
      li : [`Game clock/timer`,`Cash prize to game-winner`,`Player must pay to play`],
      para2 : ``,
      btnText : `Coming Soon`
    },
    {
      imgLink : `./Carousel_Images/tic-tac-dough-slide-background-img.png`,
      title : `Tic Tac Dough.`,
      para1 : `Under design `,
      li : [`Game clock/timer`,`Cash prize to game-winner`,`Player must pay to play`],
      para2 : ``,
      btnText : `Coming Soon`
    },
    {
      imgLink : `./Carousel_Images/tic-tac-dough-slide-background-img.png`,
      title : `Tic Tac Dough.`,
      para1 : `Under design `,
      li : [`Game clock/timer`,`Cash prize to game-winner`,`Player must pay to play`],
      para2 : ``,
      btnText : `Coming Soon`
    },
  ]

  return (
    <div id="game-unfold">
      <TopSection title="Game Unfold" />
      <div className="unfold-section">
        <ImageSlider carouselContent={carouselSongPotContent} />
        <ImageSlider carouselContent={carouselQuickeeContent} />
      </div>
      <div className="unfold-section">
        <ImageSlider carouselContent={carouselRainGameContent} />
        <ImageSlider carouselContent={carouselCocainPandaContent} />
      </div>
      <div className="unfold-section">
        <ImageSlider carouselContent={carouselSeinFeldContent} />
      </div>
      <div className="unfold-section">
        <ImageSlider carouselContent={carouselTicToeContent} />
      </div>
    </div>
  );
};

export default GameUnfold;
