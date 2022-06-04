const allCards = {
  data: {
    cards: [
      {
        id: 38913,
        collectible: 1,
        slug: '38913-a-light-in-the-darkness',
        classId: 5,
        multiClassIds: [],
        spellSchoolId: 5,
        cardTypeId: 5,
        cardSetId: 21,
        rarityId: 1,
        artistName: 'Zoltan Boros',
        manaCost: 2,
        name: 'A Light in the Darkness',
        text: '<b>Discover</b> a minion. Give it +1/+1.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3e52c45971994b62bd90cf71adb97e583146760a45a2e283ba67a9557746c61a.png',
        imageGold: '',
        flavorText:
          'Wait, how can you have a light in the dark? If you turn on a light while it’s dark, doesn’t that mean it’s no longer dark?',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/289b8a4599a7119ddbe3abc1d767e12efbda64db3631936cda76dd8c8f651126.png',
        keywordIds: [21],
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 50019,
        collectible: 1,
        slug: '50019-a-new-challenger',
        classId: 5,
        multiClassIds: [],
        cardTypeId: 5,
        cardSetId: 1129,
        rarityId: 4,
        artistName: 'James Ryman',
        manaCost: 7,
        name: 'A New Challenger...',
        text: '<b>Discover</b> a 6-Cost minion. Summon it with <b>Taunt</b> and <b>Divine Shield</b>.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/dd8521e4b251f81882c031c2f2620c0d9791309b490349269a6c8b783fab9de5.png',
        imageGold:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1a76dd7384eb97550f52418c72a8aea5c9ce5a780826f417e006d17db7228fb8.png',
        flavorText: '… Arrives? Approaches? TELL US ALREADY!',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1ade781a6845577e9348c56afcf0bde19c8efda321965351b411a3ea17ca4fcd.png',
        keywordIds: [1, 3, 21]
      },
      {
        id: 38531,
        collectible: 1,
        slug: '38531-aberrant-berserker',
        classId: 12,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 21,
        rarityId: 1,
        artistName: 'Jim Nelson',
        health: 5,
        attack: 3,
        manaCost: 4,
        name: 'Aberrant Berserker',
        text: 'Has +2 Attack while damaged.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/44c6579a1b01e1263c26734b75b87d264145af18899888cc620117282d7b4914.png',
        imageGold: '',
        flavorText: 'I berserk, therefore I am.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/c0c1afd053196a49feb1bb24f2baf5cbc6af8aecb62c5695aca4591bb3823fe9.png',
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 43245,
        collectible: 1,
        slug: '43245-abominable-bowman',
        classId: 3,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 1001,
        rarityId: 4,
        artistName: 'L. Lullabi & K. Turovec',
        health: 7,
        attack: 6,
        manaCost: 7,
        name: 'Abominable Bowman',
        text: '<b>Deathrattle:</b> Summon a random friendly Beast that died this game.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/6fcd482e3e6b9f4c6aedfa3c312fd980277971d5a33032e906cb4d2a5ee9c8af.png',
        imageGold: '',
        flavorText:
          'Frosty the Bowman... was an angry hateful soul... with a fresh hewn bow and a missing nose...',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/c4f52c0c91b04b771b403474a1fd8319c60bda4e3ee043ef04001f4fed513cb7.jpg',
        keywordIds: [12]
      },
      {
        id: 70244,
        collectible: 1,
        slug: '70244-abominable-lieutenant',
        classId: 12,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 1626,
        rarityId: 4,
        artistName: 'Dave Allsop',
        health: 5,
        attack: 3,
        manaCost: 8,
        name: 'Abominable Lieutenant',
        text: 'At the end of your turn, eat a random enemy minion and gain its stats.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1631fc5b720bee04e01249bb4e246d40aa0e7309305192b079e3381166ddeafd.png',
        imageGold: '',
        flavorText: "If you can't join 'em, eat 'em.",
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/723d60f794cc109feae35c41a7358979ecf53b6297fca5d6fb3248c7faf509e9.png'
      },
      {
        id: 440,
        collectible: 1,
        slug: '440-abomination',
        classId: 12,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 3,
        rarityId: 3,
        artistName: 'Alex Horley Orlandelli',
        health: 4,
        attack: 4,
        manaCost: 5,
        name: 'Abomination',
        text: '<b>Taunt</b>. <b>Deathrattle:</b> Deal 2 damage to ALL characters.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/93bad2aa55fe75495b5015ef2c1a11e4bd3fc20fa9000140a218eefcc9244d56.png',
        imageGold:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/5f6a92813416241989dc7a5962253623c0996f4c3f2e557512b50f24dc7f9b87.png',
        flavorText:
          'Abominations enjoy Fresh Meat and long walks on the beach.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/420c91e8e3be024141e1f196f34297e0fc28c58dc2949ad679b4303ad4e013d5.png',
        keywordIds: [1, 12],
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 69846,
        collectible: 1,
        slug: '69846-abomination',
        classId: 12,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 1646,
        rarityId: 3,
        artistName: 'Alex Horley Orlandelli',
        health: 4,
        attack: 4,
        manaCost: 5,
        name: 'Abomination',
        text: '<b>Taunt</b>. <b>Deathrattle:</b> Deal 2 damage to ALL characters.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e4a58317b6e31563af0b804d56be97a183191a97e45c659ed71a1d40190ef538.png',
        imageGold: '',
        flavorText:
          'Abominations enjoy Fresh Meat and long walks on the beach.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/420c91e8e3be024141e1f196f34297e0fc28c58dc2949ad679b4303ad4e013d5.png',
        keywordIds: [1, 12],
        copyOfCardId: 440
      },
      {
        id: 242,
        collectible: 1,
        slug: '242-abusive-sergeant',
        classId: 12,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 3,
        rarityId: 1,
        artistName: 'Luca Zontini',
        health: 1,
        attack: 1,
        manaCost: 1,
        name: 'Abusive Sergeant',
        text: '<b>Battlecry:</b> Give a minion +2 Attack this turn.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/8cc6f521dac86c945f12424cf0a4c4b78d73157d4797e3169c3cc8dbe2fbb9d1.png',
        imageGold:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/2866f600b26992ef766b00d90a97c372f99cd7bb9c04d7a0391c798ddfeb75fd.png',
        flavorText: 'ADD ME TO YOUR DECK, MAGGOT!',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/c10df6994599819f7a22e8ffc9a3779ecfc0f76d5c499e4c299aae5c7fa9bcc8.png',
        keywordIds: [8],
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 69649,
        collectible: 1,
        slug: '69649-abusive-sergeant',
        classId: 12,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 1637,
        rarityId: 1,
        artistName: 'Luca Zontini',
        health: 1,
        attack: 1,
        manaCost: 1,
        name: 'Abusive Sergeant',
        text: '<b>Battlecry:</b> Give a minion +2 Attack this turn.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/27f63fddf51781657ec9745a579961f985777ee1f985fd33c23d301b26b26684.png',
        imageGold: '',
        flavorText: 'ADD ME TO YOUR DECK, MAGGOT!',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/c10df6994599819f7a22e8ffc9a3779ecfc0f76d5c499e4c299aae5c7fa9bcc8.png',
        keywordIds: [8],
        copyOfCardId: 242,
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 69761,
        collectible: 1,
        slug: '69761-abusive-sergeant',
        classId: 12,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 1646,
        rarityId: 1,
        artistName: 'Luca Zontini',
        health: 1,
        attack: 2,
        manaCost: 1,
        name: 'Abusive Sergeant',
        text: '<b>Battlecry:</b> Give a minion +2 Attack this turn.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7e1cf5550e461e7b3593afe17c04289f859cdbb19214eb8f01419dbd17bc70ae.png',
        imageGold: '',
        flavorText: 'ADD ME TO YOUR DECK, MAGGOT!',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/c10df6994599819f7a22e8ffc9a3779ecfc0f76d5c499e4c299aae5c7fa9bcc8.png',
        keywordIds: [8],
        copyOfCardId: 242
      },
      {
        id: 71922,
        collectible: 1,
        slug: '71922-abyssal-depths',
        classId: 14,
        multiClassIds: [],
        spellSchoolId: 6,
        cardTypeId: 5,
        cardSetId: 1658,
        rarityId: 1,
        artistName: 'BOSi Studio',
        manaCost: 4,
        name: 'Abyssal Depths',
        text: 'Draw your two lowest Cost minions.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1ea34b9b81386f4f819be94a7faf93c9d699c7235d4f0e8978030b578572079d.png',
        imageGold: '',
        flavorText: '*Happy Wisp noises*',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/167091c5b24190f9b12e89e1f08242307d31e0d1732e5fa0dabdfed2488a0853.png'
      },
      {
        id: 40541,
        collectible: 1,
        slug: '40541-abyssal-enforcer',
        classId: 9,
        multiClassIds: [],
        minionTypeId: 15,
        cardTypeId: 4,
        cardSetId: 25,
        rarityId: 1,
        artistName: 'Luke Mancini',
        health: 6,
        attack: 6,
        manaCost: 7,
        name: 'Abyssal Enforcer',
        text: '<b>Battlecry:</b> Deal 3 damage to all other characters.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/eb4c1768d88417e2b52b1a437c0cb69f4f9c25ab6ad4f26720812bfdb9c53e2e.png',
        imageGold:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b95fdd72dc8effb40282e903ffbeecb37704005a3dd3d2434b2b8284f389872d.png',
        flavorText:
          'The Kabal print this on every package of illicit Mana Crystals: WARNING - DO NOT PUT WITHIN REACH OF ABYSSALS. THIS IS NOT APPROVED FOR USE BY FLAMING DEMONS OF ANY KIND.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e0cbe1980b820182e52319f7f7df4d49cf55a8efd2e28b7f77c88049e026015c.png',
        keywordIds: [8]
      },
      {
        id: 76283,
        collectible: 1,
        slug: '76283-abyssal-enforcer',
        classId: 9,
        multiClassIds: [],
        minionTypeId: 15,
        cardTypeId: 4,
        cardSetId: 1637,
        rarityId: 1,
        artistName: 'Luke Mancini',
        health: 6,
        attack: 6,
        manaCost: 7,
        name: 'Abyssal Enforcer',
        text: '<b>Battlecry:</b> Deal 3 damage to all other characters.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/6ee5336595054440c0dabacb4183b48b7761feb734a5193b6de2187e8c30bf30.png',
        imageGold: '',
        flavorText:
          'The Kabal print this on every package of illicit Mana Crystals: WARNING - DO NOT PUT WITHIN REACH OF ABYSSALS. THIS IS NOT APPROVED FOR USE BY FLAMING DEMONS OF ANY KIND.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0cc8a36f554190360e32456cfb298923ac3d7684473fc9cd55610d829bec1352.png',
        keywordIds: [8],
        copyOfCardId: 40541,
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 54894,
        collectible: 1,
        slug: '54894-abyssal-summoner',
        classId: 9,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 1347,
        rarityId: 1,
        artistName: 'Ivan Fomin',
        health: 2,
        attack: 2,
        manaCost: 6,
        name: 'Abyssal Summoner',
        text: '<b>Battlecry:</b> Summon a Demon with <b>Taunt</b> and stats equal to your hand size.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/2006e7ca6f471fc9e7bb88c4c3f9fe22ad517a9b242b31419582ab4d26663317.png',
        imageGold:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/ae167566b8eed0da9181fe9872e4987ae3bdb86038880f8160c3a16450dac5d3.png',
        flavorText: 'But gnomes have tiny hands...',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1e68cf91832c42ee8a77fcea7a70b74a14d0b66be17c4c4ad35fe09b48a34bc2.png',
        childIds: [54895],
        keywordIds: [1, 8]
      },
      {
        id: 72318,
        collectible: 1,
        slug: '72318-abyssal-wave',
        classId: 9,
        multiClassIds: [],
        spellSchoolId: 6,
        cardTypeId: 5,
        cardSetId: 1658,
        rarityId: 4,
        artistName: 'L. Lullabi & K. Turovec',
        manaCost: 6,
        name: 'Abyssal Wave',
        text: 'Deal 4 damage to all minions. Give your opponent an Abyssal Curse.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/ee7c416a9c04e35097baeae49860cf055239382145dbcbfe94b3385e672ad8a6.png',
        imageGold: '',
        flavorText: 'Often followed up with a chasmic handshake.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/994766c6b13dcb7af29fb02d02a65d15e8b08a63b9b10d0b68c86eb39a3953a6.png',
        childIds: [74927]
      },
      {
        id: 48040,
        collectible: 1,
        slug: '48040-academic-espionage',
        classId: 7,
        multiClassIds: [],
        cardTypeId: 5,
        cardSetId: 1127,
        rarityId: 4,
        artistName: 'Konstantin Turovec',
        manaCost: 4,
        name: 'Academic Espionage',
        text: "Shuffle 10 cards from your opponent's class into your deck. They cost (1).",
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/89b664b84f5e37175fc02bbfcda4d46caf397dc1672a5c6f03f99caef31558a3.png',
        imageGold:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7f97341fca6f862c44fb5945b9e6a8a64ceb74b91a9927eb2e9fe515d44d64ef.png',
        flavorText: 'The tenth Pyroblast really felt like overkill.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/50966e7b031ea2c40dcf62cfea7306cd93d799878c88830523fb0219ce7b40e8.png'
      },
      {
        id: 60003,
        collectible: 1,
        slug: '60003-ace-hunter-kreen',
        classId: 14,
        multiClassIds: [14, 3],
        cardTypeId: 4,
        cardSetId: 1443,
        rarityId: 5,
        artistName: 'James Ryman',
        health: 4,
        attack: 2,
        manaCost: 3,
        name: 'Ace Hunter Kreen',
        text: 'Your other characters are <b>Immune</b> while attacking.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/69c8d0969e25e0318eff0d9fec92b284e0037a99453d0ad99f2a92c6cd25a5b2.png',
        imageGold: '',
        flavorText:
          'This grandmaster marksman loves winning tournaments and eating a bit of ice cream.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7e3d10913c2c95ac813aa30f68d18317503d306f941ef3cdcd76a7ee0cbdb094.png',
        keywordIds: [17],
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 42773,
        collectible: 1,
        slug: '42773-acherus-veteran',
        classId: 12,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 1001,
        rarityId: 1,
        artistName: 'Luke Mancini',
        health: 1,
        attack: 2,
        manaCost: 1,
        name: 'Acherus Veteran',
        text: '<b>Battlecry:</b> Give a friendly minion +1 Attack.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/37ff03644c5c31fea5343fbdfaf45f60ba23bc66e0e2b9d35f885efa34724eb8.png',
        imageGold: '',
        flavorText:
          'This is my Runeblade. There are many like it but this one is mine.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/ec122fb992b50012af5abb63e12c0ce04f25ceb70e7ef9c5dd85a802156cdd6f.jpg',
        keywordIds: [8]
      },
      {
        id: 906,
        collectible: 1,
        slug: '906-acidic-swamp-ooze',
        classId: 12,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 1635,
        rarityId: 2,
        artistName: 'Chris Rahn',
        health: 2,
        attack: 3,
        manaCost: 2,
        name: 'Acidic Swamp Ooze',
        text: "<b>Battlecry:</b> Destroy your opponent's weapon.",
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e1040f33ba563da93e79a836f5e54ad92d3e2ed6a12d040ae9593828503a40f2.png',
        imageGold:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1e8d6b8219f24c9d99ab79c4aeea2cb67a93b03d920d9d20dc99b5a8465644c8.png',
        flavorText: "Oozes love Flamenco. Don't ask.",
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b5fb6aa536272119249e5ef25ecc1338e838115d5bedcf7f443895c5a0522d51.png',
        keywordIds: [8],
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 68441,
        collectible: 1,
        slug: '68441-acidic-swamp-ooze',
        classId: 12,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 1646,
        rarityId: 2,
        artistName: 'Chris Rahn',
        health: 2,
        attack: 3,
        manaCost: 2,
        name: 'Acidic Swamp Ooze',
        text: "<b>Battlecry:</b> Destroy your opponent's weapon.",
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/d6578ee94094714d07b582306cd3895b1a9df084701212f840e45ecc92a6a6ab.png',
        imageGold: '',
        flavorText: "Oozes love Flamenco. Don't ask.",
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b5fb6aa536272119249e5ef25ecc1338e838115d5bedcf7f443895c5a0522d51.png',
        keywordIds: [8],
        copyOfCardId: 906
      },
      {
        id: 69548,
        collectible: 1,
        slug: '69548-acidic-swamp-ooze',
        classId: 12,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 1637,
        rarityId: 3,
        artistName: 'Chris Rahn',
        health: 2,
        attack: 3,
        manaCost: 2,
        name: 'Acidic Swamp Ooze',
        text: "<b>Battlecry:</b> Destroy your opponent's weapon.",
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/ef74f06e2319e05e93a49f124ea3ebb4215d7765483f34950a4d6e5a02d8aed4.png',
        imageGold: '',
        flavorText: "Oozes love Flamenco. Don't ask.",
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b5fb6aa536272119249e5ef25ecc1338e838115d5bedcf7f443895c5a0522d51.png',
        keywordIds: [8],
        copyOfCardId: 906,
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 2633,
        collectible: 1,
        slug: '2633-acidmaw',
        classId: 3,
        multiClassIds: [],
        minionTypeId: 20,
        cardTypeId: 4,
        cardSetId: 15,
        rarityId: 5,
        artistName: 'Andrew Hou',
        health: 2,
        attack: 4,
        manaCost: 7,
        name: 'Acidmaw',
        text: 'Whenever another minion takes damage, destroy it.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/ce66aee683eec55113a47aa7869e67d6c9b6019053edae34edc60615fd185f09.png',
        imageGold: '',
        flavorText:
          'With the help of his trusty sidekick Dreadscale, the giant jormungar Acidmaw is ready to face any knight!',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f32269145ed1c93b486070e709da22264c53cbfb05e313f0996320bac483789f.jpg',
        childIds: [2634]
      },
      {
        id: 42596,
        collectible: 1,
        slug: '42596-acolyte-of-agony',
        classId: 6,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 1001,
        rarityId: 1,
        artistName: 'Brom',
        health: 3,
        attack: 3,
        manaCost: 3,
        name: 'Acolyte of Agony',
        text: '<b>Lifesteal</b>',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/268151d3e455a81c2d7693f3a2ca46093f6b7b170e82d613a609f751aa7f4023.png',
        imageGold: '',
        flavorText:
          'It takes many years of practiced study in order to fully master agony.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b2de37a7b68cd00c01ccd0cc68bb8950ed70493794278ab24540ab574b432384.jpg',
        keywordIds: [38]
      },
      {
        id: 1659,
        collectible: 1,
        slug: '1659-acolyte-of-pain',
        classId: 12,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 4,
        rarityId: 1,
        artistName: 'Dave Kendall',
        health: 3,
        attack: 1,
        manaCost: 3,
        name: 'Acolyte of Pain',
        text: 'Whenever this minion takes damage, draw a card.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/ebc18100fa84ca9670e9fd13f07cfe59ab9441d0b77bc285676aa8714b98aa4a.png',
        imageGold:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4f6ff493f564bcd1268c93fda6438403e7e48937bba5ab737fe3eef8b45e637b.png',
        flavorText:
          'He trained when he was younger to be an acolyte of joy, but things didn’t work out like he thought they would.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/976dd43b2eb899a651adeca507417d06af5b81e86049ec518f81331cf980451e.png'
      },
      {
        id: 69809,
        collectible: 1,
        slug: '69809-acolyte-of-pain',
        classId: 12,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 1646,
        rarityId: 1,
        artistName: 'Dave Kendall',
        health: 3,
        attack: 1,
        manaCost: 3,
        name: 'Acolyte of Pain',
        text: 'Whenever this minion takes damage, draw a card.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/769491ab171be2f3bedd2acd6d0d47cd6e8fb66ea07078bde50369ae1c37bb79.png',
        imageGold: '',
        flavorText:
          'He trained when he was younger to be an acolyte of joy, but things didn’t work out like he thought they would.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/976dd43b2eb899a651adeca507417d06af5b81e86049ec518f81331cf980451e.png',
        copyOfCardId: 1659
      },
      {
        id: 76316,
        collectible: 1,
        slug: '76316-acolyte-of-pain',
        classId: 12,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 1637,
        rarityId: 1,
        artistName: 'Dave Kendall',
        health: 3,
        attack: 1,
        manaCost: 3,
        name: 'Acolyte of Pain',
        text: 'Whenever this minion takes damage, draw a card.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3a9b1bd6ef9b992ce8c46427e89218e3a66acdcdc3315c6c71ca0a924081e3dc.png',
        imageGold: '',
        flavorText:
          'He trained when he was younger to be an acolyte of joy, but things didn’t work out like he thought they would.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/83ceae1ae6bf463ad0baf1d9a2d4e05db364470500c607e943e217d24ea9096c.png',
        copyOfCardId: 1659,
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 51790,
        collectible: 1,
        slug: '51790-acornbearer',
        classId: 2,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 1130,
        rarityId: 1,
        artistName: 'Steven Prescott',
        health: 1,
        attack: 2,
        manaCost: 1,
        name: 'Acornbearer',
        text: '<b>Deathrattle:</b> Add two 1/1 Squirrels to your hand.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3dc6b8e72f790912123ae5133d3a17bbfaf9f1c17b8655718cc4d0a5053116fb.png',
        imageGold:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/c3548d9c55fc3edb6a5f37e2ed0565172786e2731b8594e9273c6b8158905eb0.png',
        flavorText: 'You’d be nuts to mess with the squirrel squad.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/986663072c65c7a87d0335fba3037aa9b3d7d7f6aef365f8f84f41b0a34714f9.png',
        childIds: [54315],
        keywordIds: [12]
      },
      {
        id: 61273,
        collectible: 1,
        slug: '61273-acrobatics',
        classId: 14,
        multiClassIds: [],
        cardTypeId: 5,
        cardSetId: 1466,
        rarityId: 1,
        artistName: 'James Ryman',
        manaCost: 3,
        name: 'Acrobatics',
        text: 'Draw 2 cards. If you play both this turn, draw 2 more.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/80c95f2a729f70c2706a86fe1ccdc0f830eb86aab7d76798f0a6b14b8ab963fd.png',
        imageGold: '',
        flavorText: 'He soars through the air with the greatest of fleas.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/69f4a3c44e797c10712140a34942b52cbb70246ce7f8d39e59f1481f409bd025.png',
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 54749,
        collectible: 1,
        slug: '54749-activate-the-obelisk',
        classId: 6,
        multiClassIds: [],
        cardTypeId: 5,
        cardSetId: 1158,
        rarityId: 5,
        artistName: 'J. Axer',
        manaCost: 1,
        name: 'Activate the Obelisk',
        text: "<b>Quest:</b> Restore 15 Health. <b>Reward:</b> Obelisk's Eye.",
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/257f8661b98453d666668bde8d3a4a0aa6227fc450ba673c3523849f84ca9c1f.png',
        imageGold:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e258ff7a3db24e5b01eaa2ee5b00cfaced448aafef2dc67753f424a832ae9bf5.png',
        flavorText: 'A one-eyed, one stone, towering purple minion healer.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/81aacfb3698782994c8505636f86faad6551962b01adc4472a25c5596c4d5104.png',
        childIds: [54750],
        keywordIds: [31]
      },
      {
        id: 41944,
        collectible: 1,
        slug: '41944-adaptation',
        classId: 5,
        multiClassIds: [],
        cardTypeId: 5,
        cardSetId: 27,
        rarityId: 1,
        artistName: 'Hideaki Takamura',
        manaCost: 1,
        name: 'Adaptation',
        text: '<b>Adapt</b> a friendly minion.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b3a42c1e397a73d0a7d13ab02e376f7b17c5c3798924d611c601f677811fe3ef.png',
        imageGold: '',
        flavorText:
          'Pray for salvation. If that fails, pray for extra horns or bigger teeth.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/906e54c3da2228f909f651387dbe8206a95e4b48b9b2a89ff061f518213767d5.jpg',
        keywordIds: [34],
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 38916,
        collectible: 1,
        slug: '38916-addled-grizzly',
        classId: 2,
        multiClassIds: [],
        minionTypeId: 20,
        cardTypeId: 4,
        cardSetId: 21,
        rarityId: 3,
        artistName: 'Andrew Hou',
        health: 2,
        attack: 2,
        manaCost: 3,
        name: 'Addled Grizzly',
        text: 'After you summon a minion, give it +1/+1.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/c15181fb7db37b4b4638e7bc639b6f0d272996adf44fd46a589b272113aa5585.png',
        imageGold: '',
        flavorText:
          'Druids who spend too long in bear form are more susceptible to the whispers of the Old Gods. Right now they are whispering the lyrics to "La Bamba".',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3b0d5a7c06963f47ace4bdaf785fb0d14d4088639aa3ae2cfb425ab798f761e7.jpg',
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 59705,
        collectible: 1,
        slug: '59705-adorable-infestation',
        classId: 3,
        multiClassIds: [3, 2],
        cardTypeId: 5,
        cardSetId: 1443,
        rarityId: 1,
        artistName: 'Ivan Fomin',
        manaCost: 1,
        name: 'Adorable Infestation',
        text: 'Give a minion +1/+1. Summon a 1/1 Cub. Add a Cub to your hand.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f724206bcbe37695417d0a0282c05d9c6f4825afafc1a67e56428d34a19b5522.png',
        imageGold: '',
        flavorText:
          'Some cards are strong by sheer power; others draw strength from love.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4ee870a4a127e5b15a908e23776b19b9879760b2adc83abee5e1b9fdd6ddb830.png',
        childIds: [59706],
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 62347,
        collectible: 1,
        slug: '62347-aegwynn-the-guardian',
        classId: 4,
        multiClassIds: [],
        cardTypeId: 4,
        cardSetId: 1637,
        rarityId: 5,
        artistName: 'Luke Mancini',
        health: 5,
        attack: 5,
        manaCost: 5,
        name: 'Aegwynn, the Guardian',
        text: '<b>Spell Damage +2</b> <b>Deathrattle:</b> The next minion you draw inherits these powers.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7bb6d90026823674f1b35ae62958dac5230b4bdf58a8ca39d2fcf595af4a0ac1.png',
        imageGold: '',
        flavorText:
          'With Medivh as her son, nothing YOU do could ever disappoint her.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a16ec7f2104a339db5b846b03e67a1d2a3336efd2d602a444d9626862a2b5705.png',
        keywordIds: [2, 12],
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 56089,
        collectible: 1,
        slug: '56089-aeon-reaver',
        classId: 6,
        multiClassIds: [],
        minionTypeId: 24,
        cardTypeId: 4,
        cardSetId: 1403,
        rarityId: 1,
        artistName: 'A.J. Nazzaro',
        health: 4,
        attack: 4,
        manaCost: 6,
        name: 'Aeon Reaver',
        text: '<b>Battlecry:</b> Deal damage to a minion equal to its Attack.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/96745b4d55241c3051482fc0448484abf70f926c8c6f87bb369b7ba0c5b270e5.png',
        imageGold:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/8de0142154cd6ae0ea9d3b3cb2f9d47040673bd3318cb8fac942e05891c48378.png',
        flavorText:
          'Ripping centuries asunder helps him manage his busy schedule.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/db27d1718d3cc4f4e7e0264fd0ac7ed48741a5856acea3b0785ff443d0f0a53f.png',
        keywordIds: [8]
      },
      {
        id: 55036,
        collectible: 1,
        slug: '55036-aeroponics',
        classId: 2,
        multiClassIds: [],
        spellSchoolId: 4,
        cardTypeId: 5,
        cardSetId: 1347,
        rarityId: 3,
        artistName: 'Sam Nielson',
        manaCost: 5,
        name: 'Aeroponics',
        text: 'Draw 2 cards. Costs (2) less for each Treant you control.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0a3f20da8b7e64bf19f6a59a5ae957577cda65d5865f63a8ffdb14d50fcb1686.png',
        imageGold:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3d5b6a778da1439c038dd223c7ca593e5ec1a2e63e3387c6839d767ca48736e5.png',
        flavorText: 'Good seeds can go far.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/01f1348a5ac3a2fa59b84524f548c82963a3ac003936bf8065f7d62e24202730.png',
        childIds: [678, 41432, 59552]
      },
      {
        id: 63347,
        collectible: 1,
        slug: '63347-against-all-odds',
        classId: 6,
        multiClassIds: [],
        spellSchoolId: 5,
        cardTypeId: 5,
        cardSetId: 1525,
        rarityId: 4,
        artistName: 'Zoltan Boros',
        manaCost: 5,
        name: 'Against All Odds',
        text: 'Destroy ALL odd-Attack minions.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a6c9ffb527bf269e30d5c5e7cf86c9cea6e36f297a3ba27bb073b3b48f543b25.png',
        imageGold: '',
        flavorText: 'Time to EVEN out the playing field.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/357812123c2ec833019e40ea492b4f566cede187ada760d17dd92d7d2b650180.png',
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 64631,
        collectible: 1,
        slug: '64631-aimed-shot',
        classId: 3,
        multiClassIds: [],
        cardTypeId: 5,
        cardSetId: 1578,
        rarityId: 1,
        artistName: 'Aaron Su',
        manaCost: 3,
        name: 'Aimed Shot',
        text: 'Deal 3 damage. Your next Hero Power deals 2 more damage.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cab09686ff33ad442f7b8a1e187e2e798868f4a7663fdc721a2cfc2c62a602ba.png',
        imageGold: '',
        flavorText: "Wait, you WEREN'T aiming before?!",
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/bca72d5a7dabc8e693a7e4bc4bcafce49cff400c1ebedbbfe40e440f842fd9dd.png',
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 41152,
        collectible: 1,
        slug: '41152-air-elemental',
        classId: 8,
        multiClassIds: [],
        minionTypeId: 18,
        cardTypeId: 4,
        cardSetId: 27,
        rarityId: 1,
        artistName: 'Evgeniy Dlinnov',
        health: 1,
        attack: 2,
        manaCost: 1,
        name: 'Air Elemental',
        text: "Can't be targeted by spells or Hero Powers.",
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cb09a65514b05a495b119c87287580da7fe6b4f9b457e7d20a9f3b208c468ceb.png',
        imageGold: '',
        flavorText: 'Makes a mean puff pastry.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/6196d5ab1eb5f3b32199f642954c52e20aebf6a3ad5ad3c583fc0ad8ad5287f0.jpg',
        duels: {
          relevant: true,
          constructed: true
        }
      },
      {
        id: 56086,
        collectible: 1,
        slug: '56086-air-raid',
        classId: 5,
        multiClassIds: [],
        cardTypeId: 5,
        cardSetId: 1403,
        rarityId: 3,
        artistName: 'Ivan Fomin',
        manaCost: 2,
        name: 'Air Raid',
        text: '<b>Twinspell</b> Summon two 1/1 Silver Hand Recruits with <b>Taunt</b>.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/44f21c50d7d4f83a7e80d1181c63bfcbc6444016b6a13176f8e09c66482f7f7e.png',
        imageGold:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/09155b6c62edb77bacf530fe2e12e31d792610226aff1c647c7ab274add54a15.png',
        flavorText:
          "It's difficult to get an air raid together. You have to get twenty-five people, and they all want to play a paladin!",
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/6e7ba8ba86036ad1b98ab203d712192f60fc2cd59508c117db2e464a20abeb53.png',
        childIds: [1652],
        keywordIds: [1, 76]
      },
      {
        id: 50074,
        collectible: 1,
        slug: '50074-akali-the-rhino',
        classId: 10,
        multiClassIds: [],
        minionTypeId: 20,
        cardTypeId: 4,
        cardSetId: 1129,
        rarityId: 5,
        artistName: 'Jim Nelson',
        health: 5,
        attack: 5,
        manaCost: 8,
        name: 'Akali, the Rhino',
        text: '<b>Rush</b> <b>Overkill:</b> Draw a <b>Rush</b> minion from your deck. Give it +5/+5.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0f2d514bec2e2dc2488a9a05a9f82de01172f96a16d0e7bb85b6091dcd972fc9.png',
        imageGold:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b35b0206bb0c99cf0c42a0f1198d1ddf7c55d5c3610dbe41c08dd4bcf8806de2.png',
        flavorText:
          'Most trolls only get to “AAAAHHH!” and don’t make it to the “kali” part.',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cf1bcb846e1d26dec5c4db64c3e3e8c07d0dc203d471d29f2f3f80b92b03e4c5.png',
        keywordIds: [53, 61]
      }
    ],
    cardCount: 4098,
    pageCount: 103,
    page: 1
  }
}

const spellCard = {
  data: {
    id: 38913,
    name: 'A Light in the Darkness',
    text: '<b>Discover</b> a minion. Give it +1/+1.',
    collectible: 1,
    slug: '38913-a-light-in-the-darkness',
    classes: [
      {
        slug: 'paladin',
        id: 5,
        name: 'Paladin'
      }
    ],
    rarity: {
      slug: 'common',
      id: 1,
      craftingCost: [40, 400],
      dustValue: [5, 50],
      name: 'Common'
    },
    set: {
      id: 21,
      name: 'Whispers of the Old Gods',
      slug: 'whispers-of-the-old-gods'
    },
    artist: 'Zoltan Boros',
    cropImage:
      'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/289b8a4599a7119ddbe3abc1d767e12efbda64db3631936cda76dd8c8f651126.png',
    flavor:
      'Wait, how can you have a light in the dark? If you turn on a light while it’s dark, doesn’t that mean it’s no longer dark?',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3e52c45971994b62bd90cf71adb97e583146760a45a2e283ba67a9557746c61a.png',
    imageGold: '',
    keywords: [
      {
        id: 21,
        slug: 'discover',
        name: 'Discover',
        refText: 'Choose one of three cards to add to your hand.',
        text: 'Choose one of three cards to add to your hand.'
      }
    ],
    manaCost: 2,
    spellSchool: [
      {
        slug: 'holy',
        id: 5,
        name: 'Holy'
      }
    ]
  }
}

const minionWithTribeCard = {
  data: {
    id: 72923,
    name: 'Queen Azshara',
    text: "<b>Battlecry:</b> If you've cast three spells while holding this, choose an Ancient Relic. <i>( left!)</i> <i>(Ready!)</i>",
    collectible: 1,
    slug: '72923-queen-azshara',
    classes: [
      {
        slug: 'neutral',
        id: 12,
        name: 'Neutral'
      }
    ],
    rarity: {
      slug: 'legendary',
      id: 5,
      craftingCost: [1600, 3200],
      dustValue: [400, 1600],
      name: 'Legendary'
    },
    set: {
      id: 1658,
      name: 'Voyage to the Sunken City',
      slug: 'voyage-to-the-sunken-city'
    },
    artist: 'Daniel Orive',
    cropImage:
      'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4ace1bd344ccf339f7ef24478f3d05ed4d06a55125ab915e3a8aff710f805bc0.png',
    flavor:
      'Hobbies include: Ordering subjects around, making deals with old gods, and taking long walks under the beach.',
    image:
      'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4568452e1ac42cda89b24fd20f826276f1063791e855e8ffe4899363fff40f9e.png',
    imageGold: '',
    keywords: [
      {
        id: 8,
        slug: 'battlecry',
        name: 'Battlecry',
        refText: 'Does something when you play it from your hand.',
        text: 'Does something when you play it from your hand.',
        gameModes: [1, 2, 4, 5]
      }
    ],
    manaCost: 5,
    minionType: [
      {
        slug: 'naga',
        id: 92,
        name: 'Naga',
        gameModes: [1, 2, 4, 5]
      }
    ]
  }
}

export { allCards, spellCard, minionWithTribeCard }
