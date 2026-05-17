const ROUND_SIZE = 10;
const CHEST_COST = 50;
const DUPLICATE_REFUND = Math.floor(CHEST_COST * 0.5);
const CRYSTAL_REWARD = 1;
const APP_VERSION = "0.1.0";
const SAVE_VERSION = 1;
const CRYSTAL_IDLE_VIDEO = "assets/Chest/BlueCrystal_idle.mp4";
const GM_ENABLED = new URLSearchParams(window.location.search).get("gm") === "1";
const SAVE_KEY = "mathCrystalIslandSaveV1";
const RARITY_WEIGHTS = {
  Common: 60,
  Rare: 25,
  Epic: 12,
  Legendary: 3,
};
const ITEM_RARITIES = {
  cozy_milk_tea_winter_head: "Rare",
  cozy_milk_tea_winter_top: "Epic",
  cozy_milk_tea_winter_bottom: "Epic",
  cozy_milk_tea_winter_shoe: "Common",
  cozy_milk_tea_winter_scarf: "Common",
  cozy_milk_tea_winter_bag: "Common",
  cozy_milk_tea_winter_aura: "Rare",
  cozy_milk_tea_winter_background: "Legendary",
  lemon_cream_daydream_head: "Rare",
  lemon_cream_daydream_top: "Epic",
  lemon_cream_daydream_bottom: "Epic",
  lemon_cream_daydream_shoe: "Common",
  lemon_cream_daydream_bag: "Common",
  lemon_cream_daydream_keychain: "Common",
  lemon_cream_daydream_aura: "Rare",
  lemon_cream_daydream_background: "Legendary",
  rainy_blue_memory_head: "Rare",
  rainy_blue_memory_top: "Epic",
  rainy_blue_memory_bottom: "Epic",
  rainy_blue_memory_shoe: "Common",
  rainy_blue_memory_bag: "Common",
  rainy_blue_memory_earphone: "Common",
  rainy_blue_memory_aura: "Rare",
  rainy_blue_memory_background: "Legendary",
  cherry_blossom_picnic_head: "Rare",
  cherry_blossom_picnic_top: "Epic",
  cherry_blossom_picnic_bottom: "Epic",
  cherry_blossom_picnic_shoe: "Common",
  cherry_blossom_picnic_clip: "Common",
  cherry_blossom_picnic_bag: "Common",
  cherry_blossom_picnic_aura: "Rare",
  cherry_blossom_picnic_background: "Legendary",
  sage_garden_cafe_head: "Rare",
  sage_garden_cafe_top: "Epic",
  sage_garden_cafe_bottom: "Epic",
  sage_garden_cafe_shoe: "Common",
  sage_garden_cafe_clip: "Common",
  sage_garden_cafe_bag: "Common",
  sage_garden_cafe_aura: "Rare",
  sage_garden_cafe_background: "Legendary",
};
const STANDARD_SKELETON_ID = "master_base";
const DEFAULT_STAGE = {
  displayDollWidth: 430,
  sceneDollWidth: 360,
  characterY: 0,
  characterScale: 1,
};

const characterCatalog = {
  master_base: {
    id: "master_base",
    name: "Aveline",
    skeletonId: STANDARD_SKELETON_ID,
    basePath: "assets/paper-doll/MasterBase.png",
  },
};

const setCatalog = [
  {
    id: "cozy_milk_tea_winter",
    name: "Cozy Milk Tea Winter",
    icon: "🧋",
    iconPath: "assets/paper-doll/Cozy Milk Tea Winter/ICON/Cozy Milk Tea Winter_icon.png",
    skeletonId: STANDARD_SKELETON_ID,
    animationPath: "assets/paper-doll/Cozy Milk Tea Winter/Video/Cozy Milk Tea Winter_1.mp4",
    requiredItemIds: [
      "cozy_milk_tea_winter_head",
      "cozy_milk_tea_winter_top",
      "cozy_milk_tea_winter_bottom",
      "cozy_milk_tea_winter_shoe",
      "cozy_milk_tea_winter_scarf",
      "cozy_milk_tea_winter_bag",
      "cozy_milk_tea_winter_aura",
      "cozy_milk_tea_winter_background",
    ],
  },
  {
    id: "lemon_cream_daydream",
    name: "Lemon Cream Daydream",
    icon: "🍋",
    iconPath: "assets/paper-doll/Lemon Cream Daydream/ICON/Lemon Cream Daydream_icon.png",
    skeletonId: STANDARD_SKELETON_ID,
    animationPath: "assets/paper-doll/Lemon Cream Daydream/Video/Lemon Cream Daydream_1.mp4",
    requiredItemIds: [
      "lemon_cream_daydream_head",
      "lemon_cream_daydream_top",
      "lemon_cream_daydream_bottom",
      "lemon_cream_daydream_shoe",
      "lemon_cream_daydream_bag",
      "lemon_cream_daydream_keychain",
      "lemon_cream_daydream_aura",
      "lemon_cream_daydream_background",
    ],
  },
  {
    id: "rainy_blue_memory",
    name: "Rainy Blue Memory",
    icon: "☔",
    iconPath: "assets/paper-doll/Rainy Blue Memory/ICON/Rainy Blue Memory_icon.png",
    skeletonId: STANDARD_SKELETON_ID,
    animationPath: "assets/paper-doll/Rainy Blue Memory/Video/Rainy Blue Memory_video.mp4",
    requiredItemIds: [
      "rainy_blue_memory_head",
      "rainy_blue_memory_top",
      "rainy_blue_memory_bottom",
      "rainy_blue_memory_shoe",
      "rainy_blue_memory_bag",
      "rainy_blue_memory_earphone",
      "rainy_blue_memory_aura",
      "rainy_blue_memory_background",
    ],
  },
  {
    id: "cherry_blossom_picnic",
    name: "Cherry Blossom Picnic",
    icon: "🌸",
    iconPath: "assets/paper-doll/Cherry Blossom Picnic/ICON/Cherry Blossom Picnic_icon.png",
    skeletonId: STANDARD_SKELETON_ID,
    animationPath: "assets/paper-doll/Cherry Blossom Picnic/Video/Cherry Blossom Picnic.mp4",
    requiredItemIds: [
      "cherry_blossom_picnic_head",
      "cherry_blossom_picnic_top",
      "cherry_blossom_picnic_bottom",
      "cherry_blossom_picnic_shoe",
      "cherry_blossom_picnic_clip",
      "cherry_blossom_picnic_bag",
      "cherry_blossom_picnic_aura",
      "cherry_blossom_picnic_background",
    ],
  },
  {
    id: "sage_garden_cafe",
    name: "Sage Garden Cafe",
    icon: "☕",
    iconPath: "assets/paper-doll/Sage Garden Cafe/ICON/Sage Garden Cafe_icon.png",
    skeletonId: STANDARD_SKELETON_ID,
    animationPath: "assets/paper-doll/Sage Garden Cafe/Video/Sage Garden Cafe_Video.mp4",
    requiredItemIds: [
      "sage_garden_cafe_head",
      "sage_garden_cafe_top",
      "sage_garden_cafe_bottom",
      "sage_garden_cafe_shoe",
      "sage_garden_cafe_clip",
      "sage_garden_cafe_bag",
      "sage_garden_cafe_aura",
      "sage_garden_cafe_background",
    ],
  },
];

const itemCatalog = [
  {
    id: "cozy_milk_tea_winter_background",
    name: "Cozy Milk Tea Winter 背景",
    setId: "cozy_milk_tea_winter",
    slot: "background",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Cozy Milk Tea Winter/Backgrounds/Cozy Milk Tea Winter_Background.png",
    stage: {
      dollWidth: 360,
      characterY: 70,
      characterScale: 0.95,
    },
  },
  {
    id: "cozy_milk_tea_winter_head",
    name: "Cozy Milk Tea Winter 髮型/表情",
    setId: "cozy_milk_tea_winter",
    slot: "head",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Cozy Milk Tea Winter/Heads/Cozy Milk Tea Winter_head.png",
  },
  {
    id: "cozy_milk_tea_winter_top",
    name: "Cozy Milk Tea Winter 上衣",
    setId: "cozy_milk_tea_winter",
    slot: "top",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Cozy Milk Tea Winter/Tops/Cozy Milk Tea Winter_top.png",
  },
  {
    id: "cozy_milk_tea_winter_bottom",
    name: "Cozy Milk Tea Winter 下身",
    setId: "cozy_milk_tea_winter",
    slot: "bottom",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Cozy Milk Tea Winter/Bottoms/Cozy Milk Tea Winter_bottom.png",
  },
  {
    id: "cozy_milk_tea_winter_shoe",
    name: "Cozy Milk Tea Winter 鞋子",
    setId: "cozy_milk_tea_winter",
    slot: "shoe",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Cozy Milk Tea Winter/Shoes/Cozy Milk Tea Winter_shoe.png",
  },
  {
    id: "cozy_milk_tea_winter_scarf",
    name: "Cozy Milk Tea Winter 圍巾",
    setId: "cozy_milk_tea_winter",
    slot: "accessory",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Cozy Milk Tea Winter/Accessories/Cozy Milk Tea Winter_scarf.png",
  },
  {
    id: "cozy_milk_tea_winter_bag",
    name: "Cozy Milk Tea Winter 包包",
    setId: "cozy_milk_tea_winter",
    slot: "bag",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Cozy Milk Tea Winter/Bag/Cozy Milk Tea Winter_bag.png",
  },
  {
    id: "cozy_milk_tea_winter_aura",
    name: "Cozy Milk Tea Winter 光效",
    setId: "cozy_milk_tea_winter",
    slot: "aura",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Cozy Milk Tea Winter/Aura/Cozy Milk Tea Winter_aura.png",
  },
  {
    id: "lemon_cream_daydream_background",
    name: "Lemon Cream Daydream 背景",
    setId: "lemon_cream_daydream",
    slot: "background",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Lemon Cream Daydream/Backgrounds/Lemon Cream Daydream_Background.png",
    stage: {
      dollWidth: 360,
      characterY: 70,
      characterScale: 0.95,
    },
  },
  {
    id: "lemon_cream_daydream_head",
    name: "Lemon Cream Daydream 髮型/表情",
    setId: "lemon_cream_daydream",
    slot: "head",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Lemon Cream Daydream/Heads/Lemon Cream Daydream_head.png",
  },
  {
    id: "lemon_cream_daydream_top",
    name: "Lemon Cream Daydream 上衣",
    setId: "lemon_cream_daydream",
    slot: "top",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Lemon Cream Daydream/Tops/Lemon Cream Daydream_top.png",
  },
  {
    id: "lemon_cream_daydream_bottom",
    name: "Lemon Cream Daydream 下身",
    setId: "lemon_cream_daydream",
    slot: "bottom",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Lemon Cream Daydream/Bottoms/_Lemon Cream Daydream_bottom.png",
  },
  {
    id: "lemon_cream_daydream_shoe",
    name: "Lemon Cream Daydream 鞋子",
    setId: "lemon_cream_daydream",
    slot: "shoe",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Lemon Cream Daydream/Shoes/Lemon Cream Daydream_shoe.png",
  },
  {
    id: "lemon_cream_daydream_bag",
    name: "Lemon Cream Daydream 包包",
    setId: "lemon_cream_daydream",
    slot: "bag",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Lemon Cream Daydream/Bags/Lemon Cream Daydream_bag.png",
  },
  {
    id: "lemon_cream_daydream_keychain",
    name: "Lemon Cream Daydream 吊飾",
    setId: "lemon_cream_daydream",
    slot: "accessory",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Lemon Cream Daydream/Accessories/Lemon Cream Daydream_keychain.png",
  },
  {
    id: "lemon_cream_daydream_aura",
    name: "Lemon Cream Daydream 光效",
    setId: "lemon_cream_daydream",
    slot: "aura",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Lemon Cream Daydream/Aura/Lemon Cream Daydream_Aura.png",
  },
  {
    id: "rainy_blue_memory_background",
    name: "Rainy Blue Memory 背景",
    setId: "rainy_blue_memory",
    slot: "background",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Rainy Blue Memory/Backgrounds/Rainy Blue Memory_Background.png",
    stage: {
      dollWidth: 360,
      characterY: 70,
      characterScale: 0.95,
    },
  },
  {
    id: "rainy_blue_memory_head",
    name: "Rainy Blue Memory 髮型/表情",
    setId: "rainy_blue_memory",
    slot: "head",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Rainy Blue Memory/Heads/Rainy Blue Memory_head.png",
  },
  {
    id: "rainy_blue_memory_top",
    name: "Rainy Blue Memory 上衣",
    setId: "rainy_blue_memory",
    slot: "top",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Rainy Blue Memory/Tops/Rainy Blue Memory_top.png",
  },
  {
    id: "rainy_blue_memory_bottom",
    name: "Rainy Blue Memory 下身",
    setId: "rainy_blue_memory",
    slot: "bottom",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Rainy Blue Memory/Bottoms/Rainy Blue Memory_bottom.png",
  },
  {
    id: "rainy_blue_memory_shoe",
    name: "Rainy Blue Memory 鞋子",
    setId: "rainy_blue_memory",
    slot: "shoe",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Rainy Blue Memory/Shoes/shoe.png",
  },
  {
    id: "rainy_blue_memory_bag",
    name: "Rainy Blue Memory 包包",
    setId: "rainy_blue_memory",
    slot: "bag",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Rainy Blue Memory/Bag/Rainy Blue Memory_bag.png",
  },
  {
    id: "rainy_blue_memory_earphone",
    name: "Rainy Blue Memory 耳機",
    setId: "rainy_blue_memory",
    slot: "accessory",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Rainy Blue Memory/Accessories/Rainy Blue Memory_earphone.png",
  },
  {
    id: "rainy_blue_memory_aura",
    name: "Rainy Blue Memory 光效",
    setId: "rainy_blue_memory",
    slot: "aura",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Rainy Blue Memory/Aura/Rainy Blue Memory_Aura.png",
  },
  {
    id: "cherry_blossom_picnic_background",
    name: "Cherry Blossom Picnic 背景",
    setId: "cherry_blossom_picnic",
    slot: "background",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Cherry Blossom Picnic/Backgrounds/Cherry Blossom Picnic_Background.png",
    stage: {
      dollWidth: 360,
      characterY: 70,
      characterScale: 0.95,
    },
  },
  {
    id: "cherry_blossom_picnic_head",
    name: "Cherry Blossom Picnic 髮型/表情",
    setId: "cherry_blossom_picnic",
    slot: "head",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Cherry Blossom Picnic/Heads/Cherry Blossom Picnic_head.png",
  },
  {
    id: "cherry_blossom_picnic_top",
    name: "Cherry Blossom Picnic 上衣",
    setId: "cherry_blossom_picnic",
    slot: "top",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Cherry Blossom Picnic/Tops/Cherry Blossom Picnic_top.png",
  },
  {
    id: "cherry_blossom_picnic_bottom",
    name: "Cherry Blossom Picnic 下身",
    setId: "cherry_blossom_picnic",
    slot: "bottom",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Cherry Blossom Picnic/Bottoms/Picnic_bottom.png",
  },
  {
    id: "cherry_blossom_picnic_shoe",
    name: "Cherry Blossom Picnic 鞋子",
    setId: "cherry_blossom_picnic",
    slot: "shoe",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Cherry Blossom Picnic/Shoes/shoe.png",
  },
  {
    id: "cherry_blossom_picnic_clip",
    name: "Cherry Blossom Picnic 髮夾",
    setId: "cherry_blossom_picnic",
    slot: "accessory",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Cherry Blossom Picnic/Accessories/Cherry Blossom Picnic_clip.png",
  },
  {
    id: "cherry_blossom_picnic_bag",
    name: "Cherry Blossom Picnic 包包",
    setId: "cherry_blossom_picnic",
    slot: "bag",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Cherry Blossom Picnic/Bag/Cherry Blossom Picnic_bag.png",
  },
  {
    id: "cherry_blossom_picnic_aura",
    name: "Cherry Blossom Picnic 光效",
    setId: "cherry_blossom_picnic",
    slot: "aura",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Cherry Blossom Picnic/Aura/Cherry Blossom Picnic_Aura.png",
  },
  {
    id: "sage_garden_cafe_background",
    name: "Sage Garden Cafe 背景",
    setId: "sage_garden_cafe",
    slot: "background",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Sage Garden Cafe/Backgrounds/Sage Garden Cafe_Background.png",
    stage: {
      dollWidth: 360,
      characterY: 70,
      characterScale: 0.95,
    },
  },
  {
    id: "sage_garden_cafe_head",
    name: "Sage Garden Cafe 髮型/表情",
    setId: "sage_garden_cafe",
    slot: "head",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Sage Garden Cafe/Heads/Sage Garden Cafe_head.png",
  },
  {
    id: "sage_garden_cafe_top",
    name: "Sage Garden Cafe 上衣",
    setId: "sage_garden_cafe",
    slot: "top",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Sage Garden Cafe/Tops/Sage Garden Cafe_top.png",
  },
  {
    id: "sage_garden_cafe_bottom",
    name: "Sage Garden Cafe 下身",
    setId: "sage_garden_cafe",
    slot: "bottom",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Sage Garden Cafe/Bottoms/Sage Garden Cafe_bottom.png",
  },
  {
    id: "sage_garden_cafe_shoe",
    name: "Sage Garden Cafe 鞋子",
    setId: "sage_garden_cafe",
    slot: "shoe",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Sage Garden Cafe/Shoes/Sage Garden Cafe_shoe.png",
  },
  {
    id: "sage_garden_cafe_clip",
    name: "Sage Garden Cafe 髮夾",
    setId: "sage_garden_cafe",
    slot: "accessory",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Sage Garden Cafe/Accessories/Sage Garden Cafe_clip.png",
  },
  {
    id: "sage_garden_cafe_bag",
    name: "Sage Garden Cafe 包包",
    setId: "sage_garden_cafe",
    slot: "bag",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Sage Garden Cafe/Bag/Sage Garden Cafe_bag.png",
  },
  {
    id: "sage_garden_cafe_aura",
    name: "Sage Garden Cafe 光效",
    setId: "sage_garden_cafe",
    slot: "aura",
    skeletonId: STANDARD_SKELETON_ID,
    rarity: "common",
    path: "assets/paper-doll/Sage Garden Cafe/Aura/Sage Garden Cafe_aura.png",
  },
];

const slotLabels = {
  background: "背景",
  head: "髮型/表情",
  top: "衣服",
  bottom: "下身",
  shoe: "鞋子",
  bag: "包包",
  accessory: "配件",
  aura: "光效",
  pet: "寵物",
};

const slotOrder = ["background", "head", "top", "bottom", "shoe", "bag", "accessory", "aura", "pet"];

const slotIcons = {
  background: "景",
  head: "髮",
  top: "衣",
  bottom: "裙",
  shoe: "鞋",
  bag: "包",
  accessory: "飾",
  aura: "光",
  pet: "寵",
};

const i18n = {
  "zh-Hant": {
    appSubtitle: "Math Dress Up",
    appTitle: "數學水晶島",
    navHome: "水晶島",
    navPractice: "數學練習",
    navChest: "魔法寶箱",
    navDress: "Aveline衣櫥",
    navGm: "GM測試",
    settingsButton: "設定",
    homeEyebrow: "Aveline Island",
    homeIntro: "練習數學拿藍水晶，去魔法寶箱抽 Aveline 的新造型。",
    homeToday: "Today",
    homeCurrent: "Aveline 目前造型",
    homePracticeTitle: "數學練習",
    homePracticeText: "答對題目拿藍水晶",
    homeChestTitle: "魔法寶箱",
    homeChestText: "50 藍水晶抽裝備",
    homeDressTitle: "Aveline 衣櫃",
    homeDressText: "換裝和看套裝",
    settingsEyebrow: "Settings",
    settingsTitle: "設定",
    settingsIntro: "調整遊戲聲音與本機設定。",
    soundTitle: "音效",
    soundText: "控制答題、按鈕、娃娃互動與穿上音效。",
    languageTitle: "語言",
    languageText: "先保存語言偏好，之後可接全站翻譯文字。",
    versionTitle: "版本控制",
    versionText: "目前先使用本機版本資訊，正式上架時可接 Android 版本號。",
    footerPrivacy: "隱私權政策",
    footerAbout: "關於",
    footerParentGuide: "家長指南",
    footerContact: "聯絡我們",
    inventoryHint: "物品",
    emptyInventoryTitle: "衣櫃還是空的",
    emptyInventoryText: "完成數學練習收集藍水晶，再去魔法寶箱抽新造型。",
    emptyFilterTitle: "這一類還沒有物品",
    emptyFilterText: "換個分類看看，或去魔法寶箱抽新裝備。",
    openChestReady: "可以開寶箱了",
    chestNeed: "還需要",
    crystals: "藍水晶",
    openChest: "開啟寶箱",
    openingChest: "開箱中",
    roundText: "第",
    questionUnit: "題",
    correctFeedback: "答對了！藍水晶",
    missingAnswer: "先在答案格寫答案，或點下面小格修正數字。",
    wrongFeedback: "差一點，答案是",
    setAnimation: "播放套裝動畫",
    footerAria: "網站資訊",
    slot: {
      background: "背景",
      head: "髮型/表情",
      top: "衣服",
      bottom: "下身",
      shoe: "鞋子",
      bag: "包包",
      accessory: "配件",
      aura: "光效",
      pet: "寵物",
    },
    infoPages: {
      privacy: `
        <p class="eyebrow">Privacy Policy</p>
        <h2 id="privacyTitle">隱私權政策</h2>
        <p>數學水晶島目前是一個瀏覽器版學習與換裝原型。遊戲進度、藍水晶、衣櫃物品與設定會儲存在使用者裝置的瀏覽器 localStorage 中，不會由本網站主動上傳到伺服器。</p>
        <div class="info-grid">
          <article><h3>我們目前不收集的資料</h3><p>本版本不要求登入、不要求姓名、生日、地址、電話，也不會要求孩子輸入可識別個人的資料。</p></article>
          <article><h3>本機儲存</h3><p>遊戲會在同一台裝置與同一個瀏覽器中保存進度。清除瀏覽器資料後，進度可能會消失。</p></article>
          <article><h3>第三方服務</h3><p>若未來加入廣告、分析或帳號功能，本頁會更新說明使用的第三方服務、資料用途與家長選項。</p></article>
          <article><h3>家長提醒</h3><p>本遊戲以兒童學習為方向，建議家長陪同使用並協助管理瀏覽器資料與螢幕時間。</p></article>
        </div>
        <p class="info-note">最後更新：2026-05-17</p>
      `,
      about: `
        <p class="eyebrow">About</p>
        <h2 id="aboutTitle">關於數學水晶島</h2>
        <p>數學水晶島是一個結合數學練習、藍水晶獎勵、魔法寶箱與 Aveline 紙娃娃換裝的兒童學習遊戲。</p>
        <div class="info-grid">
          <article><h3>學習目標</h3><p>透過加法、減法、乘法與除法練習，讓孩子在短回合中累積成就感。</p></article>
          <article><h3>遊戲循環</h3><p>答題取得藍水晶，再用藍水晶開啟魔法寶箱，收集不同套裝與動畫。</p></article>
          <article><h3>目前狀態</h3><p>本網站仍是早期原型，會持續調整題型、手機排版、家長設定與素材整理。</p></article>
          <article><h3>適合使用方式</h3><p>建議每次練習 10 題，完成後讓孩子檢查答題紀錄，再回到首頁或衣櫃休息一下。</p></article>
        </div>
      `,
      parentGuide: `
        <p class="eyebrow">Parent Guide</p>
        <h2 id="parentGuideTitle">家長指南</h2>
        <p>這份指南協助家長了解孩子在數學水晶島裡會做什麼，以及如何陪伴孩子使用。</p>
        <div class="info-grid">
          <article><h3>建議節奏</h3><p>一次以 10 題為一輪。答對 1 題可獲得 1 顆藍水晶，完成一輪後可查看剛剛的答題結果。</p></article>
          <article><h3>獎勵規則</h3><p>10 題答對 5 題、8 題、10 題會有額外藍水晶。建議把獎勵當成練習動機，而不是壓力。</p></article>
          <article><h3>陪伴方式</h3><p>孩子答錯時，可以先看本輪檢查，再一起討論位數、進位、借位或乘除概念。</p></article>
          <article><h3>裝置與資料</h3><p>目前進度存在本機瀏覽器。換裝置或清除瀏覽器資料後，衣櫃與藍水晶可能無法保留。</p></article>
        </div>
      `,
      contact: `
        <p class="eyebrow">Contact</p>
        <h2 id="contactTitle">聯絡我們</h2>
        <p>如果你想回報問題、提出建議，或討論素材與授權，可以透過 GitHub repository 的 Issues 聯絡。</p>
        <div class="contact-card">
          <strong>GitHub Issues</strong>
          <a href="https://github.com/hphome-pixel/math-crystal-island/issues" target="_blank" rel="noreferrer">https://github.com/hphome-pixel/math-crystal-island/issues</a>
        </div>
        <p class="info-note">請不要在公開 issue 中貼上孩子的姓名、照片、學校、地址或其他個人資料。</p>
      `,
    },
  },
  en: {
    appSubtitle: "Math Dress Up",
    appTitle: "Math Crystal Island",
    navHome: "Crystal Island",
    navPractice: "Math Practice",
    navChest: "Magic Chest",
    navDress: "Aveline Closet",
    navGm: "GM Test",
    settingsButton: "Settings",
    homeEyebrow: "Aveline Island",
    homeIntro: "Practice math to collect blue crystals, then open the magic chest for Aveline's new outfits.",
    homeToday: "Today",
    homeCurrent: "Aveline Current Look",
    homePracticeTitle: "Math Practice",
    homePracticeText: "Answer questions to earn blue crystals",
    homeChestTitle: "Magic Chest",
    homeChestText: "Spend 50 blue crystals for an item",
    homeDressTitle: "Aveline Closet",
    homeDressText: "Dress up and view outfit sets",
    settingsEyebrow: "Settings",
    settingsTitle: "Settings",
    settingsIntro: "Adjust sound, language, and local app settings.",
    soundTitle: "Sound",
    soundText: "Controls answer, button, doll interaction, and equip sounds.",
    languageTitle: "Language",
    languageText: "Save your language preference for this browser.",
    versionTitle: "Version",
    versionText: "Local app and save-data version information.",
    footerPrivacy: "Privacy Policy",
    footerAbout: "About",
    footerParentGuide: "Parent Guide",
    footerContact: "Contact",
    inventoryHint: "items",
    emptyInventoryTitle: "Your closet is empty",
    emptyInventoryText: "Practice math to collect blue crystals, then open the magic chest for new looks.",
    emptyFilterTitle: "No items in this category",
    emptyFilterText: "Try another category or open the magic chest for new items.",
    openChestReady: "Ready to open the chest",
    chestNeed: "Need",
    crystals: "blue crystals",
    openChest: "Open Chest",
    openingChest: "Opening",
    roundText: "Question",
    questionUnit: "",
    correctFeedback: "Correct! Blue crystal",
    missingAnswer: "Write the answer first, or tap the small boxes below to fix the digits.",
    wrongFeedback: "Almost. The answer is",
    setAnimation: "Play outfit animation",
    footerAria: "Site information",
    slot: {
      background: "Background",
      head: "Hair / Face",
      top: "Top",
      bottom: "Bottom",
      shoe: "Shoes",
      bag: "Bag",
      accessory: "Accessory",
      aura: "Aura",
      pet: "Pet",
    },
    infoPages: {
      privacy: `
        <p class="eyebrow">Privacy Policy</p>
        <h2 id="privacyTitle">Privacy Policy</h2>
        <p>Math Crystal Island is currently a browser-based learning and dress-up prototype. Game progress, blue crystals, closet items, and settings are stored in this browser's localStorage on the user's device. This site does not actively upload that data to a server.</p>
        <div class="info-grid">
          <article><h3>Data we do not collect</h3><p>This version does not require sign-in, names, birthdays, addresses, phone numbers, or personal information from children.</p></article>
          <article><h3>Local storage</h3><p>Progress is saved on the same device and browser. Clearing browser data may remove saved progress.</p></article>
          <article><h3>Third-party services</h3><p>If ads, analytics, or account features are added later, this page will be updated with the services used, purposes, and parent choices.</p></article>
          <article><h3>Parent note</h3><p>This game is designed for children's learning. Parents are encouraged to supervise use and help manage browser data and screen time.</p></article>
        </div>
        <p class="info-note">Last updated: 2026-05-17</p>
      `,
      about: `
        <p class="eyebrow">About</p>
        <h2 id="aboutTitle">About Math Crystal Island</h2>
        <p>Math Crystal Island combines math practice, blue crystal rewards, a magic chest, and Aveline paper-doll dress-up in a kid-friendly learning game.</p>
        <div class="info-grid">
          <article><h3>Learning goal</h3><p>Children practice addition, subtraction, multiplication, and division in short, motivating rounds.</p></article>
          <article><h3>Game loop</h3><p>Answer questions to earn blue crystals, then open the magic chest to collect outfit sets and animations.</p></article>
          <article><h3>Current status</h3><p>This website is an early prototype and will continue improving question types, mobile layout, parent settings, and asset organization.</p></article>
          <article><h3>Suggested use</h3><p>Practice 10 questions at a time, review the result list, then return to the island or closet for a short break.</p></article>
        </div>
      `,
      parentGuide: `
        <p class="eyebrow">Parent Guide</p>
        <h2 id="parentGuideTitle">Parent Guide</h2>
        <p>This guide helps parents understand what children do in Math Crystal Island and how to support their learning.</p>
        <div class="info-grid">
          <article><h3>Suggested rhythm</h3><p>Each round has 10 questions. A correct answer earns 1 blue crystal, and the result screen helps children review their work.</p></article>
          <article><h3>Reward rules</h3><p>Extra blue crystals are awarded for 5, 8, or 10 correct answers in a 10-question round. Treat rewards as motivation, not pressure.</p></article>
          <article><h3>How to help</h3><p>When a child misses a question, review the round together and talk about place value, carrying, borrowing, or multiplication and division ideas.</p></article>
          <article><h3>Device and data</h3><p>Progress is saved in the local browser. Changing devices or clearing browser data may remove closet items and blue crystals.</p></article>
        </div>
      `,
      contact: `
        <p class="eyebrow">Contact</p>
        <h2 id="contactTitle">Contact</h2>
        <p>To report an issue, suggest an idea, or discuss assets and licensing, please use the repository's GitHub Issues page.</p>
        <div class="contact-card">
          <strong>GitHub Issues</strong>
          <a href="https://github.com/hphome-pixel/math-crystal-island/issues" target="_blank" rel="noreferrer">https://github.com/hphome-pixel/math-crystal-island/issues</a>
        </div>
        <p class="info-note">Please do not post a child's name, photo, school, address, or other personal information in a public issue.</p>
      `,
    },
  },
};

function tr(key) {
  return i18n[state?.language || "zh-Hant"]?.[key] ?? i18n["zh-Hant"][key] ?? key;
}

function getSlotLabel(slot) {
  return tr("slot")?.[slot] ?? slotLabels[slot] ?? slot;
}

const state = {
  characterId: "master_base",
  currentFilter: "all",
  currentQuestion: null,
  questionIndex: 1,
  score: 0,
  streak: 0,
  roundAnswers: [],
  blueCrystals: 0,
  soundEnabled: true,
  language: "zh-Hant",
  isOpeningChest: false,
  rewardAction: "close",
  homeDollSpeechTimer: null,
  dollTapSoundIndex: 0,
  addDifficulty: "mixed",
  subtractDifficulty: "mixed",
  answerBoxes: [],
  scratchBoxes: [],
  previewCells: [],
  ownedItems: new Set(),
  expandedSetIds: new Set(setCatalog.map((set) => set.id)),
  equipped: {
    background: null,
    head: null,
    top: null,
    bottom: null,
    shoe: null,
    bag: null,
    accessory: null,
    aura: null,
    pet: null,
  },
};

const practiceModeInputs = document.querySelectorAll("input[name='practiceMode']");
const modeCards = document.querySelectorAll(".mode-card");
const settingControls = document.querySelectorAll(".setting-control");
const practiceSummary = document.querySelector("#practiceSummary");
const practiceSettingsView = document.querySelector("#practiceSettingsView");
const practiceQuestionView = document.querySelector("#practiceQuestionView");
const startPracticeButton = document.querySelector("#startPracticeButton");
const stopPracticeButton = document.querySelector("#stopPracticeButton");
const quitPracticeButton = document.querySelector("#quitPracticeButton");
const digitsSelect = document.querySelector("#digitsSelect");
const addDifficultySelect = document.querySelector("#addDifficultySelect");
const subtractDifficultySelect = document.querySelector("#subtractDifficultySelect");
const multiplyModeSelect = document.querySelector("#multiplyModeSelect");
const divideModeSelect = document.querySelector("#divideModeSelect");
const answerForm = document.querySelector("#answerForm");
const clearWritingButton = document.querySelector("#clearWritingButton");
const questionText = document.querySelector("#questionText");
const crystalPop = document.querySelector("#crystalPop");
const feedbackText = document.querySelector("#feedbackText");
const roundResult = document.querySelector("#roundResult");
const roundCorrectText = document.querySelector("#roundCorrectText");
const roundBaseRewardText = document.querySelector("#roundBaseRewardText");
const roundBonusText = document.querySelector("#roundBonusText");
const roundTotalRewardText = document.querySelector("#roundTotalRewardText");
const roundReview = document.querySelector("#roundReview");
const backToPracticeSettingsButton = document.querySelector("#backToPracticeSettingsButton");
const roundText = document.querySelector("#roundText");
const scoreText = document.querySelector("#scoreText");
const streakText = document.querySelector("#streakText");
const chestProgressText = document.querySelector("#chestProgressText");
const settingsButton = document.querySelector("#settingsButton");
const soundToggle = document.querySelector("#soundToggle");
const languageSelect = document.querySelector("#languageSelect");
const appVersionText = document.querySelector("#appVersionText");
const saveVersionText = document.querySelector("#saveVersionText");
const rewardText = document.querySelector("#rewardText");
const openChestButton = document.querySelector("#openChestButton");
const chestIdleVideo = document.querySelector("#chestIdleVideo");
const chestOpenVideo = document.querySelector("#chestOpenVideo");
const correctSound = new Audio("assets/sfx/correct.mp3");
const incorrectSound = new Audio("assets/sfx/incorrect.mp3");
const wearSound = new Audio("assets/sfx/穿上.mp3");
const flippingSound = new Audio("assets/sfx/Flipping.mp3");
const homeCardSounds = {
  practice: new Audio("assets/sfx/數學練習.mp3"),
  chest: new Audio("assets/sfx/魔法寶箱.mp3"),
  dress: new Audio("assets/sfx/Aveline衣櫃.mp3"),
};
const dollTapSounds = [
  new Audio("assets/sfx/doll_tap_1.mp3"),
  new Audio("assets/sfx/doll_tap_2.mp3"),
  new Audio("assets/sfx/doll_tap_3.mp3"),
  new Audio("assets/sfx/doll_tap_4.mp3"),
];
const inventoryGrid = document.querySelector("#inventoryGrid");
const inventoryHint = document.querySelector("#inventoryHint");
const dollStage = document.querySelector(".doll-stage");
const backgroundLayer = document.querySelector("#backgroundLayer");
const baseLayer = document.querySelector("#baseLayer");
const headLayer = document.querySelector("#headLayer");
const bottomLayer = document.querySelector("#bottomLayer");
const topLayer = document.querySelector("#topLayer");
const shoeLayer = document.querySelector("#shoeLayer");
const bagLayer = document.querySelector("#bagLayer");
const accessoryLayer = document.querySelector("#accessoryLayer");
const auraLayer = document.querySelector("#auraLayer");
const petLayer = document.querySelector("#petLayer");
const homeDollStage = document.querySelector(".home-doll-stage");
const homeDollSpeech = document.querySelector("#homeDollSpeech");
const homeBackgroundLayer = document.querySelector("#homeBackgroundLayer");
const homeBaseLayer = document.querySelector("#homeBaseLayer");
const homeHeadLayer = document.querySelector("#homeHeadLayer");
const homeBottomLayer = document.querySelector("#homeBottomLayer");
const homeTopLayer = document.querySelector("#homeTopLayer");
const homeShoeLayer = document.querySelector("#homeShoeLayer");
const homeBagLayer = document.querySelector("#homeBagLayer");
const homeAccessoryLayer = document.querySelector("#homeAccessoryLayer");
const homeAuraLayer = document.querySelector("#homeAuraLayer");
const homePetLayer = document.querySelector("#homePetLayer");
const backgroundSlotButton = document.querySelector("#backgroundSlotButton");
const headSlotButton = document.querySelector("#headSlotButton");
const topSlotButton = document.querySelector("#topSlotButton");
const bottomSlotButton = document.querySelector("#bottomSlotButton");
const shoeSlotButton = document.querySelector("#shoeSlotButton");
const bagSlotButton = document.querySelector("#bagSlotButton");
const accessorySlotButton = document.querySelector("#accessorySlotButton");
const auraSlotButton = document.querySelector("#auraSlotButton");
const petSlotButton = document.querySelector("#petSlotButton");
const playSetAnimationButton = document.querySelector("#playSetAnimationButton");
const rewardModal = document.querySelector("#rewardModal");
const rewardTitle = document.querySelector("#rewardTitle");
const rewardPreview = document.querySelector("#rewardPreview");
const rewardMessage = document.querySelector("#rewardMessage");
const closeRewardButton = document.querySelector("#closeRewardButton");
const resetOutfitButton = document.querySelector("#resetOutfitButton");
const gmUnlockAllButton = document.querySelector("#gmUnlockAllButton");
const gmAddCrystalButton = document.querySelector("#gmAddCrystalButton");
const gmChestButton = document.querySelector("#gmChestButton");
const gmResetButton = document.querySelector("#gmResetButton");
const girlCharacterButton = document.querySelector("#girlCharacterButton");
const closetTabs = document.querySelectorAll(".closet-tab");
const appTabs = document.querySelectorAll(".app-tab");
const appPages = document.querySelectorAll("[data-page-panel]");
const homeCards = document.querySelectorAll("[data-go-page]");

answerForm.addEventListener("submit", handleSubmit);
clearWritingButton.addEventListener("click", clearWriting);
backToPracticeSettingsButton.addEventListener("click", showPracticeSettings);
startPracticeButton.addEventListener("click", startRound);
stopPracticeButton.addEventListener("click", showPracticeSettings);
quitPracticeButton.addEventListener("click", showPracticeSettings);
homeDollStage.addEventListener("click", cheerHomeDoll);
settingsButton.addEventListener("click", () => {
  playSound(flippingSound, 0.28);
  showPage("settings");
});
soundToggle.addEventListener("change", updateSoundSetting);
languageSelect.addEventListener("change", updateLanguageSetting);
openChestButton.addEventListener("click", () => startChestOpening({ requiresCrystals: true }));
closeRewardButton.addEventListener("click", closeReward);
resetOutfitButton.addEventListener("click", resetOutfit);
gmUnlockAllButton.addEventListener("click", unlockAllItems);
gmAddCrystalButton.addEventListener("click", addGmCrystals);
gmChestButton.addEventListener("click", () => startChestOpening({ requiresCrystals: false, preferUnowned: true }));
gmResetButton.addEventListener("click", resetInventory);
backgroundSlotButton.addEventListener("click", () => unequipSlot("background"));
headSlotButton.addEventListener("click", () => unequipSlot("head"));
topSlotButton.addEventListener("click", () => unequipSlot("top"));
bottomSlotButton.addEventListener("click", () => unequipSlot("bottom"));
shoeSlotButton.addEventListener("click", () => unequipSlot("shoe"));
bagSlotButton.addEventListener("click", () => unequipSlot("bag"));
accessorySlotButton.addEventListener("click", () => unequipSlot("accessory"));
auraSlotButton.addEventListener("click", () => unequipSlot("aura"));
petSlotButton.addEventListener("click", () => unequipSlot("pet"));
playSetAnimationButton.addEventListener("click", () => playCompletedSetAnimation());
girlCharacterButton.addEventListener("click", () => chooseCharacter("master_base"));

[
  digitsSelect,
  addDifficultySelect,
  subtractDifficultySelect,
  multiplyModeSelect,
  divideModeSelect,
].forEach((control) => {
  control.addEventListener("change", () => {
    updatePracticeSettings();
  });
});

practiceModeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    updatePracticeSettings();
  });
});

closetTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.currentFilter = tab.dataset.filter;
    if (state.currentFilter === "all") {
      state.expandedSetIds = new Set(setCatalog.map((set) => set.id));
    }
    closetTabs.forEach((candidate) => candidate.classList.toggle("is-active", candidate === tab));
    renderInventory();
  });
});

appTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    playSound(flippingSound, 0.28);
    showPage(tab.dataset.page);
  });
});

homeCards.forEach((card) => {
  card.addEventListener("click", () => {
    playSound(homeCardSounds[card.dataset.goPage], 0.36);
    showPage(card.dataset.goPage);
  });
});

configureGmVisibility();
renderVersionInfo();
loadGame();
hydrateCrystalIcons();
chooseCharacter(state.characterId);
updatePracticeSettings();
showPracticeSettings();
renderInventory();
renderDoll();
document.body.dataset.page = "home";

function chooseCharacter(characterId) {
  state.characterId = characterId;
  girlCharacterButton.classList.toggle("is-selected", characterId === "master_base");
  renderDoll();
}

function loadGame() {
  try {
    const rawSave = localStorage.getItem(SAVE_KEY);
    if (!rawSave) {
      soundToggle.checked = state.soundEnabled;
      languageSelect.value = state.language;
      applyLanguageSetting();
      return;
    }

    const save = JSON.parse(rawSave);
    const validItemIds = new Set(itemCatalog.map((item) => item.id));

    state.characterId = characterCatalog[save.characterId] ? save.characterId : "master_base";
    state.blueCrystals = Number.isFinite(save.blueCrystals) ? Math.max(0, save.blueCrystals) : 0;
    state.soundEnabled = save.soundEnabled !== false;
    state.language = save.language === "en" ? "en" : "zh-Hant";
    soundToggle.checked = state.soundEnabled;
    languageSelect.value = state.language;
    applyLanguageSetting();
    state.ownedItems = new Set((save.ownedItems || []).filter((itemId) => validItemIds.has(itemId)));

    Object.keys(state.equipped).forEach((slot) => {
      const itemId = save.equipped?.[slot] ?? null;
      state.equipped[slot] = itemId && state.ownedItems.has(itemId) ? itemId : null;
    });
  } catch {
    soundToggle.checked = state.soundEnabled;
    languageSelect.value = state.language;
    applyLanguageSetting();
  }
}

function saveGame() {
  try {
    localStorage.setItem(
      SAVE_KEY,
      JSON.stringify({
        version: SAVE_VERSION,
        characterId: state.characterId,
        blueCrystals: state.blueCrystals,
        soundEnabled: state.soundEnabled,
        language: state.language,
        ownedItems: [...state.ownedItems],
        equipped: state.equipped,
      }),
    );
  } catch {}
}

function showPage(pageName) {
  document.body.dataset.page = pageName;
  settingsButton.classList.toggle("is-active", pageName === "settings");
  settingsButton.setAttribute("aria-expanded", pageName === "settings" ? "true" : "false");
  appTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.page === pageName);
  });
  appPages.forEach((page) => {
    page.classList.toggle("is-active", page.dataset.pagePanel === pageName);
  });
  if (pageName === "chest") {
    resetChestVideoToIdle();
  }
}

function configureGmVisibility() {
  document.querySelectorAll('[data-page="gm"], [data-page-panel="gm"]').forEach((element) => {
    element.classList.toggle("hidden", !GM_ENABLED);
  });
}

function startRound() {
  showPracticeQuestion();
  answerForm.classList.remove("hidden");
  roundResult.classList.add("hidden");
  state.questionIndex = 1;
  state.score = 0;
  state.streak = 0;
  state.roundAnswers = [];
  state.addDifficulty = addDifficultySelect.value;
  state.subtractDifficulty = subtractDifficultySelect.value;
  feedbackText.textContent = "";
  feedbackText.className = "feedback";
  nextQuestion();
  renderStats();
}

function showPracticeSettings() {
  practiceSettingsView.classList.remove("hidden");
  practiceQuestionView.classList.add("hidden");
  answerForm.classList.remove("hidden");
  roundResult.classList.add("hidden");
  roundReview.innerHTML = "";
  state.questionIndex = 1;
  state.score = 0;
  state.streak = 0;
  state.roundAnswers = [];
  feedbackText.textContent = "";
  feedbackText.className = "feedback";
  closeDigitChoosers();
  renderStats();
}

function showPracticeQuestion() {
  practiceSettingsView.classList.add("hidden");
  practiceQuestionView.classList.remove("hidden");
}

function nextQuestion() {
  state.addDifficulty = addDifficultySelect.value;
  state.subtractDifficulty = subtractDifficultySelect.value;
  state.currentQuestion = makeQuestion(
    getPracticeMode(),
    Number(digitsSelect.value),
    multiplyModeSelect.value,
    divideModeSelect.value,
  );
  renderQuestion(state.currentQuestion);
  renderStats();
}

function getPracticeMode() {
  return document.querySelector("input[name='practiceMode']:checked")?.value || "add";
}

function updatePracticeSettings() {
  const mode = getPracticeMode();
  const visibleSettings = {
    add: ["digits", "add"],
    subtract: ["digits", "subtract"],
    multiply: ["multiply"],
    divide: ["divide"],
    mixed: ["digits"],
  }[mode] || ["digits"];

  settingControls.forEach((control) => {
    control.classList.toggle("hidden", !visibleSettings.includes(control.dataset.setting));
  });

  modeCards.forEach((card) => {
    const input = card.querySelector("input");
    card.classList.toggle("is-selected", input.checked);
  });

  practiceSummary.textContent = makePracticeSummary(mode);
}

function makePracticeSummary(mode) {
  const modeLabels =
    state.language === "en"
      ? {
          add: "Addition",
          subtract: "Subtraction",
          multiply: "Multiplication",
          divide: "Division",
          mixed: "Mixed",
        }
      : {
          add: "加法練習",
          subtract: "減法練習",
          multiply: "乘法練習",
          divide: "除法練習",
          mixed: "混合練習",
        };
  const digitsLabels =
    state.language === "en"
      ? {
          1: "ones",
          2: "tens",
          3: "hundreds",
          4: "thousands",
        }
      : {
          1: "個位",
          2: "十位",
          3: "百位",
          4: "千位",
        };

  if (mode === "multiply") {
    return `${modeLabels[mode]}・${multiplyModeSelect.options[multiplyModeSelect.selectedIndex].text}`;
  }
  if (mode === "divide") {
    return `${modeLabels[mode]}・${divideModeSelect.options[divideModeSelect.selectedIndex].text}`;
  }
  return `${modeLabels[mode]}・${digitsLabels[digitsSelect.value]}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const writtenAnswer = recognizeAnswer();
  if (!writtenAnswer) {
    feedbackText.textContent = tr("missingAnswer");
    feedbackText.className = "feedback wrong";
    return;
  }

  const isCorrect = writtenAnswer === String(state.currentQuestion.answer);
  state.roundAnswers.push({
    index: state.questionIndex,
    question: makeQuestionReviewText(state.currentQuestion),
    userAnswer: writtenAnswer,
    correctAnswer: String(state.currentQuestion.answer),
    isCorrect,
  });
  if (isCorrect) {
    state.score += 1;
    state.streak += 1;
    state.blueCrystals += CRYSTAL_REWARD;
    playSound(correctSound, 0.42);
    showCrystalPop();
    feedbackText.textContent = `${tr("correctFeedback")} +${CRYSTAL_REWARD}`;
    feedbackText.className = "feedback correct";
  } else {
    state.streak = 0;
    playSound(incorrectSound, 0.34);
    feedbackText.textContent = `${tr("wrongFeedback")} ${state.currentQuestion.answer}`;
    feedbackText.className = "feedback wrong";
  }

  const completedRound = state.questionIndex >= ROUND_SIZE;
  renderStats();
  window.setTimeout(() => {
    if (completedRound) {
      showRoundResult();
    } else {
      state.questionIndex += 1;
      nextQuestion();
    }
  }, 850);
}

function showRoundResult() {
  const correctCount = state.score;
  const baseReward = correctCount * CRYSTAL_REWARD;
  const bonusReward = getRoundBonus(correctCount);
  const totalReward = baseReward + bonusReward;
  if (bonusReward) {
    state.blueCrystals += bonusReward;
  }

  answerForm.classList.add("hidden");
  roundResult.classList.remove("hidden");
  roundCorrectText.textContent = `${correctCount} / ${ROUND_SIZE}`;
  roundBaseRewardText.textContent = `${baseReward} ${tr("crystals")}`;
  roundBonusText.textContent = bonusReward ? `+${bonusReward} ${tr("crystals")}` : "0";
  roundTotalRewardText.textContent = `${totalReward} ${tr("crystals")}`;
  roundReview.innerHTML = renderRoundReview();
  feedbackText.textContent =
    state.language === "en"
      ? bonusReward
        ? `Round bonus +${bonusReward} ${tr("crystals")}`
        : "Round complete. Keep going!"
      : bonusReward
        ? `本輪額外獎勵 +${bonusReward} 藍水晶`
        : "本輪完成，繼續加油！";
  feedbackText.className = bonusReward ? "feedback correct" : "feedback";
  renderStats();
}

function renderRoundReview() {
  const rows = state.roundAnswers
    .map(
      (answer) => `
        <div class="round-review-row ${answer.isCorrect ? "is-correct" : "is-wrong"}">
          <strong>${answer.index}. ${answer.question}</strong>
          <span>${
            state.language === "en"
              ? `You answered ${answer.userAnswer || "blank"}, answer ${answer.correctAnswer}`
              : `你答 ${answer.userAnswer || "未填"}，答案 ${answer.correctAnswer}`
          }</span>
          <b>${state.language === "en" ? (answer.isCorrect ? "Correct" : "Review") : answer.isCorrect ? "答對" : "訂正"}</b>
        </div>
      `,
    )
    .join("");
  return `
    <div class="round-review-heading">
      <strong>${state.language === "en" ? "Round Review" : "本輪題目檢查"}</strong>
      <span>${state.language === "en" ? "Check which questions were correct and which need review." : "看一看剛剛哪題答對、哪題需要訂正。"}</span>
    </div>
    <div class="round-review-list">${rows}</div>
  `;
}

function makeQuestionReviewText(question) {
  const operatorByOperation = {
    add: "+",
    subtract: "-",
    multiply: "×",
    divide: "÷",
  };
  return `${question.a} ${operatorByOperation[question.operation] ?? "?"} ${question.b}`;
}

function getRoundBonus(correctCount) {
  if (correctCount >= 10) {
    return 5;
  }
  if (correctCount >= 8) {
    return 3;
  }
  if (correctCount >= 5) {
    return 2;
  }
  return 0;
}

function playSound(sound, volume = 0.4) {
  if (!sound || !state.soundEnabled) {
    return;
  }
  sound.pause();
  sound.currentTime = 0;
  sound.volume = volume;
  const playResult = sound.play();
  if (playResult?.catch) {
    playResult.catch(() => {});
  }
}

function updateSoundSetting() {
  state.soundEnabled = soundToggle.checked;
  if (!state.soundEnabled) {
    stopAllSounds();
  }
  saveGame();
}

function updateLanguageSetting() {
  state.language = languageSelect.value === "en" ? "en" : "zh-Hant";
  applyLanguageSetting();
  updatePracticeSettings();
  renderStats();
  renderInventory();
  renderDoll();
  saveGame();
}

function applyLanguageSetting() {
  document.documentElement.lang = state.language;
  translateStaticText();
}

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
}

function translateStaticText() {
  setText(".topbar .eyebrow", tr("appSubtitle"));
  setText(".topbar h1", tr("appTitle"));
  setText('.app-tab[data-page="home"]', tr("navHome"));
  setText('.app-tab[data-page="practice"]', tr("navPractice"));
  setText('.app-tab[data-page="chest"]', tr("navChest"));
  setText('.app-tab[data-page="dress"]', tr("navDress"));
  setText('.app-tab[data-page="gm"]', tr("navGm"));
  settingsButton.lastChild.textContent = ` ${tr("settingsButton")}`;

  setText(".home-copy .eyebrow", tr("homeEyebrow"));
  setText("#homeTitle", tr("homeIntro"));
  setText(".home-doll-card .eyebrow", tr("homeToday"));
  setText(".home-doll-card h2", tr("homeCurrent"));
  setText('.home-card[data-go-page="practice"] strong', tr("homePracticeTitle"));
  setText('.home-card[data-go-page="practice"] small', tr("homePracticeText"));
  setText('.home-card[data-go-page="chest"] strong', tr("homeChestTitle"));
  setText('.home-card[data-go-page="chest"] small', tr("homeChestText"));
  setText('.home-card[data-go-page="dress"] strong', tr("homeDressTitle"));
  setText('.home-card[data-go-page="dress"] small', tr("homeDressText"));

  const en = state.language === "en";
  setText("#characterSelectTitle", en ? "Choose Character" : "選人物");
  setText("#dressRoomTitle", en ? "Current Look" : "目前造型");
  setText("#closetTitle", en ? "Closet Slots" : "物品欄位");
  setText("#resetOutfitButton", en ? "Remove All" : "脫掉全部");
  setText("#practiceTitle", en ? "Practice Setup" : "試題練習");
  setText("#startPracticeButton", en ? "Start 10 Questions" : "開始 10 題");
  setText("#stopPracticeButton", en ? "Settings" : "設定");
  setText("#quitPracticeButton", en ? "Stop Practice" : "停止練習");
  setText("#clearWritingButton", en ? "Clear Writing" : "清除手寫");
  setText('#answerForm .primary-button[type="submit"]', en ? "Submit Answer" : "送出答案");
  setText(".practice-reward-note > span", en ? "Correct answers earn" : "答對題目可獲得");
  document.querySelector(".practice-reward-note strong").innerHTML = `<span class="crystal-icon" aria-hidden="true"></span> +1 ${tr("crystals")}`;
  setText("#chestTitle", en ? "Magic Chest" : "魔法寶箱");
  setText(".chest-rules .eyebrow", en ? "Rules" : "Rules");
  setText(".chest-rules h3", en ? "One Magic Chest" : "一個魔法寶箱");
  setText(
    ".chest-rules > p",
    en
      ? "Spend 50 blue crystals to open a random item from all current outfit sets. Duplicate items refund 25 blue crystals."
      : "消耗 50 個藍水晶，隨機開出目前所有套裝裝備；抽到已擁有物品會返還 25 藍水晶。",
  );
  setText(".crystal-rules strong", en ? "Blue Crystal Rules" : "藍水晶規則");

  const closetLabels = en
    ? ["All", "Background", "Hair / Face", "Top", "Bottom", "Shoes", "Bag", "Accessory", "Aura", "Pet"]
    : ["全部", "背景", "髮型/表情", "衣服", "下身", "鞋子", "包包", "配件", "光效", "寵物"];
  document.querySelectorAll(".closet-tab").forEach((button, index) => {
    button.textContent = closetLabels[index] ?? button.textContent;
  });

  setText(".settings-page-panel .eyebrow", tr("settingsEyebrow"));
  setText("#settingsTitle", tr("settingsTitle"));
  setText(".settings-page-panel > div > p:not(.eyebrow)", tr("settingsIntro"));
  setText(".settings-list label:nth-child(1) strong", tr("soundTitle"));
  setText(".settings-list label:nth-child(1) small", tr("soundText"));
  setText(".settings-list label:nth-child(2) strong", tr("languageTitle"));
  setText(".settings-list label:nth-child(2) small", tr("languageText"));
  setText(".settings-version > span strong", tr("versionTitle"));
  setText(".settings-version > span small", tr("versionText"));

  const infoPages = tr("infoPages");
  document.querySelector("#privacyPage .info-page-panel").innerHTML = infoPages.privacy;
  document.querySelector("#aboutPage .info-page-panel").innerHTML = infoPages.about;
  document.querySelector("#parentGuidePage .info-page-panel").innerHTML = infoPages.parentGuide;
  document.querySelector("#contactPage .info-page-panel").innerHTML = infoPages.contact;

  setText('.site-footer [data-go-page="privacy"]', tr("footerPrivacy"));
  setText('.site-footer [data-go-page="about"]', tr("footerAbout"));
  setText('.site-footer [data-go-page="parent-guide"]', tr("footerParentGuide"));
  setText('.site-footer [data-go-page="contact"]', tr("footerContact"));
  document.querySelector(".site-footer").setAttribute("aria-label", tr("footerAria"));
  hydrateCrystalIcons();
}

function renderVersionInfo() {
  appVersionText.textContent = `v${APP_VERSION}`;
  saveVersionText.textContent = `v${SAVE_VERSION}`;
}

function hydrateCrystalIcons() {
  document.querySelectorAll(".crystal-icon").forEach((icon) => {
    if (icon.querySelector("video")) {
      return;
    }
    icon.innerHTML = `
      <video
        src="${CRYSTAL_IDLE_VIDEO}"
        autoplay
        muted
        loop
        playsinline
        aria-hidden="true"
      ></video>
    `;
  });
}

function stopAllSounds() {
  [correctSound, incorrectSound, wearSound, flippingSound, ...Object.values(homeCardSounds), ...dollTapSounds].forEach(
    (sound) => {
      sound.pause();
      sound.currentTime = 0;
    },
  );
}

function showCrystalPop() {
  crystalPop.classList.remove("hidden", "is-showing");
  void crystalPop.offsetWidth;
  crystalPop.classList.add("is-showing");
  window.setTimeout(() => {
    crystalPop.classList.add("hidden");
    crystalPop.classList.remove("is-showing");
  }, 1900);
}

function cheerHomeDoll() {
  const sound = dollTapSounds[state.dollTapSoundIndex % dollTapSounds.length];
  state.dollTapSoundIndex = (state.dollTapSoundIndex + 1) % dollTapSounds.length;
  playSound(sound, 0.38);
  const messages = [
    "今天也一起練習吧！",
    "去拿藍水晶吧！",
    "這套看起來很適合今天！",
    "再開一個魔法寶箱吧！",
  ];
  homeDollSpeech.textContent = pick(messages);
  homeDollSpeech.classList.remove("hidden");
  homeDollStage.classList.remove("is-cheering");
  void homeDollStage.offsetWidth;
  homeDollStage.classList.add("is-cheering");
  window.clearTimeout(state.homeDollSpeechTimer);
  state.homeDollSpeechTimer = window.setTimeout(() => {
    homeDollSpeech.classList.add("hidden");
    homeDollStage.classList.remove("is-cheering");
  }, 2300);
}

function renderQuestion(question) {
  if (question.operation === "multiply" && question.layout === "horizontal") {
    renderHorizontalQuestion(question);
    return;
  }

  if (question.operation === "divide") {
    if (question.layout === "longDivision") {
      renderLongDivisionQuestion(question);
    } else {
      renderHorizontalQuestion(question);
    }
    return;
  }

  const operatorByOperation = {
    add: "+",
    subtract: "-",
    multiply: "×",
  };
  const operator = operatorByOperation[question.operation];
  const topDigits = String(question.a);
  const bottomDigits = String(question.b);
  const answerDigits = String(question.answer);
  const columns = Math.max(topDigits.length, bottomDigits.length, answerDigits.length);

  questionText.className = "question-text vertical";
  questionText.innerHTML = `
    <div class="worksheet columns-${columns}" style="--columns: ${columns}" aria-label="${question.text}">
      <div class="worksheet-row carry-row" aria-label="進位或借位手寫格">
        <div class="worksheet-spacer"></div>
        ${makeCanvasCells(columns, "carry-canvas", "進位")}
      </div>
      <div class="worksheet-row top-row">
        <div class="worksheet-spacer"></div>
        ${makeDigitCells(padDigits(topDigits, columns))}
      </div>
      <div class="worksheet-row bottom-row">
        <div class="worksheet-cell operator">${operator}</div>
        ${makeDigitCells(padDigits(bottomDigits, columns))}
      </div>
      <div class="worksheet-line"></div>
      <div class="worksheet-row answer-row">
        <div class="worksheet-spacer"></div>
        ${makeCanvasCells(columns, "answer-canvas", "答案")}
      </div>
      <div class="worksheet-row preview-row">
        <div class="worksheet-spacer"></div>
        ${makePreviewCells(columns)}
      </div>
    </div>
  `;
  buildWritingBoxes();
}

function renderHorizontalQuestion(question) {
  const answerDigits = String(question.answer);
  const columns = answerDigits.length;
  const operator = question.operation === "divide" ? "÷" : "×";

  questionText.className = "question-text horizontal";
  questionText.innerHTML = `
    <div class="horizontal-question" aria-label="${question.text}">
      <div class="horizontal-equation">${question.a} ${operator} ${question.b} = ?</div>
      <div class="horizontal-answer columns-${columns}" style="--columns: ${columns}">
        ${makeCanvasCells(columns, "answer-canvas", "答案")}
      </div>
      <div class="horizontal-answer columns-${columns}" style="--columns: ${columns}">
        ${makePreviewCells(columns)}
      </div>
    </div>
  `;
  buildWritingBoxes();
}

function renderLongDivisionQuestion(question) {
  const answerDigits = String(question.answer);
  const dividendDigits = String(question.a).split("");
  const columns = Math.max(dividendDigits.length, answerDigits.length);
  const answerOffset = Math.max(0, columns - answerDigits.length);

  questionText.className = "question-text long-division";
  questionText.innerHTML = `
    <div class="long-division-question" aria-label="${question.text}">
      <div class="long-division-grid" style="--columns: ${columns}">
        <div class="long-division-spacer"></div>
        <div class="long-division-answer">
          ${makeBlankCells(answerOffset)}
          ${makeCanvasCells(answerDigits.length, "answer-canvas", "商")}
        </div>
        <div class="long-division-spacer"></div>
        <div class="long-division-preview">
          ${makeBlankCells(answerOffset)}
          ${makePreviewCells(answerDigits.length)}
        </div>
        <div class="long-divisor">${question.b}</div>
        <div class="long-dividend">
          ${makeLongDivisionDigitCells(padDigits(String(question.a), columns))}
        </div>
        <div class="long-division-spacer"></div>
        <div class="long-division-scratch" aria-label="運算草稿">
          ${makeCanvasCells(columns * 2, "scratch-canvas", "草稿")}
        </div>
      </div>
    </div>
  `;
  buildWritingBoxes();
}

function makeDigitCells(digits) {
  return digits.map((digit) => `<div class="worksheet-cell digit">${digit === " " ? "" : digit}</div>`).join("");
}

function makeLongDivisionDigitCells(digits) {
  return digits.map((digit) => `<div class="long-digit-cell">${digit === " " ? "" : digit}</div>`).join("");
}

function makeBlankCells(count) {
  return Array.from({ length: count }, () => `<div class="worksheet-cell blank-cell" aria-hidden="true"></div>`).join("");
}

function makeCanvasCells(count, className, label) {
  return Array.from(
    { length: count },
    (_, index) => `<canvas class="${className}" aria-label="${label}第 ${index + 1} 格"></canvas>`,
  ).join("");
}

function makePreviewCells(count) {
  return Array.from(
    { length: count },
    (_, index) => `<button class="worksheet-cell preview-cell empty" type="button" data-preview-index="${index}">-</button>`,
  ).join("");
}

function buildWritingBoxes() {
  closeDigitChoosers();
  state.answerBoxes = [];
  state.scratchBoxes = [];
  state.previewCells = Array.from(document.querySelectorAll(".preview-cell"));

  document.querySelectorAll(".answer-canvas, .carry-canvas, .scratch-canvas").forEach((canvas) => {
    const box = { canvas, context: canvas.getContext("2d"), manualDigit: null, isDrawing: false, points: [] };
    prepareCanvas(box);
    canvas.addEventListener("pointerdown", (event) => startDrawing(event, box));
    canvas.addEventListener("pointermove", (event) => draw(event, box));
    canvas.addEventListener("pointerup", () => stopDrawing(box));
    canvas.addEventListener("pointerleave", () => stopDrawing(box));

    if (canvas.classList.contains("answer-canvas")) {
      state.answerBoxes.push(box);
    } else {
      state.scratchBoxes.push(box);
    }
  });

  state.previewCells.forEach((cell) => {
    cell.addEventListener("click", openDigitChooser);
  });
}

function prepareCanvas(box) {
  const pixelRatio = window.devicePixelRatio || 1;
  const rect = box.canvas.getBoundingClientRect();
  box.canvas.width = Math.max(1, Math.round(rect.width * pixelRatio));
  box.canvas.height = Math.max(1, Math.round(rect.height * pixelRatio));
  box.context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  box.context.lineCap = "round";
  box.context.lineJoin = "round";
  box.context.lineWidth = 7;
  box.context.strokeStyle = "#172033";
}

function startDrawing(event, box) {
  event.preventDefault();
  box.isDrawing = true;
  box.manualDigit = null;
  box.points = [getCanvasPoint(event, box.canvas)];
  box.context.beginPath();
  box.context.moveTo(box.points[0].x, box.points[0].y);
}

function draw(event, box) {
  if (!box.isDrawing) {
    return;
  }
  event.preventDefault();
  const point = getCanvasPoint(event, box.canvas);
  box.points.push(point);
  box.context.lineTo(point.x, point.y);
  box.context.stroke();
  updateAnswerPreview();
}

function stopDrawing(box) {
  if (!box.isDrawing) {
    return;
  }
  box.isDrawing = false;
  updateAnswerPreview();
}

function getCanvasPoint(event, canvas) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function clearWriting() {
  [...state.answerBoxes, ...state.scratchBoxes].forEach((box) => {
    box.context.clearRect(0, 0, box.canvas.width, box.canvas.height);
    box.manualDigit = null;
    box.points = [];
  });
  updateAnswerPreview();
}

function updateAnswerPreview() {
  state.answerBoxes.forEach((box, index) => {
    const previewCell = state.previewCells[index];
    if (!previewCell) {
      return;
    }
    const digit = box.manualDigit ?? recognizeDigitFromStroke(box);
    previewCell.textContent = digit ?? "-";
    previewCell.classList.toggle("empty", digit === null);
  });
}

function recognizeAnswer() {
  return state.answerBoxes
    .map((box) => box.manualDigit ?? recognizeDigitFromStroke(box))
    .filter((digit) => digit !== null)
    .join("");
}

function recognizeDigitFromStroke(box) {
  if (!box.points.length) {
    return null;
  }

  const bounds = getPointBounds(box.points);
  const width = bounds.maxX - bounds.minX;
  const height = bounds.maxY - bounds.minY;
  const start = box.points[0];
  const end = box.points[box.points.length - 1];
  const crossings = countDirectionChanges(box.points);

  if (width < 10 && height > 22) {
    return "1";
  }
  if (height < 16 && width > 18) {
    return "7";
  }
  if (width < 18 && height < 18) {
    return "0";
  }
  if (crossings >= 5) {
    return "8";
  }
  if (start.y < bounds.minY + height * 0.35 && end.y > bounds.minY + height * 0.65 && end.x < start.x) {
    return "2";
  }
  if (start.y < bounds.minY + height * 0.4 && end.y > bounds.minY + height * 0.6 && end.x > start.x) {
    return "3";
  }
  if (start.y > bounds.minY + height * 0.55 && end.y < bounds.minY + height * 0.45) {
    return "6";
  }

  return null;
}

function getPointBounds(points) {
  return points.reduce(
    (bounds, point) => ({
      minX: Math.min(bounds.minX, point.x),
      minY: Math.min(bounds.minY, point.y),
      maxX: Math.max(bounds.maxX, point.x),
      maxY: Math.max(bounds.maxY, point.y),
    }),
    { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity },
  );
}

function countDirectionChanges(points) {
  let changes = 0;
  let lastDirection = null;
  for (let index = 1; index < points.length; index += 1) {
    const direction = points[index].x > points[index - 1].x ? "right" : "left";
    if (lastDirection && lastDirection !== direction) {
      changes += 1;
    }
    lastDirection = direction;
  }
  return changes;
}

function openDigitChooser(event) {
  closeDigitChoosers();
  const previewCell = event.currentTarget;
  const index = Number(previewCell.dataset.previewIndex);
  const box = state.answerBoxes[index];
  const rect = previewCell.getBoundingClientRect();
  const chooser = document.createElement("div");
  chooser.className = "digit-chooser";
  chooser.style.left = `${Math.min(rect.left, window.innerWidth - 250)}px`;
  chooser.style.top = `${rect.bottom + 6}px`;
  chooser.innerHTML = [..."0123456789"]
    .map((digit) => `<button class="digit-option" type="button" data-digit="${digit}">${digit}</button>`)
    .join("");

  chooser.querySelectorAll("[data-digit]").forEach((button) => {
    button.addEventListener("click", () => {
      box.manualDigit = button.dataset.digit;
      previewCell.textContent = box.manualDigit;
      previewCell.classList.remove("empty");
      closeDigitChoosers();
    });
  });

  document.body.append(chooser);
}

function closeDigitChoosers() {
  document.querySelectorAll(".digit-chooser").forEach((chooser) => chooser.remove());
}

function makeQuestion(operation, digits, multiplyMode, divideMode) {
  const pickedOperation = operation === "mixed" ? pickOperation() : operation;
  const range = getRange(digits);

  if (pickedOperation === "add") {
    const { a, b } = makeAdditionNumbers(range, state.addDifficulty);
    return { text: `${a} + ${b} = ?`, answer: a + b, operation: "add", a, b };
  }

  if (pickedOperation === "multiply") {
    return makeMultiplyQuestion(multiplyMode);
  }

  if (pickedOperation === "divide") {
    return makeDivideQuestion(divideMode);
  }

  const { a, b } = makeSubtractionNumbers(range, state.subtractDifficulty);
  return { text: `${a} - ${b} = ?`, answer: a - b, operation: "subtract", a, b };
}

function pickOperation() {
  return pick(["add", "subtract", "multiply", "divide"]);
}

function makeMultiplyQuestion(multiplyMode) {
  if (multiplyMode === "hundreds") {
    const a = randomInt(100, 999);
    const b = randomInt(2, 9);
    return { text: `${a} × ${b} = ?`, answer: a * b, operation: "multiply", a, b };
  }

  if (multiplyMode === "tens") {
    const a = randomInt(10, 99);
    const b = randomInt(2, 9);
    return { text: `${a} × ${b} = ?`, answer: a * b, operation: "multiply", a, b };
  }

  const tableNumber = Number(multiplyMode.replace("table-", ""));
  const b = randomInt(1, 9);
  return {
    text: `${tableNumber} × ${b} = ?`,
    answer: tableNumber * b,
    operation: "multiply",
    layout: "horizontal",
    a: tableNumber,
    b,
  };
}

function makeDivideQuestion(divideMode) {
  if (divideMode === "tens") {
    const divisor = randomInt(2, 9);
    const answer = randomInt(10, 99);
    return {
      text: `${divisor * answer} ÷ ${divisor} = ?`,
      answer,
      operation: "divide",
      layout: "longDivision",
      a: divisor * answer,
      b: divisor,
    };
  }

  const divisor = Number(divideMode.replace("divide-", ""));
  const answer = randomInt(1, 9);
  return {
    text: `${divisor * answer} ÷ ${divisor} = ?`,
    answer,
    operation: "divide",
    layout: "horizontal",
    a: divisor * answer,
    b: divisor,
  };
}

function makeAdditionNumbers(range, difficulty) {
  return makeNumbersByRule(
    range,
    (a, b) => {
      if (difficulty === "noCarry") {
        return !hasCarry(a, b);
      }
      if (difficulty === "carry") {
        return hasCarry(a, b);
      }
      return true;
    },
    () => ({ a: randomInt(range.min, range.max), b: randomInt(range.min, range.max) }),
  );
}

function makeSubtractionNumbers(range, difficulty) {
  return makeNumbersByRule(
    range,
    (a, b) => {
      if (difficulty === "noBorrow") {
        return !hasBorrow(a, b);
      }
      if (difficulty === "borrow") {
        return hasBorrow(a, b);
      }
      return true;
    },
    () => {
      const first = randomInt(range.min, range.max);
      const second = randomInt(range.min, range.max);
      return { a: Math.max(first, second), b: Math.min(first, second) };
    },
  );
}

function makeNumbersByRule(range, isMatch, makeCandidate) {
  for (let attempt = 0; attempt < 300; attempt += 1) {
    const candidate = makeCandidate();
    if (isMatch(candidate.a, candidate.b)) {
      return candidate;
    }
  }
  return makeCandidate();
}

function hasCarry(a, b) {
  const columns = Math.max(String(a).length, String(b).length);
  const aDigits = padDigits(String(a), columns);
  const bDigits = padDigits(String(b), columns);
  return aDigits.some((digit, index) => Number(digit || 0) + Number(bDigits[index] || 0) >= 10);
}

function hasBorrow(a, b) {
  const columns = Math.max(String(a).length, String(b).length);
  const aDigits = padDigits(String(a), columns);
  const bDigits = padDigits(String(b), columns);
  return aDigits.some((digit, index) => Number(digit || 0) < Number(bDigits[index] || 0));
}

function getRange(digits) {
  if (digits === 1) {
    return { min: 0, max: 10 };
  }

  return {
    min: 10 ** (digits - 1),
    max: 10 ** digits - 1,
  };
}

function padDigits(value, columns) {
  return String(value).padStart(columns, " ").split("");
}

function startChestOpening({ requiresCrystals, preferUnowned = false }) {
  if (state.isOpeningChest) {
    return;
  }

  if (requiresCrystals && state.blueCrystals < CHEST_COST) {
    renderStats();
    return;
  }

  if (requiresCrystals) {
    state.blueCrystals -= CHEST_COST;
  }

  state.isOpeningChest = true;
  renderStats();
  playOpenChestVideo(() => {
    grantChestReward(preferUnowned, { refundDuplicate: requiresCrystals });
    resetChestVideoToIdle();
    state.isOpeningChest = false;
    renderStats();
  });
}

function playOpenChestVideo(onComplete) {
  if (!rewardModal || !rewardPreview) {
    onComplete();
    return;
  }

  resetRewardModalMode();
  state.rewardAction = "close";
  rewardTitle.textContent = state.language === "en" ? "Opening Chest" : "寶箱開啟中";
  rewardMessage.textContent = state.language === "en" ? "The magic chest is opening..." : "魔法寶箱正在打開...";
  closeRewardButton.classList.add("hidden");
  rewardPreview.innerHTML = `
    <video id="modalChestOpenVideo" src="assets/Chest/OpenChest.mp4" autoplay playsinline></video>
  `;
  rewardModal.classList.remove("hidden");
  chestIdleVideo?.pause();
  const modalChestOpenVideo = document.querySelector("#modalChestOpenVideo");

  const finish = () => {
    modalChestOpenVideo?.removeEventListener("ended", finish);
    onComplete();
  };

  modalChestOpenVideo?.addEventListener("ended", finish, { once: true });
  const playResult = modalChestOpenVideo?.play();
  if (playResult?.catch) {
    playResult.catch(() => finish());
  }
}

function resetChestVideoToIdle() {
  if (!chestIdleVideo || !chestOpenVideo) {
    return;
  }

  chestOpenVideo.pause?.();
  chestOpenVideo.classList.add("hidden");
  chestIdleVideo.classList.remove("hidden");
  const idlePlayResult = chestIdleVideo.play?.();
  if (idlePlayResult?.catch) {
    idlePlayResult.catch(() => {});
  }
}

function grantChestReward(preferUnowned = false, { refundDuplicate = false } = {}) {
  const item = pickChestItem(preferUnowned);
  const isNew = !state.ownedItems.has(item.id);
  const refundAmount = !isNew && refundDuplicate ? DUPLICATE_REFUND : 0;
  if (refundAmount) {
    state.blueCrystals += refundAmount;
  }
  state.ownedItems.add(item.id);
  state.equipped[item.slot] = item.id;

  const set = getSetById(item.setId);
  const rarity = getItemRarity(item);
  resetRewardModalMode();
  state.rewardAction = "goDress";
  rewardTitle.textContent = state.language === "en" ? `New Item - ${getSlotLabel(item.slot)}` : `獲得物品 - ${getSlotLabel(item.slot)}`;
  rewardPreview.innerHTML = `
    <div class="reward-item-card rarity-${rarity.toLowerCase()}">
      <span class="reward-set-icon">${renderSetIcon(set)}</span>
      <span class="reward-slot-icon" aria-hidden="true">${slotIcons[item.slot] ?? "物"}</span>
      <span class="reward-rarity">${getRarityLabel(rarity)}</span>
    </div>
  `;
  const duplicateNote =
    state.language === "en"
      ? refundAmount
        ? `already owned, refunded ${refundAmount} ${tr("crystals")}`
        : "already owned"
      : refundAmount
        ? `已擁有，返還 ${refundAmount} 藍水晶`
        : "已擁有";
  rewardMessage.textContent = isNew ? `${makeRewardItemName(item)}` : `${makeRewardItemName(item)}（${duplicateNote}）`;
  closeRewardButton.textContent = state.language === "en" ? "Equip" : "穿上";
  closeRewardButton.classList.remove("hidden");
  rewardModal.classList.remove("hidden");

  renderInventory();
  renderDoll();
  renderStats();
}

function pickChestItem(preferUnowned) {
  const compatibleItems = itemCatalog.filter((item) => isItemCompatibleWithCurrentBase(item));
  if (preferUnowned) {
    const unownedItems = compatibleItems.filter((item) => !state.ownedItems.has(item.id));
    if (unownedItems.length) {
      return pickWeightedItem(unownedItems);
    }
  }

  return pickWeightedItem(compatibleItems);
}

function pickWeightedItem(items) {
  const totalWeight = items.reduce((sum, item) => sum + getItemWeight(item), 0);
  let ticket = Math.random() * totalWeight;
  for (const item of items) {
    ticket -= getItemWeight(item);
    if (ticket <= 0) {
      return item;
    }
  }
  return items[items.length - 1];
}

function getItemWeight(item) {
  return RARITY_WEIGHTS[getItemRarity(item)] ?? RARITY_WEIGHTS.Common;
}

function getItemRarity(item) {
  const rawRarity = ITEM_RARITIES[item.id] ?? item.rarity ?? "Common";
  return `${rawRarity.charAt(0).toUpperCase()}${rawRarity.slice(1).toLowerCase()}`;
}

function getRarityLabel(rarity) {
  const labels =
    state.language === "en"
      ? {
          Common: "Common",
          Rare: "Rare",
          Epic: "Epic",
          Legendary: "Legendary",
        }
      : {
          Common: "普通",
          Rare: "稀有",
          Epic: "史詩",
          Legendary: "傳說",
        };
  return labels[rarity] ?? labels.Common;
}

function makeRewardItemName(item) {
  const set = getSetById(item.setId);
  return `${set?.name ?? (state.language === "en" ? "Other Items" : "其他物品")} - ${getSlotLabel(item.slot)}`;
}

function closeReward() {
  const shouldPlayWearSound = state.rewardAction === "goDress";
  rewardModal.classList.add("hidden");
  resetRewardModalMode();
  closeRewardButton.classList.remove("hidden");
  closeRewardButton.textContent = state.language === "en" ? "OK" : "收下";
  resetChestVideoToIdle();
  if (shouldPlayWearSound) {
    playSound(wearSound, 0.42);
    state.rewardAction = "close";
    showPage("dress");
  }
}

function resetRewardModalMode() {
  rewardModal.classList.remove("set-animation-modal");
  rewardPreview.classList.remove("set-animation-preview");
}

function unlockAllItems() {
  itemCatalog.forEach((item) => {
    state.ownedItems.add(item.id);
    if (isItemCompatibleWithCurrentBase(item)) {
      state.equipped[item.slot] = item.id;
    }
  });
  renderInventory();
  renderDoll();
  renderStats();
}

function addGmCrystals() {
  state.blueCrystals += 500;
  renderStats();
}

function resetInventory() {
  state.ownedItems.clear();
  state.blueCrystals = 0;
  resetOutfit();
  renderStats();
  renderInventory();
}

function resetOutfit() {
  Object.keys(state.equipped).forEach((slot) => {
    state.equipped[slot] = null;
  });
  renderInventory();
  renderDoll();
}

function equipItem(itemId) {
  const item = itemCatalog.find((catalogItem) => catalogItem.id === itemId);
  if (!item || !isItemCompatibleWithCurrentBase(item)) {
    return;
  }

  if (state.equipped[item.slot] === item.id) {
    state.equipped[item.slot] = null;
  } else {
    state.equipped[item.slot] = item.id;
  }

  renderInventory();
  renderDoll();
}

function unequipSlot(slot) {
  state.equipped[slot] = null;
  renderInventory();
  renderDoll();
}

function renderStats() {
  roundText.textContent =
    state.language === "en"
      ? `${tr("roundText")} ${state.questionIndex} / ${ROUND_SIZE}`
      : `${tr("roundText")} ${state.questionIndex} / ${ROUND_SIZE} ${tr("questionUnit")}`;
  scoreText.textContent = state.score;
  streakText.textContent = state.streak;
  chestProgressText.textContent = state.blueCrystals;
  openChestButton.disabled = state.blueCrystals < CHEST_COST || state.isOpeningChest;
  openChestButton.textContent = state.isOpeningChest ? tr("openingChest") : tr("openChest");
  rewardText.textContent =
    state.blueCrystals >= CHEST_COST
      ? state.language === "en"
        ? `${tr("openChestReady")} (cost ${CHEST_COST})`
        : `${tr("openChestReady")}（消耗 ${CHEST_COST}）`
      : `${tr("chestNeed")} ${CHEST_COST - state.blueCrystals} ${tr("crystals")}`;
  saveGame();
}

function renderInventory() {
  const owned = itemCatalog.filter((item) => state.ownedItems.has(item.id) && isItemCompatibleWithCurrentBase(item));
  const visibleItems = state.currentFilter === "all" ? owned : owned.filter((item) => item.slot === state.currentFilter);
  const compatibleTotal = itemCatalog.filter((item) => isItemCompatibleWithCurrentBase(item)).length;
  inventoryHint.textContent = `${owned.length} / ${compatibleTotal} ${tr("inventoryHint")}`;

  if (!owned.length) {
    inventoryGrid.innerHTML = makeEmptyInventoryCard(
      tr("emptyInventoryTitle"),
      tr("emptyInventoryText"),
    );
    renderSlots();
    return;
  }

  if (!visibleItems.length) {
    inventoryGrid.innerHTML = makeEmptyInventoryCard(
      tr("emptyFilterTitle"),
      tr("emptyFilterText"),
    );
    renderSlots();
    return;
  }

  inventoryGrid.innerHTML = renderSetGroups(visibleItems);

  inventoryGrid.querySelectorAll("[data-item-id]").forEach((button) => {
    button.addEventListener("click", () => equipItem(button.dataset.itemId));
  });
  inventoryGrid.querySelectorAll("[data-toggle-set-id]").forEach((button) => {
    button.addEventListener("click", () => toggleSetGroup(button.dataset.toggleSetId));
  });
  inventoryGrid.querySelectorAll("[data-play-set-id]").forEach((button) => {
    button.addEventListener("click", () => playCompletedSetAnimation(button.dataset.playSetId));
  });
  renderSlots();
}

function makeEmptyInventoryCard(title, message) {
  return `
    <div class="empty-inventory-card" role="status">
      <span class="empty-inventory-icon" aria-hidden="true">箱</span>
      <span>
        <strong>${title}</strong>
        <span>${message}</span>
      </span>
    </div>
  `;
}

function toggleSetGroup(setId) {
  if (state.expandedSetIds.has(setId)) {
    state.expandedSetIds.delete(setId);
  } else {
    state.expandedSetIds.add(setId);
  }
  renderInventory();
}

function renderSetGroups(items) {
  const setGroups = setCatalog
    .map((set) => ({
      set,
      items: items
        .filter((item) => item.setId === set.id)
        .sort((a, b) => slotOrder.indexOf(a.slot) - slotOrder.indexOf(b.slot)),
    }))
    .filter((group) => group.items.length);

  const looseItems = items.filter((item) => !item.setId);
  const groupsMarkup = setGroups.map(({ set, items: setItems }) => renderSetGroup(set, setItems)).join("");
  const looseMarkup = looseItems.length
    ? renderSetGroup({ name: state.language === "en" ? "Other Items" : "其他物品", requiredItemIds: [] }, looseItems)
    : "";
  return groupsMarkup + looseMarkup;
}

function renderSetGroup(set, items) {
  const requiredCount = set.requiredItemIds?.length ?? items.length;
  const ownedCount = set.requiredItemIds
    ? set.requiredItemIds.filter((itemId) => state.ownedItems.has(itemId)).length
    : items.length;
  const completed = requiredCount > 0 && ownedCount >= requiredCount;
  const canToggle = Boolean(set.id);
  const isExpanded = !canToggle || state.expandedSetIds.has(set.id);
  const animationButton = canToggle
    ? `<button class="set-animation-action ${completed ? "" : "is-locked"}" type="button" ${
        completed ? `data-play-set-id="${set.id}"` : "disabled"
      }>${completed ? (state.language === "en" ? "Play" : "播放") : state.language === "en" ? "Locked" : "未完成"}</button>`
    : "";
  return `
    <section class="set-group ${completed ? "is-complete" : ""} ${isExpanded ? "is-expanded" : "is-collapsed"}">
      <div class="set-group-heading">
        <button class="set-title-button" type="button" ${canToggle ? `data-toggle-set-id="${set.id}" aria-expanded="${isExpanded}"` : "disabled"}>
          <span class="set-icon" aria-hidden="true">${renderSetIcon(set)}</span>
          <div>
            <strong>${set.name}</strong>
            <span>${ownedCount} / ${requiredCount || items.length}${completed ? (state.language === "en" ? " · Animation ready" : "・動畫可播放") : ""}</span>
          </div>
        </button>
        <div class="set-group-actions">
          ${animationButton}
          <button class="set-toggle-mark" type="button" ${canToggle ? `data-toggle-set-id="${set.id}" aria-expanded="${isExpanded}"` : "disabled"}>${isExpanded ? (state.language === "en" ? "Collapse" : "收合") : state.language === "en" ? "Expand" : "展開"}</button>
        </div>
      </div>
      ${
        isExpanded
          ? `<div class="set-item-grid">
              ${items.map(renderInventoryItem).join("")}
            </div>`
          : ""
      }
    </section>
  `;
}

function renderInventoryItem(item) {
  const equipped = state.equipped[item.slot] === item.id;
  const rarity = getItemRarity(item);
  return `
    <button class="item-button rarity-${rarity.toLowerCase()} ${equipped ? "is-equipped" : ""}" type="button" data-item-id="${item.id}">
      <span class="item-icon" aria-hidden="true">${slotIcons[item.slot] ?? "物"}</span>
      <strong>${getSlotLabel(item.slot) ?? item.name}</strong>
      <span>${equipped ? "穿戴中" : getRarityLabel(rarity)}</span>
    </button>
  `;
}

function renderSetIcon(set) {
  if (set?.iconPath) {
    return `<img src="${set.iconPath}" alt="" aria-hidden="true" />`;
  }
  return `<span aria-hidden="true">${set?.icon ?? "★"}</span>`;
}

function renderSlots() {
  renderSlotButton(backgroundSlotButton, "background");
  renderSlotButton(headSlotButton, "head");
  renderSlotButton(topSlotButton, "top");
  renderSlotButton(bottomSlotButton, "bottom");
  renderSlotButton(shoeSlotButton, "shoe");
  renderSlotButton(bagSlotButton, "bag");
  renderSlotButton(accessorySlotButton, "accessory");
  renderSlotButton(auraSlotButton, "aura");
  renderSlotButton(petSlotButton, "pet");
}

function renderSlotButton(button, slot) {
  const item = getEquippedItem(slot);
  const set = item ? getSetById(item.setId) : null;
  button.classList.toggle("is-equipped", Boolean(item));
  button.setAttribute(
    "aria-label",
    state.language === "en"
      ? `${getSlotLabel(slot)}: ${item ? "equipped, tap to remove" : "empty"}`
      : `${getSlotLabel(slot)}：${item ? "已穿，點一下脫掉" : "未穿"}`,
  );
  button.innerHTML = `
    <span class="slot-thumb">
      ${item ? renderSetIcon(set) : `<span aria-hidden="true">${state.language === "en" ? "Empty" : "空"}</span>`}
    </span>
    <span class="slot-name">${getSlotLabel(slot)}</span>
    <span class="slot-state">${item ? (state.language === "en" ? "Equipped" : "已穿") : state.language === "en" ? "Empty" : "空"}</span>
  `;
}

function renderDoll() {
  const character = characterCatalog[state.characterId];
  const background = getEquippedItem("background");
  baseLayer.src = character.basePath;
  renderLayer(backgroundLayer, background);
  applyStagePosition(background);
  renderLayer(headLayer, getEquippedItem("head"));
  renderLayer(bottomLayer, getEquippedItem("bottom"));
  renderLayer(topLayer, getEquippedItem("top"));
  renderLayer(shoeLayer, getEquippedItem("shoe"));
  renderLayer(bagLayer, getEquippedItem("bag"));
  renderLayer(accessoryLayer, getEquippedItem("accessory"));
  renderLayer(auraLayer, getEquippedItem("aura"));
  renderLayer(petLayer, getEquippedItem("pet"));
  renderSlots();
  renderSetAnimationState();
  renderHomeDoll();
  saveGame();
}

function renderHomeDoll() {
  if (!homeDollStage) {
    return;
  }

  const character = characterCatalog[state.characterId];
  const background = getEquippedItem("background");
  homeBaseLayer.src = character.basePath;
  renderLayer(homeBackgroundLayer, background);
  applyStagePositionTo(homeDollStage, background, { sceneDollWidth: 250, displayDollWidth: 300 });
  renderLayer(homeHeadLayer, getEquippedItem("head"));
  renderLayer(homeBottomLayer, getEquippedItem("bottom"));
  renderLayer(homeTopLayer, getEquippedItem("top"));
  renderLayer(homeShoeLayer, getEquippedItem("shoe"));
  renderLayer(homeBagLayer, getEquippedItem("bag"));
  renderLayer(homeAccessoryLayer, getEquippedItem("accessory"));
  renderLayer(homeAuraLayer, getEquippedItem("aura"));
  renderLayer(homePetLayer, getEquippedItem("pet"));
}

function applyStagePosition(background) {
  applyStagePositionTo(dollStage, background);
}

function applyStagePositionTo(stageElement, background, overrides = {}) {
  const stage = background?.stage;
  stageElement.classList.toggle("has-background", Boolean(background));
  const dollWidth = background
    ? stage?.dollWidth ?? overrides.sceneDollWidth ?? DEFAULT_STAGE.sceneDollWidth
    : overrides.displayDollWidth ?? DEFAULT_STAGE.displayDollWidth;
  stageElement.style.setProperty("--doll-width", `${dollWidth}px`);
  stageElement.style.setProperty("--character-y", `${stage?.characterY ?? DEFAULT_STAGE.characterY}px`);
  stageElement.style.setProperty("--character-scale", stage?.characterScale ?? DEFAULT_STAGE.characterScale);
}

function renderLayer(layer, item) {
  if (!item) {
    layer.classList.add("hidden");
    layer.removeAttribute("src");
    return;
  }

  layer.src = item.path;
  layer.classList.remove("hidden");
}

function getEquippedItem(slot) {
  const itemId = state.equipped[slot];
  return itemCatalog.find((item) => item.id === itemId) || null;
}

function getSetById(setId) {
  return setCatalog.find((set) => set.id === setId) || null;
}

function getActiveSkeletonId() {
  return characterCatalog[state.characterId].skeletonId;
}

function isItemCompatibleWithCurrentBase(item) {
  return item.skeletonId === getActiveSkeletonId();
}

function getCompletedSets() {
  return setCatalog.filter((set) => {
    if (set.skeletonId !== getActiveSkeletonId()) {
      return false;
    }
    return set.requiredItemIds.every((itemId) => state.ownedItems.has(itemId));
  });
}

function renderSetAnimationState() {
  playSetAnimationButton.classList.add("hidden");
  playSetAnimationButton.textContent = tr("setAnimation");
}

function playCompletedSetAnimation(setId) {
  const completedSet = setId ? getSetById(setId) : getCompletedSets()[0];
  if (!completedSet) {
    return;
  }
  const isCompleted = completedSet.requiredItemIds.every((itemId) => state.ownedItems.has(itemId));
  if (!isCompleted) {
    return;
  }

  resetRewardModalMode();
  rewardModal.classList.add("set-animation-modal");
  rewardPreview.classList.add("set-animation-preview");
  rewardTitle.textContent = state.language === "en" ? "Outfit Set Complete" : "套裝完成";
  rewardPreview.innerHTML = `
    <div class="set-animation-summary">
      <span class="set-animation-icon">${renderSetIcon(completedSet)}</span>
      <span>
        <strong>${completedSet.name}</strong>
        <small>已收集 8 / 8</small>
      </span>
    </div>
    <video src="${completedSet.animationPath}" autoplay playsinline controls></video>
  `;
  state.rewardAction = "close";
  rewardMessage.textContent =
    state.language === "en"
      ? "The outfit set is complete. You can play the set animation."
      : "已收集完成，可以播放套裝動畫。";
  closeRewardButton.textContent = state.language === "en" ? "Close" : "關閉";
  closeRewardButton.classList.remove("hidden");
  rewardModal.classList.remove("hidden");
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(items) {
  return items[randomInt(0, items.length - 1)];
}
