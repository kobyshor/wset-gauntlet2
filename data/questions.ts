
import { Question, Tier } from '../types';

/**
 * THE DEFINITIVE WSET LEVEL 3 QUESTION BANK
 * Authentic content with realistic distractors and systemic logic.
 */
export const QUESTIONS: Question[] = [
  {
    id: 'wset_7_harvest',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'General',
    questionText: 'Which one of the following statements is true regarding harvesting?',
    explanationText: 'Machine harvesting works by shaking the trunk of the vine, causing the berries to fall off. Consequently, the stems (rachis) remain on the vine, meaning the harvested fruit is effectively destemmed.',
    mentalMapText: 'Viticulture -> Harvest Methods',
    options: [
      { id: 'w7a', text: 'The timing of the harvest is unaffected by rainfall', isCorrect: false, feedback: 'Rainfall swells grapes (dilution) and increases rot risk, heavily affecting timing.' },
      { id: 'w7b', text: 'Only manual harvesting is suitable for premium quality wines', isCorrect: false, feedback: 'Many premium wines use machine harvesters for cool night harvesting.' },
      { id: 'w7c', text: 'Grapes harvested by machine do not need to be destemmed', isCorrect: true, feedback: 'Correct. The machine shakes the berries off the stems.' },
      { id: 'w7d', text: 'Mechanical harvesters are ideally suited to working on steep slopes', isCorrect: false, feedback: 'Machines cannot operate safely on steep slopes (e.g., Mosel, Douro).' }
    ]
  },
  {
    id: 'wset_50_san_antonio',
    tier: Tier.Tier1,
    category: 'Chile',
    region: 'San Antonio Valley',
    questionText: 'San Antonio Valley is a sub-region that...',
    explanationText: 'San Antonio Valley is a coastal region in Chile cooled by the Humboldt Current, making it ideal for cool-climate varieties like Sauvignon Blanc.',
    mentalMapText: 'Chile -> Aconcagua Region -> San Antonio',
    options: [
      { id: 'w50a', text: 'has a hot climate', isCorrect: false, feedback: 'It is a cool maritime climate due to ocean proximity.' },
      { id: 'w50b', text: 'is cooled by descending mountain air', isCorrect: false, feedback: 'It is cooled by the ocean (Humboldt Current), not the Andes.' },
      { id: 'w50c', text: 'is located in Argentina', isCorrect: false, feedback: 'It is in Chile.' },
      { id: 'w50d', text: 'has a reputation for Sauvignon Blanc', isCorrect: true, feedback: 'Correct. High acidity, aromatic whites.' }
    ]
  },
  {
    id: 'wset_24_germany_pairs',
    tier: Tier.Tier2,
    category: 'Germany',
    region: 'Pfalz',
    questionText: 'Which of the following are paired correctly?',
    explanationText: 'Forst is a premier village in the Pfalz region (known for the Kirchenstück vineyard). Bernkastel is Mosel; Johannisberg is Rheingau.',
    mentalMapText: 'Germany -> Villages',
    options: [
      { id: 'w24a', text: 'Rheingau and Bernkastel', isCorrect: false, feedback: 'Bernkastel is in the Mosel.' },
      { id: 'w24b', text: 'Rheinhessen and Deidesheim', isCorrect: false, feedback: 'Deidesheim is in the Pfalz.' },
      { id: 'w24c', text: 'Pfalz and Forst', isCorrect: true, feedback: 'Correct. Forst is a key village in the Pfalz.' },
      { id: 'w24d', text: 'Mosel and Johannisberg', isCorrect: false, feedback: 'Johannisberg is in the Rheingau.' }
    ]
  },
  {
    id: 'wset_148_general_true',
    tier: Tier.Tier2,
    category: 'Viticulture',
    region: 'General',
    questionText: 'Which one of the following statements is true?',
    explanationText: 'Vines enter dormancy below 10°C. Temperature decreases with altitude. Middle slopes are safer from frost than bottoms (cold air sinks).',
    mentalMapText: 'Viticulture -> Climate',
    options: [
      { id: 'w148a', text: 'Temperature increases with altitude', isCorrect: false, feedback: 'Temperature decreases by ~0.6°C per 100m.' },
      { id: 'w148b', text: 'Vineyards planted on the middle of the slope are more at risk to frosts than those at the bottom', isCorrect: false, feedback: 'Bottom slopes are coldest due to sinking air.' },
      { id: 'w148c', text: 'Vines do not grow at temperatures lower than 10°C', isCorrect: true, feedback: 'Correct. This is the zero growth threshold.' },
      { id: 'w148d', text: 'In the Northern Hemisphere, the growing season is from October to April', isCorrect: false, feedback: 'That is the Southern Hemisphere season.' }
    ]
  },
  {
    id: 'wset_145_beaujolais',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Beaujolais',
    questionText: 'Which of the following is a wine from Beaujolais?',
    explanationText: 'Brouilly is one of the 10 Crus of Beaujolais. Beaune and Mercurey are Burgundy; Cahors is South West France.',
    mentalMapText: 'France -> Beaujolais -> Crus',
    options: [
      { id: 'w145a', text: 'Beaune', isCorrect: false, feedback: 'Côte de Beaune (Burgundy).' },
      { id: 'w145b', text: 'Mercurey', isCorrect: false, feedback: 'Côte Chalonnaise (Burgundy).' },
      { id: 'w145c', text: 'Brouilly', isCorrect: true, feedback: 'Correct. The largest Beaujolais Cru.' },
      { id: 'w145d', text: 'Cahors', isCorrect: false, feedback: 'South West France (Malbec).' }
    ]
  },
  {
    id: 'wset_43_aus_sparkling',
    tier: Tier.Tier2,
    category: 'Australia',
    region: 'Sparkling',
    questionText: 'Which pair of Australian regions has a reputation for premium sparkling wines from Pinot Noir and Chardonnay?',
    explanationText: 'Yarra Valley and Tasmania are the coolest viticultural regions provided, essential for preserving high acid needed for premium sparkling wine.',
    mentalMapText: 'Australia -> Cooling Influences',
    options: [
      { id: 'w43a', text: 'Yarra Valley and Tasmania', isCorrect: true, feedback: 'Correct. Both are cool climate regions.' },
      { id: 'w43b', text: 'Barossa Valley and Coonawarra', isCorrect: false, feedback: 'Too warm; known for Shiraz/Cabernet.' },
      { id: 'w43c', text: 'Margaret River and Hunter Valley', isCorrect: false, feedback: 'Known for Cab/Chard and Semillon respectively.' },
      { id: 'w43d', text: 'Eden Valley and McLaren Vale', isCorrect: false, feedback: 'Known for Riesling and Shiraz.' }
    ]
  },
  {
    id: 'wset_18_burgundy',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Burgundy',
    questionText: 'Which of the following statements is true regarding Burgundy?',
    explanationText: 'Mâcon produces both red (Gamay/Pinot Noir) and white (Chardonnay) wines. Meursault is typically oaked. Grand Crus are usually mid-slope.',
    mentalMapText: 'France -> Burgundy -> Mâconnais',
    options: [
      { id: 'w18a', text: 'Wines from Mâcon can be either red or white', isCorrect: true, feedback: 'Correct. Mâcon Rouge and Mâcon Blanc exist.' },
      { id: 'w18b', text: 'The white wines of Meursault are typically unoaked', isCorrect: false, feedback: 'Meursault is famous for oak, butter, and hazelnut notes.' },
      { id: 'w18c', text: 'Grand cru vineyards are usually located at the bottom of slopes', isCorrect: false, feedback: 'Bottoms are too wet/frost-prone; Grand Crus are mid-slope.' },
      { id: 'w18d', text: 'Whole bunches are never used in red winemaking', isCorrect: false, feedback: 'Whole bunch fermentation is common in Burgundy.' }
    ]
  },
  {
    id: 'wset_165_winemaking_red',
    tier: Tier.Tier3,
    category: 'Winemaking',
    region: 'General',
    questionText: 'Which winemaking technique is used to produce a red wine with low levels of tannin and flavours of cinnamon and kirsch?',
    explanationText: 'Carbonic Maceration involves intracellular fermentation, producing unique aromas of kirsch, bubblegum, and cinnamon with low tannin extraction.',
    mentalMapText: 'Winemaking -> Red Fermentation',
    options: [
      { id: 'w165a', text: 'Rack and return', isCorrect: false, feedback: 'High extraction technique.' },
      { id: 'w165b', text: 'Carbonic maceration', isCorrect: true, feedback: 'Correct. Used in Beaujolais Nouveau.' },
      { id: 'w165c', text: 'The use of rotary fermenters', isCorrect: false, feedback: 'High extraction technique.' },
      { id: 'w165d', text: 'Autovinification', isCorrect: false, feedback: 'Fast extraction, widely used in Port.' }
    ]
  },
  {
    id: 'wset_109_valpolicella',
    tier: Tier.Tier2,
    category: 'Italy',
    region: 'Veneto',
    questionText: 'Which of the following statements is true about Valpolicella?',
    explanationText: 'Ripasso involves passing basic Valpolicella wine over the unpressed skins of Amarone/Recioto to add complexity, tannin, and alcohol.',
    mentalMapText: 'Italy -> Veneto -> Valpolicella',
    options: [
      { id: 'w109a', text: 'Recioto della Valpolicella is a dry wine', isCorrect: false, feedback: 'Recioto is sweet.' },
      { id: 'w109b', text: 'Garganega is the most important grape variety', isCorrect: false, feedback: 'Corvina is the key red grape; Garganega is Soave (white).' },
      { id: 'w109c', text: 'Amarone is fermented immediately after harvest', isCorrect: false, feedback: 'Grapes are dried (Appassimento) first.' },
      { id: 'w109d', text: 'Valpolicella Ripasso is made by adding wine to unpressed grape skins', isCorrect: true, feedback: 'Correct. The "Ripasso" method.' }
    ]
  },
  {
    id: 'wset_38_champagne_process',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Champagne',
    questionText: 'What is the name given to the process whereby the sediment is expelled from a bottle of Champagne?',
    explanationText: 'Disgorgement is the removal of the frozen plug of ice containing the yeast sediment after riddling.',
    mentalMapText: 'Sparkling -> Traditional Method',
    options: [
      { id: 'w38a', text: 'Drawing off', isCorrect: false, feedback: 'Refers to separating juice from skins.' },
      { id: 'w38b', text: 'Riddling', isCorrect: false, feedback: 'Moving sediment to the neck.' },
      { id: 'w38c', text: 'Racking', isCorrect: false, feedback: 'Moving wine between vessels.' },
      { id: 'w38d', text: 'Disgorgement', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_49_sancerre_style',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Loire',
    questionText: 'Which one of the following is closest in style to Sancerre?',
    explanationText: 'Menetou-Salon is a neighboring appellation to Sancerre, sharing the same Kimmeridgian soils and Sauvignon Blanc grape variety.',
    mentalMapText: 'France -> Loire -> Central Vineyards',
    options: [
      { id: 'w49a', text: 'Vouvray', isCorrect: false, feedback: 'Chenin Blanc based.' },
      { id: 'w49b', text: 'Bourgueil', isCorrect: false, feedback: 'Cabernet Franc (Red).' },
      { id: 'w49c', text: 'Muscadet', isCorrect: false, feedback: 'Melon Blanc (Neutral style).' },
      { id: 'w49d', text: 'Menetou-Salon', isCorrect: true, feedback: 'Correct. Sauvignon Blanc.' }
    ]
  },
  {
    id: 'wset_83_micro_stability',
    tier: Tier.Tier3,
    category: 'Winemaking',
    region: 'General',
    questionText: 'Which one of the following will guarantee microbiological stability in a wine?',
    explanationText: 'Sterile filtration removes yeast and bacteria physically, ensuring stability if packaged aseptically.',
    mentalMapText: 'Winemaking -> Stabilization',
    options: [
      { id: 'w83a', text: 'Sterile filtration', isCorrect: true, feedback: 'Correct. Pore size is small enough to remove microbes.' },
      { id: 'w83b', text: 'Racking', isCorrect: false, feedback: 'Removes gross lees but not microbes.' },
      { id: 'w83c', text: 'Fining', isCorrect: false, feedback: 'Clarifies but does not sterilize.' },
      { id: 'w83d', text: 'Cool fermentation', isCorrect: false, feedback: 'Slows microbes but does not remove them.' }
    ]
  },
  {
    id: 'wset_161_sherry_flor',
    tier: Tier.Tier3,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Which of the following statements is true regarding Flor?',
    explanationText: 'Flor is sensitive to alcohol. Levels above 15.5-16% abv kill the yeast, which is why Oloroso is fortified to 17%.',
    mentalMapText: 'Spain -> Sherry -> Biological Aging',
    options: [
      { id: 'w161a', text: 'Flor cannot grow if a wine is fortified to 17% abv', isCorrect: true, feedback: 'Correct. This is how Oloroso is made.' },
      { id: 'w161b', text: 'Oloroso Sherry undergoes biological ageing', isCorrect: false, feedback: 'Oloroso is oxidative.' },
      { id: 'w161c', text: 'Flor gives Sherry intense tropical fruit aromas', isCorrect: false, feedback: 'Flor gives bread, acetaldehyde, and almond notes.' },
      { id: 'w161d', text: 'Humidity and temperature have no effect on flor', isCorrect: false, feedback: 'Flor needs specific humidity and temp to thrive.' }
    ]
  },
  {
    id: 'wset_67_baga',
    tier: Tier.Tier2,
    category: 'Portugal',
    region: 'Bairrada',
    questionText: 'Wines made from Baga typically have the following characteristics.',
    explanationText: 'Baga (Bairrada) is a thick-skinned grape producing wines with deep color, high acidity, and high tannin.',
    mentalMapText: 'Portugal -> Bairrada',
    options: [
      { id: 'w67a', text: 'Colour: pale, Tannin: low', isCorrect: false, feedback: '' },
      { id: 'w67b', text: 'Colour: pale, Tannin: high', isCorrect: false, feedback: 'Like Nebbiolo? No, Baga is deep.' },
      { id: 'w67c', text: 'Colour: deep, Tannin: low', isCorrect: false, feedback: '' },
      { id: 'w67d', text: 'Colour: deep, Tannin: high', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_61_port_style',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Douro',
    questionText: 'Which of the following is a style of Port?',
    explanationText: 'Tawny is a major category of Port (oxidative aging). Cream is Sherry; Solera is a system; Touriga is a grape.',
    mentalMapText: 'Portugal -> Port Styles',
    options: [
      { id: 'w61a', text: 'Tawny', isCorrect: true, feedback: 'Correct.' },
      { id: 'w61b', text: 'Cream', isCorrect: false, feedback: 'Style of Sherry.' },
      { id: 'w61c', text: 'Solera', isCorrect: false, feedback: 'Aging system.' },
      { id: 'w61d', text: 'Touriga', isCorrect: false, feedback: 'Grape variety.' }
    ]
  },
  {
    id: 'wset_84_south_africa_unit',
    tier: Tier.Tier2,
    category: 'South Africa',
    region: 'Legislation',
    questionText: 'Which of the following is a category in South Africa\'s Wine of Origin scheme?',
    explanationText: 'The hierarchy is Geographical Unit -> Region -> District -> Ward. Ward is the smallest unit.',
    mentalMapText: 'South Africa -> Legislation',
    options: [
      { id: 'w84a', text: 'Zone', isCorrect: false, feedback: 'Australian term.' },
      { id: 'w84b', text: 'Sub-region', isCorrect: false, feedback: 'General term.' },
      { id: 'w84c', text: 'Ward', isCorrect: true, feedback: 'Correct.' },
      { id: 'w84d', text: 'AVA', isCorrect: false, feedback: 'USA term.' }
    ]
  },
  {
    id: 'wset_112_santorini_grape',
    tier: Tier.Tier1,
    category: 'Greece',
    region: 'Santorini',
    questionText: 'Santorini is known for white wines made from:',
    explanationText: 'Assyrtiko is the signature high-acid white grape of Santorini.',
    mentalMapText: 'Greece -> Santorini',
    options: [
      { id: 'w112a', text: 'Xinomavro', isCorrect: false, feedback: 'Naoussa (Red).' },
      { id: 'w112b', text: 'Assyrtiko', isCorrect: true, feedback: 'Correct.' },
      { id: 'w112c', text: 'Nemea', isCorrect: false, feedback: 'Region (Red).' },
      { id: 'w112d', text: 'Agiorgitiko', isCorrect: false, feedback: 'Grape of Nemea.' }
    ]
  },
  {
    id: 'wset_20_racking',
    tier: Tier.Tier1,
    category: 'Winemaking',
    region: 'General',
    questionText: 'Racking is the process of:',
    explanationText: 'Racking involves moving wine from one vessel to another to separate it from the lees (sediment).',
    mentalMapText: 'Winemaking -> Maturation',
    options: [
      { id: 'w20a', text: 'removing wine from its sediment', isCorrect: true, feedback: 'Correct.' },
      { id: 'w20b', text: 'pumping over of must during fermentation', isCorrect: false, feedback: 'Remontage.' },
      { id: 'w20c', text: 'adding additional sugar', isCorrect: false, feedback: 'Chaptalization.' },
      { id: 'w20d', text: 'twisting bottles', isCorrect: false, feedback: 'Riddling.' }
    ]
  },
  {
    id: 'wset_95_grosses_gewachs',
    tier: Tier.Tier2,
    category: 'Germany',
    region: 'VDP',
    questionText: 'The term Grosses Gewächs indicates that a wine:',
    explanationText: 'GG (Grosses Gewächs) is the VDP classification for dry wines from the best vineyards (Grosse Lage).',
    mentalMapText: 'Germany -> VDP',
    options: [
      { id: 'w95a', text: 'has been made from grapes grown anywhere in Germany', isCorrect: false, feedback: 'Must be Grosse Lage.' },
      { id: 'w95b', text: 'is lusciously sweet', isCorrect: false, feedback: 'GG is always Dry.' },
      { id: 'w95c', text: 'must be made from Riesling', isCorrect: false, feedback: 'Grape depends on region (e.g., Spätburgunder in Baden).' },
      { id: 'w95d', text: 'is dry', isCorrect: true, feedback: 'Correct. Trocken style from top sites.' }
    ]
  },
  {
    id: 'wset_23_cascade_mountains',
    tier: Tier.Tier2,
    category: 'USA',
    region: 'Washington',
    questionText: 'The Cascade Mountains have an important impact on grape growing in:',
    explanationText: 'The Cascades create a rain shadow, making Eastern Washington (Columbia Valley) dry and continental.',
    mentalMapText: 'USA -> Washington State',
    options: [
      { id: 'w23a', text: 'New York State', isCorrect: false, feedback: 'East Coast.' },
      { id: 'w23b', text: 'San Luis Obispo County', isCorrect: false, feedback: 'California Central Coast.' },
      { id: 'w23c', text: 'Washington State', isCorrect: true, feedback: 'Correct.' },
      { id: 'w23d', text: 'Napa County', isCorrect: false, feedback: 'Mayacamas/Vaca ranges.' }
    ]
  },
  {
    id: 'wset_112_alsace_grand_cru_grapes',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Alsace',
    questionText: 'Which one of the following grape varieties is not permitted for Alsace Grand Cru?',
    explanationText: 'The 4 noble varieties are Riesling, Muscat, Gewurztraminer, and Pinot Gris. Pinot Blanc is generally excluded.',
    mentalMapText: 'France -> Alsace -> Legislation',
    options: [
      { id: 'w112aa', text: 'Gewurztraminer', isCorrect: false, feedback: 'Noble variety.' },
      { id: 'w112ab', text: 'Pinot Blanc', isCorrect: true, feedback: 'Correct. Not a noble variety.' },
      { id: 'w112ac', text: 'Muscat', isCorrect: false, feedback: 'Noble variety.' },
      { id: 'w112ad', text: 'Riesling', isCorrect: false, feedback: 'Noble variety.' }
    ]
  },
  {
    id: 'wset_149_stemilion_class',
    tier: Tier.Tier3,
    category: 'France',
    region: 'Bordeaux',
    questionText: 'Within the context of Bordeaux what is unique about the classification system in St-Émilion?',
    explanationText: 'Unlike the 1855 classification (Medoc), St-Émilion is integrated into the AOC system and is revised approximately every 10 years.',
    mentalMapText: 'France -> Bordeaux -> Right Bank',
    options: [
      { id: 'w149a', text: 'It applies to the vineyard and not the Château', isCorrect: false, feedback: 'It is Château based.' },
      { id: 'w149b', text: 'It forms part of the appellation law', isCorrect: true, feedback: 'Correct. "St-Émilion Grand Cru" is an appellation.' },
      { id: 'w149c', text: 'Unlike the Médoc it does not permit promotion and demotion', isCorrect: false, feedback: 'It DOES permit it (revised every 10 years).' },
      { id: 'w149d', text: 'There is a different ranking for red and white wine', isCorrect: false, feedback: 'St-Émilion is almost entirely red.' }
    ]
  },
  {
    id: 'wset_162_ocean_cooling',
    tier: Tier.Tier2,
    category: 'USA',
    region: 'California',
    questionText: 'Which one of the following areas is cooled by the ocean?',
    explanationText: 'Los Carneros is located right on San Pablo Bay, receiving direct cooling breezes/fog.',
    mentalMapText: 'USA -> California -> Cooling',
    options: [
      { id: 'w162a', text: 'Columbia Valley', isCorrect: false, feedback: 'Protected by Cascades (Continental).' },
      { id: 'w162b', text: 'Los Carneros', isCorrect: true, feedback: 'Correct. Cool maritime influence.' },
      { id: 'w162c', text: 'Yakima Valley', isCorrect: false, feedback: 'Washington (Continental).' },
      { id: 'w162d', text: 'Okanagan Valley', isCorrect: false, feedback: 'Canada (Continental).' }
    ]
  },
  {
    id: 'wset_121_malo',
    tier: Tier.Tier2,
    category: 'Winemaking',
    region: 'General',
    questionText: 'Which one of the following sets of conditions can be used to prevent malolactic conversion?',
    explanationText: 'LAB bacteria are inhibited by low temperatures and high SO2 levels.',
    mentalMapText: 'Winemaking -> Stabilization',
    options: [
      { id: 'w121a', text: 'TEMP: high, SO2: high', isCorrect: false, feedback: 'High temp encourages bacteria.' },
      { id: 'w121b', text: 'TEMP: high, SO2: low', isCorrect: false, feedback: 'Ideal conditions FOR Malo.' },
      { id: 'w121c', text: 'TEMP: low, SO2: high', isCorrect: true, feedback: 'Correct. Cold and SO2 block bacteria.' },
      { id: 'w121d', text: 'TEMP: low, SO2: low', isCorrect: false, feedback: 'Low SO2 might allow it to start slowly.' }
    ]
  },
  {
    id: 'wset_115_soil_roles',
    tier: Tier.Tier2,
    category: 'Viticulture',
    region: 'General',
    questionText: 'What important roles does the soil perform?(1. Influences vineyard temperature  2. Supplies the vine with water  3. Supplies the vine with nutrients)',
    explanationText: 'Soil influences temperature (color/stones), supplies water, and supplies nutrients.',
    mentalMapText: 'Viticulture -> Terroir',
    options: [
      { id: 'w115a', text: '1 and 2 only', isCorrect: false, feedback: '' },
      { id: 'w115b', text: '1 and 3 only', isCorrect: false, feedback: '' },
      { id: 'w115c', text: '2 and 3 only', isCorrect: false, feedback: '' },
      { id: 'w115d', text: '1, 2 and 3', isCorrect: true, feedback: 'Correct. All are key functions.' }
    ]
  },
  {
    id: 'wset_155_dry_red',
    tier: Tier.Tier1,
    category: 'France',
    region: 'South West',
    questionText: 'Which one of the following is a dry red wine?',
    explanationText: 'Madiran is a tannic red wine made from Tannat. Barsac is sweet; Savennières and Puligny are dry whites.',
    mentalMapText: 'France -> South West',
    options: [
      { id: 'w155a', text: 'Barsac', isCorrect: false, feedback: 'Sweet white (Sauternes satellite).' },
      { id: 'w155b', text: 'Madiran', isCorrect: true, feedback: 'Correct. Red wine from Tannat.' },
      { id: 'w155c', text: 'Savennières', isCorrect: false, feedback: 'Dry White (Chenin Blanc).' },
      { id: 'w155d', text: 'Puligny-Montrachet', isCorrect: false, feedback: 'Dry White (Chardonnay).' }
    ]
  },
  {
    id: 'wset_119_italian_black',
    tier: Tier.Tier1,
    category: 'Italy',
    region: 'General',
    questionText: 'Which one of the following Italian grape varieties is black?',
    explanationText: 'Dolcetto is a black grape from Piemonte. The others are white.',
    mentalMapText: 'Italy -> Grapes',
    options: [
      { id: 'w119a', text: 'Cortese', isCorrect: false, feedback: 'White (Gavi).' },
      { id: 'w119b', text: 'Grechetto', isCorrect: false, feedback: 'White (Orvieto).' },
      { id: 'w119c', text: 'Verdicchio', isCorrect: false, feedback: 'White (Marche).' },
      { id: 'w119d', text: 'Dolcetto', isCorrect: true, feedback: 'Correct. "Little Sweet One".' }
    ]
  },
  {
    id: 'wset_119_bandol',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Provence',
    questionText: 'Which one of the following best describes a Bandol?',
    explanationText: 'Bandol is famous for powerful, age-worthy red wines based on the Mourvèdre grape.',
    mentalMapText: 'France -> Provence -> Bandol',
    options: [
      { id: 'w119aa', text: 'A full-bodied red wine with high tannin and black fruit', isCorrect: true, feedback: 'Correct. Mourvèdre dominant.' },
      { id: 'w119ab', text: 'A white wine, high in alcohol with lychee aromas', isCorrect: false, feedback: 'Describes Gewurztraminer.' },
      { id: 'w119ac', text: 'A medium-bodied red wine with low tannin', isCorrect: false, feedback: 'Bandol is high tannin.' },
      { id: 'w119ad', text: 'A white wine with gooseberry aromas', isCorrect: false, feedback: 'Describes Sauvignon Blanc.' }
    ]
  },
  {
    id: 'wset_9_alcohol_health',
    tier: Tier.Tier1,
    category: 'Responsible Drinking',
    region: 'General',
    questionText: 'Which of the following statements is true regarding alcohol consumption?',
    explanationText: 'Excessive consumption has proven negative impacts on long-term health (liver, heart, etc.).',
    mentalMapText: 'General -> Health',
    options: [
      { id: 'w9a', text: 'Drinking to excess has no negative affect on short-term health', isCorrect: false, feedback: 'It causes intoxication/accidents.' },
      { id: 'w9b', text: 'After drinking alcohol, risk taking is less likely', isCorrect: false, feedback: 'Risk taking increases.' },
      { id: 'w9c', text: 'Excess consumption of alcohol can have a significant negative impact on long-term health', isCorrect: true, feedback: 'Correct.' },
      { id: 'w9d', text: 'After drinking alcohol, coordination improves', isCorrect: false, feedback: 'Coordination is impaired.' }
    ]
  },
  {
    id: 'wset_168_riesling_regions',
    tier: Tier.Tier2,
    category: 'Australia',
    region: 'South Australia',
    questionText: 'Which pair of regions has an established reputation for Riesling?',
    explanationText: 'Eden Valley and Clare Valley are Australia\'s premier regions for dry, lime-scented Riesling.',
    mentalMapText: 'Australia -> Riesling',
    options: [
      { id: 'w168a', text: 'Barossa Valley and Coonawarra', isCorrect: false, feedback: 'Shiraz and Cabernet.' },
      { id: 'w168b', text: 'Eden Valley and Clare Valley', isCorrect: true, feedback: 'Correct.' },
      { id: 'w168c', text: 'Heathcote and Murray Darling', isCorrect: false, feedback: 'Shiraz and Bulk wine.' },
      { id: 'w168d', text: 'Adelaide Hills and McLaren Vale', isCorrect: false, feedback: 'Sauvignon Blanc/Chard and Shiraz/Grenache.' }
    ]
  },
  {
    id: 'wset_27_sherry_grapes',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Which of the following grape variety(ies) are used in the production of Sherry?(1. Muscat  2. Palomino  3. Pedro Ximénez (PX))',
    explanationText: 'Palomino is the key dry grape. PX and Moscatel (Muscat) are used for sweet styles. All three are permitted.',
    mentalMapText: 'Spain -> Sherry -> Grapes',
    options: [
      { id: 'w27a', text: '2 only', isCorrect: false, feedback: '' },
      { id: 'w27b', text: '1 and 3 only', isCorrect: false, feedback: '' },
      { id: 'w27c', text: '2 and 3 only', isCorrect: false, feedback: '' },
      { id: 'w27d', text: '1, 2 and 3', isCorrect: true, feedback: 'Correct. Palomino, PX, and Moscatel.' }
    ]
  },
  {
    id: 'wset_107_hunter_semillon',
    tier: Tier.Tier2,
    category: 'Australia',
    region: 'Hunter Valley',
    questionText: 'Which of the following are characteristics of a young Hunter Valley Semillon?(1. High acid  2. Low alcohol  3. Pronounced aromas of vanilla)',
    explanationText: 'Young Hunter Semillon is harvested early, leading to high acidity and low alcohol, with neutral/grassy notes.',
    mentalMapText: 'Australia -> Hunter Valley',
    options: [
      { id: 'w107a', text: '1 and 3 only', isCorrect: false, feedback: 'Vanilla implies oak; Hunter Semillon is usually unoaked.' },
      { id: 'w107b', text: '2 and 3 only', isCorrect: false, feedback: '' },
      { id: 'w107c', text: '1 and 2 only', isCorrect: true, feedback: 'Correct. High Acid, Low Alcohol.' },
      { id: 'w107d', text: '1, 2 and 3', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_162_phylloxera',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'General',
    questionText: 'Which of the following is the standard method used to control phylloxera?',
    explanationText: 'Grafting Vitis vinifera onto resistant American rootstocks is the only long-term solution.',
    mentalMapText: 'Viticulture -> Pests',
    options: [
      { id: 'w162a', text: 'Fungicides', isCorrect: false, feedback: 'For mildew/rot.' },
      { id: 'w162b', text: 'Rootstocks', isCorrect: true, feedback: 'Correct.' },
      { id: 'w162c', text: 'Insecticides', isCorrect: false, feedback: 'Ineffective against phylloxera underground.' },
      { id: 'w162d', text: 'Canopy management', isCorrect: false, feedback: 'Does not stop root pests.' }
    ]
  },
  {
    id: 'wset_9_sparkling_methods',
    tier: Tier.Tier2,
    category: 'Sparkling',
    region: 'General',
    questionText: 'Which one of the following statements is true regarding sparkling wine?',
    explanationText: 'Transfer method involves a second fermentation in the bottle, but the wine is then emptied into a tank for filtration before re-bottling.',
    mentalMapText: 'Sparkling -> Methods',
    options: [
      { id: 'w9_spa', text: 'Sparkling wines made using the traditional method are always dry', isCorrect: false, feedback: 'Demi-sec exists.' },
      { id: 'w9_spb', text: 'Sparkling wines made using the tank method typically have flavours of bread and toast', isCorrect: false, feedback: 'They are fruity; toast comes from autolysis in bottle.' },
      { id: 'w9_spc', text: 'Sparkling wines made using the Asti method are high in alcohol', isCorrect: false, feedback: 'Asti is low alcohol (~7%).' },
      { id: 'w9_spd', text: 'Sparkling wines made using the transfer method undergo second fermentation in bottle', isCorrect: true, feedback: 'Correct. Same start as Traditional method.' }
    ]
  },
  {
    id: 'wset_111_ribera',
    tier: Tier.Tier2,
    category: 'Spain',
    region: 'Ribera del Duero',
    questionText: 'Which one of the following is an important natural factor in Ribera del Duero?',
    explanationText: 'High altitude (Meseta Central) moderates the hot continental summer, preserving acidity in the grapes.',
    mentalMapText: 'Spain -> Ribera del Duero',
    options: [
      { id: 'w111a', text: 'Maritime influence', isCorrect: false, feedback: 'It is deep inland.' },
      { id: 'w111b', text: 'Early morning autumn mist', isCorrect: false, feedback: 'Characteristic of Sauternes.' },
      { id: 'w111c', text: 'High altitude', isCorrect: true, feedback: 'Correct.' },
      { id: 'w111d', text: 'Cold air descending from the Pyrenees', isCorrect: false, feedback: 'Ribera is not near the Pyrenees.' }
    ]
  },
  {
    id: 'wset_109_gruner',
    tier: Tier.Tier1,
    category: 'Austria',
    region: 'General',
    questionText: 'In which country is Grüner Veltliner the most extensively planted grape variety?',
    explanationText: 'Grüner Veltliner is the signature and most planted grape of Austria.',
    mentalMapText: 'Austria -> Grapes',
    options: [
      { id: 'w109a', text: 'Germany', isCorrect: false, feedback: 'Riesling is #1.' },
      { id: 'w109b', text: 'South Africa', isCorrect: false, feedback: 'Chenin Blanc is #1.' },
      { id: 'w109c', text: 'Austria', isCorrect: true, feedback: 'Correct.' },
      { id: 'w109d', text: 'Canada', isCorrect: false, feedback: 'Vidal/Riesling/Chard common, but not Gruner.' }
    ]
  },
  {
    id: 'wset_12_vintage_champagne',
    tier: Tier.Tier3,
    category: 'Sparkling',
    region: 'Champagne',
    questionText: 'What is the minimum length of maturation required for vintage Champagne?',
    explanationText: 'Vintage Champagne requires 36 months total aging (with at least 12 months on lees, though usually much longer).',
    mentalMapText: 'Sparkling -> Legislation',
    options: [
      { id: 'w12a', text: '6 months', isCorrect: false, feedback: '' },
      { id: 'w12b', text: '15 months', isCorrect: false, feedback: 'Minimum for NV.' },
      { id: 'w12c', text: '24 months', isCorrect: false, feedback: 'Minimum for Crémant is usually 9-12.' },
      { id: 'w12d', text: '36 months', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_22_storage',
    tier: Tier.Tier1,
    category: 'Service',
    region: 'General',
    questionText: 'Which one of the following statements is true concerning the long-term storage of wine?',
    explanationText: 'Wine should be stored cool (10-15°C) and at a constant temperature to prevent damage.',
    mentalMapText: 'Service -> Storage',
    options: [
      { id: 'w22a', text: 'Strong light has little or no effect on a wine', isCorrect: false, feedback: 'Light causes "light strike" taint.' },
      { id: 'w22b', text: 'Wines sealed with a screw cap must be stored on their side', isCorrect: false, feedback: 'Screwcaps don\'t need moisture, can stand up.' },
      { id: 'w22c', text: 'Bottles should be turned regularly', isCorrect: false, feedback: 'Unnecessary disturbance.' },
      { id: 'w22d', text: 'Wine should be stored at a cool constant temperature', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_119_label_term',
    tier: Tier.Tier1,
    category: 'Italy',
    region: 'Legislation',
    questionText: 'Which one of the following is an Italian labelling term?',
    explanationText: 'DOCG (Denominazione di Origine Controllata e Garantita) is the highest Italian classification.',
    mentalMapText: 'Italy -> Laws',
    options: [
      { id: 'w119la', text: 'DO', isCorrect: false, feedback: 'Spanish (Denominación de Origen).' },
      { id: 'w119lb', text: 'DOCG', isCorrect: true, feedback: 'Correct.' },
      { id: 'w119lc', text: 'DOQ', isCorrect: false, feedback: 'Spanish (Priorat).' },
      { id: 'w119ld', text: 'DOCa', isCorrect: false, feedback: 'Spanish (Rioja).' }
    ]
  },
  {
    id: 'wset_102_salt_food',
    tier: Tier.Tier2,
    category: 'Pairing',
    region: 'General',
    questionText: 'Salt in food can make a wine seem:',
    explanationText: 'Salt is wine-friendly; it suppresses the perception of bitterness and acidity, making wine feel smoother/richer.',
    mentalMapText: 'Pairing -> Interactions',
    options: [
      { id: 'w102a', text: 'more bitter and less acidic', isCorrect: false, feedback: '' },
      { id: 'w102b', text: 'less bitter and less acidic', isCorrect: true, feedback: 'Correct. It increases perception of body.' },
      { id: 'w102c', text: 'more bitter and more acidic', isCorrect: false, feedback: 'This is the effect of sweetness/umami.' },
      { id: 'w102d', text: 'less bitter and more acidic', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_119_sa_true',
    tier: Tier.Tier2,
    category: 'South Africa',
    region: 'General',
    questionText: 'Which of the following statements is true regarding South Africa?',
    explanationText: 'Swartland has gained a huge reputation for high-quality wines made from old vine Chenin Blanc (and Syrah).',
    mentalMapText: 'South Africa -> Regions',
    options: [
      { id: 'w119saa', text: 'The most successful grape variety in Stellenbosch is Pinot Noir', isCorrect: false, feedback: 'Stellenbosch is Cab/Merlot. Walker Bay is PN.' },
      { id: 'w119sab', text: 'The Humboldt Current cools the coastal regions', isCorrect: false, feedback: 'Humboldt is Chile; Benguela is South Africa.' },
      { id: 'w119sac', text: 'Swartland is an important source of old vine Chenin Blanc', isCorrect: true, feedback: 'Correct.' },
      { id: 'w119sad', text: 'The vineyards of Constantia are cooled by altitude', isCorrect: false, feedback: 'Constantia is cooled by ocean breezes (Cape Doctor).' }
    ]
  },
  {
    id: 'wset_111_premium_sparkling_grapes',
    tier: Tier.Tier2,
    category: 'Sparkling',
    region: 'General',
    questionText: 'Grapes used in the production of premium quality sparkling wines typically have the following characteristics.',
    explanationText: 'Grapes are harvested early to ensure low potential alcohol (for 2nd fermentation increase) and high acidity.',
    mentalMapText: 'Sparkling -> Viticulture',
    options: [
      { id: 'w111sa', text: 'SUGAR: high / ACID: high', isCorrect: false, feedback: '' },
      { id: 'w111sb', text: 'SUGAR: high / ACID: low', isCorrect: false, feedback: '' },
      { id: 'w111sc', text: 'SUGAR: low / ACID: high', isCorrect: true, feedback: 'Correct.' },
      { id: 'w111sd', text: 'SUGAR: low / ACID: low', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_82_meseta_central',
    tier: Tier.Tier2,
    category: 'Spain',
    region: 'Central',
    questionText: 'Which of the following best describes the climate of the Meseta Central in central Spain?',
    explanationText: 'The Meseta Central is a high plateau deep inland, causing high continentality (extreme temp difference) and very low rainfall.',
    mentalMapText: 'Spain -> Climate',
    options: [
      { id: 'w82a', text: 'CONTINENTALITY: high / RAINFALL: high', isCorrect: false, feedback: '' },
      { id: 'w82b', text: 'CONTINENTALITY: high / RAINFALL: low', isCorrect: true, feedback: 'Correct. Hot summers, cold winters, dry.' },
      { id: 'w82c', text: 'CONTINENTALITY: low / RAINFALL: high', isCorrect: false, feedback: '' },
      { id: 'w82d', text: 'CONTINENTALITY: low / RAINFALL: low', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_116_nz_pn',
    tier: Tier.Tier2,
    category: 'New Zealand',
    region: 'North Island',
    questionText: 'Which region in New Zealand has established a reputation for premium Pinot Noir?',
    explanationText: 'Martinborough (Wairarapa) is famous for premium Pinot Noir. Hawke\'s Bay is Cab/Syrah; Gisborne is Chard.',
    mentalMapText: 'New Zealand -> Regions',
    options: [
      { id: 'w116a', text: 'Auckland', isCorrect: false, feedback: 'Warm/Wet. Cab/Merlot/Chard.' },
      { id: 'w116b', text: 'Hawke\'s Bay', isCorrect: false, feedback: 'Bordeaux Blends & Syrah.' },
      { id: 'w116c', text: 'Martinborough', isCorrect: true, feedback: 'Correct.' },
      { id: 'w116d', text: 'Gisborne', isCorrect: false, feedback: 'Chardonnay.' }
    ]
  },
  {
    id: 'wset_51_port_prod',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Douro',
    questionText: 'With regard to Port production, which of the following statements is true?',
    explanationText: 'Fortification kills the yeast before fermentation is complete, leaving residual sugar. It happens DURING fermentation.',
    mentalMapText: 'Portugal -> Port Production',
    options: [
      { id: 'w51a', text: 'Sugar is added after the fermentation', isCorrect: false, feedback: 'Sugar comes from the grapes (interrupted fermentation).' },
      { id: 'w51b', text: 'Rapid extraction of colour and tannin prior to fortification is essential', isCorrect: true, feedback: 'Correct. Fermentation is short (2-3 days), so extraction must be fast.' },
      { id: 'w51c', text: 'Fortification can happen either during or after fermentation', isCorrect: false, feedback: 'Always during.' },
      { id: 'w51d', text: 'All Ports undergo extensive oxidative ageing', isCorrect: false, feedback: 'Ruby ports are protective aged.' }
    ]
  },
  {
    id: 'wset_3_rhone_match',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Rhône',
    questionText: 'Which one of the following is correctly matched?',
    explanationText: 'Saint-Joseph is a Northern Rhône appellation producing Syrah. Condrieu is Viognier; Hermitage is Syrah; Côte Rôtie is Syrah/Viognier.',
    mentalMapText: 'France -> Rhône -> Northern Crus',
    options: [
      { id: 'w3a', text: 'Condrieu and Marsanne', isCorrect: false, feedback: 'Condrieu is 100% Viognier.' },
      { id: 'w3b', text: 'Hermitage and Grenache', isCorrect: false, feedback: 'Hermitage is Syrah (with minor white allowance).' },
      { id: 'w3c', text: 'Saint-Joseph and Syrah', isCorrect: true, feedback: 'Correct.' },
      { id: 'w3d', text: 'Côte Rôtie and Cinsault', isCorrect: false, feedback: 'Côte Rôtie is Syrah.' }
    ]
  },
  {
    id: 'wset_22_sweet_sherry',
    tier: Tier.Tier3,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Which of the following techniques can be used to make sweet styles of Sherry?',
    explanationText: 'Sun-drying is used for PX/Moscatel. Blending PX is used for Cream Sherry. RCGM is used for Pale Cream.',
    mentalMapText: 'Spain -> Sherry -> Sweet Styles',
    options: [
      { id: 'w22sa', text: '1 only', isCorrect: false, feedback: '' },
      { id: 'w22sb', text: '1 and 3 only', isCorrect: false, feedback: '' },
      { id: 'w22sc', text: '2 and 3 only', isCorrect: false, feedback: '' },
      { id: 'w22sd', text: '1, 2 and 3', isCorrect: true, feedback: 'Correct. All methods are used depending on style.' }
    ]
  },
  {
    id: 'wset_148_mendoza_natural',
    tier: Tier.Tier2,
    category: 'Argentina',
    region: 'Mendoza',
    questionText: 'Which of the following is/are important natural factors in Mendoza?(1. Hail  2. Altitude  3. Ocean breezes)',
    explanationText: 'Mendoza is high altitude (cooling) but suffers from summer hail. Ocean breezes are blocked by the Andes.',
    mentalMapText: 'Argentina -> Natural Factors',
    options: [
      { id: 'w148na', text: '2 only', isCorrect: false, feedback: '' },
      { id: 'w148nb', text: '3 only', isCorrect: false, feedback: '' },
      { id: 'w148nc', text: '1 and 2 only', isCorrect: true, feedback: 'Correct. Hail and Altitude.' },
      { id: 'w148nd', text: '1 and 3 only', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_44_reserva_red',
    tier: Tier.Tier3,
    category: 'Spain',
    region: 'Legislation',
    questionText: 'What is the minimum period of maturation in oak required for a Spanish red wine to be labelled Reserva?',
    explanationText: 'Reserva Red requires 36 months total, with at least 12 months in oak barrels.',
    mentalMapText: 'Spain -> Legislation',
    options: [
      { id: 'w44a', text: '6 months', isCorrect: false, feedback: 'For Crianza.' },
      { id: 'w44b', text: '12 months', isCorrect: true, feedback: 'Correct.' },
      { id: 'w44c', text: '18 months', isCorrect: false, feedback: 'For Gran Reserva.' },
      { id: 'w44d', text: '36 months', isCorrect: false, feedback: 'This is the total aging time.' }
    ]
  },
  {
    id: 'wset_87_faults',
    tier: Tier.Tier1,
    category: 'Tasting',
    region: 'Faults',
    questionText: 'Which wine fault is identified by a distinct smell of vinegar or nail polish remover?',
    explanationText: 'Volatile Acidity (VA) manifests as vinegar (acetic acid) or nail polish remover (ethyl acetate).',
    mentalMapText: 'Tasting -> Faults',
    options: [
      { id: 'w87a', text: 'Volatile acidity', isCorrect: true, feedback: 'Correct.' },
      { id: 'w87b', text: 'Cork taint', isCorrect: false, feedback: 'Wet cardboard/mold.' },
      { id: 'w87c', text: 'Brettanomyces (Brett)', isCorrect: false, feedback: 'Animal/Farmyard/Band-aid.' },
      { id: 'w87d', text: 'Oxidation', isCorrect: false, feedback: 'Brown color/stale/sherry notes.' }
    ]
  },
  {
    id: 'wset_4_sgn',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Alsace',
    questionText: 'What does the term "Sélection de Grains Nobles" mean on a bottle of wine from Alsace?',
    explanationText: 'SGN implies a sweet wine made from noble varieties affected by botrytis (Noble Rot).',
    mentalMapText: 'France -> Alsace -> Styles',
    options: [
      { id: 'w4a', text: 'A sweet wine made from frozen grapes', isCorrect: false, feedback: 'Eiswein.' },
      { id: 'w4b', text: 'A sweet wine made from dried grapes', isCorrect: false, feedback: 'Vin de Paille.' },
      { id: 'w4c', text: 'A sweet wine made from one of the noble varieties', isCorrect: true, feedback: 'Correct. Botrytis is key.' },
      { id: 'w4d', text: 'A high quality dry wine', isCorrect: false, feedback: 'SGN is always sweet.' }
    ]
  },
  {
    id: 'wset_5_muller_thurgau',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'Grapes',
    questionText: 'What is Müller-Thurgau?',
    explanationText: 'Müller-Thurgau is a crossing of Riesling and Madeleine Royale, widely planted in Germany for reliable yields.',
    mentalMapText: 'Viticulture -> Crossings',
    options: [
      { id: 'w5a', text: 'A village in the Mosel region', isCorrect: false, feedback: '' },
      { id: 'w5b', text: 'A crossing of Riesling and Madeleine Royale', isCorrect: true, feedback: 'Correct.' },
      { id: 'w5c', text: 'A black grape grown in Austria', isCorrect: false, feedback: '' },
      { id: 'w5d', text: 'A region in Hungary', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_115_riesling_false',
    tier: Tier.Tier2,
    category: 'Germany',
    region: 'Franken',
    questionText: 'Which of the following is FALSE about Riesling?',
    explanationText: 'In Franken, Silvaner is the most prestigious and distinctive grape, not Riesling.',
    mentalMapText: 'Germany -> Franken',
    options: [
      { id: 'w115fa', text: 'It is the most widely planted variety in Alsace', isCorrect: false, feedback: 'True.' },
      { id: 'w115fb', text: 'It is late budding', isCorrect: false, feedback: 'True (helps avoid spring frost).' },
      { id: 'w115fc', text: 'It can mature in bottle for many years', isCorrect: false, feedback: 'True.' },
      { id: 'w115fd', text: 'It is the most widely planted variety in Franken', isCorrect: true, feedback: 'Correct (Silvaner is key there).' }
    ]
  },
  {
    id: 'wset_107_weinviertel',
    tier: Tier.Tier1,
    category: 'Austria',
    region: 'Weinviertel',
    questionText: 'What is the grape variety grown in Weinviertel DAC?',
    explanationText: 'Weinviertel was Austria\'s first DAC and is exclusively for Grüner Veltliner.',
    mentalMapText: 'Austria -> Regions',
    options: [
      { id: 'w107a', text: 'Grüner Veltliner', isCorrect: true, feedback: 'Correct.' },
      { id: 'w107b', text: 'Riesling', isCorrect: false, feedback: '' },
      { id: 'w107c', text: 'Gewurztraminer', isCorrect: false, feedback: '' },
      { id: 'w107d', text: 'Pinot Gris', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_32_tokaji',
    tier: Tier.Tier1,
    category: 'Hungary',
    region: 'Tokaj',
    questionText: 'Which of the following is a grape variety used in Tokaji production?',
    explanationText: 'Furmint is the principal grape of Tokaj, known for its high acidity and susceptibility to botrytis.',
    mentalMapText: 'Hungary -> Tokaj',
    options: [
      { id: 'w32a', text: 'Riesling', isCorrect: false, feedback: '' },
      { id: 'w32b', text: 'Puttonyos', isCorrect: false, feedback: 'Unit of sweetness.' },
      { id: 'w32c', text: 'Aszú', isCorrect: false, feedback: 'Style of wine (botrytized berries).' },
      { id: 'w32d', text: 'Furmint', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_19_rhone_cru_not',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Rhône',
    questionText: 'Which of the following is NOT a cru in the Southern Rhône?',
    explanationText: 'Hermitage is a Northern Rhône Cru. Gigondas, Tavel, and Vacqueyras are Southern Crus.',
    mentalMapText: 'France -> Rhône -> Classification',
    options: [
      { id: 'w19a', text: 'Hermitage', isCorrect: true, feedback: 'Correct. It is Northern Rhône.' },
      { id: 'w19b', text: 'Gigondas', isCorrect: false, feedback: 'Southern Rhône.' },
      { id: 'w19c', text: 'Tavel', isCorrect: false, feedback: 'Southern Rhône.' },
      { id: 'w19d', text: 'Vacqueyras', isCorrect: false, feedback: 'Southern Rhône.' }
    ]
  },
  {
    id: 'wset_79_rias_baixas',
    tier: Tier.Tier1,
    category: 'Spain',
    region: 'Galicia',
    questionText: 'What is the main grape variety grown In Rías Baixas?',
    explanationText: 'Albariño dominates Rías Baixas, thriving in the damp, humid maritime climate.',
    mentalMapText: 'Spain -> North West',
    options: [
      { id: 'w79a', text: 'Verdejo', isCorrect: false, feedback: 'Rueda.' },
      { id: 'w79b', text: 'Viura', isCorrect: false, feedback: 'Rioja (Macabeo).' },
      { id: 'w79c', text: 'Airén', isCorrect: false, feedback: 'La Mancha.' },
      { id: 'w79d', text: 'Albariño', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_78_vinho_verde',
    tier: Tier.Tier2,
    category: 'Portugal',
    region: 'Vinho Verde',
    questionText: 'What is the climate of the Vinho Verde region?',
    explanationText: 'Vinho Verde has a moderate maritime climate with high rainfall due to its Atlantic exposure.',
    mentalMapText: 'Portugal -> Climate',
    options: [
      { id: 'w78a', text: 'Moderate continental', isCorrect: false, feedback: '' },
      { id: 'w78b', text: 'Moderate maritime', isCorrect: true, feedback: 'Correct. Humid and rainy.' },
      { id: 'w78c', text: 'Warm maritime', isCorrect: false, feedback: '' },
      { id: 'w78d', text: 'Warm continental', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_11_s_france_local',
    tier: Tier.Tier2,
    category: 'France',
    region: 'South France',
    questionText: 'Which of the following is NOT an important local grape variety in Southern France?',
    explanationText: 'Cabernet Sauvignon is an Atlantic variety (Bordeaux). While grown, it is not considered a "local" Mediterranean variety like Grenache, Carignan, or Cinsault.',
    mentalMapText: 'France -> South -> Grapes',
    options: [
      { id: 'w11a', text: 'Cabernet Sauvignon', isCorrect: true, feedback: 'Correct. It is an "international" or Atlantic variety.' },
      { id: 'w11b', text: 'Carignan', isCorrect: false, feedback: 'Local Mediterranean.' },
      { id: 'w11c', text: 'Cinsault', isCorrect: false, feedback: 'Local Mediterranean.' },
      { id: 'w11d', text: 'Grenache', isCorrect: false, feedback: 'Local Mediterranean.' }
    ]
  },
  {
    id: 'wset_125_s_rhone_rose',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Rhône',
    questionText: 'Which cru in the Southern Rhône makes only rosé wines?',
    explanationText: 'Tavel is the only Southern Rhône Cru dedicated exclusively to Rosé.',
    mentalMapText: 'France -> Rhône -> Tavel',
    options: [
      { id: 'w125ra', text: 'Provence', isCorrect: false, feedback: 'Region, not a Cru.' },
      { id: 'w125rb', text: 'Lirac', isCorrect: false, feedback: 'Produces Red, White, and Rosé.' },
      { id: 'w125rc', text: 'Tavel', isCorrect: true, feedback: 'Correct.' },
      { id: 'w125rd', text: 'Muscat de Beaumes-de-Venise', isCorrect: false, feedback: 'Sweet VDN.' }
    ]
  },
  {
    id: 'wset_138_montagne_de_reims',
    tier: Tier.Tier2,
    category: 'Sparkling',
    region: 'Champagne',
    questionText: 'Which grape variety is most widely planted in the Montagne de Reims?',
    explanationText: 'Montagne de Reims is famous for Pinot Noir on its chalky slopes.',
    mentalMapText: 'Sparkling -> Champagne Sub-regions',
    options: [
      { id: 'w138a', text: 'Chardonnay', isCorrect: false, feedback: 'Côte des Blancs.' },
      { id: 'w138b', text: 'Pinot Blanc', isCorrect: false, feedback: 'Rare in Champagne.' },
      { id: 'w138c', text: 'Pinot Noir', isCorrect: true, feedback: 'Correct.' },
      { id: 'w138d', text: 'Pinot Meunier', isCorrect: false, feedback: 'Vallée de la Marne.' }
    ]
  },
  {
    id: 'wset_158_liqueur_de_tirage',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'General',
    questionText: 'What is added to the base wine to start the second fermentation in traditional method sparkling wine production?',
    explanationText: 'Liqueur de tirage is the mixture of wine, sugar, yeast, and clarifying agent used to induce 2nd fermentation.',
    mentalMapText: 'Sparkling -> Production',
    options: [
      { id: 'w158a', text: 'Aguardente', isCorrect: false, feedback: 'Spirit for Port.' },
      { id: 'w158b', text: 'Süssreserve', isCorrect: false, feedback: 'Unfermented grape juice for sweetness (Germany).' },
      { id: 'w158c', text: 'Liqueur de tirage', isCorrect: true, feedback: 'Correct.' },
      { id: 'w158d', text: 'Liqueur d\'expédition', isCorrect: false, feedback: 'Added after disgorgement (Dosage).' }
    ]
  },
  {
    id: 'wset_118_brut_nature',
    tier: Tier.Tier2,
    category: 'Sparkling',
    region: 'Legislation',
    questionText: 'What is the level of sugar permitted for a Brut Nature sparkling wine?',
    explanationText: 'Brut Nature (or Zero Dosage) allows 0-3 g/L residual sugar and no added sugar.',
    mentalMapText: 'Sparkling -> Sweetness Levels',
    options: [
      { id: 'w118a', text: '0-3 g/L', isCorrect: true, feedback: 'Correct.' },
      { id: 'w118b', text: '0-6 g/L', isCorrect: false, feedback: 'Extra Brut.' },
      { id: 'w118c', text: '0-12 g/L', isCorrect: false, feedback: 'Brut.' },
      { id: 'w118d', text: '12-17 g/L', isCorrect: false, feedback: 'Extra Dry.' }
    ]
  },
  {
    id: 'wset_34_cava_grapes',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Spain',
    questionText: 'Which of the following is NOT a traditional grape variety used in Cava production?',
    explanationText: 'Pedro Ximénez is used for Sherry. The Cava trio is Macabeo, Xarel-lo, and Parellada.',
    mentalMapText: 'Sparkling -> Cava',
    options: [
      { id: 'w34a', text: 'Macabeo', isCorrect: false, feedback: 'Traditional Cava grape.' },
      { id: 'w34b', text: 'Pedro Ximénez', isCorrect: true, feedback: 'Correct. Used in Jerez/Montilla.' },
      { id: 'w34c', text: 'Parellada', isCorrect: false, feedback: 'Traditional Cava grape.' },
      { id: 'w34d', text: 'Xarel-lo', isCorrect: false, feedback: 'Traditional Cava grape.' }
    ]
  },
  {
    id: 'wset_87_prestige_cuvee',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Marketing',
    questionText: 'What term is often used to describe the best sparkling wine in a producer\'s range?',
    explanationText: 'Prestige Cuvée (or Tête de Cuvée) represents the pinnacle of a House\'s range.',
    mentalMapText: 'Sparkling -> Terminology',
    options: [
      { id: 'w87a', text: 'Villages', isCorrect: false, feedback: '' },
      { id: 'w87b', text: 'Classico', isCorrect: false, feedback: '' },
      { id: 'w87c', text: 'Blanc de Blancs', isCorrect: false, feedback: 'Means white from white grapes.' },
      { id: 'w87d', text: 'Prestige Cuvée', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_138_pinotage',
    tier: Tier.Tier1,
    category: 'South Africa',
    region: 'Grapes',
    questionText: 'Pinotage is a crossing of which two black grape varieties?',
    explanationText: 'Pinotage was created in 1925 by crossing Pinot Noir and Cinsault (formerly known as Hermitage).',
    mentalMapText: 'South Africa -> Grapes',
    options: [
      { id: 'w138pa', text: 'Pinot Noir x Shiraz', isCorrect: false, feedback: '' },
      { id: 'w138pb', text: 'Pinot Noir x Cabernet Sauvignon', isCorrect: false, feedback: '' },
      { id: 'w138pc', text: 'Pinot Noir x Cinsault', isCorrect: true, feedback: 'Correct.' },
      { id: 'w138pd', text: 'Pinot Noir x Carignan', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_78_argentina_north',
    tier: Tier.Tier1,
    category: 'Argentina',
    region: 'Geography',
    questionText: 'Which is the most northerly province in Argentina?',
    explanationText: 'Salta is in the far north, home to the highest vineyards in the world (Cafayate).',
    mentalMapText: 'Argentina -> Regions',
    options: [
      { id: 'w78aa', text: 'Mendoza', isCorrect: false, feedback: 'Central.' },
      { id: 'w78ab', text: 'Salta', isCorrect: true, feedback: 'Correct.' },
      { id: 'w78ac', text: 'Patagonia', isCorrect: false, feedback: 'South.' },
      { id: 'w78ad', text: 'San Juan', isCorrect: false, feedback: 'North of Mendoza but south of Salta.' }
    ]
  },
  {
    id: 'wset_67_chile_label',
    tier: Tier.Tier2,
    category: 'Chile',
    region: 'Legislation',
    questionText: 'Which of the following is NOT a labelling term in Chile?',
    explanationText: 'AVA (American Viticultural Area) is a US term. Chile uses Costa, Entre Cordilleras, and Andes.',
    mentalMapText: 'Chile -> Laws',
    options: [
      { id: 'w67la', text: 'Costa', isCorrect: false, feedback: 'Valid term (Coast).' },
      { id: 'w67lb', text: 'Entre Cordilleras', isCorrect: false, feedback: 'Valid term (Between ranges).' },
      { id: 'w67lc', text: 'Andes', isCorrect: false, feedback: 'Valid term (Mountains).' },
      { id: 'w67ld', text: 'AVA', isCorrect: true, feedback: 'Correct. US term.' }
    ]
  },
  {
    id: 'wset_18_torrontes',
    tier: Tier.Tier2,
    category: 'Argentina',
    region: 'Grapes',
    questionText: 'Which of the following is NOT true of Torrontés?',
    explanationText: 'Torrontés is an aromatic variety generally fermented in inert vessels to preserve floral aromas; it is rarely oak aged.',
    mentalMapText: 'Argentina -> Grapes',
    options: [
      { id: 'w18ta', text: 'It is often oak aged', isCorrect: true, feedback: 'Correct (i.e. this statement is False). Oak overwhelms it.' },
      { id: 'w18tb', text: 'It is an aromatic grape variety', isCorrect: false, feedback: 'True.' },
      { id: 'w18tc', text: 'It is grown at high altitudes', isCorrect: false, feedback: 'True (Salta).' },
      { id: 'w18td', text: 'It is often fermented in inert vessels', isCorrect: false, feedback: 'True.' }
    ]
  },
  {
    id: 'wset_125_chenin_false',
    tier: Tier.Tier2,
    category: 'Grapes',
    region: 'General',
    questionText: 'Which of the following is/are NOT true of Chenin Blanc?',
    explanationText: 'Chenin Blanc is very versatile and thrives in warm climates (South Africa, California) as well as cool (Loire).',
    mentalMapText: 'Grapes -> Chenin Blanc',
    options: [
      { id: 'w125ca', text: 'It can make dry and sweet wines', isCorrect: false, feedback: 'True.' },
      { id: 'w125cb', text: 'It is not suited to warm climates', isCorrect: true, feedback: 'Correct (i.e. False). It is widely planted in warm regions.' },
      { id: 'w125cc', text: 'It can be oak aged', isCorrect: false, feedback: 'True.' },
      { id: 'w125cd', text: 'It can make high quality wines', isCorrect: false, feedback: 'True.' }
    ]
  },
  {
    id: 'wset_158_semillon_bottle_age',
    tier: Tier.Tier2,
    category: 'Australia',
    region: 'Hunter Valley',
    questionText: 'Which region of Australia is associated with single varietal bottle matured Semillon?',
    explanationText: 'Hunter Valley Semillon transforms from a light, grassy wine to a complex, toast and honey wine with bottle age.',
    mentalMapText: 'Australia -> Hunter Valley',
    options: [
      { id: 'w158sa', text: 'Yarra Valley', isCorrect: false, feedback: 'Chard/PN.' },
      { id: 'w158sb', text: 'Hunter Valley', isCorrect: true, feedback: 'Correct.' },
      { id: 'w158sc', text: 'Goulburn Valley', isCorrect: false, feedback: 'Marsanne/Shiraz.' },
      { id: 'w158sd', text: 'Clare Valley', isCorrect: false, feedback: 'Riesling.' }
    ]
  },
  {
    id: 'wset_4_coonawarra_soil',
    tier: Tier.Tier1,
    category: 'Australia',
    region: 'Coonawarra',
    questionText: 'What is the soil type found in Coonawarra?',
    explanationText: 'Terra Rossa (red earth over limestone) is the famous soil of Coonawarra.',
    mentalMapText: 'Australia -> Soils',
    options: [
      { id: 'w4ta', text: 'Gravel', isCorrect: false, feedback: '' },
      { id: 'w4tb', text: 'Terra rossa', isCorrect: true, feedback: 'Correct.' },
      { id: 'w4tc', text: 'Clay', isCorrect: false, feedback: '' },
      { id: 'w4td', text: 'Albariza', isCorrect: false, feedback: 'Jerez.' }
    ]
  },
  {
    id: 'wset_18_clare_valley',
    tier: Tier.Tier1,
    category: 'Australia',
    region: 'Clare Valley',
    questionText: 'Which of the following grape varieties is widely grown in Clare Valley?',
    explanationText: 'Clare Valley is synonymous with dry, ageworthy Riesling.',
    mentalMapText: 'Australia -> Clare Valley',
    options: [
      { id: 'w18ca', text: 'Viognier', isCorrect: false, feedback: '' },
      { id: 'w18cb', text: 'Marsanne', isCorrect: false, feedback: '' },
      { id: 'w18cc', text: 'Semillon', isCorrect: false, feedback: '' },
      { id: 'w18cd', text: 'Riesling', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_138_premium_pn_ava',
    tier: Tier.Tier2,
    category: 'USA',
    region: 'California',
    questionText: 'Which of the following AVAs is associated with premium Pinot Noir production?',
    explanationText: 'Santa Maria Valley (Santa Barbara) is cool and maritime, ideal for Pinot Noir. Rutherford/Calistoga/Lodi are too warm.',
    mentalMapText: 'USA -> California -> Regions',
    options: [
      { id: 'w138pa_us', text: 'Rutherford', isCorrect: false, feedback: 'Napa (Cabernet).' },
      { id: 'w138pb_us', text: 'Lodi', isCorrect: false, feedback: 'Central Valley (Zinfandel).' },
      { id: 'w138pc_us', text: 'Santa Maria Valley', isCorrect: true, feedback: 'Correct.' },
      { id: 'w138pd_us', text: 'Calistoga', isCorrect: false, feedback: 'Napa (Cabernet/Zin).' }
    ]
  },
  {
    id: 'wset_87_nz_black',
    tier: Tier.Tier1,
    category: 'New Zealand',
    region: 'General',
    questionText: 'What is the most widely planted black variety in New Zealand?',
    explanationText: 'Pinot Noir is the dominant red grape in NZ.',
    mentalMapText: 'New Zealand -> Grapes',
    options: [
      { id: 'w87nza', text: 'Pinot Noir', isCorrect: true, feedback: 'Correct.' },
      { id: 'w87nzb', text: 'Merlot', isCorrect: false, feedback: '' },
      { id: 'w87nzc', text: 'Shiraz', isCorrect: false, feedback: '' },
      { id: 'w87nzd', text: 'Cabernet Sauvignon', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_40_gisborne',
    tier: Tier.Tier1,
    category: 'New Zealand',
    region: 'Gisborne',
    questionText: 'Which white grape variety is widely planted in Gisborne?',
    explanationText: 'Gisborne is often called the "Chardonnay Capital of New Zealand".',
    mentalMapText: 'New Zealand -> Gisborne',
    options: [
      { id: 'w40a', text: 'Chardonnay', isCorrect: true, feedback: 'Correct.' },
      { id: 'w40b', text: 'Sauvignon Blanc', isCorrect: false, feedback: 'Marlborough.' },
      { id: 'w40c', text: 'Semillon', isCorrect: false, feedback: '' },
      { id: 'w40d', text: 'Chenin Blanc', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_147_premium_syrah_nz',
    tier: Tier.Tier2,
    category: 'New Zealand',
    region: 'Hawke\'s Bay',
    questionText: 'Which of the following regions has a reputation for producing premium Syrah?',
    explanationText: 'Hawke\'s Bay (especially Gimblett Gravels) is the warmest region and famous for Bordeaux Blends and Syrah.',
    mentalMapText: 'New Zealand -> Hawke\'s Bay',
    options: [
      { id: 'w147a', text: 'Marlborough', isCorrect: false, feedback: 'Too cool for consistent premium Syrah.' },
      { id: 'w147b', text: 'Nelson', isCorrect: false, feedback: '' },
      { id: 'w147c', text: 'Canterbury', isCorrect: false, feedback: '' },
      { id: 'w147d', text: 'Hawke\'s Bay', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_50_vidal',
    tier: Tier.Tier3,
    category: 'Canada',
    region: 'Niagara',
    questionText: 'Which of the following is NOT true of Vidal?',
    explanationText: 'Vidal is famous for premium Icewine, so saying it makes "simple inexpensive wines" is the least accurate description of its primary reputation in WSET terms.',
    mentalMapText: 'Canada -> Grapes',
    options: [
      { id: 'w50va', text: 'It is a hybrid', isCorrect: false, feedback: 'True (Ugni Blanc x Seibel).' },
      { id: 'w50vb', text: 'It makes simple inexpensive wines', isCorrect: true, feedback: 'Correct (It makes premium Icewine).' },
      { id: 'w50vc', text: 'It makes high quality sweet wines', isCorrect: false, feedback: 'True (Icewine).' },
      { id: 'w50vd', text: 'It is grown in Niagara Peninsula', isCorrect: false, feedback: 'True.' }
    ]
  },
  {
    id: 'wset_90_nemea',
    tier: Tier.Tier1,
    category: 'Greece',
    region: 'Nemea',
    questionText: 'What is the grape variety grown in Nemea PDO?',
    explanationText: 'Nemea is exclusively for Agiorgitiko (red).',
    mentalMapText: 'Greece -> Nemea',
    options: [
      { id: 'w90a', text: 'Agiorgitiko', isCorrect: true, feedback: 'Correct.' },
      { id: 'w90b', text: 'Xinomavro', isCorrect: false, feedback: 'Naoussa.' },
      { id: 'w90c', text: 'Aragonês', isCorrect: false, feedback: 'Tempranillo (Portugal).' },
      { id: 'w90d', text: 'Negroamaro', isCorrect: false, feedback: 'Puglia (Italy).' }
    ]
  },
  {
    id: 'wset_20_brunello',
    tier: Tier.Tier3,
    category: 'Italy',
    region: 'Tuscany',
    questionText: 'What is the minimum ageing in wood for a Brunello di Montalcino?',
    explanationText: 'Brunello requires 5 years total aging, with minimum 2 years in oak.',
    mentalMapText: 'Italy -> Tuscany -> Laws',
    options: [
      { id: 'w20ba', text: '1 year', isCorrect: false, feedback: '' },
      { id: 'w20bb', text: '2 years', isCorrect: true, feedback: 'Correct.' },
      { id: 'w20bc', text: '3 years', isCorrect: false, feedback: '' },
      { id: 'w20bd', text: '4 years', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_44_sangiovese',
    tier: Tier.Tier2,
    category: 'Italy',
    region: 'Tuscany',
    questionText: 'Which of the following is NOT true of Sangiovese?',
    explanationText: 'Sangiovese is often blended (e.g., with Cabernet/Merlot in Chianti or Super Tuscans).',
    mentalMapText: 'Italy -> Grapes',
    options: [
      { id: 'w44sa', text: 'It is a late ripener', isCorrect: false, feedback: 'True.' },
      { id: 'w44sb', text: 'It is the dominant variety in Vino Nobile di Montepulciano', isCorrect: false, feedback: 'True (Prugnolo Gentile).' },
      { id: 'w44sc', text: 'It produces wines with aromas of red cherries and herbs', isCorrect: false, feedback: 'True.' },
      { id: 'w44sd', text: 'It is rarely blended', isCorrect: true, feedback: 'Correct (It IS blended often).' }
    ]
  },
  {
    id: 'wset_89_fiano',
    tier: Tier.Tier3,
    category: 'Italy',
    region: 'Campania',
    questionText: 'Which of the following are typical aromas of Fiano?',
    explanationText: 'Fiano di Avellino is known for stone fruit, melon, and mango aromas.',
    mentalMapText: 'Italy -> Campania',
    options: [
      { id: 'w89a', text: 'Peach, melon, mango', isCorrect: true, feedback: 'Correct.' },
      { id: 'w89b', text: 'Lemon, apple, gooseberry', isCorrect: false, feedback: 'Sauvignon Blanc.' },
      { id: 'w89c', text: 'Grass, green pepper, pear', isCorrect: false, feedback: '' },
      { id: 'w89d', text: 'Rose, blossom, grape', isCorrect: false, feedback: 'Muscat/Gewurz.' }
    ]
  },
  {
    id: 'wset_61_gascogne',
    tier: Tier.Tier1,
    category: 'France',
    region: 'South West',
    questionText: 'What is the main grape variety of the Côtes de Gascogne IGP?',
    explanationText: 'Ugni Blanc (used for Armagnac) is widely used to make light, crisp IGP white wines here.',
    mentalMapText: 'France -> South West',
    options: [
      { id: 'w61ga', text: 'Sauvignon Blanc', isCorrect: false, feedback: '' },
      { id: 'w61gb', text: 'Ugni Blanc', isCorrect: true, feedback: 'Correct.' },
      { id: 'w61gc', text: 'Pinot Blanc', isCorrect: false, feedback: '' },
      { id: 'w61gd', text: 'Aligoté', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_4_loire_rose_not',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Loire',
    questionText: 'Which of the following is NOT a rosé wine produced in the Loire Valley?',
    explanationText: 'Bourgueil is a red wine appellation (Cab Franc). Though it can make rosé, "Rosé de Loire" and "Cabernet d\'Anjou" are dedicated rosé titles.',
    mentalMapText: 'France -> Loire',
    options: [
      { id: 'w4ra', text: 'Rosé de Loire', isCorrect: false, feedback: '' },
      { id: 'w4rb', text: 'Cabernet d\'Anjou', isCorrect: false, feedback: '' },
      { id: 'w4rc', text: 'Rosé d\'Anjou', isCorrect: false, feedback: '' },
      { id: 'w4rd', text: 'Bourgueil', isCorrect: true, feedback: 'Correct. Primarily Red.' }
    ]
  },
  {
    id: 'wset_64_merlot_dom',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Bordeaux',
    questionText: 'Which of the following regions produces Merlot dominant wine?',
    explanationText: 'Pomerol (Right Bank) is dominated by Merlot. Pauillac/St Julien are Left Bank (Cab). Pommard is Burgundy (Pinot).',
    mentalMapText: 'France -> Bordeaux -> Right Bank',
    options: [
      { id: 'w64a', text: 'Pomerol', isCorrect: true, feedback: 'Correct.' },
      { id: 'w64b', text: 'Pauillac', isCorrect: false, feedback: 'Cabernet Sauvignon.' },
      { id: 'w64c', text: 'St Julien', isCorrect: false, feedback: 'Cabernet Sauvignon.' },
      { id: 'w64d', text: 'Pommard', isCorrect: false, feedback: 'Pinot Noir.' }
    ]
  },
  {
    id: 'wset_59_1855',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Bordeaux',
    questionText: 'How many ranks are included in the 1855 classification for red wines?',
    explanationText: 'There are 5 ranks (Premier Cru to Cinquième Cru).',
    mentalMapText: 'France -> Bordeaux -> Classification',
    options: [
      { id: 'w59a', text: '4', isCorrect: false, feedback: '' },
      { id: 'w59b', text: '5', isCorrect: true, feedback: 'Correct.' },
      { id: 'w59c', text: '6', isCorrect: false, feedback: '' },
      { id: 'w59d', text: '7', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_57_bordeaux_climate',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Bordeaux',
    questionText: 'Which of the following does NOT have an impact on growing conditions in Bordeaux?',
    explanationText: 'The Mistral is a wind in the Rhône Valley. Bordeaux is affected by the Gulf Stream, Landes Forest, and Dunes.',
    mentalMapText: 'France -> Bordeaux -> Natural Factors',
    options: [
      { id: 'w57a', text: 'Gulf stream', isCorrect: false, feedback: 'Warms the climate.' },
      { id: 'w57b', text: 'Landes forest', isCorrect: false, feedback: 'Protects from Atlantic storms.' },
      { id: 'w57c', text: 'Mistral', isCorrect: true, feedback: 'Correct. It is in the Rhône.' },
      { id: 'w57d', text: 'Coastal sand dunes', isCorrect: false, feedback: 'Protect from storms.' }
    ]
  },
  {
    id: 'wset_24_burgundy_soil',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Burgundy',
    questionText: 'Which of the following is TRUE about the soils in Burgundy?',
    explanationText: 'Burgundy soils are famously varied (limestone, marl, clay) over short distances, defining the Cru system.',
    mentalMapText: 'France -> Burgundy -> Terroir',
    options: [
      { id: 'w24sa', text: 'They are stony', isCorrect: false, feedback: 'Too general.' },
      { id: 'w24sb', text: 'They are very varied', isCorrect: true, feedback: 'Correct.' },
      { id: 'w24sc', text: 'They are all shallow', isCorrect: false, feedback: 'False.' },
      { id: 'w24sd', text: 'They are all fertile', isCorrect: false, feedback: 'False.' }
    ]
  },
  {
    id: 'wset_149_cote_dor_red',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Burgundy',
    questionText: 'Which of the following is NOT a village producing red wines in the Côte d\'Or?',
    explanationText: 'Mercurey is in the Côte Chalonnaise, not the Côte d\'Or.',
    mentalMapText: 'France -> Burgundy -> Geography',
    options: [
      { id: 'w149va', text: 'Vougeot', isCorrect: false, feedback: 'Côte de Nuits.' },
      { id: 'w149vb', text: 'Volnay', isCorrect: false, feedback: 'Côte de Beaune.' },
      { id: 'w149vc', text: 'Chassagne-Montrachet', isCorrect: false, feedback: 'Produces some red, in Côte de Beaune.' },
      { id: 'w149vd', text: 'Mercurey', isCorrect: true, feedback: 'Correct. It is in Côte Chalonnaise.' }
    ]
  },
  {
    id: 'wset_59_beaujolais_nouveau',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Beaujolais',
    questionText: 'In which month is Beaujolais Nouveau released?',
    explanationText: 'Released on the third Thursday of November.',
    mentalMapText: 'France -> Beaujolais',
    options: [
      { id: 'w59na', text: 'September', isCorrect: false, feedback: '' },
      { id: 'w59nb', text: 'October', isCorrect: false, feedback: '' },
      { id: 'w59nc', text: 'November', isCorrect: true, feedback: 'Correct.' },
      { id: 'w59nd', text: 'December', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_115_mistral',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Rhône',
    questionText: 'What is the cold north wind that can damage vines in the Northern Rhône?',
    explanationText: 'The Mistral blows from the north, damaging vines but also preventing rot.',
    mentalMapText: 'France -> Rhône -> Climate',
    options: [
      { id: 'w115ma', text: 'The mistral', isCorrect: true, feedback: 'Correct.' },
      { id: 'w115mb', text: 'The tramontane', isCorrect: false, feedback: 'Languedoc.' },
      { id: 'w115mc', text: 'Cape Doctor', isCorrect: false, feedback: 'South Africa.' },
      { id: 'w115md', text: 'The levante', isCorrect: false, feedback: 'Spain.' }
    ]
  },
  {
    id: 'wset_45_viognier',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Rhône',
    questionText: 'Which of the following is TRUE of Viognier in the Northern Rhône?',
    explanationText: 'Viognier develops its signature aromas (apricot/blossom) very late, often leading to high alcohol.',
    mentalMapText: 'France -> Rhône -> Grapes',
    options: [
      { id: 'w45a', text: 'It makes wine with high acidity', isCorrect: false, feedback: 'It is low acidity.' },
      { id: 'w45b', text: 'It develops aromas and flavours late in the season', isCorrect: true, feedback: 'Correct.' },
      { id: 'w45c', text: 'It is often blended with Marsanne', isCorrect: false, feedback: 'Marsanne is blended with Roussanne.' },
      { id: 'w45d', text: 'It is not suitable for oak ageing', isCorrect: false, feedback: 'It is often oaked.' }
    ]
  },
  {
    id: 'wset_6_cote_dor_not',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Burgundy',
    questionText: 'Which of the following is NOT a village appellation in the Côte d\'Or?',
    explanationText: 'Montagny is in the Côte Chalonnaise. The others are Côte d\'Or.',
    mentalMapText: 'France -> Burgundy -> Geography',
    options: [
      { id: 'w6a', text: 'Montagny', isCorrect: true, feedback: 'Correct. Côte Chalonnaise.' },
      { id: 'w6b', text: 'Meursault', isCorrect: false, feedback: 'Côte de Beaune.' },
      { id: 'w6c', text: 'Beaune', isCorrect: false, feedback: 'Côte de Beaune.' },
      { id: 'w6d', text: 'Puligny-Montrachet', isCorrect: false, feedback: 'Côte de Beaune.' }
    ]
  },
  {
    id: 'wset_153_bordeaux_white',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Bordeaux',
    questionText: 'What is the Bordeaux appellation associated with premium, dry white wines?',
    explanationText: 'Pessac-Léognan is famous for premium dry whites (and reds). Sauternes is sweet; Margaux/Pomerol are red.',
    mentalMapText: 'France -> Bordeaux -> Graves',
    options: [
      { id: 'w153a', text: 'Sauternes', isCorrect: false, feedback: 'Sweet.' },
      { id: 'w153b', text: 'Pessac-Léognan', isCorrect: true, feedback: 'Correct.' },
      { id: 'w153c', text: 'Margaux', isCorrect: false, feedback: 'Red.' },
      { id: 'w153d', text: 'Pomerol', isCorrect: false, feedback: 'Red.' }
    ]
  },
  {
    id: 'wset_4_chardonnay_false',
    tier: Tier.Tier2,
    category: 'Grapes',
    region: 'General',
    questionText: 'Which of the following is NOT true about Chardonnay?',
    explanationText: 'Chardonnay is versatile and grows in Cool, Moderate, and Hot climates.',
    mentalMapText: 'Grapes -> Chardonnay',
    options: [
      { id: 'w4cha', text: 'It is an early budding variety', isCorrect: false, feedback: 'True.' },
      { id: 'w4chb', text: 'Oak fermentation or maturation is common', isCorrect: false, feedback: 'True.' },
      { id: 'w4chc', text: 'Creamy flavours can be created by malolactic fermentation', isCorrect: false, feedback: 'True.' },
      { id: 'w4chd', text: 'It only grows in cool climates', isCorrect: true, feedback: 'Correct (False).' }
    ]
  },
  {
    id: 'wset_2_sur_lie',
    tier: Tier.Tier1,
    category: 'Winemaking',
    region: 'Loire',
    questionText: 'What does "sur lie" indicate on a bottle of Muscadet?',
    explanationText: 'Sur lie means the wine has been aged on its dead yeast cells (lees) to add body and freshness (sprinted).',
    mentalMapText: 'Winemaking -> Lees',
    options: [
      { id: 'w2a', text: 'The wine has undergone lees contact', isCorrect: true, feedback: 'Correct.' },
      { id: 'w2b', text: 'The wine has been oak aged', isCorrect: false, feedback: '' },
      { id: 'w2c', text: 'The wine has undergone malolactic fermentation', isCorrect: false, feedback: '' },
      { id: 'w2d', text: 'The wine has been matured in bottle', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_48_nebbiolo_false',
    tier: Tier.Tier2,
    category: 'Italy',
    region: 'Piemonte',
    questionText: 'Which of the following is NOT true of Nebbiolo?',
    explanationText: 'Nebbiolo is rarely blended in its premium appellations (Barolo/Barbaresco are 100% Nebbiolo). Barbera is a separate varietal wine.',
    mentalMapText: 'Italy -> Grapes',
    options: [
      { id: 'w48a', text: 'It makes wines with high tannin and acidity', isCorrect: false, feedback: 'True.' },
      { id: 'w48b', text: 'The grapes ripen slowly', isCorrect: false, feedback: 'True.' },
      { id: 'w48c', text: 'The wines are often oak matured', isCorrect: false, feedback: 'True.' },
      { id: 'w48d', text: 'It is often blended with Barbera', isCorrect: true, feedback: 'Correct (False).' }
    ]
  },
  {
    id: 'wset_124_bierzo',
    tier: Tier.Tier1,
    category: 'Spain',
    region: 'Bierzo',
    questionText: 'What is the key black grape variety of Bierzo?',
    explanationText: 'Mencía is the signature grape of Bierzo.',
    mentalMapText: 'Spain -> Regions',
    options: [
      { id: 'w124a', text: 'Tempranillo', isCorrect: false, feedback: '' },
      { id: 'w124b', text: 'Mencía', isCorrect: true, feedback: 'Correct.' },
      { id: 'w124c', text: 'Monastrell', isCorrect: false, feedback: '' },
      { id: 'w124d', text: 'Graciano', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_92_gran_reserva',
    tier: Tier.Tier2,
    category: 'Spain',
    region: 'Legislation',
    questionText: 'What is the total minimum ageing required for a red Gran Reserva wine in Spain?',
    explanationText: 'Gran Reserva Red requires 60 months (5 years) total aging.',
    mentalMapText: 'Spain -> Legislation',
    options: [
      { id: 'w92a', text: '36 months', isCorrect: false, feedback: 'Reserva.' },
      { id: 'w92b', text: '48 months', isCorrect: false, feedback: '' },
      { id: 'w92c', text: '60 months', isCorrect: true, feedback: 'Correct.' },
      { id: 'w92d', text: '72 months', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_47_soave',
    tier: Tier.Tier1,
    category: 'Italy',
    region: 'Veneto',
    questionText: 'What is the main grape variety grown in Soave?',
    explanationText: 'Garganega is the principal grape of Soave.',
    mentalMapText: 'Italy -> Veneto',
    options: [
      { id: 'w47a', text: 'Garganega', isCorrect: true, feedback: 'Correct.' },
      { id: 'w47b', text: 'Verdicchio', isCorrect: false, feedback: '' },
      { id: 'w47c', text: 'Greco', isCorrect: false, feedback: '' },
      { id: 'w47d', text: 'Cortese', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_130_classico',
    tier: Tier.Tier1,
    category: 'Italy',
    region: 'Legislation',
    questionText: 'What does term "Classico" mean in Italian labelling law?',
    explanationText: 'Classico refers to the original, historic heart of a wine region (often hilly), usually superior to the expanded zone.',
    mentalMapText: 'Italy -> Laws',
    options: [
      { id: 'w130a', text: 'The wine has had more ageing', isCorrect: false, feedback: 'Riserva.' },
      { id: 'w130b', text: 'The wine is made from one grape variety', isCorrect: false, feedback: '' },
      { id: 'w130c', text: 'The part of the region that was originally classified', isCorrect: true, feedback: 'Correct.' },
      { id: 'w130d', text: 'The grapes are sun dried', isCorrect: false, feedback: 'Passito.' }
    ]
  },
  {
    id: 'wset_87_ambient_yeast',
    tier: Tier.Tier1,
    category: 'Winemaking',
    region: 'General',
    questionText: 'Where are ambient yeasts found on a grape berry?',
    explanationText: 'Wild yeasts live on the waxy bloom of the grape skin.',
    mentalMapText: 'Winemaking -> Fermentation',
    options: [
      { id: 'w87ya', text: 'The bloom', isCorrect: true, feedback: 'Correct.' },
      { id: 'w87yb', text: 'The pulp', isCorrect: false, feedback: '' },
      { id: 'w87yc', text: 'The seeds', isCorrect: false, feedback: '' },
      { id: 'w87yd', text: 'The stems', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_85_phylloxera_true',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'General',
    questionText: 'Which one of the following statements is TRUE regarding Phylloxera?',
    explanationText: 'American vines evolved with the pest and are tolerant; grafting European vines onto them is the solution.',
    mentalMapText: 'Viticulture -> Pests',
    options: [
      { id: 'w85a', text: 'American vines are tolerant of it', isCorrect: true, feedback: 'Correct.' },
      { id: 'w85b', text: 'Only chemicals can control it', isCorrect: false, feedback: 'Chemicals don\'t work.' },
      { id: 'w85c', text: 'It does not affect Vitis vinifera', isCorrect: false, feedback: 'It kills Vitis vinifera.' },
      { id: 'w85d', text: 'It first originated in Chile', isCorrect: false, feedback: 'Originated in North America.' }
    ]
  },
  {
    id: 'wset_128_hybrid',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'General',
    questionText: 'What is produced when a Vitis vinifera vine is crossed with a different vine species?',
    explanationText: 'Crossing two different species (e.g., Vinifera x Rupestris) creates a Hybrid.',
    mentalMapText: 'Viticulture -> Breeding',
    options: [
      { id: 'w128a', text: 'A graft', isCorrect: false, feedback: '' },
      { id: 'w128b', text: 'A hybrid', isCorrect: true, feedback: 'Correct.' },
      { id: 'w128c', text: 'A mutation', isCorrect: false, feedback: '' },
      { id: 'w128d', text: 'A clone', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_97_micro_risk',
    tier: Tier.Tier3,
    category: 'Winemaking',
    region: 'General',
    questionText: 'Which one of the following wines is most at risk from microbiological contamination?',
    explanationText: 'Low alcohol, low acidity, and residual sugar provide a feast for microbes. High acid, high alcohol, and dryness are preservatives.',
    mentalMapText: 'Winemaking -> Stability',
    options: [
      { id: 'w97a', text: 'A wine that has undergone depth and surface filtration', isCorrect: false, feedback: 'Stable.' },
      { id: 'w97b', text: 'A 40 Years Old Tawny Port', isCorrect: false, feedback: 'High Alcohol protects it.' },
      { id: 'w97c', text: 'A wine with low alcohol, low acidity and a little residual sugar', isCorrect: true, feedback: 'Correct. Unstable.' },
      { id: 'w97d', text: 'A dry wine with high acidity that has undergone malolactic fermentation', isCorrect: false, feedback: 'Stable.' }
    ]
  },
  {
    id: 'wset_69_rose_methods',
    tier: Tier.Tier2,
    category: 'Winemaking',
    region: 'General',
    questionText: 'Which of the following methods are used in the production of rosé wine? 1. Direct Press 2. Short Maceration 3. Blending Red & White',
    explanationText: 'Blending is generally forbidden in the EU for still rosé (except Champagne). Direct Press and Short Maceration are standard.',
    mentalMapText: 'Winemaking -> Rosé',
    options: [
      { id: 'w69a', text: '1, 2 and 3', isCorrect: false, feedback: 'Blending is restricted.' },
      { id: 'w69b', text: '2 and 3 only', isCorrect: false, feedback: '' },
      { id: 'w69c', text: '1 only', isCorrect: false, feedback: '' },
      { id: 'w69d', text: '1 and 2 only', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_49_packaging_false',
    tier: Tier.Tier2,
    category: 'Service',
    region: 'General',
    questionText: 'Which one of the following statements is FALSE regarding wine packaging?',
    explanationText: 'Cork is not airtight; it allows minute oxygen ingress, which aids bottle aging. Screwcaps are more airtight.',
    mentalMapText: 'Service -> Closures',
    options: [
      { id: 'w49pa', text: 'Screwcaps preserve fruit flavours in wine longer than cork closures', isCorrect: false, feedback: 'True.' },
      { id: 'w49pb', text: 'Bag-in-box wines are only suitable for early consumption', isCorrect: false, feedback: 'True.' },
      { id: 'w49pc', text: 'Synthetic or plastic closures are unsuitable for long term storage of wine', isCorrect: false, feedback: 'True.' },
      { id: 'w49pd', text: 'Cork does not allow the ingress of oxygen in to the bottle', isCorrect: true, feedback: 'Correct (False).' }
    ]
  },
  {
    id: 'wset_103_red_prod_order',
    tier: Tier.Tier1,
    category: 'Winemaking',
    region: 'General',
    questionText: 'Which one of the following is the correct order for red wine production?',
    explanationText: 'Reds are Crushed, then Fermented (with skins), then Pressed. Whites are Crushed, Pressed, then Fermented.',
    mentalMapText: 'Winemaking -> Red vs White',
    options: [
      { id: 'w103a', text: 'Crush, press, ferment, mature', isCorrect: false, feedback: 'White wine order.' },
      { id: 'w103b', text: 'Press, crush, ferment, mature', isCorrect: false, feedback: 'Impossible.' },
      { id: 'w103c', text: 'Press, ferment, crush, mature', isCorrect: false, feedback: 'Impossible.' },
      { id: 'w103d', text: 'Crush, ferment, press, mature', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_65_beaujolais_cru_id',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Beaujolais',
    questionText: 'Which one of the following is a Beaujolais Cru?',
    explanationText: 'Morgon is a Cru. Cornas is N Rhône; Chinon is Loire; Mercurey is Burgundy.',
    mentalMapText: 'France -> Beaujolais',
    options: [
      { id: 'w65a', text: 'Cornas', isCorrect: false, feedback: '' },
      { id: 'w65b', text: 'Chinon', isCorrect: false, feedback: '' },
      { id: 'w65c', text: 'Mercurey', isCorrect: false, feedback: '' },
      { id: 'w65d', text: 'Morgon', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_71_jurancon',
    tier: Tier.Tier2,
    category: 'France',
    region: 'South West',
    questionText: 'What grape variety is used to make Jurançon AC?',
    explanationText: 'Petit Manseng is the high-acid grape used for sweet Jurançon wines.',
    mentalMapText: 'France -> South West',
    options: [
      { id: 'w71a', text: 'Petit Manseng', isCorrect: true, feedback: 'Correct.' },
      { id: 'w71b', text: 'Sémillon', isCorrect: false, feedback: '' },
      { id: 'w71c', text: 'Melon Blanc', isCorrect: false, feedback: '' },
      { id: 'w71d', text: 'Sauvignon Blanc', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_48_alsace_grapes',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Alsace',
    questionText: 'Which of the following grape varieties are commonly grown in Alsace? 1. Riesling 2. Gewurz 3. Pinot Gris 4. Muscat',
    explanationText: 'These are the 4 Noble Varieties of Alsace.',
    mentalMapText: 'France -> Alsace',
    options: [
      { id: 'w48aa', text: '1, 2 and 4 only', isCorrect: false, feedback: '' },
      { id: 'w48ab', text: '1, 2 and 3 only', isCorrect: false, feedback: '' },
      { id: 'w48ac', text: '1, 2, 3 and 4', isCorrect: true, feedback: 'Correct.' },
      { id: 'w48ad', text: '1, 3 and 4 only', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_93_savennieres',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Loire',
    questionText: 'What is Savennières AC?',
    explanationText: 'Savennières produces full-bodied, dry white wines from Chenin Blanc.',
    mentalMapText: 'France -> Loire',
    options: [
      { id: 'w93a', text: 'A sweet white wine', isCorrect: false, feedback: 'Coteaux du Layon is sweet.' },
      { id: 'w93b', text: 'A light fruity red wine', isCorrect: false, feedback: '' },
      { id: 'w93c', text: 'A full-bodied tannic red wine', isCorrect: false, feedback: '' },
      { id: 'w93d', text: 'A dry white wine', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_42_pair_regions',
    tier: Tier.Tier2,
    category: 'France',
    region: 'General',
    questionText: 'Which one of the following pairs is correctly matched?',
    explanationText: 'Menetou-Salon is in the Central Vineyards of the Loire (near Sancerre).',
    mentalMapText: 'France -> Regions',
    options: [
      { id: 'w42a', text: 'Rully and Côte de Nuits', isCorrect: false, feedback: 'Rully is Côte Chalonnaise.' },
      { id: 'w42b', text: 'Tavel and Côte Chalonnaise', isCorrect: false, feedback: 'Tavel is Southern Rhône.' },
      { id: 'w42c', text: 'Cornas and Côte de Beaune', isCorrect: false, feedback: 'Cornas is Northern Rhône.' },
      { id: 'w42d', text: 'Menetou-Salon and Central Vineyards', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_91_condrieu',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Rhône',
    questionText: 'Where is Condrieu AC?',
    explanationText: 'Condrieu is a Northern Rhône appellation for Viognier.',
    mentalMapText: 'France -> Rhône',
    options: [
      { id: 'w91a', text: 'Northern Rhône', isCorrect: true, feedback: 'Correct.' },
      { id: 'w91b', text: 'Loire Valley', isCorrect: false, feedback: '' },
      { id: 'w91c', text: 'Languedoc-Roussillon', isCorrect: false, feedback: '' },
      { id: 'w91d', text: 'Côte d\'Or', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_10_burgundy_seq',
    tier: Tier.Tier3,
    category: 'France',
    region: 'Burgundy',
    questionText: 'Which correct sequence from north to south locates the listed sub-regions of Burgundy?',
    explanationText: 'Vosne-Romanée (North/Nuits) -> Volnay (Middle/Beaune) -> Pouilly-Fuissé (South/Mâconnais).',
    mentalMapText: 'France -> Burgundy -> Map',
    options: [
      { id: 'w10a', text: 'Vosne-Romanée, Volnay, Pouilly-Fuissé', isCorrect: true, feedback: 'Correct.' },
      { id: 'w10b', text: 'Puligny-Montrachet, Pouilly-Fuissé, Meursault', isCorrect: false, feedback: 'Meursault is North of Puligny.' },
      { id: 'w10c', text: 'Meursault, Vougeot, Montagny', isCorrect: false, feedback: 'Vougeot is North of Meursault.' },
      { id: 'w10d', text: 'Givry, Gevrey-Chambertin, Nuits-Saint-Georges', isCorrect: false, feedback: 'Givry is South.' }
    ]
  },
  {
    id: 'wset_100_cab_anjou',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Loire',
    questionText: 'What style of wine is Cabernet d\'Anjou AC?',
    explanationText: 'Cabernet d\'Anjou is a medium-sweet rosé (sweeter than Rosé de Loire or Rosé d\'Anjou).',
    mentalMapText: 'France -> Loire -> Rosé',
    options: [
      { id: 'w100a', text: 'Dry red', isCorrect: false, feedback: '' },
      { id: 'w100b', text: 'Sweet rosé', isCorrect: false, feedback: '' },
      { id: 'w100c', text: 'Medium sweet rosé', isCorrect: true, feedback: 'Correct.' },
      { id: 'w100d', text: 'Dry rosé', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_118_italian_pairs_not',
    tier: Tier.Tier2,
    category: 'Italy',
    region: 'General',
    questionText: 'Which one of the following pairs is NOT correctly matched?',
    explanationText: 'Valpolicella is made from Corvina, not Dolcetto (which is Piemonte).',
    mentalMapText: 'Italy -> Matches',
    options: [
      { id: 'w118na', text: 'Salice Salentino DOC and Negroamaro', isCorrect: false, feedback: 'Correct match.' },
      { id: 'w118nb', text: 'Soave DOC and Garganega', isCorrect: false, feedback: 'Correct match.' },
      { id: 'w118nc', text: 'Orvieto DOC and Grechetto', isCorrect: false, feedback: 'Correct match.' },
      { id: 'w118nd', text: 'Valpolicella DOC and Dolcetto', isCorrect: true, feedback: 'Correct (Mismatch). Valpolicella is Corvina.' }
    ]
  },
  {
    id: 'wset_78_gran_selezione',
    tier: Tier.Tier2,
    category: 'Italy',
    region: 'Tuscany',
    questionText: 'Which Italian wine can use the designation Gran Selezione?',
    explanationText: 'Gran Selezione is the top tier of Chianti Classico, above Riserva.',
    mentalMapText: 'Italy -> Chianti Classico',
    options: [
      { id: 'w78ga', text: 'Amarone della Valpolicella DOCG', isCorrect: false, feedback: '' },
      { id: 'w78gb', text: 'Chianti Classico DOCG', isCorrect: true, feedback: 'Correct.' },
      { id: 'w78gc', text: 'Barolo DOCG', isCorrect: false, feedback: '' },
      { id: 'w78gd', text: 'Taurasi DOCG', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_71_nero_davola',
    tier: Tier.Tier1,
    category: 'Italy',
    region: 'Sicily',
    questionText: 'In which region of Italy is Nero d\'Avola a dominant black grape variety?',
    explanationText: 'Nero d\'Avola is the signature black grape of Sicily.',
    mentalMapText: 'Italy -> Sicily',
    options: [
      { id: 'w71na', text: 'Basilicata', isCorrect: false, feedback: 'Aglianico.' },
      { id: 'w71nb', text: 'Tuscany', isCorrect: false, feedback: 'Sangiovese.' },
      { id: 'w71nc', text: 'Sicily', isCorrect: true, feedback: 'Correct.' },
      { id: 'w71nd', text: 'Campania', isCorrect: false, feedback: 'Aglianico/Fiano.' }
    ]
  },
  {
    id: 'wset_70_graciano',
    tier: Tier.Tier3,
    category: 'Spain',
    region: 'Rioja',
    questionText: 'What does Graciano add to a blend of red Rioja?',
    explanationText: 'Graciano is valued for its concentrated black fruit aromas, high acidity, and tannin, providing structure for aging.',
    mentalMapText: 'Spain -> Rioja -> Grapes',
    options: [
      { id: 'w70a', text: 'Light red fruit aromas, low acidity', isCorrect: false, feedback: '' },
      { id: 'w70b', text: 'Aromatic aromas with baked red fruit', isCorrect: false, feedback: 'Garnacha style.' },
      { id: 'w70c', text: 'Concentrated black fruit aromas, acidity and tannin', isCorrect: true, feedback: 'Correct.' },
      { id: 'w70d', text: 'Fresh red fruit aromas with herbaceousness', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_115_rueda',
    tier: Tier.Tier1,
    category: 'Spain',
    region: 'Rueda',
    questionText: 'What is the traditional grape variety grown in Rueda?',
    explanationText: 'Verdejo is the aromatic white grape of Rueda.',
    mentalMapText: 'Spain -> Rueda',
    options: [
      { id: 'w115ra', text: 'Verdelho', isCorrect: false, feedback: 'Madeira/Australia.' },
      { id: 'w115rb', text: 'Viura', isCorrect: false, feedback: 'Rioja.' },
      { id: 'w115rc', text: 'Vernaccia', isCorrect: false, feedback: 'Italy.' },
      { id: 'w115rd', text: 'Verdejo', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_49_alvarinho',
    tier: Tier.Tier1,
    category: 'Portugal',
    region: 'Vinho Verde',
    questionText: 'Which one of the following Portuguese wine regions uses Alvarinho for white wine?',
    explanationText: 'Alvarinho (Albariño) is used in the Monção e Melgaço sub-region of Vinho Verde.',
    mentalMapText: 'Portugal -> Vinho Verde',
    options: [
      { id: 'w49aa', text: 'Bairrada', isCorrect: false, feedback: '' },
      { id: 'w49ab', text: 'Vinho Verde', isCorrect: true, feedback: 'Correct.' },
      { id: 'w49ac', text: 'Dâo', isCorrect: false, feedback: '' },
      { id: 'w49ad', text: 'Alentejo', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_41_white_zin',
    tier: Tier.Tier1,
    category: 'USA',
    region: 'California',
    questionText: 'What style of wine is White Zinfandel?',
    explanationText: 'White Zinfandel is a blush (pale rosé) wine, typically medium-sweet with low alcohol.',
    mentalMapText: 'USA -> Styles',
    options: [
      { id: 'w41a', text: 'Dry, full-bodied red', isCorrect: false, feedback: '' },
      { id: 'w41b', text: 'Dry white with high acidity', isCorrect: false, feedback: '' },
      { id: 'w41c', text: 'Sweet white', isCorrect: false, feedback: '' },
      { id: 'w41d', text: 'Pale rosé, medium sweet, low in alcohol', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_166_finger_lakes',
    tier: Tier.Tier1,
    category: 'USA',
    region: 'New York',
    questionText: 'Where is Finger Lakes AVA located in the United States of America?',
    explanationText: 'Finger Lakes is in upstate New York.',
    mentalMapText: 'USA -> New York',
    options: [
      { id: 'w166a', text: 'Oregon', isCorrect: false, feedback: '' },
      { id: 'w166b', text: 'New York State', isCorrect: true, feedback: 'Correct.' },
      { id: 'w166c', text: 'Washington State', isCorrect: false, feedback: '' },
      { id: 'w166d', text: 'California', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_56_argentina_regions',
    tier: Tier.Tier1,
    category: 'Argentina',
    region: 'General',
    questionText: 'Which of the following are wine producing regions in Argentina? 1. Salta 2. San Juan 3. Mendoza 4. Patagonia',
    explanationText: 'All listed options are major wine regions in Argentina.',
    mentalMapText: 'Argentina -> Geography',
    options: [
      { id: 'w56a', text: '1, 2 and 4 only', isCorrect: false, feedback: '' },
      { id: 'w56b', text: '1, 3 and 4 only', isCorrect: false, feedback: '' },
      { id: 'w56c', text: '1, 2 and 3 only', isCorrect: false, feedback: '' },
      { id: 'w56d', text: '1, 2, 3 and 4', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_64_aus_bulk',
    tier: Tier.Tier2,
    category: 'Australia',
    region: 'General',
    questionText: 'Which of the following wine producing regions provide the majority of wines for high volume brands from Australia? 1. Riverina 2. Barossa Valley 3. Murray Darling 4. Riverland',
    explanationText: 'The Riverland, Murray Darling, and Riverina are the irrigated inland regions producing high volume fruit. Barossa is premium.',
    mentalMapText: 'Australia -> Zones',
    options: [
      { id: 'w64aa', text: '2 and 4 only', isCorrect: false, feedback: '' },
      { id: 'w64ab', text: '2 and 3 only', isCorrect: false, feedback: '' },
      { id: 'w64ac', text: '1 and 3 only', isCorrect: false, feedback: 'Missing Riverland.' },
      { id: 'w64ad', text: '1, 3 and 4 only', isCorrect: true, feedback: 'Correct. Excluding Barossa.' }
    ]
  },
  {
    id: 'wset_35_hunter_semillon_style',
    tier: Tier.Tier3,
    category: 'Australia',
    region: 'Hunter Valley',
    questionText: 'What style of wine might be a typical Hunter Valley Semillon?',
    explanationText: 'Hunter Semillon is unique: harvested early for low alcohol/high acid, unoaked, developing toast/honey with age.',
    mentalMapText: 'Australia -> Styles',
    options: [
      { id: 'w35a', text: 'Light bodied, low in alcohol with high acidity', isCorrect: true, feedback: 'Correct.' },
      { id: 'w35b', text: 'Light bodied, low in acid with herbaceous flavours', isCorrect: false, feedback: '' },
      { id: 'w35c', text: 'Full-bodied, unoaked with tropical fruit', isCorrect: false, feedback: '' },
      { id: 'w35d', text: 'Full-bodied, oaked', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_151_pairs_aus',
    tier: Tier.Tier2,
    category: 'Australia',
    region: 'General',
    questionText: 'Which of the following pairs are correctly matched?',
    explanationText: 'Clare Valley is world famous for Riesling. Hunter is Semillon/Shiraz; Barossa is Shiraz; McLaren is Grenache/Shiraz.',
    mentalMapText: 'Australia -> Regions',
    options: [
      { id: 'w151a', text: 'Barossa Valley and Sauvignon Blanc', isCorrect: false, feedback: '' },
      { id: 'w151b', text: 'McLaren Vale and Riesling', isCorrect: false, feedback: '' },
      { id: 'w151c', text: 'Hunter Valley and Grenache', isCorrect: false, feedback: '' },
      { id: 'w151d', text: 'Clare Valley and Riesling', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_86_marlborough_sb',
    tier: Tier.Tier2,
    category: 'New Zealand',
    region: 'Marlborough',
    questionText: 'What style of wine is usually associated with a New Zealand, Marlborough Sauvignon Blanc?',
    explanationText: 'Classic Marlborough SB is high acid, pronounced intensity, with pungent aromas of elderflower, passion fruit, and gooseberry.',
    mentalMapText: 'New Zealand -> Styles',
    options: [
      { id: 'w86a', text: 'Medium acidity, light intensity with brioche', isCorrect: false, feedback: '' },
      { id: 'w86b', text: 'High acidity, pronounced intensity with elderflower and passion fruit', isCorrect: true, feedback: 'Correct.' },
      { id: 'w86c', text: 'Medium acidity, medium intensity with vanilla oak', isCorrect: false, feedback: '' },
      { id: 'w86d', text: 'High acidity, light intensity with mango', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_39_cremant',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Sparkling',
    questionText: 'In which of the following regions is crémant produced? 1. Loire 2. Alsace 3. Bourgogne',
    explanationText: 'Crémant is produced in all three: Crémant de Loire, Crémant d\'Alsace, and Crémant de Bourgogne.',
    mentalMapText: 'France -> Sparkling',
    options: [
      { id: 'w39a', text: '1 and 2 only', isCorrect: false, feedback: '' },
      { id: 'w39b', text: '1, 2 and 3', isCorrect: true, feedback: 'Correct.' },
      { id: 'w39c', text: '2 and 3 only', isCorrect: false, feedback: '' },
      { id: 'w39d', text: '1 and 3 only', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_3_sparkling_single_ferment',
    tier: Tier.Tier2,
    category: 'Sparkling',
    region: 'Italy',
    questionText: 'Which one of the following methods of sparkling wine production has only one alcoholic fermentation?',
    explanationText: 'The Asti method involves a single fermentation in a tank that is stopped by chilling to retain sugar.',
    mentalMapText: 'Sparkling -> Methods',
    options: [
      { id: 'w3sa', text: 'Transfer', isCorrect: false, feedback: 'Two fermentations.' },
      { id: 'w3sb', text: 'Traditional', isCorrect: false, feedback: 'Two fermentations.' },
      { id: 'w3sc', text: 'Tank', isCorrect: false, feedback: 'Two fermentations (usually base wine + sugar/yeast).' },
      { id: 'w3sd', text: 'Asti method', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_68_doux',
    tier: Tier.Tier2,
    category: 'Sparkling',
    region: 'Legislation',
    questionText: 'What is the level of residual sugar in a sparkling wine labelled as doux?',
    explanationText: 'Doux indicates 50+ g/L of sugar.',
    mentalMapText: 'Sparkling -> Sweetness',
    options: [
      { id: 'w68a', text: '17-32 g/L', isCorrect: false, feedback: 'Sec/Dry.' },
      { id: 'w68b', text: '32-50 g/L', isCorrect: false, feedback: 'Demi-Sec.' },
      { id: 'w68c', text: '50+ g/L', isCorrect: true, feedback: 'Correct.' },
      { id: 'w68d', text: '12-17 g/L', isCorrect: false, feedback: 'Extra Dry.' }
    ]
  },
  {
    id: 'wset_60_palo_cortado',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'What is Palo Cortado?',
    explanationText: 'Palo Cortado is a rare style of Sherry that combines the finesse of Amontillado with the body of Oloroso.',
    mentalMapText: 'Spain -> Sherry -> Styles',
    options: [
      { id: 'w60a', text: 'A terracing system in the Douro Valley', isCorrect: false, feedback: 'Patamares.' },
      { id: 'w60b', text: 'A rare style of Sherry', isCorrect: true, feedback: 'Correct.' },
      { id: 'w60c', text: 'A fortified Muscat', isCorrect: false, feedback: '' },
      { id: 'w60d', text: 'A soil type in the Douro Valley', isCorrect: false, feedback: 'Schist.' }
    ]
  },
  {
    id: 'wset_97_px_aromas',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Which one of the following fortified wines has aromas of dried fruit, coffee and liquorice?',
    explanationText: 'Pedro Ximénez (PX) is intensely sweet with aromas of dried fruit (raisin/fig), coffee, and liquorice.',
    mentalMapText: 'Spain -> Sherry -> Styles',
    options: [
      { id: 'w97fa', text: 'Pale Cream', isCorrect: false, feedback: 'Fruity/Flor.' },
      { id: 'w97fb', text: 'Amontillado', isCorrect: false, feedback: 'Nutty/Tobacco.' },
      { id: 'w97fc', text: 'Vintage Port', isCorrect: false, feedback: 'Black fruit.' },
      { id: 'w97fd', text: 'Pedro Ximénez', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_58_port_extraction',
    tier: Tier.Tier3,
    category: 'Fortified',
    region: 'Douro',
    questionText: 'Which one of the following methods of extraction for Port production may be used? 1. Foot treading 2. Autovinifiers 3. Piston plungers',
    explanationText: 'All these methods are used in the Douro to maximize extraction during the short fermentation window.',
    mentalMapText: 'Portugal -> Port Production',
    options: [
      { id: 'w58a', text: '1, 2 and 3 only', isCorrect: true, feedback: 'Correct.' },
      { id: 'w58b', text: '1 and 2 only', isCorrect: false, feedback: '' },
      { id: 'w58c', text: '2 and 3 only', isCorrect: false, feedback: '' },
      { id: 'w58d', text: '1 and 3 only', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_135_sherry_bio',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Which of the following Sherries have undergone biological ageing? 1. Fino 2. Manzanilla 3. Pale Cream 4. Oloroso',
    explanationText: 'Fino and Manzanilla are biologically aged. Pale Cream is made from Fino/Manzanilla. Oloroso is oxidative.',
    mentalMapText: 'Spain -> Sherry -> Aging',
    options: [
      { id: 'w135a', text: '1, 2 and 3 only', isCorrect: true, feedback: 'Correct. Pale Cream is sweetened Fino.' },
      { id: 'w135b', text: '2, 3 and 4 only', isCorrect: false, feedback: 'Oloroso is oxidative.' },
      { id: 'w135c', text: '1, 2, 3 and 4', isCorrect: false, feedback: '' },
      { id: 'w135d', text: '1, 2 and 4 only', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_50_solera_order',
    tier: Tier.Tier3,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Place in the correct order the sequence of events of the solera system?',
    explanationText: 'Wine goes from Sobretabla (new wine) -> Criaderas (nursery scales) -> Solera (oldest scale, for bottling).',
    mentalMapText: 'Spain -> Sherry -> Solera',
    options: [
      { id: 'w50sa', text: 'Criaderas, sobretabla, solera', isCorrect: false, feedback: '' },
      { id: 'w50sb', text: 'Criaderas, solera, sobretabla', isCorrect: false, feedback: '' },
      { id: 'w50sc', text: 'Sobretabla, solera, criaderas', isCorrect: false, feedback: '' },
      { id: 'w50sd', text: 'Sobretabla, criaderas, solera', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_141_muscadet_temp',
    tier: Tier.Tier1,
    category: 'Service',
    region: 'Loire',
    questionText: 'At what temperature is Muscadet best served?',
    explanationText: 'Muscadet is a light-bodied white wine, best served Chilled (7-10°C).',
    mentalMapText: 'Service -> Temperature',
    options: [
      { id: 'w141a', text: 'Room temperature of 15-18°C', isCorrect: false, feedback: 'Red wine.' },
      { id: 'w141b', text: 'Well chilled at 6-8°C', isCorrect: false, feedback: 'Sweet wines.' },
      { id: 'w141c', text: 'Lightly chilled at 10-13°C', isCorrect: false, feedback: 'Full-bodied white.' },
      { id: 'w141d', text: 'Chilled at 7-10°C', isCorrect: true, feedback: 'Correct. Light-bodied white.' }
    ]
  },
  {
    id: 'wset_13_tca',
    tier: Tier.Tier1,
    category: 'Tasting',
    region: 'Faults',
    questionText: 'What is Trichloroanisole?',
    explanationText: 'Trichloroanisole (TCA) is the chemical responsible for Cork Taint (moldy/cardboard smell).',
    mentalMapText: 'Tasting -> Faults',
    options: [
      { id: 'w13a', text: 'An ambient yeast', isCorrect: false, feedback: '' },
      { id: 'w13b', text: 'A fining agent', isCorrect: false, feedback: '' },
      { id: 'w13c', text: 'Cork taint', isCorrect: true, feedback: 'Correct.' },
      { id: 'w13d', text: 'A deacidification agent', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_71_jerez_wind',
    tier: Tier.Tier2,
    category: 'Spain',
    region: 'Jerez',
    questionText: 'What is the name of the cool humid westerly wind that can affect vineyards in Jerez?',
    explanationText: 'The Poniente brings cool humid air from the Atlantic. The Levante is the hot dry wind from the east.',
    mentalMapText: 'Spain -> Jerez -> Climate',
    options: [
      { id: 'w71wa', text: 'Levante', isCorrect: false, feedback: 'Hot dry wind.' },
      { id: 'w71wb', text: 'Mistral', isCorrect: false, feedback: 'Rhône.' },
      { id: 'w71wc', text: 'Poniente', isCorrect: true, feedback: 'Correct.' },
      { id: 'w71wd', text: 'Cape Doctor', isCorrect: false, feedback: 'South Africa.' }
    ]
  },
  {
    id: 'wset_99_douro_lightest',
    tier: Tier.Tier2,
    category: 'Portugal',
    region: 'Douro',
    questionText: 'Which of the sub-regions of the Douro Valley makes the lightest wines?',
    explanationText: 'Baixo Corgo is the furthest west, wettest, and coolest sub-region, producing lighter wines.',
    mentalMapText: 'Portugal -> Douro',
    options: [
      { id: 'w99a', text: 'Baixo Corgo', isCorrect: true, feedback: 'Correct.' },
      { id: 'w99b', text: 'Douro Superior', isCorrect: false, feedback: 'Hottest/Driest.' },
      { id: 'w99c', text: 'Cima Corgo', isCorrect: false, feedback: 'Heart of the Douro.' },
      { id: 'w99d', text: 'Villa Nova do Gaia', isCorrect: false, feedback: 'City on the coast.' }
    ]
  },
  {
    id: 'wset_44_reserve_tawny',
    tier: Tier.Tier3,
    category: 'Fortified',
    region: 'Douro',
    questionText: 'What is the minimum ageing requirement for a Reserve Tawny port?',
    explanationText: 'Reserve Tawny must be aged in wood for at least 6 years (official requirement usually stated as 7 years in older texts, but 6-7 is the benchmark).',
    mentalMapText: 'Portugal -> Port Laws',
    options: [
      { id: 'w44rta', text: '2 years', isCorrect: false, feedback: '' },
      { id: 'w44rtb', text: '4 years', isCorrect: false, feedback: '' },
      { id: 'w44rtc', text: '6 years', isCorrect: true, feedback: 'Correct (often cited as ~7).' },
      { id: 'w44rtd', text: '8 years', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_1_sherry_ox_fort',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'What abv are Sherry wines destined for oxidative ageing fortified to?',
    explanationText: 'Wines for oxidative aging (Oloroso) are fortified to 17% to kill the flor yeast.',
    mentalMapText: 'Spain -> Sherry -> Production',
    options: [
      { id: 'w1a', text: '17%', isCorrect: true, feedback: 'Correct.' },
      { id: 'w1b', text: '18%', isCorrect: false, feedback: '' },
      { id: 'w1c', text: '19%', isCorrect: false, feedback: '' },
      { id: 'w1d', text: '20%', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_105_rutherglen',
    tier: Tier.Tier1,
    category: 'Australia',
    region: 'Rutherglen',
    questionText: 'Which region of Australia is associated with fully developed, aged Muscats?',
    explanationText: 'Rutherglen is famous for its fortified Muscats.',
    mentalMapText: 'Australia -> Fortified',
    options: [
      { id: 'w105a', text: 'Riverina', isCorrect: false, feedback: 'Botrytis Semillon.' },
      { id: 'w105b', text: 'Heathcote', isCorrect: false, feedback: 'Shiraz.' },
      { id: 'w105c', text: 'Great Southern', isCorrect: false, feedback: 'Riesling/Cabernet.' },
      { id: 'w105d', text: 'Rutherglen', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_viti_risk_false',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'General',
    questionText: 'Which one of the following statements is FALSE?',
    explanationText: 'In areas of low water availability, vines are planted at low densities to ensure each vine has access to sufficient water from the soil. High density is used in regions with high nutrients and water to create competition.',
    mentalMapText: 'Viticulture -> Vineyard Management',
    options: [
      { id: 'v1a', text: 'An entire crop in a vineyard can be destroyed by hail', isCorrect: false, feedback: 'True statement.' },
      { id: 'v1b', text: 'The risk of sunburnt grapes can be reduced by the use of canopy management', isCorrect: false, feedback: 'True statement.' },
      { id: 'v1c', text: 'Grape vines can be killed by winter freeze', isCorrect: false, feedback: 'True statement.' },
      { id: 'v1d', text: 'A grape grower will plant vines at high densities in areas of low water availability', isCorrect: true, feedback: 'Correct (this is False). Low water requires low density.' }
    ]
  },
  {
    id: 'wset_viti_irrigation',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'General',
    questionText: 'Which one of the following statements is TRUE regarding irrigation?',
    explanationText: 'Sprinklers can provide frost protection by releasing latent heat as water freezes on the vines. Drip irrigation is the most expensive to install but efficient for water use.',
    mentalMapText: 'Viticulture -> Irrigation',
    options: [
      { id: 'v2a', text: 'Sprinklers can reduce the risk of disease', isCorrect: false, feedback: 'Sprinklers increase humidity and rot risk.' },
      { id: 'v2b', text: 'Drip irrigation is the cheapest option', isCorrect: false, feedback: 'It is the most expensive to install.' },
      { id: 'v2c', text: 'Flood irrigation is used on the steep slopes of the Mosel', isCorrect: false, feedback: 'Flood irrigation requires flat land.' },
      { id: 'v2d', text: 'Sprinklers, if correctly designed can be used for frost protection', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_viti_spring_frost',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'General',
    questionText: 'Which of the following can be used in a vineyard as protection against spring frost? (1. Sprinklers 2. Heaters 3. Wind machines 4. Netting)',
    explanationText: 'Sprinklers, heaters, and wind machines (which pull down warm air) are all frost protection methods. Netting is used for birds or hail.',
    mentalMapText: 'Viticulture -> Hazards',
    options: [
      { id: 'v3a', text: '1, 2 and 3 only', isCorrect: true, feedback: 'Correct.' },
      { id: 'v3b', text: '2 and 4 only', isCorrect: false, feedback: '' },
      { id: 'v3c', text: '1, 2 and 4 only', isCorrect: false, feedback: '' },
      { id: 'v3d', text: '1 and 3 only', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_fault_reduction',
    tier: Tier.Tier1,
    category: 'Tasting',
    region: 'Faults',
    questionText: 'What stinky character does Reduction give to a wine?',
    explanationText: 'Reduction occurs in an oxygen-deprived environment, producing volatile sulfur compounds like H2S (rotten eggs) or mercaptans (cabbage).',
    mentalMapText: 'Tasting -> Faults',
    options: [
      { id: 'f1a', text: 'Damp cardboard', isCorrect: false, feedback: 'TCA/Cork taint.' },
      { id: 'f1b', text: 'Caramel and toffee', isCorrect: false, feedback: 'Oxidation.' },
      { id: 'f1c', text: 'Rotten eggs and boiled cabbage', isCorrect: true, feedback: 'Correct.' },
      { id: 'f1d', text: 'Mould and vinegar', isCorrect: false, feedback: 'VA/Oxidation.' }
    ]
  },
  {
    id: 'wset_make_fining',
    tier: Tier.Tier1,
    category: 'Winemaking',
    region: 'General',
    questionText: 'In wine production, what is the purpose of fining?',
    explanationText: 'Fining involves adding a clarifying agent that binds with microscopic particles, causing them to precipitate out for easier removal.',
    mentalMapText: 'Winemaking -> Clarification',
    options: [
      { id: 'm1a', text: 'To add flavour to the wine', isCorrect: false, feedback: '' },
      { id: 'm1b', text: 'To filter the wine', isCorrect: false, feedback: 'Filtration is a separate physical process.' },
      { id: 'm1c', text: 'To clarify the wine', isCorrect: true, feedback: 'Correct.' },
      { id: 'm1d', text: 'To remove tartrate crystals', isCorrect: false, feedback: 'Cold stabilization removes tartrates.' }
    ]
  },
  {
    id: 'wset_make_red_extraction_not',
    tier: Tier.Tier1,
    category: 'Winemaking',
    region: 'General',
    questionText: 'In red winemaking, which one of the following methods would NOT help in the extraction of colour?',
    explanationText: 'Malolactic Fermentation (MLF) converts malic acid to lactic acid but does not extract colour. Pumping over, rack and return, and autovinification are all extraction techniques.',
    mentalMapText: 'Winemaking -> Red Extraction',
    options: [
      { id: 'm2a', text: 'Pumping over', isCorrect: false, feedback: 'Increases extraction.' },
      { id: 'm2b', text: 'Autovinification', isCorrect: false, feedback: 'Increases extraction.' },
      { id: 'm2c', text: 'Malolactic fermentation', isCorrect: true, feedback: 'Correct. This softens acid but does not extract pigment.' },
      { id: 'm2d', text: 'Rack and return', isCorrect: false, feedback: 'Increases extraction.' }
    ]
  },
  {
    id: 'wset_cornas_white_not',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Rhône',
    questionText: 'Which one of the following CANNOT be made as a white wine?',
    explanationText: 'Cornas is an appellation in the Northern Rhône that must be 100% Syrah (Red). Pessac-Léognan, Hermitage, and Entre-Deux-Mers all produce white wine.',
    mentalMapText: 'France -> Rhône -> Cornas',
    options: [
      { id: 'r1a', text: 'Pessac-Léognan', isCorrect: false, feedback: '' },
      { id: 'r1b', text: 'Hermitage', isCorrect: false, feedback: 'Produces white from Marsanne/Roussanne.' },
      { id: 'r1c', text: 'Entre-Deux-Mers', isCorrect: false, feedback: 'Exclusively White.' },
      { id: 'r1d', text: 'Cornas', isCorrect: true, feedback: 'Correct. Cornas is Red only.' }
    ]
  },
  {
    id: 'wset_burgundy_pairs_extra',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Burgundy',
    questionText: 'Which one of the following pairs is correctly matched?',
    explanationText: 'Coteaux du Layon is an appellation for sweet Chenin Blanc in Anjou-Saumur. Montagny is Côte Chalonnaise, not Côte d\'Or.',
    mentalMapText: 'France -> Loire -> Anjou',
    options: [
      { id: 'b1a', text: 'Montagny and Côte d\'Or', isCorrect: false, feedback: 'Montagny is Côte Chalonnaise.' },
      { id: 'b1b', text: 'Fleurie and Touraine', isCorrect: false, feedback: 'Fleurie is Beaujolais.' },
      { id: 'b1c', text: 'Moulin-à-Vent and Mâconnais', isCorrect: false, feedback: 'Moulin-à-Vent is Beaujolais.' },
      { id: 'b1d', text: 'Coteaux du Layon and Anjou-Saumur', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_bordeaux_cru_classe',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Bordeaux',
    questionText: 'Which of the following appellations are associated with the term cru classé? (1. Pomerol 2. Saint Julien 3. Saint-Émilion 4. Entre-Deux-Mers)',
    explanationText: 'Pomerol has no official classification. Entre-Deux-Mers is for white wine and lacks Cru Classé status. Saint Julien (1855) and Saint-Émilion have classification systems.',
    mentalMapText: 'France -> Bordeaux -> Classification',
    options: [
      { id: 'bx1a', text: '3 and 4 only', isCorrect: false, feedback: '' },
      { id: 'bx1b', text: '2 and 3 only', isCorrect: true, feedback: 'Correct.' },
      { id: 'bx1c', text: '1 and 4 only', isCorrect: false, feedback: '' },
      { id: 'bx1d', text: '2 and 4 only', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_germany_dornfelder',
    tier: Tier.Tier1,
    category: 'Germany',
    region: 'General',
    questionText: 'What is Dornfelder?',
    explanationText: 'Dornfelder is a black grape variety widely grown in Germany, known for its deep colour and high yields.',
    mentalMapText: 'Germany -> Grapes',
    options: [
      { id: 'g1a', text: 'A black grape variety from Germany', isCorrect: true, feedback: 'Correct.' },
      { id: 'g1b', text: 'A white grape variety from Germany', isCorrect: false, feedback: '' },
      { id: 'g1c', text: 'A black grape variety from Italy', isCorrect: false, feedback: '' },
      { id: 'g1d', text: 'A white grape variety from Portugal', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_italy_white_greco',
    tier: Tier.Tier1,
    category: 'Italy',
    region: 'Campania',
    questionText: 'Which one of the following is a dry white Italian wine?',
    explanationText: 'Greco di Tufo (Campania) is a dry white wine. Barbera, Aglianico, and Taurasi are all reds.',
    mentalMapText: 'Italy -> Campania',
    options: [
      { id: 'i1a', text: 'Barbera d\'Asti DOCG', isCorrect: false, feedback: 'Red.' },
      { id: 'i1b', text: 'Aglianico del Vulture DOC', isCorrect: false, feedback: 'Red.' },
      { id: 'i1c', text: 'Taurasi DOCG', isCorrect: false, feedback: 'Red.' },
      { id: 'i1d', text: 'Greco di Tufo DOCG', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_italy_pair_brunello',
    tier: Tier.Tier1,
    category: 'Italy',
    region: 'Tuscany',
    questionText: 'Which one of the following pairs is correctly matched?',
    explanationText: 'Brunello di Montalcino is a famous DOCG in Tuscany. Orvieto is in Umbria, not Lazio; Salice Salentino is in Puglia.',
    mentalMapText: 'Italy -> Tuscany',
    options: [
      { id: 'i2a', text: 'Abruzzo and Verdicchio dei Castelli di Jesi DOC', isCorrect: false, feedback: 'Verdicchio is in Marche.' },
      { id: 'i2b', text: 'Tuscany and Brunello di Montalcino DOCG', isCorrect: true, feedback: 'Correct.' },
      { id: 'i2c', text: 'Campania and Salice Salentino DOC', isCorrect: false, feedback: 'Salice is in Puglia.' },
      { id: 'i2d', text: 'Lazio and Orvieto DOC', isCorrect: false, feedback: 'Orvieto is Umbria (mostly).' }
    ]
  },
  {
    id: 'wset_spain_rioja_shield',
    tier: Tier.Tier1,
    category: 'Spain',
    region: 'Rioja',
    questionText: 'What natural feature shields Rioja from the worst of the Atlantic weather?',
    explanationText: 'The Cantabrian Mountains provide a rain shadow for Rioja, protecting it from the Atlantic influence.',
    mentalMapText: 'Spain -> Rioja -> Geography',
    options: [
      { id: 's1a', text: 'Cascade Mountains', isCorrect: false, feedback: 'USA.' },
      { id: 's1b', text: 'Sierra Nevada', isCorrect: false, feedback: 'Southern Spain/California.' },
      { id: 's1c', text: 'Pyrenees', isCorrect: false, feedback: 'Further East.' },
      { id: 's1d', text: 'Cantabrian Mountains', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_spain_airen',
    tier: Tier.Tier1,
    category: 'Spain',
    region: 'General',
    questionText: 'What is the most planted grape variety in Spain?',
    explanationText: 'Airén is the most planted variety in Spain (and one of the most in the world), used mainly for Brandy and inexpensive white wine.',
    mentalMapText: 'Spain -> Grapes',
    options: [
      { id: 's2a', text: 'Tempranillo', isCorrect: false, feedback: 'Most planted black grape, but Airén is #1 overall.' },
      { id: 's2b', text: 'Monastrell', isCorrect: false, feedback: '' },
      { id: 's2c', text: 'Airén', isCorrect: true, feedback: 'Correct.' },
      { id: 's2d', text: 'Viura', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_portugal_alentejo_igp',
    tier: Tier.Tier1,
    category: 'Portugal',
    region: 'Alentejo',
    questionText: 'In which country is the Vinho Regional Alentejano wine producing region?',
    explanationText: 'Vinho Regional Alentejano is the IGP category for the Alentejo region in Portugal.',
    mentalMapText: 'Portugal -> Regions',
    options: [
      { id: 'p1a', text: 'Portugal', isCorrect: true, feedback: 'Correct.' },
      { id: 'p1b', text: 'Greece', isCorrect: false, feedback: '' },
      { id: 'p1c', text: 'Italy', isCorrect: false, feedback: '' },
      { id: 'p1d', text: 'Spain', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_chile_coquimbo_valleys',
    tier: Tier.Tier2,
    category: 'Chile',
    region: 'Coquimbo',
    questionText: 'In which region of Chile are Elqui Valley and Limarí Valley located?',
    explanationText: 'Elqui and Limarí are the principal valleys of the Coquimbo region in Northern Chile.',
    mentalMapText: 'Chile -> Coquimbo',
    options: [
      { id: 'cl1a', text: 'Central Valley', isCorrect: false, feedback: '' },
      { id: 'cl1b', text: 'Southern', isCorrect: false, feedback: '' },
      { id: 'cl1c', text: 'Aconcagua', isCorrect: false, feedback: '' },
      { id: 'cl1d', text: 'Coquimbo', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_sa_chenin_planted',
    tier: Tier.Tier1,
    category: 'South Africa',
    region: 'General',
    questionText: 'Which grape variety is the most planted in South Africa?',
    explanationText: 'Chenin Blanc (historically called Steen) is the most planted variety in South Africa.',
    mentalMapText: 'South Africa -> Grapes',
    options: [
      { id: 'sa1a', text: 'Chenin Blanc', isCorrect: true, feedback: 'Correct.' },
      { id: 'sa1b', text: 'Chardonnay', isCorrect: false, feedback: '' },
      { id: 'sa1c', text: 'Pinotage', isCorrect: false, feedback: '' },
      { id: 'sa1d', text: 'Colombard', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_aus_pn_premium',
    tier: Tier.Tier2,
    category: 'Australia',
    region: 'General',
    questionText: 'Which of the following regions produces premium quality Pinot Noir? (1. Mornington Peninsula 2. Coonawarra 3. Yarra Valley 4. Great Southern)',
    explanationText: 'Mornington Peninsula and Yarra Valley are cool maritime regions ideal for Pinot Noir. Coonawarra is famous for Cabernet; Great Southern is Riesling/Cabernet.',
    mentalMapText: 'Australia -> Cool Climate Regions',
    options: [
      { id: 'au1a', text: '2 and 3 only', isCorrect: false, feedback: '' },
      { id: 'au1b', text: '1 and 2 only', isCorrect: false, feedback: '' },
      { id: 'au1c', text: '2 and 4 only', isCorrect: false, feedback: '' },
      { id: 'au1d', text: '1 and 3 only', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_nz_hawkes_soil',
    tier: Tier.Tier2,
    category: 'New Zealand',
    region: 'Hawke\'s Bay',
    questionText: 'What is the name of the soil in Hawke\'s Bay which has developed a particular high reputation for black grape varieties?',
    explanationText: 'Gimblett Gravels is the famous stony soil in Hawke\'s Bay that retains heat and provides drainage for premium Syrah and Bordeaux blends.',
    mentalMapText: 'New Zealand -> Hawke\'s Bay',
    options: [
      { id: 'nz1a', text: 'Terra Rossa', isCorrect: false, feedback: 'Coonawarra.' },
      { id: 'nz1b', text: 'Llicorella', isCorrect: false, feedback: 'Priorat.' },
      { id: 'nz1c', text: 'Gimblett Gravels', isCorrect: true, feedback: 'Correct.' },
      { id: 'nz1d', text: 'Schist bedrock', isCorrect: false, feedback: 'Douro.' }
    ]
  },
  {
    id: 'wset_cava_town',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Spain',
    questionText: 'Cava comes from vineyards centred around which town?',
    explanationText: 'Sant Sadurní d\'Anoia is the historic heart of Cava production in Catalonia.',
    mentalMapText: 'Sparkling -> Cava',
    options: [
      { id: 'cv1a', text: 'Vila Nova de Gaia', isCorrect: false, feedback: 'Port.' },
      { id: 'cv1b', text: 'Sant Sadurni d\'Anoia', isCorrect: true, feedback: 'Correct.' },
      { id: 'cv1c', text: 'Jerez de la Frontera', isCorrect: false, feedback: 'Sherry.' },
      { id: 'cv1d', text: 'El Puerto de Santa Maria', isCorrect: false, feedback: 'Sherry.' }
    ]
  },
  {
    id: 'wset_prosecco_glera',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Italy',
    questionText: 'Which grape variety is used to make Prosecco?',
    explanationText: 'Glera is the principal grape variety used to produce Prosecco.',
    mentalMapText: 'Sparkling -> Prosecco',
    options: [
      { id: 'pr1a', text: 'Glera', isCorrect: true, feedback: 'Correct.' },
      { id: 'pr1b', text: 'Verdicchio', isCorrect: false, feedback: '' },
      { id: 'pr1c', text: 'Muscat à Petits Grains', isCorrect: false, feedback: '' },
      { id: 'pr1d', text: 'Pinot Grigio', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_sparkling_cp_regions',
    tier: Tier.Tier2,
    category: 'Sparkling',
    region: 'General',
    questionText: 'Which of the following regions use Chardonnay and Pinot Noir for sparkling wine production? (1. Adelaide Hills 2. Champagne 3. Anderson Valley 4. Marlborough)',
    explanationText: 'All four regions utilize the classic Champagne varieties (Chardonnay and Pinot Noir) for their premium sparkling wines.',
    mentalMapText: 'Sparkling -> Regions',
    options: [
      { id: 'spk1a', text: '1, 2 and 4 only', isCorrect: false, feedback: '' },
      { id: 'spk1b', text: '2, 3 and 4 only', isCorrect: false, feedback: '' },
      { id: 'spk1c', text: '1, 2, 3 and 4', isCorrect: true, feedback: 'Correct.' },
      { id: 'spk1d', text: '1, 2 and 3 only', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_sparkling_demi_sec',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Legislation',
    questionText: 'What is the level of residual sugar in a sparkling wine labelled as demi-sec?',
    explanationText: 'Demi-sec indicates a medium-sweet style with 32-50 g/L of sugar.',
    mentalMapText: 'Sparkling -> Sweetness',
    options: [
      { id: 'ds1a', text: '0-12 g/L', isCorrect: false, feedback: 'Brut.' },
      { id: 'ds1b', text: '12-17 g/L', isCorrect: false, feedback: 'Extra Dry.' },
      { id: 'ds1c', text: '17-32 g/L', isCorrect: false, feedback: 'Sec/Dry.' },
      { id: 'ds1d', text: '32-50 g/L', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_sherry_manzanilla_mat',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Where is Manzanilla matured?',
    explanationText: 'Manzanilla is a Fino-style Sherry that must be matured in the seaside town of Sanlúcar de Barrameda.',
    mentalMapText: 'Spain -> Sherry -> Manzanilla',
    options: [
      { id: 'mz1a', text: 'El Puerto de Santa Maria', isCorrect: false, feedback: '' },
      { id: 'mz1b', text: 'Vila Nova de Gaia', isCorrect: false, feedback: 'Port.' },
      { id: 'mz1c', text: 'Jerez de la Frontera', isCorrect: false, feedback: 'Standard Fino.' },
      { id: 'mz1d', text: 'Sanlúcar de Barrameda', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'wset_douro_aguardente',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Douro',
    questionText: 'What is aguardente?',
    explanationText: 'Aguardente is the neutral grape spirit (77% abv) used to fortify Port wine.',
    mentalMapText: 'Portugal -> Port Production',
    options: [
      { id: 'ag1a', text: 'A soil type in Jerez', isCorrect: false, feedback: '' },
      { id: 'ag1b', text: 'A soil type in the Douro Valley', isCorrect: false, feedback: '' },
      { id: 'ag1c', text: 'The spirit used in fortifying Port', isCorrect: true, feedback: 'Correct.' },
      { id: 'ag1d', text: 'A method of drying grapes', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_aus_rutherglen_false',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Rutherglen',
    questionText: 'In relation to Rutherglen Muscat, which one of the following statements is FALSE?',
    explanationText: 'Rutherglen Muscat is matured in old wood (oak) to encourage oxidative development. Stainless steel would prevent the required oxidative style.',
    mentalMapText: 'Australia -> Rutherglen',
    options: [
      { id: 'rm1a', text: 'It undergoes a period of oxidative ageing', isCorrect: false, feedback: 'True statement.' },
      { id: 'rm1b', text: 'Stainless steel is normally used for maturation', isCorrect: true, feedback: 'Correct (this is False). Wood is used.' },
      { id: 'rm1c', text: 'Fermentation will nearly always take place on the skins', isCorrect: false, feedback: 'True statement (for extraction).' },
      { id: 'rm1d', text: 'Fortification takes place during fermentation', isCorrect: false, feedback: 'True statement.' }
    ]
  },
  {
    id: 'wset_service_barolo_temp',
    tier: Tier.Tier1,
    category: 'Service',
    region: 'General',
    questionText: 'At what temperature is Barolo best served?',
    explanationText: 'Barolo is a full-bodied red wine, best served at room temperature (15-18°C).',
    mentalMapText: 'Service -> Temperature',
    options: [
      { id: 'bt1a', text: 'Well chilled 6-8°C', isCorrect: false, feedback: '' },
      { id: 'bt1b', text: 'Room temperature 15-18°C', isCorrect: true, feedback: 'Correct.' },
      { id: 'bt1c', text: 'Chilled 7-10°C', isCorrect: false, feedback: '' },
      { id: 'bt1d', text: 'Lightly chilled 10-13°C', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_food_umami',
    tier: Tier.Tier2,
    category: 'Pairing',
    region: 'General',
    questionText: 'What happens to wine when paired with food high in umami?',
    explanationText: 'Umami makes wine seem more "hard": increasing the perception of bitterness, astringency, and acidity, while making it seem less fruity/sweet.',
    mentalMapText: 'Pairing -> Umami',
    options: [
      { id: 'u1a', text: 'The wine appears less bitter', isCorrect: false, feedback: '' },
      { id: 'u1b', text: 'The wine appears less astringent', isCorrect: false, feedback: '' },
      { id: 'u1c', text: 'The wine becomes more acidic', isCorrect: true, feedback: 'Correct.' },
      { id: 'u1d', text: 'The wine appears sweeter', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'wset_health_safe_encourage',
    tier: Tier.Tier1,
    category: 'Responsible Drinking',
    region: 'General',
    questionText: 'How can the safe consumption of alcohol be encouraged? (1. By carefully publishing sensible drinking guidelines 2. By recommending maximum allowances 3. By restricting advertising)',
    explanationText: 'Government and health guidelines use all three strategies to encourage responsible drinking behavior.',
    mentalMapText: 'General -> Health',
    options: [
      { id: 'h1a', text: '1 and 3 only', isCorrect: false, feedback: '' },
      { id: 'h1b', text: '1, 2 and 3', isCorrect: true, feedback: 'Correct.' },
      { id: 'h1c', text: '1 and 2 only', isCorrect: false, feedback: '' },
      { id: 'h1d', text: '2 and 3 only', isCorrect: false, feedback: '' }
    ]
  },
    {
    id: 'pq_2_vsp_vigour',
    tier: Tier.Tier2,
    category: 'Viticulture',
    region: 'General',
    questionText: 'Which viticultural technique is most effective for controlling vigorous vines in a wet region?',
    explanationText: 'Vertical Shoot Positioning (VSP) trains shoots upwards, keeping the canopy open and aerated. This is crucial in wet regions to prevent fungal disease and in vigorous vines to avoid shading.',
    mentalMapText: 'Viticulture -> Canopy Management',
    options: [
      { id: 'pq2a', text: 'Replacement cane pruning', isCorrect: false, feedback: 'This is a pruning method (Guyot), not a trellis system for vigour control per se.' },
      { id: 'pq2b', text: 'Vertical Shoot Positioning (VSP)', isCorrect: true, feedback: 'Correct. Promotes airflow and light exposure.' },
      { id: 'pq2c', text: 'Bush vine training', isCorrect: false, feedback: 'Used in hot, dry, sunny regions (e.g., Beaujolais, Barossa) to shade fruit.' },
      { id: 'pq2d', text: 'Increasing the use of irrigation', isCorrect: false, feedback: 'Adding water would increase vigour, not control it.' }
    ]
  },
  {
    id: 'pq_3_green_harvest',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'General',
    questionText: 'What is the primary purpose of "green harvesting"?',
    explanationText: 'Green harvesting is the removal of immature grape bunches during the growing season. This concentrates the vine\'s energy into the remaining bunches, improving ripeness and controlling yield.',
    mentalMapText: 'Viticulture -> Vineyard Management',
    options: [
      { id: 'pq3a', text: 'To increase the yield of the vine', isCorrect: false, feedback: 'It reduces yield.' },
      { id: 'pq3b', text: 'To prevent fungal diseases by removing leaves', isCorrect: false, feedback: 'This is "leaf stripping" or "canopy management".' },
      { id: 'pq3c', text: 'To remove immature grapes to control yield and improve ripeness', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq3d', text: 'To harvest grapes early for sparkling wine production', isCorrect: false, feedback: 'This is just an early harvest, not a "green" harvest.' }
    ]
  },
  {
    id: 'pq_4_noble_rot',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'General',
    questionText: 'Which of the following conditions is essential for the development of Noble Rot (Botrytis cinerea)?',
    explanationText: 'Noble Rot requires humid mornings (to allow the fungus to grow and puncture the skin) followed by warm, dry afternoons (to evaporate water and concentrate sugars/acids).',
    mentalMapText: 'Viticulture -> Pests and Diseases',
    options: [
      { id: 'pq4a', text: 'Dry, windy conditions throughout the autumn', isCorrect: false, feedback: 'The fungus requires humidity to develop.' },
      { id: 'pq4b', text: 'Humid mornings followed by warm, dry afternoons', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq4c', text: 'Constant heavy rainfall during the ripening period', isCorrect: false, feedback: 'This leads to Grey Rot, which destroys the crop.' },
      { id: 'pq4d', text: 'Freezing temperatures in the vineyard', isCorrect: false, feedback: 'This is required for Eiswein, not Botrytis.' }
    ]
  },
  {
    id: 'pq_5_rootstocks',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'General',
    questionText: 'Which rootstock type is primarily used to protect against Phylloxera?',
    explanationText: 'American vine species (e.g., Vitis rupestris, Vitis riparia) evolved with Phylloxera and release a sticky sap that clogs the pest\'s mouth, making them immune.',
    mentalMapText: 'Viticulture -> Phylloxera',
    options: [
      { id: 'pq5a', text: 'Vitis vinifera', isCorrect: false, feedback: 'Vitis vinifera is highly susceptible to Phylloxera.' },
      { id: 'pq5b', text: 'American vine species', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq5c', text: 'Clones of Pinot Noir', isCorrect: false, feedback: 'Pinot Noir is Vitis vinifera.' },
      { id: 'pq5d', text: 'Hybrid crossings', isCorrect: false, feedback: 'Hybrids are crosses of species, but pure American rootstocks are the primary defense base.' }
    ]
  },

  // --- Section 2: Human Factors in the Winery (Vinification) ---
  {
    id: 'pq_6_acidification',
    tier: Tier.Tier1,
    category: 'Vinification',
    region: 'General',
    questionText: 'Which acid is typically added during "acidification" in warm climate regions?',
    explanationText: 'Tartaric acid is the primary acid found in grapes and is the standard choice for acidification. It is stable and provides the crispness associated with wine acidity.',
    mentalMapText: 'Vinification -> Adjustments',
    options: [
      { id: 'pq6a', text: 'Malic acid', isCorrect: false, feedback: 'Ideally converted to Lactic, rarely added.' },
      { id: 'pq6b', text: 'Lactic acid', isCorrect: false, feedback: 'Result of Malolactic Conversion, not usually added for acidification.' },
      { id: 'pq6c', text: 'Tartaric acid', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq6d', text: 'Acetic acid', isCorrect: false, feedback: 'This is vinegar (Volatile Acidity) and is a fault.' }
    ]
  },
  {
    id: 'pq_7_malo',
    tier: Tier.Tier1,
    category: 'Vinification',
    region: 'General',
    questionText: 'Which winemaking process is responsible for converting sharp malic acid into softer lactic acid?',
    explanationText: 'Malolactic Conversion (often called MLF) is carried out by lactic acid bacteria after alcoholic fermentation. It softens acidity and adds buttery/creamy notes.',
    mentalMapText: 'Vinification -> Fermentation',
    options: [
      { id: 'pq7a', text: 'Alcoholic fermentation', isCorrect: false, feedback: 'Converts sugar to alcohol (Yeast).' },
      { id: 'pq7b', text: 'Malolactic conversion', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq7c', text: 'Carbonic maceration', isCorrect: false, feedback: 'Intracellular fermentation for fruity red wines.' },
      { id: 'pq7d', text: 'Stabilization', isCorrect: false, feedback: 'Prevents crystals/haze.' }
    ]
  },
  {
    id: 'pq_8_oxidative_vessel',
    tier: Tier.Tier1,
    category: 'Vinification',
    region: 'General',
    questionText: 'Which of the following vessels provides an oxidative environment for maturation?',
    explanationText: 'Old oak barrels are porous, allowing minute amounts of oxygen to interact with the wine (micro-oxygenation), softening tannins and developing tertiary flavours without adding oak flavour.',
    mentalMapText: 'Vinification -> Maturation',
    options: [
      { id: 'pq8a', text: 'Stainless steel tank', isCorrect: false, feedback: 'Inert/Anaerobic.' },
      { id: 'pq8b', text: 'Concrete egg (lined)', isCorrect: false, feedback: 'Generally inert if lined with epoxy.' },
      { id: 'pq8c', text: 'Old oak barrel', isCorrect: true, feedback: 'Correct. Allows controlled oxygen exposure.' },
      { id: 'pq8d', text: 'Glass bottle', isCorrect: false, feedback: 'Anaerobic (mostly, depending on closure).' }
    ]
  },
  {
    id: 'pq_9_cap_management',
    tier: Tier.Tier1,
    category: 'Vinification',
    region: 'General',
    questionText: 'In red winemaking, what is the purpose of "Cap Management" techniques like punching down?',
    explanationText: 'The cap (skins) floats to the top. Punching down (Pigeage) or pumping over (Remontage) submerges the skins to extract colour, tannin, and flavour into the juice.',
    mentalMapText: 'Vinification -> Red Winemaking',
    options: [
      { id: 'pq9a', text: 'To keep the fermentation temperature low', isCorrect: false, feedback: 'Temperature control is separate.' },
      { id: 'pq9b', text: 'To extract colour, tannin, and flavour from the skins', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq9c', text: 'To prevent oxygen from reaching the wine', isCorrect: false, feedback: 'It actually introduces some oxygen.' },
      { id: 'pq9d', text: 'To remove the gross lees', isCorrect: false, feedback: 'Racking removes lees.' }
    ]
  },
  {
    id: 'pq_10_fining',
    tier: Tier.Tier1,
    category: 'Vinification',
    region: 'General',
    questionText: 'Which clarification method involves adding a substance to the wine that binds with unstable proteins?',
    explanationText: 'Fining involves adding agents (like Bentonite for proteins or Egg White for tannins) that bind to unstable particles, making them large enough to precipitate out.',
    mentalMapText: 'Vinification -> Clarification',
    options: [
      { id: 'pq10a', text: 'Filtration', isCorrect: false, feedback: 'Physical removal via a filter.' },
      { id: 'pq10b', text: 'Sedimentation', isCorrect: false, feedback: 'Gravity settling (Racking).' },
      { id: 'pq10c', text: 'Fining', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq10d', text: 'Racking', isCorrect: false, feedback: 'Moving wine off sediment.' }
    ]
  },

  // --- Section 3: White Wines of Germany, Alsace, Austria & Tokaj ---
  {
    id: 'pq_11_eiswein',
    tier: Tier.Tier1,
    category: 'Germany',
    region: 'General',
    questionText: 'Which Prädikat level typically indicates a wine made from frozen grapes?',
    explanationText: 'Eiswein is made from grapes left on the vine until they freeze (below -7°C or -8°C). Pressing them while frozen leaves the water ice behind, concentrating sugar and acid.',
    mentalMapText: 'Germany -> Prädikatswein',
    options: [
      { id: 'pq11a', text: 'Beerenauslese', isCorrect: false, feedback: 'Selected berries, usually botrytis.' },
      { id: 'pq11b', text: 'Trockenbeerenauslese', isCorrect: false, feedback: 'Dried berries, fully botrytised.' },
      { id: 'pq11c', text: 'Eiswein', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq11d', text: 'Auslese', isCorrect: false, feedback: 'Selected bunches.' }
    ]
  },
  {
    id: 'pq_12_mosel_slopes',
    tier: Tier.Tier2,
    category: 'Germany',
    region: 'Mosel',
    questionText: 'In the Mosel Valley, what role do the steep, slate slopes play?',
    explanationText: 'The slate absorbs heat during the day and radiates it back at night, aiding ripening in this cool climate. The steep angle also intercepts sunlight more directly.',
    mentalMapText: 'Germany -> Mosel',
    options: [
      { id: 'pq12a', text: 'They retain water to prevent drought', isCorrect: false, feedback: 'Slate is free-draining.' },
      { id: 'pq12b', text: 'They absorb heat and radiate it back to the vine', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq12c', text: 'They allow for mechanised harvesting', isCorrect: false, feedback: 'Slopes are too steep for machines.' },
      { id: 'pq12d', text: 'They protect the vines from the Mistral wind', isCorrect: false, feedback: 'Mistral is in the Rhône Valley.' }
    ]
  },
  {
    id: 'pq_13_vendanges_tardives',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Alsace',
    questionText: 'A wine labelled "Vendanges Tardives" from Alsace must be:',
    explanationText: 'VT means "Late Harvest". It must be made from one of the four noble varieties (Riesling, Muscat, Gewurz, Pinot Gris) and have a minimum sugar weight. It can be dry or sweet.',
    mentalMapText: 'France -> Alsace -> Labelling',
    options: [
      { id: 'pq13a', text: 'Always sweet', isCorrect: false, feedback: 'Can be dry or medium-sweet.' },
      { id: 'pq13b', text: 'Made from late-harvested grapes from one of the four noble varieties', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq13c', text: 'Made from grapes affected by Noble Rot', isCorrect: false, feedback: 'Not required (unlike SGN).' },
      { id: 'pq13d', text: 'Dry and high in alcohol', isCorrect: false, feedback: 'Can be sweet.' }
    ]
  },
  {
    id: 'pq_14_austria_grape',
    tier: Tier.Tier1,
    category: 'Austria',
    region: 'General',
    questionText: 'Which grape variety is the most widely planted in Austria and produces wines with flavours of white pepper and citrus?',
    explanationText: 'Grüner Veltliner is Austria\'s signature grape, capable of producing high-quality wines with distinctive white pepper, lentil, and citrus notes.',
    mentalMapText: 'Austria -> Grapes',
    options: [
      { id: 'pq14a', text: 'Riesling', isCorrect: false, feedback: 'Important, but less planted than Grüner.' },
      { id: 'pq14b', text: 'Müller-Thurgau', isCorrect: false, feedback: 'Widely planted, but simple wines.' },
      { id: 'pq14c', text: 'Grüner Veltliner', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq14d', text: 'Welschriesling', isCorrect: false, feedback: 'Used for sweet wines and simple dry whites.' }
    ]
  },
  {
    id: 'pq_15_puttonyos',
    tier: Tier.Tier1,
    category: 'Hungary',
    region: 'Tokaj',
    questionText: 'What does the term "Puttonyos" indicate on a bottle of Tokaji Aszú?',
    explanationText: 'Puttonyos is the traditional unit of sweetness for Tokaji Aszú. (Note: Though the label requirement changed in 2013 to just "Aszú" for 5+ puttonyos level, the term historically and conceptually refers to sweetness level).',
    mentalMapText: 'Hungary -> Tokaj',
    options: [
      { id: 'pq15a', text: 'The level of alcohol', isCorrect: false, feedback: '' },
      { id: 'pq15b', text: 'The length of oak ageing', isCorrect: false, feedback: '' },
      { id: 'pq15c', text: 'The level of sweetness', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq15d', text: 'The specific vineyard site', isCorrect: false, feedback: '' }
    ]
  },

  // --- Section 4: Wines of France (Burgundy, Bordeaux, Loire, Rhône, S. France) ---
  {
    id: 'pq_16_chablis_soil',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Burgundy',
    questionText: 'Which region in Burgundy is famous for producing white wines from 100% Chardonnay on Kimmeridgian clay soils?',
    explanationText: 'Chablis is the northernmost district of Burgundy, famous for crisp, high-acid Chardonnay grown on fossil-rich Kimmeridgian clay/limestone.',
    mentalMapText: 'France -> Burgundy -> Chablis',
    options: [
      { id: 'pq16a', text: 'Côte de Nuits', isCorrect: false, feedback: 'Famous for Pinot Noir.' },
      { id: 'pq16b', text: 'Mâconnais', isCorrect: false, feedback: 'Limestone, but further south.' },
      { id: 'pq16c', text: 'Chablis', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq16d', text: 'Côte Chalonnaise', isCorrect: false, feedback: 'Mixed red/white.' }
    ]
  },
  {
    id: 'pq_17_cote_rotie_viognier',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Rhône',
    questionText: 'In the Northern Rhône, which white grape variety is often co-fermented with Syrah in Côte-Rôtie?',
    explanationText: 'Up to 20% Viognier is permitted in Côte-Rôtie to add floral aroma and stabilise the red colour, though less is usually used.',
    mentalMapText: 'France -> Rhône -> Côte-Rôtie',
    options: [
      { id: 'pq17a', text: 'Marsanne', isCorrect: false, feedback: 'Used in Hermitage/St-Joseph.' },
      { id: 'pq17b', text: 'Roussanne', isCorrect: false, feedback: 'Used in Hermitage/St-Joseph.' },
      { id: 'pq17c', text: 'Viognier', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq17d', text: 'Grenache Blanc', isCorrect: false, feedback: 'Southern Rhône grape.' }
    ]
  },
  {
    id: 'pq_18_left_bank_gravel',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Bordeaux',
    questionText: 'Which soil type is most associated with the high-quality Cabernet Sauvignon of the Left Bank (Haut-Médoc)?',
    explanationText: 'Gravel soils (from the river) drain well and heat up quickly, which is essential for ripening the late-ripening Cabernet Sauvignon in Bordeaux\'s maritime climate.',
    mentalMapText: 'France -> Bordeaux -> Left Bank',
    options: [
      { id: 'pq18a', text: 'Clay', isCorrect: false, feedback: 'Associated with Merlot (Right Bank).' },
      { id: 'pq18b', text: 'Gravel', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq18c', text: 'Limestone', isCorrect: false, feedback: 'Associated with St-Émilion Plateau.' },
      { id: 'pq18d', text: 'Granite', isCorrect: false, feedback: 'Associated with Northern Rhône/Beaujolais.' }
    ]
  },
  {
    id: 'pq_19_chinon_grape',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Loire',
    questionText: 'What is the principal grape variety used in the red wines of Chinon and Bourgueil?',
    explanationText: 'Cabernet Franc dominates the red wines of Touraine (Chinon, Bourgueil), producing wines with crunchy red fruit and pencil shaving notes.',
    mentalMapText: 'France -> Loire -> Touraine',
    options: [
      { id: 'pq19a', text: 'Cabernet Sauvignon', isCorrect: false, feedback: 'Too cool for Cab Sauv generally.' },
      { id: 'pq19b', text: 'Cabernet Franc', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq19c', text: 'Pinot Noir', isCorrect: false, feedback: 'Used in Sancerre Rouge.' },
      { id: 'pq19d', text: 'Gamay', isCorrect: false, feedback: 'Used in Anjou/Touraine but not main for Chinon.' }
    ]
  },
  {
    id: 'pq_20_galets',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Rhône',
    questionText: 'Which Southern Rhône appellation is famous for its "galets roulés" (large stones) that retain heat?',
    explanationText: 'Châteauneuf-du-Pape is famous for these pudding stones which absorb solar heat during the day and release it at night to aid ripening.',
    mentalMapText: 'France -> Rhône -> Châteauneuf-du-Pape',
    options: [
      { id: 'pq20a', text: 'Cornas', isCorrect: false, feedback: 'Northern Rhône.' },
      { id: 'pq20b', text: 'Tavel', isCorrect: false, feedback: 'Rosé appellation.' },
      { id: 'pq20c', text: 'Châteauneuf-du-Pape', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq20d', text: 'Hermitage', isCorrect: false, feedback: 'Northern Rhône.' }
    ]
  },
  {
    id: 'pq_21_cru_bourgeois',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Bordeaux',
    questionText: 'A "Cru Bourgeois" wine comes from which French region?',
    explanationText: 'Cru Bourgeois is a classification for red wines from the Médoc (Left Bank Bordeaux) that were not included in the 1855 classification.',
    mentalMapText: 'France -> Bordeaux -> Classification',
    options: [
      { id: 'pq21a', text: 'Saint-Émilion', isCorrect: false, feedback: 'Right Bank.' },
      { id: 'pq21b', text: 'The Médoc', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq21c', text: 'Beaujolais', isCorrect: false, feedback: '' },
      { id: 'pq21d', text: 'Provence', isCorrect: false, feedback: 'Cru Classé exists there, but not Cru Bourgeois.' }
    ]
  },
  {
    id: 'pq_22_savennieres_chenin',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Loire',
    questionText: 'Which of the following is a dry white wine from the Loire Valley made from Chenin Blanc?',
    explanationText: 'Savennières produces powerful, dry, age-worthy Chenin Blanc. Sancerre/Pouilly-Fumé are Sauvignon Blanc; Muscadet is Melon Blanc.',
    mentalMapText: 'France -> Loire -> Anjou-Saumur',
    options: [
      { id: 'pq22a', text: 'Sancerre', isCorrect: false, feedback: 'Sauvignon Blanc.' },
      { id: 'pq22b', text: 'Pouilly-Fumé', isCorrect: false, feedback: 'Sauvignon Blanc.' },
      { id: 'pq22c', text: 'Savennières', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq22d', text: 'Muscadet', isCorrect: false, feedback: 'Melon Blanc.' }
    ]
  },

  // --- Section 5: Wines of Italy, Spain & Portugal ---
  {
    id: 'pq_23_barolo_nebbiolo',
    tier: Tier.Tier1,
    category: 'Italy',
    region: 'Piemonte',
    questionText: 'Which Italian DOCG is known for producing high-tannin, high-acid red wines from 100% Nebbiolo?',
    explanationText: 'Barolo (and Barbaresco) in Piemonte is made exclusively from Nebbiolo, characterized by pale colour but immense tannins and acidity.',
    mentalMapText: 'Italy -> Piemonte',
    options: [
      { id: 'pq23a', text: 'Chianti Classico', isCorrect: false, feedback: 'Sangiovese.' },
      { id: 'pq23b', text: 'Amarone della Valpolicella', isCorrect: false, feedback: 'Corvina blend.' },
      { id: 'pq23c', text: 'Barolo', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq23d', text: 'Brunello di Montalcino', isCorrect: false, feedback: 'Sangiovese.' }
    ]
  },
  {
    id: 'pq_24_ripasso',
    tier: Tier.Tier2,
    category: 'Italy',
    region: 'Veneto',
    questionText: 'The "Ripasso" method in Valpolicella increases alcohol and structure by:',
    explanationText: 'Ripasso involves "re-passing" basic Valpolicella wine over the unpressed skins and lees of an Amarone fermentation. This induces a second fermentation, adding tannin, flavour, and alcohol.',
    mentalMapText: 'Italy -> Veneto -> Valpolicella',
    options: [
      { id: 'pq24a', text: 'Drying grapes on straw mats for 3 months', isCorrect: false, feedback: 'This is Appassimento (for Amarone/Recioto).' },
      { id: 'pq24b', text: 'Pumping the wine over unpressed skins from an Amarone fermentation', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq24c', text: 'Adding grape spirit to stop fermentation', isCorrect: false, feedback: 'This is Fortification.' },
      { id: 'pq24d', text: 'Aging the wine in small new oak barrels for 5 years', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_25_rias_baixas',
    tier: Tier.Tier1,
    category: 'Spain',
    region: 'Galicia',
    questionText: 'Which Spanish region is located in Galicia and is famous for high-acid white wines made from Albariño?',
    explanationText: 'Rías Baixas is on the cool, wet Atlantic coast (Galicia) and specialises in Albariño.',
    mentalMapText: 'Spain -> North West',
    options: [
      { id: 'pq25a', text: 'Ribera del Duero', isCorrect: false, feedback: 'Inland, Red wines.' },
      { id: 'pq25b', text: 'Priorat', isCorrect: false, feedback: 'Catalonia, Red wines.' },
      { id: 'pq25c', text: 'Rías Baixas', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq25d', text: 'Toro', isCorrect: false, feedback: 'Inland, Red wines.' }
    ]
  },
  {
    id: 'pq_26_rioja_gran_reserva',
    tier: Tier.Tier2,
    category: 'Spain',
    region: 'Legislation',
    questionText: 'To carry the term "Gran Reserva" on the label, a Red Rioja must be aged for a minimum of:',
    explanationText: 'Gran Reserva Red requires 60 months (5 years) total ageing, with a minimum of 24 months in oak barrels.',
    mentalMapText: 'Spain -> Legislation',
    options: [
      { id: 'pq26a', text: '24 months total', isCorrect: false, feedback: 'Crianza.' },
      { id: 'pq26b', text: '36 months total', isCorrect: false, feedback: 'Reserva.' },
      { id: 'pq26c', text: '48 months total', isCorrect: false, feedback: '' },
      { id: 'pq26d', text: '60 months total', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'pq_27_mencia',
    tier: Tier.Tier1,
    category: 'Spain',
    region: 'Bierzo',
    questionText: 'The black grape variety "Mencía" is primarily associated with which Spanish region?',
    explanationText: 'Mencía is the key grape of Bierzo (border of Galicia and Castilla y León), producing wines with fresh fruit and herbal notes.',
    mentalMapText: 'Spain -> Regions',
    options: [
      { id: 'pq27a', text: 'Bierzo', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq27b', text: 'La Mancha', isCorrect: false, feedback: 'Airén/Cencibel.' },
      { id: 'pq27c', text: 'Navarra', isCorrect: false, feedback: 'Garnacha/Tempranillo.' },
      { id: 'pq27d', text: 'Jumilla', isCorrect: false, feedback: 'Monastrell.' }
    ]
  },
  {
    id: 'pq_28_touriga_nacional',
    tier: Tier.Tier1,
    category: 'Portugal',
    region: 'Douro',
    questionText: 'In Douro, which premium grape variety is known for its intense colour, tannin, and floral aromas?',
    explanationText: 'Touriga Nacional is considered the finest Douro grape, offering deep colour, high tannins, and violet aromas.',
    mentalMapText: 'Portugal -> Grapes',
    options: [
      { id: 'pq28a', text: 'Tinta Barroca', isCorrect: false, feedback: 'High yield, sugar.' },
      { id: 'pq28b', text: 'Touriga Nacional', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq28c', text: 'Tinta Roriz', isCorrect: false, feedback: 'Tempranillo.' },
      { id: 'pq28d', text: 'Aragonez', isCorrect: false, feedback: 'Tempranillo (Southern Portugal name).' }
    ]
  },
  {
    id: 'pq_29_fiano_region',
    tier: Tier.Tier1,
    category: 'Italy',
    region: 'Campania',
    questionText: 'Fiano di Avellino DOCG is located in which Italian region?',
    explanationText: 'Campania (Southern Italy) is the home of Fiano di Avellino, Taurasi, and Greco di Tufo.',
    mentalMapText: 'Italy -> Campania',
    options: [
      { id: 'pq29a', text: 'Veneto', isCorrect: false, feedback: 'North East.' },
      { id: 'pq29b', text: 'Tuscany', isCorrect: false, feedback: 'Central.' },
      { id: 'pq29c', text: 'Campania', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq29d', text: 'Piemonte', isCorrect: false, feedback: 'North West.' }
    ]
  },

  // --- Section 6: Wines of the New World ---
  {
    id: 'pq_30_central_otago',
    tier: Tier.Tier1,
    category: 'New Zealand',
    region: 'South Island',
    questionText: 'Which region in New Zealand is known for a continental climate and premium Pinot Noir?',
    explanationText: 'Central Otago is the only inland region in NZ, providing a continental climate with high diurnal range, ideal for intense Pinot Noir.',
    mentalMapText: 'New Zealand -> Regions',
    options: [
      { id: 'pq30a', text: 'Marlborough', isCorrect: false, feedback: 'Maritime. Sauvignon Blanc.' },
      { id: 'pq30b', text: 'Hawke\'s Bay', isCorrect: false, feedback: 'Maritime. Bordeaux Blends.' },
      { id: 'pq30c', text: 'Central Otago', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq30d', text: 'Gisborne', isCorrect: false, feedback: 'Maritime. Chardonnay.' }
    ]
  },
  {
    id: 'pq_31_rutherford_dust',
    tier: Tier.Tier2,
    category: 'USA',
    region: 'California',
    questionText: 'The "Rutherford Dust" characteristic is associated with Cabernet Sauvignon from:',
    explanationText: 'Rutherford is a sub-AVA of Napa Valley, famous for the dusty, earthy tannin structure of its Cabernet Sauvignon.',
    mentalMapText: 'USA -> California -> Napa',
    options: [
      { id: 'pq31a', text: 'Napa Valley', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq31b', text: 'Sonoma Coast', isCorrect: false, feedback: 'Pinot Noir/Chardonnay.' },
      { id: 'pq31c', text: 'Willamette Valley', isCorrect: false, feedback: 'Oregon (Pinot Noir).' },
      { id: 'pq31d', text: 'Margaret River', isCorrect: false, feedback: 'Australia.' }
    ]
  },
  {
    id: 'pq_32_casablanca',
    tier: Tier.Tier1,
    category: 'Chile',
    region: 'Coquimbo/Aconcagua',
    questionText: 'Which region in Chile is most famous for its cooling maritime influence and Sauvignon Blanc production?',
    explanationText: 'Casablanca Valley is a coastal region cooled by morning fogs and ocean breezes, making it perfect for fresh Sauvignon Blanc.',
    mentalMapText: 'Chile -> Regions',
    options: [
      { id: 'pq32a', text: 'Maipo Valley', isCorrect: false, feedback: 'Cabernet Sauvignon.' },
      { id: 'pq32b', text: 'Colchagua Valley', isCorrect: false, feedback: 'Full bodied reds.' },
      { id: 'pq32c', text: 'Casablanca Valley', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq32d', text: 'Curicó Valley', isCorrect: false, feedback: 'Workhorse region.' }
    ]
  },
  {
    id: 'pq_33_hunter_semillon',
    tier: Tier.Tier1,
    category: 'Australia',
    region: 'Hunter Valley',
    questionText: 'What is the signature white grape variety of the Hunter Valley in Australia?',
    explanationText: 'Hunter Valley Semillon is a unique style: harvested early, low alcohol, high acid, unoaked, developing toast/honey with age.',
    mentalMapText: 'Australia -> Hunter Valley',
    options: [
      { id: 'pq33a', text: 'Chardonnay', isCorrect: false, feedback: 'Grown there, but Semillon is the signature.' },
      { id: 'pq33b', text: 'Riesling', isCorrect: false, feedback: 'Clare/Eden Valleys.' },
      { id: 'pq33c', text: 'Semillon', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq33d', text: 'Sauvignon Blanc', isCorrect: false, feedback: 'Adelaide Hills/Margaret River.' }
    ]
  },
  {
    id: 'pq_34_swartland_chenin',
    tier: Tier.Tier1,
    category: 'South Africa',
    region: 'Coastal Region',
    questionText: 'Which region in South Africa is known for old vine Chenin Blanc and bush vines?',
    explanationText: 'Swartland has gained international acclaim for high-quality wines made from old, dry-farmed bush vines (Chenin and Syrah).',
    mentalMapText: 'South Africa -> Regions',
    options: [
      { id: 'pq34a', text: 'Walker Bay', isCorrect: false, feedback: 'Pinot Noir/Chardonnay.' },
      { id: 'pq34b', text: 'Swartland', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq34c', text: 'Elgin', isCorrect: false, feedback: 'Cool climate Sauvignon/Pinot.' },
      { id: 'pq34d', text: 'Constantia', isCorrect: false, feedback: 'Sauvignon Blanc/Sweet wine.' }
    ]
  },
  {
    id: 'pq_35_mendoza_altitude',
    tier: Tier.Tier2,
    category: 'Argentina',
    region: 'Mendoza',
    questionText: 'Malbec in Mendoza thrives in high-altitude vineyards because:',
    explanationText: 'Altitude lowers the average temperature but maintains high sunlight intensity. The large diurnal range (cool nights) retains acidity and fresh fruit flavours.',
    mentalMapText: 'Argentina -> Mendoza',
    options: [
      { id: 'pq35a', text: 'The altitude increases humidity', isCorrect: false, feedback: 'It is a desert climate.' },
      { id: 'pq35b', text: 'The altitude provides a high diurnal range, retaining acidity', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq35c', text: 'The altitude protects against hail', isCorrect: false, feedback: 'Hail is actually a major risk at altitude.' },
      { id: 'pq35d', text: 'The soils are rich in clay', isCorrect: false, feedback: 'Soils are generally alluvial/stony.' }
    ]
  },

  // --- Section 7: Sparkling Wines ---
  {
    id: 'pq_36_riddling',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Production',
    questionText: 'In the Traditional Method, what is the purpose of "riddling"?',
    explanationText: 'Riddling (Remuage) involves rotating and tilting the bottle to move the yeast sediment (lees) into the neck for disgorgement.',
    mentalMapText: 'Sparkling -> Traditional Method',
    options: [
      { id: 'pq36a', text: 'To add the liqueur de tirage', isCorrect: false, feedback: 'Added before 2nd fermentation.' },
      { id: 'pq36b', text: 'To move the yeast sediment into the neck of the bottle', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq36c', text: 'To freeze the neck of the bottle', isCorrect: false, feedback: 'This is freezing the plug (disgorgement prep).' },
      { id: 'pq36d', text: 'To determine the sweetness level', isCorrect: false, feedback: 'This is dosage.' }
    ]
  },
  {
    id: 'pq_37_ancestral_method',
    tier: Tier.Tier2,
    category: 'Sparkling',
    region: 'Production',
    questionText: 'Which sparkling wine method involves a single fermentation where the wine is bottled before fermentation is complete?',
    explanationText: 'The Ancestral Method (Pét-Nat) involves bottling partly fermented wine. The fermentation finishes in the bottle, trapping the CO2. (Note: Asti method is also single fermentation but involves filtering/tanks).',
    mentalMapText: 'Sparkling -> Methods',
    options: [
      { id: 'pq37a', text: 'Tank Method', isCorrect: false, feedback: 'Second fermentation in tank.' },
      { id: 'pq37b', text: 'Transfer Method', isCorrect: false, feedback: 'Bottle 2nd ferment, then tank filtration.' },
      { id: 'pq37c', text: 'Ancestral Method', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq37d', text: 'Traditional Method', isCorrect: false, feedback: 'Two distinct fermentations.' }
    ]
  },
  {
    id: 'pq_38_prosecco_grape',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Italy',
    questionText: 'Which grape variety is the primary component of Prosecco DOC?',
    explanationText: 'Glera is the semi-aromatic grape variety used for Prosecco.',
    mentalMapText: 'Sparkling -> Prosecco',
    options: [
      { id: 'pq38a', text: 'Muscat', isCorrect: false, feedback: 'Asti.' },
      { id: 'pq38b', text: 'Glera', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq38c', text: 'Garganega', isCorrect: false, feedback: 'Soave.' },
      { id: 'pq38d', text: 'Trebbiano', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_39_disgorgement',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Production',
    questionText: '"Disgorgement" refers to:',
    explanationText: 'Disgorgement is the ejection of the frozen plug of ice containing the yeast sediment from the neck of the bottle.',
    mentalMapText: 'Sparkling -> Traditional Method',
    options: [
      { id: 'pq39a', text: 'The removal of the yeast deposit from the bottle', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq39b', text: 'The addition of sugar to the final wine', isCorrect: false, feedback: 'Dosage.' },
      { id: 'pq39c', text: 'The pressing of whole bunches', isCorrect: false, feedback: 'Pressing.' },
      { id: 'pq39d', text: 'The blending of base wines', isCorrect: false, feedback: 'Assemblage.' }
    ]
  },
  {
    id: 'pq_40_tank_method_aromatic',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Production',
    questionText: 'Why is the Tank Method often used for aromatic varieties like Muscat or Riesling?',
    explanationText: 'The Tank Method avoids the autolytic (biscuit/bread) characters derived from bottle ageing on lees, thus preserving the primary fruit and floral aromas of the grape.',
    mentalMapText: 'Sparkling -> Tank Method',
    options: [
      { id: 'pq40a', text: 'It adds complex biscuit and brioche flavours', isCorrect: false, feedback: 'Traditional method does this.' },
      { id: 'pq40b', text: 'It is the most expensive method', isCorrect: false, feedback: 'It is cheaper.' },
      { id: 'pq40c', text: 'It retains the primary fruit characteristics of the grape', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq40d', text: 'It allows for long ageing on the lees', isCorrect: false, feedback: 'Usually short lees contact.' }
    ]
  },

  // --- Section 8: Fortified Wines ---
  {
    id: 'pq_41_port_fortification',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Douro',
    questionText: 'When is fortification carried out during the production of Port?',
    explanationText: 'Port is fortified *during* fermentation (when sugar is still present) to kill the yeast and create a sweet wine.',
    mentalMapText: 'Fortified -> Port Production',
    options: [
      { id: 'pq41a', text: 'Before fermentation begins', isCorrect: false, feedback: 'Mistelle (Vin de Liqueur).' },
      { id: 'pq41b', text: 'During fermentation, to stop the yeast working', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq41c', text: 'After fermentation is complete', isCorrect: false, feedback: 'Sherry.' },
      { id: 'pq41d', text: 'Just before bottling', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_42_albariza',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Which soil type in Jerez is essential for water retention in the production of Sherry?',
    explanationText: 'Albariza is the chalky white soil of Jerez that forms a crust to seal in moisture during the hot summers, essential for vine survival.',
    mentalMapText: 'Spain -> Jerez',
    options: [
      { id: 'pq42a', text: 'Schist', isCorrect: false, feedback: 'Douro.' },
      { id: 'pq42b', text: 'Granite', isCorrect: false, feedback: 'Beaujolais/N Rhône.' },
      { id: 'pq42c', text: 'Albariza', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq42d', text: 'Terra Rossa', isCorrect: false, feedback: 'Coonawarra.' }
    ]
  },
  {
    id: 'pq_43_flor',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'A "Fino" Sherry is aged biologically under a layer of yeast known as:',
    explanationText: 'Flor is the yeast layer that protects Fino/Manzanilla from oxygen and feeds on alcohol/glycerol to produce unique flavours.',
    mentalMapText: 'Spain -> Sherry',
    options: [
      { id: 'pq43a', text: 'Lees', isCorrect: false, feedback: 'General term for dead yeast.' },
      { id: 'pq43b', text: 'Flor', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq43c', text: 'Bloom', isCorrect: false, feedback: 'Waxy coating on grape skin.' },
      { id: 'pq43d', text: 'Must', isCorrect: false, feedback: 'Grape juice.' }
    ]
  },
  {
    id: 'pq_44_ruby_port',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Douro',
    questionText: 'Which style of Port is typically aged in large oak vessels (or stainless steel) for a short period to retain fruit colour?',
    explanationText: 'Ruby Ports are aged protectively (large vessels, limited oxygen) to retain their deep ruby colour and primary fruit characters.',
    mentalMapText: 'Portugal -> Port Styles',
    options: [
      { id: 'pq44a', text: 'Tawny Port', isCorrect: false, feedback: 'Oxidative aging (brown).' },
      { id: 'pq44b', text: 'Ruby Port', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq44c', text: 'Colheita', isCorrect: false, feedback: 'Oxidative (Vintage Tawny).' },
      { id: 'pq44d', text: '20-Year-Old Tawny', isCorrect: false, feedback: 'Oxidative.' }
    ]
  },
  {
    id: 'pq_45_oloroso_abv',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Oloroso Sherry typically has an alcohol content of:',
    explanationText: 'Oloroso is fortified to 17-18% abv to prevent the growth of Flor, ensuring oxidative ageing.',
    mentalMapText: 'Spain -> Sherry -> Styles',
    options: [
      { id: 'pq45a', text: '11-12%', isCorrect: false, feedback: 'Table wine.' },
      { id: 'pq45b', text: '15-15.5%', isCorrect: false, feedback: 'Fino Sherry.' },
      { id: 'pq45c', text: '17-18%', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq45d', text: '40%', isCorrect: false, feedback: 'Spirits.' }
    ]
  },
  {
    id: 'pq_46_px_grape',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Which grape variety is used for the production of sweet Pedro Ximénez Sherry?',
    explanationText: 'Pedro Ximénez (PX) is the grape variety dried in the sun to concentrate sugars for sweet Sherry production.',
    mentalMapText: 'Spain -> Sherry -> Grapes',
    options: [
      { id: 'pq46a', text: 'Palomino', isCorrect: false, feedback: 'Dry Sherry.' },
      { id: 'pq46b', text: 'Pedro Ximénez', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq46c', text: 'Muscat of Alexandria', isCorrect: false, feedback: 'Moscatel Sherry.' },
      { id: 'pq46d', text: 'Garnacha', isCorrect: false, feedback: 'Priorat/Rioja.' }
    ]
  },

  // --- Section 9: Advanced Labeling & Legislation ---
  {
    id: 'pq_47_alsace_grand_cru',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Alsace',
    questionText: 'If a wine is labelled "Grand Cru" in Alsace, it is most likely:',
    explanationText: 'Alsace Grand Cru refers to wines from specific named vineyards (51 of them) made from noble varieties (Riesling, Muscat, Gewurz, Pinot Gris).',
    mentalMapText: 'France -> Alsace',
    options: [
      { id: 'pq47a', text: 'A blend of any permitted varieties', isCorrect: false, feedback: 'Must be noble variety (usually).' },
      { id: 'pq47b', text: 'A dry red wine', isCorrect: false, feedback: 'Mostly White.' },
      { id: 'pq47c', text: 'A white wine from a single named vineyard site', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq47d', text: 'A sparkling wine made by the traditional method', isCorrect: false, feedback: 'Crémant d\'Alsace.' }
    ]
  },
  {
    id: 'pq_48_ava_definition',
    tier: Tier.Tier2,
    category: 'USA',
    region: 'Legislation',
    questionText: 'In the USA, an AVA (American Viticultural Area) legally defines:',
    explanationText: 'An AVA only defines the geographical boundaries of the region. Unlike French AOCs, it does not dictate yields, grape varieties, or aging.',
    mentalMapText: 'USA -> Laws',
    options: [
      { id: 'pq48a', text: 'The geographical boundary of the region', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq48b', text: 'The minimum aging requirements', isCorrect: false, feedback: '' },
      { id: 'pq48c', text: 'The permitted grape varieties', isCorrect: false, feedback: '' },
      { id: 'pq48d', text: 'The maximum yield per hectare', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_49_classico',
    tier: Tier.Tier1,
    category: 'Italy',
    region: 'Legislation',
    questionText: '"Classico" on an Italian wine label typically indicates:',
    explanationText: 'Classico refers to the original, historic center of a DOC/G region (e.g., Chianti Classico, Soave Classico), often located on superior hilly terrain.',
    mentalMapText: 'Italy -> Labelling Terms',
    options: [
      { id: 'pq49a', text: 'The wine has been aged for a longer period', isCorrect: false, feedback: 'Riserva.' },
      { id: 'pq49b', text: 'The wine comes from the original, historic centre of the region', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq49c', text: 'The wine is sweet', isCorrect: false, feedback: 'Dolce/Passito.' },
      { id: 'pq49d', text: 'The wine is made from international grape varieties', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_50_reserva_spain',
    tier: Tier.Tier2,
    category: 'Spain',
    region: 'Legislation',
    questionText: 'What is the minimum aging requirement for a "Reserva" wine from Spain (Red)?',
    explanationText: 'Spanish Red Reserva requires 36 months total aging, with at least 12 months in oak and the rest in bottle.',
    mentalMapText: 'Spain -> Labelling Terms',
    options: [
      { id: 'pq50a', text: '18 months total aging', isCorrect: false, feedback: '' },
      { id: 'pq50b', text: '24 months total aging', isCorrect: false, feedback: 'Crianza.' },
      { id: 'pq50c', text: '36 months total aging', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq50d', text: '60 months total aging', isCorrect: false, feedback: 'Gran Reserva.' }
    ]
  },
  {
    id: 'pq_51_continentality',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'General',
    questionText: 'Which term describes the difference between the average temperature of the hottest and coldest months?',
    explanationText: 'Continentality is the temperature difference between the coldest and hottest months. Diurnal range is the difference between day and night temperatures.',
    mentalMapText: 'Viticulture -> Climate',
    options: [
      { id: 'pq51a', text: 'Diurnal Range', isCorrect: false, feedback: 'Difference between day and night.' },
      { id: 'pq51b', text: 'Continentality', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq51c', text: 'Aspect', isCorrect: false, feedback: 'Direction the slope faces.' },
      { id: 'pq51d', text: 'Latitude', isCorrect: false, feedback: 'Distance from the equator.' }
    ]
  },
  {
    id: 'pq_52_coulure',
    tier: Tier.Tier2,
    category: 'Viticulture',
    region: 'General',
    questionText: '"Coulure" is a condition in the vineyard that results in:',
    explanationText: 'Coulure (fruit set failure) occurs when flowers fail to fertilise and turn into grapes, usually due to cold/wet weather, reducing the overall yield.',
    mentalMapText: 'Viticulture -> Hazards',
    options: [
      { id: 'pq52a', text: 'The grapes turning to vinegar', isCorrect: false, feedback: 'Volatile Acidity.' },
      { id: 'pq52b', text: 'A reduction in yield due to flowers failing to fertilise', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq52c', text: 'Uneven ripening within a single bunch (Hen and Chicken)', isCorrect: false, feedback: 'Millerandage.' },
      { id: 'pq52d', text: 'The leaves turning yellow due to nutrient deficiency', isCorrect: false, feedback: 'Chlorosis.' }
    ]
  },
  {
    id: 'pq_53_bordeaux_mixture',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'General',
    questionText: 'Which of the following is a fungal disease that can be controlled using "Bordeaux Mixture" (copper sulphate)?',
    explanationText: 'Downy Mildew thrives in warm, humid conditions and is traditionally treated with copper-based sprays (Bordeaux Mixture).',
    mentalMapText: 'Viticulture -> Diseases',
    options: [
      { id: 'pq53a', text: 'Downy Mildew', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq53b', text: 'Powdery Mildew', isCorrect: false, feedback: 'Treated with Sulphur.' },
      { id: 'pq53c', text: 'Fanleaf Virus', isCorrect: false, feedback: 'No cure; spread by nematodes.' },
      { id: 'pq53d', text: 'Pierce’s Disease', isCorrect: false, feedback: 'Bacterial; spread by sharpshooters.' }
    ]
  },
  {
    id: 'pq_54_south_slope',
    tier: Tier.Tier2,
    category: 'Viticulture',
    region: 'General',
    questionText: 'In the Northern Hemisphere, a south-facing slope is beneficial because:',
    explanationText: 'South-facing slopes intercept solar radiation at a more perpendicular angle, maximizing heat and light absorption which aids ripening in cool climates.',
    mentalMapText: 'Viticulture -> Topography',
    options: [
      { id: 'pq54a', text: 'It receives the least amount of sunlight, preserving acidity', isCorrect: false, feedback: 'North-facing does this.' },
      { id: 'pq54b', text: 'It intercepts solar radiation at a more direct angle, aiding ripening', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq54c', text: 'It is more susceptible to frost damage', isCorrect: false, feedback: 'Slopes aid air drainage, reducing frost risk.' },
      { id: 'pq54d', text: 'It retains water more effectively than flat land', isCorrect: false, feedback: 'Slopes are freer draining.' }
    ]
  },
  {
    id: 'pq_55_flood_irrigation',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'General',
    questionText: 'Which irrigation technique involves flooding the vineyard and is only suitable for flat land with abundant water?',
    explanationText: 'Flood irrigation is cheap but requires flat terrain and large volumes of water (common in places like Mendoza or parts of Chile historically).',
    mentalMapText: 'Viticulture -> Irrigation',
    options: [
      { id: 'pq55a', text: 'Drip irrigation', isCorrect: false, feedback: 'Most efficient, works on slopes.' },
      { id: 'pq55b', text: 'Sprinkler irrigation', isCorrect: false, feedback: 'Overhead spray.' },
      { id: 'pq55c', text: 'Flood irrigation', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq55d', text: 'Dry farming', isCorrect: false, feedback: 'No irrigation.' }
    ]
  },

  // --- Section 2: Advanced Vinification ---
  {
    id: 'pq_56_press_wine',
    tier: Tier.Tier2,
    category: 'Vinification',
    region: 'General',
    questionText: '"Press Wine" (the fraction obtained after pressing) differs from "Free Run Juice" because it:',
    explanationText: 'Press wine is extracted by mechanical pressure, releasing more tannin and colour from the skins compared to free run juice.',
    mentalMapText: 'Vinification -> Pressing',
    options: [
      { id: 'pq56a', text: 'Is higher in acidity and lower in tannin', isCorrect: false, feedback: 'Press wine is lower in acid.' },
      { id: 'pq56b', text: 'Is lower in colour and tannin', isCorrect: false, feedback: 'Press wine has more colour/tannin.' },
      { id: 'pq56c', text: 'Is higher in tannin and colour', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq56d', text: 'Has no flavour compounds', isCorrect: false, feedback: 'It has intense flavours.' }
    ]
  },
  {
    id: 'pq_57_diacetyl',
    tier: Tier.Tier3,
    category: 'Vinification',
    region: 'General',
    questionText: 'What is the primary compound responsible for the "buttery" flavour in Chardonnay that has undergone Malolactic Conversion?',
    explanationText: 'Diacetyl is the specific chemical byproduct of Malolactic Conversion that smells of butter/cream.',
    mentalMapText: 'Vinification -> Compounds',
    options: [
      { id: 'pq57a', text: 'Methoxypyrazine', isCorrect: false, feedback: 'Green pepper (Sauvignon/Cabernet).' },
      { id: 'pq57b', text: 'Rotundone', isCorrect: false, feedback: 'Black pepper (Syrah).' },
      { id: 'pq57c', text: 'Diacetyl', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq57d', text: 'Linalool', isCorrect: false, feedback: 'Floral/Muscat terpene.' }
    ]
  },
  {
    id: 'pq_58_cold_stabilization',
    tier: Tier.Tier2,
    category: 'Vinification',
    region: 'General',
    questionText: 'Which process is used to prevent the formation of glass-like crystals (tartrates) in the bottle?',
    explanationText: 'Cold stabilization involves chilling the wine to force tartrate crystals to precipitate before bottling, so they don\'t form later in the consumer\'s fridge.',
    mentalMapText: 'Vinification -> Stabilization',
    options: [
      { id: 'pq58a', text: 'Sterile Filtration', isCorrect: false, feedback: 'Removes yeast/bacteria.' },
      { id: 'pq58b', text: 'Cold Stabilization', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq58c', text: 'Racking', isCorrect: false, feedback: 'Removes gross sediment.' },
      { id: 'pq58d', text: 'Chaptalisation', isCorrect: false, feedback: 'Adding sugar.' }
    ]
  },
  {
    id: 'pq_59_semi_carbonic',
    tier: Tier.Tier2,
    category: 'Vinification',
    region: 'General',
    questionText: 'Semi-Carbonic Maceration is the standard technique used for which wine?',
    explanationText: 'Semi-carbonic maceration creates fruity, low-tannin wines with bubblegum/kirsch notes, the hallmark style of inexpensive Beaujolais.',
    mentalMapText: 'Vinification -> Red Winemaking',
    options: [
      { id: 'pq59a', text: 'Premium Pinot Noir from Burgundy', isCorrect: false, feedback: 'Traditional fermentation.' },
      { id: 'pq59b', text: 'Inexpensive Beaujolais', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq59c', text: 'Barossa Shiraz', isCorrect: false, feedback: 'Traditional fermentation.' },
      { id: 'pq59d', text: 'Rioja Gran Reserva', isCorrect: false, feedback: 'Traditional fermentation + Long Oak.' }
    ]
  },
  {
    id: 'pq_60_so2_roles',
    tier: Tier.Tier2,
    category: 'Vinification',
    region: 'General',
    questionText: 'In addition to acting as an antiseptic, Sulphur Dioxide (SO2) acts as:',
    explanationText: 'SO2 is an antioxidant (protects against oxidation) and an antiseptic (kills unwanted microbes).',
    mentalMapText: 'Vinification -> Additives',
    options: [
      { id: 'pq60a', text: 'An antioxidant', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq60b', text: 'A clarifying agent', isCorrect: false, feedback: 'Fining agents do this.' },
      { id: 'pq60c', text: 'A sweetening agent', isCorrect: false, feedback: 'RCGM/Sugar does this.' },
      { id: 'pq60d', text: 'A colouring agent', isCorrect: false, feedback: 'Mega Purple does this.' }
    ]
  },

  // --- Section 3: France (The Deeper Cuts) ---
  {
    id: 'pq_61_muscadet_sur_lie',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Loire',
    questionText: '"Muscadet Sèvre et Maine Sur Lie" is bottled directly from the lees to add:',
    explanationText: 'Sur Lie aging adds texture, creaminess, and a slight spritz (freshness) to the otherwise neutral Melon Blanc grape.',
    mentalMapText: 'France -> Loire -> Muscadet',
    options: [
      { id: 'pq61a', text: 'Sweetness and alcohol', isCorrect: false, feedback: 'It remains dry.' },
      { id: 'pq61b', text: 'Texture, body, and freshness', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq61c', text: 'Oak flavours and tannin', isCorrect: false, feedback: 'Sur lie is typically in inert vessels.' },
      { id: 'pq61d', text: 'Red fruit aromas', isCorrect: false, feedback: 'It is a white wine.' }
    ]
  },
  {
    id: 'pq_62_volnay_red',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Burgundy',
    questionText: 'Which village in the Côte de Beaune is renowned for producing only red wines?',
    explanationText: 'Volnay and Pommard are famous Côte de Beaune villages that produce only Red wines (Pinot Noir). Most others (Meursault, Puligny) are white-dominant.',
    mentalMapText: 'France -> Burgundy -> Cote de Beaune',
    options: [
      { id: 'pq62a', text: 'Meursault', isCorrect: false, feedback: 'Famous for White.' },
      { id: 'pq62b', text: 'Puligny-Montrachet', isCorrect: false, feedback: 'Famous for White.' },
      { id: 'pq62c', text: 'Volnay', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq62d', text: 'Aloxe-Corton', isCorrect: false, feedback: 'Produces both (Corton-Charlemagne is white).' }
    ]
  },
  {
    id: 'pq_63_beaujolais_crus_age',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Beaujolais',
    questionText: 'Which Crus of Beaujolais are known for the most powerful wines with the greatest aging potential?',
    explanationText: 'Morgon and Moulin-à-Vent are the most structured, tannic, and age-worthy of the 10 Crus.',
    mentalMapText: 'France -> Beaujolais -> Crus',
    options: [
      { id: 'pq63a', text: 'Fleurie and Chiroubles', isCorrect: false, feedback: 'Known for elegance/perfume.' },
      { id: 'pq63b', text: 'Morgon and Moulin-à-Vent', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq63c', text: 'Brouilly and Régnié', isCorrect: false, feedback: 'Lighter, earlier drinking.' },
      { id: 'pq63d', text: 'Saint-Amour and Chénas', isCorrect: false, feedback: 'Lighter style.' }
    ]
  },
  {
    id: 'pq_64_pomerol_grape',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Bordeaux',
    questionText: 'The dominant grape variety in the blend of a generic AOC Pomerol wine is:',
    explanationText: 'Pomerol (Right Bank) is dominated by Merlot (often 80%+), with Cabernet Franc playing a supporting role.',
    mentalMapText: 'France -> Bordeaux -> Right Bank',
    options: [
      { id: 'pq64a', text: 'Cabernet Sauvignon', isCorrect: false, feedback: 'Left Bank.' },
      { id: 'pq64b', text: 'Merlot', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq64c', text: 'Cabernet Franc', isCorrect: false, feedback: 'Important, but usually secondary to Merlot.' },
      { id: 'pq64d', text: 'Malbec', isCorrect: false, feedback: 'Rare minor blending grape.' }
    ]
  },
  {
    id: 'pq_65_bandol_mourvedre',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Provence',
    questionText: 'Bandol AOC in Provence requires a minimum of 50% of which grape variety in its red blends?',
    explanationText: 'Mourvèdre thrives in the heat of Bandol and must constitute 50-95% of the red blend.',
    mentalMapText: 'France -> Provence -> Bandol',
    options: [
      { id: 'pq65a', text: 'Grenache', isCorrect: false, feedback: 'Permitted, but not the primary.' },
      { id: 'pq65b', text: 'Syrah', isCorrect: false, feedback: 'Permitted, but not the primary.' },
      { id: 'pq65c', text: 'Mourvèdre', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq65d', text: 'Cinsault', isCorrect: false, feedback: 'Mainly for Rosé.' }
    ]
  },
  {
    id: 'pq_66_coteaux_du_layon',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Loire',
    questionText: 'Coteaux du Layon is a sweet wine made from which grape variety?',
    explanationText: 'Coteaux du Layon (Anjou) is a sweet, botrytised wine made from 100% Chenin Blanc.',
    mentalMapText: 'France -> Loire -> Sweet Wines',
    options: [
      { id: 'pq66a', text: 'Sauvignon Blanc', isCorrect: false, feedback: 'Dry wines.' },
      { id: 'pq66b', text: 'Semillon', isCorrect: false, feedback: 'Bordeaux/Monbazillac.' },
      { id: 'pq66c', text: 'Chenin Blanc', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq66d', text: 'Muscadet', isCorrect: false, feedback: 'Dry Melon Blanc.' }
    ]
  },
  {
    id: 'pq_67_condrieu',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Rhône',
    questionText: 'In the Northern Rhône, "Condrieu" is an appellation dedicated exclusively to:',
    explanationText: 'Condrieu is 100% Viognier.',
    mentalMapText: 'France -> Rhône -> Condrieu',
    options: [
      { id: 'pq67a', text: 'Red wines from Syrah', isCorrect: false, feedback: 'Côte Rôtie/Hermitage.' },
      { id: 'pq67b', text: 'White wines from Marsanne', isCorrect: false, feedback: 'Hermitage/St Joseph.' },
      { id: 'pq67c', text: 'White wines from Viognier', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq67d', text: 'Sparkling wines', isCorrect: false, feedback: 'Saint-Péray.' }
    ]
  },

  // --- Section 4: Italy (Central & South) ---
  {
    id: 'pq_68_verdicchio_region',
    tier: Tier.Tier1,
    category: 'Italy',
    region: 'Marche',
    questionText: '"Verdicchio dei Castelli di Jesi" is a white wine produced in which Italian region?',
    explanationText: 'The Marche region on the east coast is famous for Verdicchio.',
    mentalMapText: 'Italy -> Marche',
    options: [
      { id: 'pq68a', text: 'Tuscany', isCorrect: false, feedback: 'Vernaccia.' },
      { id: 'pq68b', text: 'Veneto', isCorrect: false, feedback: 'Soave.' },
      { id: 'pq68c', text: 'Marche', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq68d', text: 'Umbria', isCorrect: false, feedback: 'Orvieto.' }
    ]
  },
  {
    id: 'pq_69_etna_red',
    tier: Tier.Tier2,
    category: 'Italy',
    region: 'Sicily',
    questionText: 'The red wines of Etna DOC are made primarily from:',
    explanationText: 'Nerello Mascalese is the high-quality grape of Mt Etna, often compared to Pinot Noir/Nebbiolo.',
    mentalMapText: 'Italy -> Sicily',
    options: [
      { id: 'pq69a', text: 'Aglianico', isCorrect: false, feedback: 'Campania/Basilicata.' },
      { id: 'pq69b', text: 'Nerello Mascalese', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq69c', text: 'Primitivo', isCorrect: false, feedback: 'Puglia.' },
      { id: 'pq69d', text: 'Nero d\'Avola', isCorrect: false, feedback: 'Sicily (but not primary for Etna).' }
    ]
  },
  {
    id: 'pq_70_gran_selezione',
    tier: Tier.Tier3,
    category: 'Italy',
    region: 'Tuscany',
    questionText: 'A "Chianti Classico Gran Selezione" must be made from:',
    explanationText: 'Gran Selezione is the top tier, requiring estate-grown grapes (no bought-in fruit) and 30 months aging.',
    mentalMapText: 'Italy -> Chianti Classico',
    options: [
      { id: 'pq70a', text: 'Estate-grown grapes only', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq70b', text: '100% Merlot', isCorrect: false, feedback: 'Must be Sangiovese dominant.' },
      { id: 'pq70c', text: 'Grapes dried for 3 months', isCorrect: false, feedback: 'Amarone style.' },
      { id: 'pq70d', text: 'Purchased grapes from the wider Chianti zone', isCorrect: false, feedback: 'Must be Estate grown.' }
    ]
  },
  {
    id: 'pq_71_taurasi',
    tier: Tier.Tier2,
    category: 'Italy',
    region: 'Campania',
    questionText: 'Taurasi DOCG is a premium red wine from Campania made from:',
    explanationText: 'Taurasi is often called the "Barolo of the South" and is made from Aglianico.',
    mentalMapText: 'Italy -> Campania',
    options: [
      { id: 'pq71a', text: 'Sangiovese', isCorrect: false, feedback: 'Tuscany.' },
      { id: 'pq71b', text: 'Nebbiolo', isCorrect: false, feedback: 'Piemonte.' },
      { id: 'pq71c', text: 'Aglianico', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq71d', text: 'Montepulciano', isCorrect: false, feedback: 'Abruzzo.' }
    ]
  },

  // --- Section 5: Spain, Portugal & Greece ---
  {
    id: 'pq_72_priorat_soil',
    tier: Tier.Tier2,
    category: 'Spain',
    region: 'Priorat',
    questionText: 'The distinctive slate soils of Priorat are known locally as:',
    explanationText: 'Llicorella is the local name for the red/black slate that retains heat and reflects light in Priorat.',
    mentalMapText: 'Spain -> Priorat',
    options: [
      { id: 'pq72a', text: 'Albariza', isCorrect: false, feedback: 'Jerez (Chalk).' },
      { id: 'pq72b', text: 'Galets', isCorrect: false, feedback: 'Rhône (Stones).' },
      { id: 'pq72c', text: 'Llicorella', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq72d', text: 'Terra Rossa', isCorrect: false, feedback: 'Coonawarra (Clay/Limestone).' }
    ]
  },
  {
    id: 'pq_73_baga',
    tier: Tier.Tier2,
    category: 'Portugal',
    region: 'Bairrada',
    questionText: 'Which Portuguese region is associated with the Baga grape variety?',
    explanationText: 'Bairrada produces high-acid, high-tannin reds from Baga.',
    mentalMapText: 'Portugal -> Bairrada',
    options: [
      { id: 'pq73a', text: 'Dão', isCorrect: false, feedback: 'Touriga Nacional.' },
      { id: 'pq73b', text: 'Bairrada', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq73c', text: 'Alentejo', isCorrect: false, feedback: 'Aragonez/Trincadeira.' },
      { id: 'pq73d', text: 'Vinho Verde', isCorrect: false, feedback: 'Alvarinho/Loureiro.' }
    ]
  },
  {
    id: 'pq_74_pergola_spain',
    tier: Tier.Tier2,
    category: 'Spain',
    region: 'Galicia',
    questionText: 'In Rías Baixas, vines are traditionally trained on pergolas (parras) to:',
    explanationText: 'The humid climate of Rías Baixas makes rot a major risk. Pergolas lift the canopy for airflow.',
    mentalMapText: 'Spain -> Rías Baixas',
    options: [
      { id: 'pq74a', text: 'Protect them from the hot sun', isCorrect: false, feedback: 'Rias Baixas is cool/wet.' },
      { id: 'pq74b', text: 'Improve air circulation and prevent rot in the humid climate', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq74c', text: 'Allow for machine harvesting', isCorrect: false, feedback: 'Pergolas are usually hand harvested.' },
      { id: 'pq74d', text: 'Maximise water retention', isCorrect: false, feedback: 'It is a wet region.' }
    ]
  },
  {
    id: 'pq_75_naoussa',
    tier: Tier.Tier1,
    category: 'Greece',
    region: 'Macedonia',
    questionText: 'Naoussa PDO in Greece produces red wines from which high-tannin, high-acid grape variety?',
    explanationText: 'Xinomavro ("Acid Black") is the grape of Naoussa, often compared to Nebbiolo.',
    mentalMapText: 'Greece -> Naoussa',
    options: [
      { id: 'pq75a', text: 'Agiorgitiko', isCorrect: false, feedback: 'Nemea (smoother).' },
      { id: 'pq75b', text: 'Xinomavro', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq75c', text: 'Assyrtiko', isCorrect: false, feedback: 'White grape (Santorini).' },
      { id: 'pq75d', text: 'Moschofilero', isCorrect: false, feedback: 'Pink skinned/White wine.' }
    ]
  },

  // --- Section 6: Germany & Austria ---
  {
    id: 'pq_76_grosses_gewachs',
    tier: Tier.Tier2,
    category: 'Germany',
    region: 'VDP',
    questionText: 'Under VDP classification, a "Grosses Gewächs" (GG) refers to:',
    explanationText: 'GG is the top classification for DRY wines from the best vineyards (Grosse Lage).',
    mentalMapText: 'Germany -> VDP',
    options: [
      { id: 'pq76a', text: 'A sweet wine from a top vineyard', isCorrect: false, feedback: 'That would be Prädikat (e.g. Auslese).' },
      { id: 'pq76b', text: 'A dry wine from a Grosse Lage (top) vineyard', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq76c', text: 'An entry-level estate wine', isCorrect: false, feedback: 'Gutswein.' },
      { id: 'pq76d', text: 'A sparkling wine', isCorrect: false, feedback: 'Sekt.' }
    ]
  },
  {
    id: 'pq_77_blaufrankisch',
    tier: Tier.Tier2,
    category: 'Austria',
    region: 'General',
    questionText: 'The grape variety "Blaufränkisch" is known for producing:',
    explanationText: 'Blaufränkisch produces medium to full-bodied reds with high acidity, noticeable tannin, and peppery/black fruit spice.',
    mentalMapText: 'Austria -> Grapes',
    options: [
      { id: 'pq77a', text: 'Light bodied, low tannin red wines', isCorrect: false, feedback: 'Zweigelt is lighter, or St Laurent.' },
      { id: 'pq77b', text: 'Medium to full bodied red wines with high acidity and spicy flavours', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq77c', text: 'Sweet white wines affected by botrytis', isCorrect: false, feedback: '' },
      { id: 'pq77d', text: 'Floral aromatic white wines', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_78_franken',
    tier: Tier.Tier1,
    category: 'Germany',
    region: 'Franken',
    questionText: 'Which German region is most associated with the Silvaner grape variety and flask-shaped bottles (Bocksbeutel)?',
    explanationText: 'Franken is famous for earthy, dry Silvaner bottled in the distinctive Bocksbeutel.',
    mentalMapText: 'Germany -> Franken',
    options: [
      { id: 'pq78a', text: 'Mosel', isCorrect: false, feedback: 'Riesling.' },
      { id: 'pq78b', text: 'Rheingau', isCorrect: false, feedback: 'Riesling.' },
      { id: 'pq78c', text: 'Franken', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq78d', text: 'Pfalz', isCorrect: false, feedback: 'Riesling.' }
    ]
  },

  // --- Section 7: New World (USA, Aus, NZ, SA, Chile, Arg) ---
  {
    id: 'pq_79_willamette',
    tier: Tier.Tier1,
    category: 'USA',
    region: 'Oregon',
    questionText: 'The Willamette Valley in Oregon is most famous for:',
    explanationText: 'Willamette is a cool climate region renowned for world-class Pinot Noir.',
    mentalMapText: 'USA -> Oregon',
    options: [
      { id: 'pq79a', text: 'Full-bodied Cabernet Sauvignon', isCorrect: false, feedback: 'Too cool.' },
      { id: 'pq79b', text: 'Premium Pinot Noir', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq79c', text: 'Inexpensive Chardonnay', isCorrect: false, feedback: '' },
      { id: 'pq79d', text: 'Zinfandel', isCorrect: false, feedback: 'Too cool.' }
    ]
  },
  {
    id: 'pq_80_lodi_zin',
    tier: Tier.Tier1,
    category: 'USA',
    region: 'California',
    questionText: 'Which AVA in California is known for having some of the oldest Zinfandel vines in the world?',
    explanationText: 'Lodi (Central Valley) is home to ancient, own-rooted Zinfandel vines that produce concentrated wines.',
    mentalMapText: 'USA -> California -> Lodi',
    options: [
      { id: 'pq80a', text: 'Lodi', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq80b', text: 'Russian River Valley', isCorrect: false, feedback: 'Pinot/Chard.' },
      { id: 'pq80c', text: 'Anderson Valley', isCorrect: false, feedback: 'Sparkling/Pinot.' },
      { id: 'pq80d', text: 'Stag\'s Leap District', isCorrect: false, feedback: 'Cabernet.' }
    ]
  },
  {
    id: 'pq_81_terra_rossa_grape',
    tier: Tier.Tier1,
    category: 'Australia',
    region: 'Coonawarra',
    questionText: 'The "Terra Rossa" soil of Coonawarra is famous for producing:',
    explanationText: 'Coonawarra Cabernet Sauvignon on Terra Rossa soil is Australia\'s most famous pairing.',
    mentalMapText: 'Australia -> Coonawarra',
    options: [
      { id: 'pq81a', text: 'Pinot Noir', isCorrect: false, feedback: 'Too warm/flat.' },
      { id: 'pq81b', text: 'Cabernet Sauvignon', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq81c', text: 'Shiraz', isCorrect: false, feedback: 'Grown, but Cab is the star.' },
      { id: 'pq81d', text: 'Riesling', isCorrect: false, feedback: 'Clare/Eden.' }
    ]
  },
  {
    id: 'pq_82_hunter_semillon_age',
    tier: Tier.Tier2,
    category: 'Australia',
    region: 'Hunter Valley',
    questionText: 'Which Australian region is famous for its unique style of Semillon that is light alcohol and unoaked in youth but develops toast and honey with age?',
    explanationText: 'This is the classic definition of Hunter Valley Semillon.',
    mentalMapText: 'Australia -> Hunter Valley',
    options: [
      { id: 'pq82a', text: 'Margaret River', isCorrect: false, feedback: 'Sem/Sauv Blends.' },
      { id: 'pq82b', text: 'Barossa Valley', isCorrect: false, feedback: 'Full bodied Semillon.' },
      { id: 'pq82c', text: 'Hunter Valley', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq82d', text: 'Yarra Valley', isCorrect: false, feedback: 'Chard/Pinot.' }
    ]
  },
  {
    id: 'pq_83_carmenere_green',
    tier: Tier.Tier2,
    category: 'Chile',
    region: 'General',
    questionText: 'The signature red grape variety of Chile, Carmenère, often displays green pepper notes if:',
    explanationText: 'Carmenère is late ripening. If harvested before fully ripe, high levels of methoxypyrazines cause green pepper/herbaceous notes.',
    mentalMapText: 'Chile -> Grapes',
    options: [
      { id: 'pq83a', text: 'It is harvested too late', isCorrect: false, feedback: 'Would be jammy.' },
      { id: 'pq83b', text: 'It is grown in a hot climate', isCorrect: false, feedback: 'It needs a warm climate.' },
      { id: 'pq83c', text: 'It is harvested when not fully ripe', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq83d', text: 'It is aged in American oak', isCorrect: false, feedback: 'Adds vanilla/coconut.' }
    ]
  },
  {
    id: 'pq_84_pinotage_parent',
    tier: Tier.Tier1,
    category: 'South Africa',
    region: 'Grapes',
    questionText: 'Pinotage, South Africa\'s signature red variety, is a crossing of:',
    explanationText: 'Pinotage is a crossing of Pinot Noir and Cinsault (formerly known as Hermitage).',
    mentalMapText: 'South Africa -> Grapes',
    options: [
      { id: 'pq84a', text: 'Pinot Noir x Cinsault', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq84b', text: 'Pinot Noir x Cabernet Sauvignon', isCorrect: false, feedback: '' },
      { id: 'pq84c', text: 'Merlot x Syrah', isCorrect: false, feedback: '' },
      { id: 'pq84d', text: 'Grenache x Cinsault', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_85_torrontes_location',
    tier: Tier.Tier1,
    category: 'Argentina',
    region: 'Salta',
    questionText: 'Torrontés is an aromatic white grape variety that thrives in the high-altitude vineyards of:',
    explanationText: 'Cafayate (in Salta) is the spiritual home of Torrontés, where extreme altitude preserves its floral aromatics.',
    mentalMapText: 'Argentina -> Salta',
    options: [
      { id: 'pq85a', text: 'Cafayate (Salta)', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq85b', text: 'Mendoza', isCorrect: false, feedback: 'Malbec.' },
      { id: 'pq85c', text: 'Patagonia', isCorrect: false, feedback: 'Pinot Noir.' },
      { id: 'pq85d', text: 'Casablanca Valley', isCorrect: false, feedback: 'Chile.' }
    ]
  },
  {
    id: 'pq_86_hawkes_bay',
    tier: Tier.Tier1,
    category: 'New Zealand',
    region: 'North Island',
    questionText: 'Hawke\'s Bay in New Zealand is best known for:',
    explanationText: 'Hawke\'s Bay (warmest region) is famous for Bordeaux Blends (Merlot/Cab) and Syrah.',
    mentalMapText: 'New Zealand -> Hawke\'s Bay',
    options: [
      { id: 'pq86a', text: 'Sauvignon Blanc', isCorrect: false, feedback: 'Marlborough.' },
      { id: 'pq86b', text: 'Bordeaux-style red blends and Syrah', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq86c', text: 'Pinot Noir', isCorrect: false, feedback: 'Martinborough/Central Otago.' },
      { id: 'pq86d', text: 'Sparkling Wine', isCorrect: false, feedback: 'Marlborough.' }
    ]
  },

  // --- Section 8: Sparkling & Fortified Wines ---
  {
    id: 'pq_87_asti_method',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Italy',
    questionText: 'Which method is used to produce Asti DOCG?',
    explanationText: 'Asti uses the Asti Method: a single tank fermentation arrested by chilling to retain sugar and create a sweet, low-alcohol sparkling wine.',
    mentalMapText: 'Sparkling -> Asti',
    options: [
      { id: 'pq87a', text: 'Traditional Method', isCorrect: false, feedback: 'Franciacorta/Trento.' },
      { id: 'pq87b', text: 'Tank Method', isCorrect: false, feedback: 'Prosecco (Dry/Off-dry).' },
      { id: 'pq87c', text: 'Asti Method (Single fermentation in tank)', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq87d', text: 'Carbonation', isCorrect: false, feedback: 'Lowest quality.' }
    ]
  },
  {
    id: 'pq_88_cap_classique',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'South Africa',
    questionText: '"Cap Classique" is the term used for traditional method sparkling wines from:',
    explanationText: 'Méthode Cap Classique (MCC) is South Africa\'s term for Traditional Method sparkling.',
    mentalMapText: 'South Africa -> Sparkling',
    options: [
      { id: 'pq88a', text: 'California', isCorrect: false, feedback: '' },
      { id: 'pq88b', text: 'South Africa', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq88c', text: 'Australia', isCorrect: false, feedback: '' },
      { id: 'pq88d', text: 'New Zealand', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_89_lbv_age',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Douro',
    questionText: 'A "Late Bottled Vintage" (LBV) Port is aged in wood for how long before bottling?',
    explanationText: 'LBV is bottled 4-6 years after harvest (later than Vintage Port, which is 2 years).',
    mentalMapText: 'Portugal -> Port Styles',
    options: [
      { id: 'pq89a', text: '2 years', isCorrect: false, feedback: 'Vintage Port.' },
      { id: 'pq89b', text: '4 to 6 years', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq89c', text: '10 years', isCorrect: false, feedback: 'Aged Tawny category.' },
      { id: 'pq89d', text: '40 years', isCorrect: false, feedback: 'Aged Tawny category.' }
    ]
  },
  {
    id: 'pq_90_pale_cream',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Jerez',
    questionText: '"Pale Cream" Sherry is essentially:',
    explanationText: 'Pale Cream is a Fino (biologically aged) that has been sweetened with RCGM.',
    mentalMapText: 'Spain -> Sherry -> Styles',
    options: [
      { id: 'pq90a', text: 'A Fino that has been sweetened', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq90b', text: 'An Oloroso that has been sweetened', isCorrect: false, feedback: 'Cream Sherry.' },
      { id: 'pq90c', text: 'A naturally sweet Pedro Ximénez', isCorrect: false, feedback: 'PX.' },
      { id: 'pq90d', text: 'A blend of Amontillado and Muscat', isCorrect: false, feedback: 'Medium Sherry.' }
    ]
  },
  {
    id: 'pq_91_beaumes_de_venise',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Rhône',
    questionText: 'Muscat de Beaumes-de-Venise is a Vin Doux Naturel (VDN) produced in:',
    explanationText: 'Beaumes-de-Venise is an appellation in the Southern Rhône famous for fortified Muscat.',
    mentalMapText: 'France -> Rhône -> Fortified',
    options: [
      { id: 'pq91a', text: 'The Loire Valley', isCorrect: false, feedback: 'Coteaux du Layon (Sweet, not fortified).' },
      { id: 'pq91b', text: 'Southern Rhône', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq91c', text: 'Languedoc', isCorrect: false, feedback: 'Muscat de Frontignan.' },
      { id: 'pq91d', text: 'Roussillon', isCorrect: false, feedback: 'Banyuls/Maury.' }
    ]
  },
  {
    id: 'pq_92_rutherglen_grape',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Rutherglen',
    questionText: 'Rutherglen in Australia is famous for fortified wines made from:',
    explanationText: 'Rutherglen Muscat (Muscat à Petits Grains Rouge) is the signature fortified wine of the region.',
    mentalMapText: 'Australia -> Rutherglen',
    options: [
      { id: 'pq92a', text: 'Shiraz', isCorrect: false, feedback: '' },
      { id: 'pq92b', text: 'Muscat', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq92c', text: 'Grenache', isCorrect: false, feedback: '' },
      { id: 'pq92d', text: 'Semillon', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_93_remuage',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Terminology',
    questionText: 'The term "Remuage" in sparkling wine production refers to:',
    explanationText: 'Remuage is the French term for "Riddling" (moving yeast to the neck).',
    mentalMapText: 'Sparkling -> Production',
    options: [
      { id: 'pq93a', text: 'Adding the dosage', isCorrect: false, feedback: 'Liqueur d\'expédition.' },
      { id: 'pq93b', text: 'Riddling (moving yeast to the neck)', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq93c', text: 'Disgorgement', isCorrect: false, feedback: 'Dégorgement.' },
      { id: 'pq93d', text: 'Pressing the grapes', isCorrect: false, feedback: 'Pressurage.' }
    ]
  },

  // --- Section 9: Trade & Law Definitions ---
  {
    id: 'pq_94_pgi_vs_pdo',
    tier: Tier.Tier2,
    category: 'Legislation',
    region: 'EU',
    questionText: 'Which of the following statements about PGI (Protected Geographical Indication) wines is true compared to PDO?',
    explanationText: 'PGI (IGP) regulations are generally more flexible than PDO (AOP), allowing higher yields, a wider range of varieties (including international ones), and larger geographical areas.',
    mentalMapText: 'Legislation -> EU Classifications',
    options: [
      { id: 'pq94a', text: 'They have stricter regulations on yields', isCorrect: false, feedback: 'PDO is stricter.' },
      { id: 'pq94b', text: 'They typically allow for a wider range of grape varieties and larger geographical areas', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq94c', text: 'They must always be bottled in the region of production', isCorrect: false, feedback: 'PDO often requires this; PGI often does not.' },
      { id: 'pq94d', text: 'They are always more expensive', isCorrect: false, feedback: 'Usually cheaper.' }
    ]
  },
  {
    id: 'pq_95_tokaji_aszu_sugar',
    tier: Tier.Tier3,
    category: 'Hungary',
    region: 'Tokaj',
    questionText: 'As of 2013, the minimum residual sugar level for a wine labelled Tokaji Aszú is equivalent to:',
    explanationText: 'The 2013 law abolished the 3 and 4 Puttonyos categories. All "Aszú" must now have a minimum of 120 g/L sugar, which is the equivalent of the old 5 Puttonyos level.',
    mentalMapText: 'Hungary -> Tokaj -> Law',
    options: [
      { id: 'pq95a', text: '3 Puttonyos', isCorrect: false, feedback: '60 g/L (Abolished category).' },
      { id: 'pq95b', text: '4 Puttonyos', isCorrect: false, feedback: '90 g/L (Abolished category).' },
      { id: 'pq95c', text: '5 Puttonyos', isCorrect: true, feedback: 'Correct. (120 g/L).' },
      { id: 'pq95d', text: '6 Puttonyos', isCorrect: false, feedback: '150 g/L.' }
    ]
  },
  {
    id: 'pq_96_single_quinta',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Douro',
    questionText: 'A "Single Quinta Vintage Port" is:',
    explanationText: 'SQVPs are made from a single estate (Quinta) in years that are good but not good enough to declare a general Vintage. They are often released when ready to drink.',
    mentalMapText: 'Portugal -> Port Styles',
    options: [
      { id: 'pq96a', text: 'Made every year by every producer', isCorrect: false, feedback: 'Only good years.' },
      { id: 'pq96b', text: 'A blend of wines from multiple vineyards in a declared vintage year', isCorrect: false, feedback: 'That is Vintage Port.' },
      { id: 'pq96c', text: 'A wine from a single estate, often produced in years when a general Vintage is not declared', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq96d', text: 'Aged in barrel for 20 years', isCorrect: false, feedback: 'Tawny.' }
    ]
  },
  {
    id: 'pq_97_st_emilion_classification',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Bordeaux',
    questionText: 'In Bordeaux, the classification of Saint-Émilion is integrated into the appellation system. The highest rank is:',
    explanationText: 'The ranking ascends from Grand Cru Classé -> Premier Grand Cru Classé B -> Premier Grand Cru Classé A.',
    mentalMapText: 'France -> Bordeaux -> Classification',
    options: [
      { id: 'pq97a', text: 'Premier Grand Cru Classé A', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq97b', text: 'Premier Grand Cru Classé B', isCorrect: false, feedback: 'Second highest.' },
      { id: 'pq97c', text: 'Grand Cru Classé', isCorrect: false, feedback: 'Third highest.' },
      { id: 'pq97d', text: 'Saint-Émilion Grand Cru', isCorrect: false, feedback: 'This is an appellation, not a rank within the classification.' }
    ]
  },
  {
    id: 'pq_98_vdp_logo',
    tier: Tier.Tier1,
    category: 'Germany',
    region: 'VDP',
    questionText: 'The VDP logo on a German wine bottle features:',
    explanationText: 'The VDP (Verband Deutscher Prädikatsweingüter) logo is an eagle bearing a bunch of grapes.',
    mentalMapText: 'Germany -> Labelling',
    options: [
      { id: 'pq98a', text: 'A bear', isCorrect: false, feedback: 'Berlin/Bern symbol.' },
      { id: 'pq98b', text: 'An eagle bearing a bunch of grapes', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq98c', text: 'A castle', isCorrect: false, feedback: '' },
      { id: 'pq98d', text: 'A river', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_99_vouvray_sweet',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Loire',
    questionText: 'Which appellation in the Loire Valley produces sweet wines affected by noble rot from Chenin Blanc?',
    explanationText: 'Vouvray produces the full range of Chenin styles, including Moelleux (sweet) and Liquoreux (botrytised) wines.',
    mentalMapText: 'France -> Loire -> Vouvray',
    options: [
      { id: 'pq99a', text: 'Vouvray', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq99b', text: 'Sancerre', isCorrect: false, feedback: 'Dry Sauvignon Blanc/Pinot Noir.' },
      { id: 'pq99c', text: 'Pouilly-Fumé', isCorrect: false, feedback: 'Dry Sauvignon Blanc.' },
      { id: 'pq99d', text: 'Chinon', isCorrect: false, feedback: 'Red Cabernet Franc.' }
    ]
  },
  {
    id: 'pq_100_vinho_regional',
    tier: Tier.Tier1,
    category: 'Portugal',
    region: 'Legislation',
    questionText: '"Vinho Regional" is the Portuguese term for:',
    explanationText: 'Vinho Regional is the Portuguese equivalent of PGI (Protected Geographical Indication).',
    mentalMapText: 'Portugal -> Legislation',
    options: [
      { id: 'pq100a', text: 'PDO wines', isCorrect: false, feedback: 'DOC (Denominação de Origem Controlada).' },
      { id: 'pq100b', text: 'PGI wines', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq100c', text: 'Table wines', isCorrect: false, feedback: 'Vinho de Portugal.' },
      { id: 'pq100d', text: 'Fortified wines', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_101_douro_subregions',
    tier: Tier.Tier2,
    category: 'Portugal',
    region: 'Douro',
    questionText: 'Which sub-region of the Douro Valley is known for having the highest annual rainfall and producing the lightest style of wines?',
    explanationText: 'The Baixo Corgo is the westernmost sub-region, receiving the most rain from the Atlantic, resulting in lighter wines compared to the hotter inland areas.',
    mentalMapText: 'Portugal -> Douro -> Sub-regions',
    options: [
      { id: 'pq101a', text: 'Douro Superior', isCorrect: false, feedback: 'Hottest, driest, furthest inland.' },
      { id: 'pq101b', text: 'Cima Corgo', isCorrect: false, feedback: 'The heart of the Douro (moderate).' },
      { id: 'pq101c', text: 'Baixo Corgo', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq101d', text: 'Vila Nova de Gaia', isCorrect: false, feedback: 'Coastal city for aging, not growing.' }
    ]
  },
  {
    id: 'pq_102_socalcos',
    tier: Tier.Tier2,
    category: 'Portugal',
    region: 'Douro',
    questionText: 'In the context of vineyard layout in the Douro, what is a "Socalcos"?',
    explanationText: 'Socalcos are the traditional, narrow, walled terraces. They support high density but cannot be mechanised.',
    mentalMapText: 'Portugal -> Douro -> Viticulture',
    options: [
      { id: 'pq102a', text: 'A modern terrace with no retaining wall allow mechanisation', isCorrect: false, feedback: 'Patamares.' },
      { id: 'pq102b', text: 'A traditional narrow terrace supported by a dry stone wall', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq102c', text: 'A vineyard planted vertically up the slope (Vinhos ao Alto)', isCorrect: false, feedback: 'Vinhos ao Alto.' },
      { id: 'pq102d', text: 'A mechanical harvesting machine', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_103_gaia_maturation',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Douro',
    questionText: 'Which city, located on the coast, is the traditional centre for the maturation of Port wines?',
    explanationText: 'Vila Nova de Gaia is located opposite Porto at the mouth of the river. Its cooler, humid climate is ideal for the maturation of Port.',
    mentalMapText: 'Portugal -> Port Production',
    options: [
      { id: 'pq103a', text: 'Lisbon', isCorrect: false, feedback: 'Capital city (South).' },
      { id: 'pq103b', text: 'Pinhão', isCorrect: false, feedback: 'Town in Cima Corgo (Vineyards).' },
      { id: 'pq103c', text: 'Vila Nova de Gaia', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq103d', text: 'Madrid', isCorrect: false, feedback: 'Capital of Spain.' }
    ]
  },
  {
    id: 'pq_104_patamares',
    tier: Tier.Tier2,
    category: 'Portugal',
    region: 'Douro',
    questionText: 'What is the primary purpose of the "Patamares" system in the Douro?',
    explanationText: 'Patamares are modern terraces without walls, designed specifically to allow tractor access for mechanisation.',
    mentalMapText: 'Portugal -> Douro -> Viticulture',
    options: [
      { id: 'pq104a', text: 'To prevent soil erosion using stone walls', isCorrect: false, feedback: 'Socalcos.' },
      { id: 'pq104b', text: 'To allow for tractor access and mechanisation without retaining walls', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq104c', text: 'To increase the planting density of vines', isCorrect: false, feedback: 'Socalcos have higher density.' },
      { id: 'pq104d', text: 'To shade the grapes from the intense sun', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_105_fortification',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'General',
    questionText: 'The process of adding grape spirit to stop fermentation in Port production is called:',
    explanationText: 'Fortification (mutage) kills the yeast with high alcohol spirit, retaining residual sugar.',
    mentalMapText: 'Fortified -> Production',
    options: [
      { id: 'pq105a', text: 'Chaptalisation', isCorrect: false, feedback: 'Adding sugar to increase potential alcohol.' },
      { id: 'pq105b', text: 'Back-blending', isCorrect: false, feedback: 'Adding unfermented juice to wine (Süssreserve).' },
      { id: 'pq105c', text: 'Fortification', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq105d', text: 'Maceration', isCorrect: false, feedback: 'Skin contact.' }
    ]
  },
  {
    id: 'pq_106_douro_climate',
    tier: Tier.Tier1,
    category: 'Portugal',
    region: 'Douro',
    questionText: 'Which of the following best describes the climate of the Douro Valley vineyard area?',
    explanationText: 'Shielded by the Serra do Marão, the Douro is inland and hot, classifying as Warm Continental.',
    mentalMapText: 'Portugal -> Douro -> Climate',
    options: [
      { id: 'pq106a', text: 'Cool Maritime', isCorrect: false, feedback: 'Vinho Verde.' },
      { id: 'pq106b', text: 'Warm Continental', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq106c', text: 'Hot Desert', isCorrect: false, feedback: '' },
      { id: 'pq106d', text: 'Cool Continental', isCorrect: false, feedback: 'Champagne/Mosel.' }
    ]
  },
  {
    id: 'pq_107_douro_superior',
    tier: Tier.Tier2,
    category: 'Portugal',
    region: 'Douro',
    questionText: 'The "Douro Superior" sub-region is known for being:',
    explanationText: 'The Douro Superior is near the Spanish border. It is the hottest, driest, and most sparsely planted, but produces high-quality fruit.',
    mentalMapText: 'Portugal -> Douro -> Sub-regions',
    options: [
      { id: 'pq107a', text: 'The coolest and wettest part of the valley', isCorrect: false, feedback: 'Baixo Corgo.' },
      { id: 'pq107b', text: 'The centre of production for Tawny Port', isCorrect: false, feedback: '' },
      { id: 'pq107c', text: 'Sparsely planted, hot, and dry, but producing high-quality fruit', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq107d', text: 'Located on the coast', isCorrect: false, feedback: 'Vila Nova de Gaia.' }
    ]
  },
  {
    id: 'pq_108_serra_do_marao',
    tier: Tier.Tier1,
    category: 'Portugal',
    region: 'Douro',
    questionText: 'Which mountain range shields the Douro Valley from the cool, rain-bearing winds of the Atlantic?',
    explanationText: 'The Serra do Marão is the crucial physical barrier that creates the hot, dry continental climate of the Douro.',
    mentalMapText: 'Portugal -> Geography',
    options: [
      { id: 'pq108a', text: 'The Pyrenees', isCorrect: false, feedback: 'France/Spain border.' },
      { id: 'pq108b', text: 'The Alps', isCorrect: false, feedback: 'Central Europe.' },
      { id: 'pq108c', text: 'Serra do Marão', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq108d', text: 'The Andes', isCorrect: false, feedback: 'South America.' }
    ]
  },
  {
    id: 'pq_109_port_abv',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Douro',
    questionText: 'What is the typical alcohol level of a fortified Port wine?',
    explanationText: 'Port is typically fortified to between 19% and 22% abv.',
    mentalMapText: 'Fortified -> Port Characteristics',
    options: [
      { id: 'pq109a', text: '11-13%', isCorrect: false, feedback: 'Table wine.' },
      { id: 'pq109b', text: '15-17%', isCorrect: false, feedback: 'Fino Sherry.' },
      { id: 'pq109c', text: '19-22%', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq109d', text: '40%', isCorrect: false, feedback: 'Spirits.' }
    ]
  },
  {
    id: 'pq_110_reserva_tawny_age',
    tier: Tier.Tier3,
    category: 'Fortified',
    region: 'Douro',
    questionText: 'A "Reserva" Tawny Port must be aged in wood for a minimum of:',
    explanationText: 'Reserve Tawny is aged in oak for at least 7 years (per your answer key) to develop oxidative character.',
    mentalMapText: 'Portugal -> Port Labelling',
    options: [
      { id: 'pq110a', text: '2 years', isCorrect: false, feedback: '' },
      { id: 'pq110b', text: '4 years', isCorrect: false, feedback: '' },
      { id: 'pq110c', text: '6 years', isCorrect: false, feedback: 'Often cited as 6-7, key specifies 7.' },
      { id: 'pq110d', text: '7 years', isCorrect: true, feedback: 'Correct.' }
    ]
  },

  // --- Section 2: Wines of Greece ---
  {
    id: 'pq_111_naoussa',
    tier: Tier.Tier1,
    category: 'Greece',
    region: 'Macedonia',
    questionText: 'Which Greek region is a PDO for red wines made exclusively from Xinomavro?',
    explanationText: 'Naoussa is the most important PDO in northern Greece, exclusively for Xinomavro.',
    mentalMapText: 'Greece -> Naoussa',
    options: [
      { id: 'pq111a', text: 'Nemea', isCorrect: false, feedback: 'Agiorgitiko.' },
      { id: 'pq111b', text: 'Santorini', isCorrect: false, feedback: 'Assyrtiko.' },
      { id: 'pq111c', text: 'Naoussa', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq111d', text: 'Mantinia', isCorrect: false, feedback: 'Moschofilero.' }
    ]
  },
  {
    id: 'pq_112_kouloura',
    tier: Tier.Tier2,
    category: 'Greece',
    region: 'Santorini',
    questionText: 'The traditional "basket" training system used in Santorini to protect vines from strong winds is called:',
    explanationText: 'The Kouloura (basket) system protects the grapes from the fierce Meltemi winds and retains moisture.',
    mentalMapText: 'Greece -> Santorini -> Viticulture',
    options: [
      { id: 'pq112a', text: 'Gobelet', isCorrect: false, feedback: 'Bush vine (Southern France/Spain).' },
      { id: 'pq112b', text: 'Pergola', isCorrect: false, feedback: 'High trellis (Rias Baixas).' },
      { id: 'pq112c', text: 'Kouloura', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq112d', text: 'Espalier', isCorrect: false, feedback: 'VSP.' }
    ]
  },
  {
    id: 'pq_113_nemea_location',
    tier: Tier.Tier1,
    category: 'Greece',
    region: 'Nemea',
    questionText: 'Nemea PDO is located in which part of Greece?',
    explanationText: 'Nemea is located in the Peloponnese peninsula, south of the mainland.',
    mentalMapText: 'Greece -> Regions',
    options: [
      { id: 'pq113a', text: 'Macedonia (North)', isCorrect: false, feedback: 'Naoussa.' },
      { id: 'pq113b', text: 'The Peloponnese', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq113c', text: 'The Aegean Islands', isCorrect: false, feedback: 'Santorini/Paros.' },
      { id: 'pq113d', text: 'Crete', isCorrect: false, feedback: 'Island further south.' }
    ]
  },
  {
    id: 'pq_114_santorini_grape',
    tier: Tier.Tier1,
    category: 'Greece',
    region: 'Santorini',
    questionText: 'The principal grape variety of Santorini PDO, known for high acidity and citrus flavours, is:',
    explanationText: 'Assyrtiko is the flagship white grape of Santorini, retaining high acid even in the hot climate.',
    mentalMapText: 'Greece -> Grapes',
    options: [
      { id: 'pq114a', text: 'Assyrtiko', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq114b', text: 'Agiorgitiko', isCorrect: false, feedback: 'Red grape (Nemea).' },
      { id: 'pq114c', text: 'Xinomavro', isCorrect: false, feedback: 'Red grape (Naoussa).' },
      { id: 'pq114d', text: 'Moschofilero', isCorrect: false, feedback: 'Pink/White grape (Mantinia).' }
    ]
  },
  {
    id: 'pq_115_vinsanto',
    tier: Tier.Tier2,
    category: 'Greece',
    region: 'Santorini',
    questionText: 'Vinsanto from Santorini is a sweet wine made from:',
    explanationText: 'Vinsanto (Wine from Santorini) is made from late-harvested grapes sun-dried for up to 14 days to concentrate sugar and acid.',
    mentalMapText: 'Greece -> Sweet Wines',
    options: [
      { id: 'pq115a', text: 'Fresh grapes fortified with spirit', isCorrect: false, feedback: 'Vin Doux Naturel.' },
      { id: 'pq115b', text: 'Late-harvested grapes that are sun-dried for up to 14 days', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq115c', text: 'Grapes affected by Noble Rot', isCorrect: false, feedback: 'Tokaji/Sauternes.' },
      { id: 'pq115d', text: 'Frozen grapes', isCorrect: false, feedback: 'Icewine.' }
    ]
  },

  // --- Section 3: Germany & Alsace ---
  {
    id: 'pq_116_einzellage',
    tier: Tier.Tier2,
    category: 'Germany',
    region: 'Legislation',
    questionText: 'In Germany, the term "Einzellage" refers to:',
    explanationText: 'Einzellage is an individual named vineyard. Grosslage is a group of vineyards.',
    mentalMapText: 'Germany -> Terminology',
    options: [
      { id: 'pq116a', text: 'A large group of vineyards', isCorrect: false, feedback: 'Grosslage.' },
      { id: 'pq116b', text: 'An individual vineyard', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq116c', text: 'A wine region', isCorrect: false, feedback: 'Anbaugebiet.' },
      { id: 'pq116d', text: 'A grape variety', isCorrect: false, feedback: 'Rebsorte.' }
    ]
  },
  {
    id: 'pq_117_pfalz_haardt',
    tier: Tier.Tier1,
    category: 'Germany',
    region: 'Pfalz',
    questionText: 'Which German region is protected by the Haardt Mountains, creating a warm, dry climate similar to Alsace?',
    explanationText: 'The Pfalz is the continuation of Alsace (separated by the border). The Haardt Mountains (part of the Vosges) provide a rain shadow.',
    mentalMapText: 'Germany -> Pfalz',
    options: [
      { id: 'pq117a', text: 'Mosel', isCorrect: false, feedback: 'Steep slopes, slate.' },
      { id: 'pq117b', text: 'Rheingau', isCorrect: false, feedback: 'Taunus mountains.' },
      { id: 'pq117c', text: 'Pfalz', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq117d', text: 'Baden', isCorrect: false, feedback: 'Further south.' }
    ]
  },
  {
    id: 'pq_118_spatburgunder',
    tier: Tier.Tier1,
    category: 'Germany',
    region: 'Grapes',
    questionText: 'The grape variety "Spätburgunder" is the German name for:',
    explanationText: 'Spätburgunder translates to "Late Burgundian", which is Pinot Noir.',
    mentalMapText: 'Germany -> Grapes',
    options: [
      { id: 'pq118a', text: 'Pinot Gris', isCorrect: false, feedback: 'Grauburgunder.' },
      { id: 'pq118b', text: 'Pinot Blanc', isCorrect: false, feedback: 'Weissburgunder.' },
      { id: 'pq118c', text: 'Pinot Noir', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq118d', text: 'Gamay', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_119_alsace_nobles',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Alsace',
    questionText: 'In Alsace, which of the following is NOT considered a "Noble" grape variety permitted for Grand Cru wines (with few exceptions)?',
    explanationText: 'The 4 noble varieties are Riesling, Muscat, Gewurztraminer, and Pinot Gris. Pinot Blanc is not noble.',
    mentalMapText: 'France -> Alsace -> Classification',
    options: [
      { id: 'pq119a', text: 'Riesling', isCorrect: false, feedback: 'Noble.' },
      { id: 'pq119b', text: 'Pinot Gris', isCorrect: false, feedback: 'Noble.' },
      { id: 'pq119c', text: 'Gewurztraminer', isCorrect: false, feedback: 'Noble.' },
      { id: 'pq119d', text: 'Pinot Blanc', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'pq_120_vosges',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Alsace',
    questionText: 'Which geological feature provides a "rain shadow" effect that makes Alsace one of the driest regions in France?',
    explanationText: 'The Vosges Mountains shield Alsace from the prevailing westerly rain-bearing winds.',
    mentalMapText: 'France -> Alsace -> Geography',
    options: [
      { id: 'pq120a', text: 'The Alps', isCorrect: false, feedback: 'East/South.' },
      { id: 'pq120b', text: 'The Massif Central', isCorrect: false, feedback: 'West.' },
      { id: 'pq120c', text: 'The Vosges Mountains', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq120d', text: 'The Pyrenees', isCorrect: false, feedback: 'South (Spain border).' }
    ]
  },
  {
    id: 'pq_121_kabinett',
    tier: Tier.Tier1,
    category: 'Germany',
    region: 'Prädikat',
    questionText: 'A German Riesling labelled "Kabinett" is best described as:',
    explanationText: 'Kabinett is the first Prädikat level, typically light in body, high in acid, and low in alcohol (often medium sweet or dry).',
    mentalMapText: 'Germany -> Prädikat',
    options: [
      { id: 'pq121a', text: 'The lightest style of Prädikatswein, often with high acidity and green fruit', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq121b', text: 'A full-bodied, high alcohol dry wine', isCorrect: false, feedback: 'Grosses Gewächs or Smaragd.' },
      { id: 'pq121c', text: 'A sweet wine made from botrytised grapes', isCorrect: false, feedback: 'BA/TBA.' },
      { id: 'pq121d', text: 'A sparkling wine', isCorrect: false, feedback: 'Sekt.' }
    ]
  },
  {
    id: 'pq_122_halbtrocken',
    tier: Tier.Tier2,
    category: 'Germany',
    region: 'Legislation',
    questionText: 'The term "Halbtrocken" on a German wine label indicates the wine is:',
    explanationText: 'Halbtrocken means "Half-Dry" or Medium-Dry.',
    mentalMapText: 'Germany -> Labelling',
    options: [
      { id: 'pq122a', text: 'Dry', isCorrect: false, feedback: 'Trocken.' },
      { id: 'pq122b', text: 'Medium-Dry (Half-Dry)', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq122c', text: 'Sweet', isCorrect: false, feedback: 'Süss.' },
      { id: 'pq122d', text: 'Sparkling', isCorrect: false, feedback: 'Sekt.' }
    ]
  },
  {
    id: 'pq_123_red_slate',
    tier: Tier.Tier2,
    category: 'Germany',
    region: 'Mosel',
    questionText: 'Which German region is famous for its red slate soils and steep slopes around the villages of Ürzig and Erden?',
    explanationText: 'These villages are in the Middle Mosel, famous for red volcanic slate (specifically Ürzig Würzgarten).',
    mentalMapText: 'Germany -> Mosel',
    options: [
      { id: 'pq123a', text: 'Rheinhessen', isCorrect: false, feedback: 'Rolling hills.' },
      { id: 'pq123b', text: 'Nahe', isCorrect: false, feedback: 'Varied soils.' },
      { id: 'pq123c', text: 'Mosel', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq123d', text: 'Franken', isCorrect: false, feedback: 'Limestone/Sandstone.' }
    ]
  },
  {
    id: 'pq_124_gg_style',
    tier: Tier.Tier1,
    category: 'Germany',
    region: 'VDP',
    questionText: '"Grosses Gewächs" wines are always:',
    explanationText: 'By definition, GG wines must be Dry (Trocken).',
    mentalMapText: 'Germany -> VDP',
    options: [
      { id: 'pq124a', text: 'Sweet', isCorrect: false, feedback: '' },
      { id: 'pq124b', text: 'Dry', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq124c', text: 'Sparkling', isCorrect: false, feedback: '' },
      { id: 'pq124d', text: 'Rosé', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_125_sgn_botrytis',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Alsace',
    questionText: 'Which Alsace wine style is made from grapes affected by Noble Rot (Botrytis)?',
    explanationText: 'Sélection de Grains Nobles (SGN) requires Noble Rot. Vendanges Tardives (VT) may have it, but it is not mandatory.',
    mentalMapText: 'France -> Alsace -> Styles',
    options: [
      { id: 'pq125a', text: 'Vendanges Tardives (VT)', isCorrect: false, feedback: 'Late harvest, not always botrytis.' },
      { id: 'pq125b', text: 'Sélection de Grains Nobles (SGN)', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq125c', text: 'Edelzwicker', isCorrect: false, feedback: 'Inexpensive blend.' },
      { id: 'pq125d', text: 'Gentil', isCorrect: false, feedback: 'Superior blend.' }
    ]
  },

  // --- Section 4: The Loire Valley ---
  {
    id: 'pq_126_silex',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Loire',
    questionText: 'The key soil type in the Central Vineyards (Sancerre/Pouilly-Fumé) that imparts a flinty, smoky note to the wines is:',
    explanationText: 'Silex (flint) soils are characteristic of Pouilly-Fumé and parts of Sancerre, giving the "gunflint" aroma.',
    mentalMapText: 'France -> Loire -> Central Vineyards',
    options: [
      { id: 'pq126a', text: 'Silex', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq126b', text: 'Tuffeau', isCorrect: false, feedback: 'Anjou-Saumur (Chalk).' },
      { id: 'pq126c', text: 'Granite', isCorrect: false, feedback: 'Muscadet.' },
      { id: 'pq126d', text: 'Schist', isCorrect: false, feedback: 'Anjou/Savennières.' }
    ]
  },
  {
    id: 'pq_127_rose_anjou',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Loire',
    questionText: 'Which appellation in the Loire Valley is dedicated to Rosé wines made primarily from Grolleau and Cabernet Franc?',
    explanationText: 'Note: While the provided key matches to "Cabernet d\'Anjou", technically Cabernet d\'Anjou must be Cabernet Franc/Sauvignon. Rosé d\'Anjou is the appellation typically associated with Grolleau.',
    mentalMapText: 'France -> Loire -> Rosé',
    options: [
      { id: 'pq127a', text: 'Rosé de Loire', isCorrect: false, feedback: 'Always dry, blend.' },
      { id: 'pq127b', text: 'Rosé d\'Anjou', isCorrect: false, feedback: 'Grolleau based.' },
      { id: 'pq127c', text: 'Cabernet d\'Anjou', isCorrect: true, feedback: 'Correct (per answer key).' },
      { id: 'pq127d', text: 'Sancerre Rosé', isCorrect: false, feedback: 'Pinot Noir.' }
    ]
  },
  {
    id: 'pq_128_savennieres_style',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Loire',
    questionText: 'Savennières describes a style of Chenin Blanc that is typically:',
    explanationText: 'Savennières is unique for its full-bodied, austere, complex dry Chenin Blancs that age well.',
    mentalMapText: 'France -> Loire -> Styles',
    options: [
      { id: 'pq128a', text: 'Sweet and botrytised', isCorrect: false, feedback: 'Coteaux du Layon.' },
      { id: 'pq128b', text: 'Dry, full-bodied, and complex', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq128c', text: 'Sparkling', isCorrect: false, feedback: 'Vouvray/Saumur.' },
      { id: 'pq128d', text: 'Light and fruity', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_129_melon_blanc',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Loire',
    questionText: 'The grape variety "Melon Blanc" (Melon de Bourgogne) is the sole variety used in:',
    explanationText: 'Melon Blanc is the grape of the Muscadet appellations in the Pays Nantais.',
    mentalMapText: 'France -> Loire -> Grapes',
    options: [
      { id: 'pq129a', text: 'Vouvray', isCorrect: false, feedback: 'Chenin Blanc.' },
      { id: 'pq129b', text: 'Chinon', isCorrect: false, feedback: 'Cabernet Franc.' },
      { id: 'pq129c', text: 'Muscadet', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq129d', text: 'Menetou-Salon', isCorrect: false, feedback: 'Sauvignon Blanc/Pinot Noir.' }
    ]
  },
  {
    id: 'pq_130_bourgueil_grape',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Loire',
    questionText: 'Bourgueil and Chinon are famous for producing red wines from which grape variety?',
    explanationText: 'Cabernet Franc is the signature red grape of Touraine (Chinon/Bourgueil).',
    mentalMapText: 'France -> Loire -> Touraine',
    options: [
      { id: 'pq130a', text: 'Pinot Noir', isCorrect: false, feedback: 'Sancerre.' },
      { id: 'pq130b', text: 'Gamay', isCorrect: false, feedback: 'Touraine/Anjou.' },
      { id: 'pq130c', text: 'Cabernet Franc', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq130d', text: 'Malbec', isCorrect: false, feedback: 'Côt (minor partner).' }
    ]
  },
  {
    id: 'pq_131_muscadet_climate',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Loire',
    questionText: 'The climate of the Pays Nantais (Muscadet) is best described as:',
    explanationText: 'Located on the Atlantic coast, the Pays Nantais has a Cool Maritime climate.',
    mentalMapText: 'France -> Loire -> Climate',
    options: [
      { id: 'pq131a', text: 'Cool Maritime', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq131b', text: 'Warm Continental', isCorrect: false, feedback: '' },
      { id: 'pq131c', text: 'Cool Continental', isCorrect: false, feedback: 'Central Vineyards.' },
      { id: 'pq131d', text: 'Mediterranean', isCorrect: false, feedback: 'South France.' }
    ]
  },
  {
    id: 'pq_132_cremant_loire',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Sparkling',
    questionText: '"Crémant de Loire" is a sparkling wine that:',
    explanationText: 'All French "Crémant" wines must be made by the Traditional Method (Second fermentation in bottle).',
    mentalMapText: 'France -> Sparkling',
    options: [
      { id: 'pq132a', text: 'Must be made by the Tank Method', isCorrect: false, feedback: 'Forbidden for Crémant.' },
      { id: 'pq132b', text: 'Is made primarily from Sauvignon Blanc', isCorrect: false, feedback: 'SB is generally discouraged/forbidden in sparkling.' },
      { id: 'pq132c', text: 'Is made by the Traditional Method', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq132d', text: 'Is always sweet', isCorrect: false, feedback: 'Usually Brut.' }
    ]
  },
  {
    id: 'pq_133_layon',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Loire',
    questionText: 'Which sub-region of the Loire is most famous for sweet wines made from Chenin Blanc affected by Noble Rot?',
    explanationText: 'Coteaux du Layon (within Anjou) is the specialist region for botrytised sweet Chenin Blanc.',
    mentalMapText: 'France -> Loire -> Sweet',
    options: [
      { id: 'pq133a', text: 'Coteaux du Layon', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq133b', text: 'Muscadet Sèvre et Maine', isCorrect: false, feedback: 'Dry.' },
      { id: 'pq133c', text: 'Pouilly-Fumé', isCorrect: false, feedback: 'Dry.' },
      { id: 'pq133d', text: 'Reuilly', isCorrect: false, feedback: 'Dry.' }
    ]
  },
  {
    id: 'pq_134_touraine_sb',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Loire',
    questionText: 'Touraine Sauvignon Blanc is typically:',
    explanationText: 'Touraine SB is often a simpler, fruiter, and more affordable alternative to Sancerre.',
    mentalMapText: 'France -> Loire -> Styles',
    options: [
      { id: 'pq134a', text: 'Oaked and age-worthy', isCorrect: false, feedback: '' },
      { id: 'pq134b', text: 'Fresh, fruity, and simple with grass and citrus notes', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq134c', text: 'Sweet', isCorrect: false, feedback: '' },
      { id: 'pq134d', text: 'Fortified', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_135_tuffeau',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Loire',
    questionText: 'Tuffeau, the white chalky limestone soil of Anjou-Saumur, is prized because:',
    explanationText: 'Tuffeau is porous, allowing it to drain excess water while acting like a sponge to retain moisture for dry periods.',
    mentalMapText: 'France -> Loire -> Soils',
    options: [
      { id: 'pq135a', text: 'It is completely waterproof', isCorrect: false, feedback: 'It is porous.' },
      { id: 'pq135b', text: 'It drains well but retains water in its porous structure', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq135c', text: 'It is volcanic', isCorrect: false, feedback: '' },
      { id: 'pq135d', text: 'It is granite-based', isCorrect: false, feedback: '' }
    ]
  },

  // --- Section 5: Southern France & Rhône ---
  {
    id: 'pq_136_mistral',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Rhône',
    questionText: 'Which strong, cold northerly wind affects the Southern Rhône Valley?',
    explanationText: 'The Mistral accelerates down the Rhône valley, cooling the vines and preventing fungal disease, but risking damage.',
    mentalMapText: 'France -> Rhône -> Climate',
    options: [
      { id: 'pq136a', text: 'The Sirocco', isCorrect: false, feedback: 'North Africa/Italy.' },
      { id: 'pq136b', text: 'The Tramontane', isCorrect: false, feedback: 'Languedoc (NW wind).' },
      { id: 'pq136c', text: 'The Mistral', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq136d', text: 'The Foehn', isCorrect: false, feedback: 'Alpine wind.' }
    ]
  },
  {
    id: 'pq_137_tavel',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Rhône',
    questionText: 'Which Southern Rhône Cru is famous for producing ONLY Rosé wines?',
    explanationText: 'Tavel is unique among Rhône Crus for being exclusively Rosé.',
    mentalMapText: 'France -> Rhône -> Crus',
    options: [
      { id: 'pq137a', text: 'Lirac', isCorrect: false, feedback: 'Red/White/Rosé.' },
      { id: 'pq137b', text: 'Tavel', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq137c', text: 'Gigondas', isCorrect: false, feedback: 'Red/Rosé.' },
      { id: 'pq137d', text: 'Vacqueyras', isCorrect: false, feedback: 'Red/White/Rosé.' }
    ]
  },
  {
    id: 'pq_138_s_rhone_grape',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Rhône',
    questionText: 'The dominant grape variety in the red blends of the Southern Rhône is:',
    explanationText: 'Grenache is the key variety of the Southern Rhône, often blended with Syrah and Mourvèdre (GSM).',
    mentalMapText: 'France -> Rhône -> Grapes',
    options: [
      { id: 'pq138a', text: 'Syrah', isCorrect: false, feedback: 'Dominant in Northern Rhône.' },
      { id: 'pq138b', text: 'Mourvèdre', isCorrect: false, feedback: 'Dominant in Bandol.' },
      { id: 'pq138c', text: 'Grenache', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq138d', text: 'Cinsault', isCorrect: false, feedback: 'Blending partner.' }
    ]
  },
  {
    id: 'pq_139_picpoul',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Languedoc',
    questionText: 'In the Languedoc, "Picpoul de Pinet" is a white wine known for:',
    explanationText: 'Picpoul (meaning "lip stinger") produces crisp, high-acid wines with citrus and saline notes, perfect for oysters.',
    mentalMapText: 'France -> Southern France',
    options: [
      { id: 'pq139a', text: 'Low acidity and oak aging', isCorrect: false, feedback: '' },
      { id: 'pq139b', text: 'High acidity, citrus flavours, and distinct saline finish', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq139c', text: 'Sweetness and botrytis', isCorrect: false, feedback: '' },
      { id: 'pq139d', text: 'Red berry flavours', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_140_bandol_region',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Provence',
    questionText: 'Which appellation in Provence is famous for powerful, age-worthy red wines based on Mourvèdre?',
    explanationText: 'Bandol is the most prestigious red wine appellation in Provence, requiring a majority of Mourvèdre.',
    mentalMapText: 'France -> Provence',
    options: [
      { id: 'pq140a', text: 'Côtes de Provence', isCorrect: false, feedback: 'Mostly Rosé.' },
      { id: 'pq140b', text: 'Bandol', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq140c', text: 'Cassis', isCorrect: false, feedback: 'White wines.' },
      { id: 'pq140d', text: 'Palette', isCorrect: false, feedback: 'Tiny AOC.' }
    ]
  },
  {
    id: 'pq_141_tramontane',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Languedoc',
    questionText: 'The "Tramontane" wind blows through the gap between the Massif Central and the Pyrenees, affecting which region?',
    explanationText: 'The Tramontane is the NW wind affecting the Languedoc-Roussillon, similar to the Mistral.',
    mentalMapText: 'France -> Climate Winds',
    options: [
      { id: 'pq141a', text: 'Provence', isCorrect: false, feedback: 'Mistral.' },
      { id: 'pq141b', text: 'Languedoc-Roussillon', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq141c', text: 'Bordeaux', isCorrect: false, feedback: 'Atlantic breezes.' },
      { id: 'pq141d', text: 'Alsace', isCorrect: false, feedback: 'Vosges shield.' }
    ]
  },
  {
    id: 'pq_142_gsm',
    tier: Tier.Tier1,
    category: 'France',
    region: 'General',
    questionText: 'A "GSM" blend typically refers to which three grape varieties?',
    explanationText: 'Grenache, Syrah, and Mourvèdre is the classic blend of the Southern Rhône and copied worldwide (e.g., Australia).',
    mentalMapText: 'Grapes -> Blends',
    options: [
      { id: 'pq142a', text: 'Gamay, Syrah, Merlot', isCorrect: false, feedback: '' },
      { id: 'pq142b', text: 'Grenache, Syrah, Mourvèdre', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq142c', text: 'Grenache, Sauvignon, Malbec', isCorrect: false, feedback: '' },
      { id: 'pq142d', text: 'Gewurztraminer, Silvaner, Muscat', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_143_s_rhone_cru_id',
    tier: Tier.Tier2,
    category: 'France',
    region: 'Rhône',
    questionText: 'Which of the following is a "Cru" of the Southern Rhône?',
    explanationText: 'Gigondas is a Southern Cru. The others are Northern Crus.',
    mentalMapText: 'France -> Rhône -> Classification',
    options: [
      { id: 'pq143a', text: 'Crozes-Hermitage', isCorrect: false, feedback: 'Northern.' },
      { id: 'pq143b', text: 'Saint-Joseph', isCorrect: false, feedback: 'Northern.' },
      { id: 'pq143c', text: 'Gigondas', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq143d', text: 'Côte-Rôtie', isCorrect: false, feedback: 'Northern.' }
    ]
  },
  {
    id: 'pq_144_rivesaltes',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Roussillon',
    questionText: 'Muscat de Rivesaltes is a Vin Doux Naturel (VDN) produced in:',
    explanationText: 'Roussillon produces the vast majority of France\'s VDNs, including Muscat de Rivesaltes.',
    mentalMapText: 'France -> Fortified',
    options: [
      { id: 'pq144a', text: 'The Rhône Valley', isCorrect: false, feedback: 'Beaumes-de-Venise.' },
      { id: 'pq144b', text: 'Roussillon', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq144c', text: 'Provence', isCorrect: false, feedback: '' },
      { id: 'pq144d', text: 'The Loire Valley', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_145_s_france_organic',
    tier: Tier.Tier1,
    category: 'France',
    region: 'Southern France',
    questionText: 'The warm, Mediterranean climate of Southern France is ideal for which style of viticulture?',
    explanationText: 'The hot, dry, windy climate reduces fungal disease pressure, making organic and biodynamic viticulture easier than in cool/wet regions.',
    mentalMapText: 'France -> Southern France -> Viticulture',
    options: [
      { id: 'pq145a', text: 'Organic and Biodynamic (low disease pressure)', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq145b', text: 'High density planting', isCorrect: false, feedback: 'Low density is better for drought.' },
      { id: 'pq145c', text: 'Botrytis production (high humidity)', isCorrect: false, feedback: 'It is too dry.' },
      { id: 'pq145d', text: 'Icewine production', isCorrect: false, feedback: 'Too hot.' }
    ]
  },

  // --- Section 6: Review & Technical ---
  {
    id: 'pq_146_autolysis',
    tier: Tier.Tier1,
    category: 'Tasting',
    region: 'General',
    questionText: 'A wine described as having "autolytic" notes would smell of:',
    explanationText: 'Autolysis is the breakdown of dead yeast cells, releasing compounds that smell of biscuit, bread, dough, and toast.',
    mentalMapText: 'Tasting -> Terms',
    options: [
      { id: 'pq146a', text: 'Fresh fruit and flowers', isCorrect: false, feedback: 'Primary aromas.' },
      { id: 'pq146b', text: 'Butter and cream', isCorrect: false, feedback: 'Malolactic conversion.' },
      { id: 'pq146c', text: 'Biscuit, bread, and toast', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq146d', text: 'Vanilla and coconut', isCorrect: false, feedback: 'Oak.' }
    ]
  },
  {
    id: 'pq_147_skins',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'Structure',
    questionText: 'Which part of the grape contains the tannins and colour?',
    explanationText: 'Tannins and anthocyanins (colour) are located in the skins.',
    mentalMapText: 'Viticulture -> Grape Structure',
    options: [
      { id: 'pq147a', text: 'Pulp', isCorrect: false, feedback: 'Sugar, Acid, Water.' },
      { id: 'pq147b', text: 'Seeds', isCorrect: false, feedback: 'Bitter oils/tannins (avoided).' },
      { id: 'pq147c', text: 'Skins', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq147d', text: 'Stems', isCorrect: false, feedback: 'Tannins (if used).' }
    ]
  },
  {
    id: 'pq_148_sur_lie_def',
    tier: Tier.Tier1,
    category: 'Winemaking',
    region: 'Loire',
    questionText: 'The term "Sur Lie" on a bottle of Muscadet indicates:',
    explanationText: 'Sur Lie means "On Lees". The wine spends winter on the yeast sediment and is bottled directly to retain freshness and texture.',
    mentalMapText: 'Winemaking -> Terms',
    options: [
      { id: 'pq148a', text: 'The wine was aged in oak barrels', isCorrect: false, feedback: '' },
      { id: 'pq148b', text: 'The wine was bottled directly off the dead yeast cells', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq148c', text: 'The wine is sweet', isCorrect: false, feedback: '' },
      { id: 'pq148d', text: 'The wine is sparkling', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_149_hybrid',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'General',
    questionText: 'Which of the following is a "hybird" vine?',
    explanationText: 'Seyval Blanc is a hybrid (cross of two species). Vitis vinifera is a species, and Chard/Cab are varieties of that species.',
    mentalMapText: 'Viticulture -> Vine Types',
    options: [
      { id: 'pq149a', text: 'Vitis vinifera', isCorrect: false, feedback: 'Species.' },
      { id: 'pq149b', text: 'Seyval Blanc', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq149c', text: 'Cabernet Sauvignon', isCorrect: false, feedback: 'Vinifera Variety.' },
      { id: 'pq149d', text: 'Chardonnay', isCorrect: false, feedback: 'Vinifera Variety.' }
    ]
  },
  {
    id: 'pq_150_veraison',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'Cycle',
    questionText: '"Veraison" marks the point in the vine cycle where:',
    explanationText: 'Veraison is the onset of ripening, where black grapes turn red/purple and translucent, and white grapes turn golden.',
    mentalMapText: 'Viticulture -> Growth Cycle',
    options: [
      { id: 'pq150a', text: 'Budburst occurs', isCorrect: false, feedback: 'Start of season.' },
      { id: 'pq150b', text: 'Flowering begins', isCorrect: false, feedback: 'Mid-spring.' },
      { id: 'pq150c', text: 'Grapes start to change colour and ripen', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq150d', text: 'Leaves fall off the vine', isCorrect: false, feedback: 'Dormancy.' }
    ]
  },
  {
    id: 'pq_151_liqueur_de_tirage',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Production',
    questionText: 'Which mixture is added to a still base wine to initiate the second fermentation in the Traditional Method?',
    explanationText: 'Liqueur de tirage is the mixture of wine, sugar, yeast, and yeast nutrients added to the base wine to start the second fermentation in the bottle.',
    mentalMapText: 'Sparkling -> Traditional Method',
    options: [
      { id: 'pq151a', text: 'Liqueur d\'expédition', isCorrect: false, feedback: 'Added at the end (Dosage).' },
      { id: 'pq151b', text: 'Liqueur de tirage', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq151c', text: 'Dosage', isCorrect: false, feedback: 'Added after disgorgement.' },
      { id: 'pq151d', text: 'Rectified Concentrated Grape Must (RCGM)', isCorrect: false, feedback: 'Sweetening agent.' }
    ]
  },
  {
    id: 'pq_152_autolysis_purpose',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Production',
    questionText: 'What is the primary purpose of "autolysis" in sparkling wine production?',
    explanationText: 'Autolysis is the enzymatic breakdown of dead yeast cells (lees), which releases compounds that give the wine aromas of bread, biscuit, and toast.',
    mentalMapText: 'Sparkling -> Maturation',
    options: [
      { id: 'pq152a', text: 'To increase the alcohol level', isCorrect: false, feedback: 'Alcohol is created during fermentation.' },
      { id: 'pq152b', text: 'To create bubbles', isCorrect: false, feedback: 'Bubbles are CO2 trapped during fermentation.' },
      { id: 'pq152c', text: 'To impart flavours of bread, biscuit, and toast', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq152d', text: 'To clarify the wine', isCorrect: false, feedback: 'Riddling/Disgorgement does this.' }
    ]
  },
  {
    id: 'pq_153_transfer_method',
    tier: Tier.Tier2,
    category: 'Sparkling',
    region: 'Production',
    questionText: 'In the Transfer Method, how is the yeast sediment removed?',
    explanationText: 'In the Transfer Method, bottles are emptied into a pressurized tank, and the wine is filtered to remove the yeast before being re-bottled.',
    mentalMapText: 'Sparkling -> Transfer Method',
    options: [
      { id: 'pq153a', text: 'By disgorgement of individual bottles', isCorrect: false, feedback: 'Traditional Method.' },
      { id: 'pq153b', text: 'By filtration after emptying bottles into a pressurised tank', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq153c', text: 'By gravity settling', isCorrect: false, feedback: '' },
      { id: 'pq153d', text: 'By adding fining agents', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_154_ancestral_method',
    tier: Tier.Tier2,
    category: 'Sparkling',
    region: 'Production',
    questionText: 'Which sparkling wine method involves a single fermentation where the wine is bottled before the fermentation is complete?',
    explanationText: 'The Ancestral Method (Pét-Nat) starts fermentation in a tank and finishes it in the bottle, trapping the CO2 without adding extra sugar/yeast.',
    mentalMapText: 'Sparkling -> Ancestral Method',
    options: [
      { id: 'pq154a', text: 'Tank Method', isCorrect: false, feedback: 'Two fermentations.' },
      { id: 'pq154b', text: 'Traditional Method', isCorrect: false, feedback: 'Two fermentations.' },
      { id: 'pq154c', text: 'Ancestral Method', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq154d', text: 'Transfer Method', isCorrect: false, feedback: 'Two fermentations.' }
    ]
  },
  {
    id: 'pq_155_tank_method_grapes',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Production',
    questionText: 'The "Tank Method" is ideally suited for grape varieties such as:',
    explanationText: 'The Tank Method is used for aromatic varieties (Muscat, Riesling, Glera) to preserve their primary fruit aromas, which would be masked by autolytic characters.',
    mentalMapText: 'Sparkling -> Tank Method',
    options: [
      { id: 'pq155a', text: 'Pinot Noir and Chardonnay', isCorrect: false, feedback: 'Usually Traditional Method.' },
      { id: 'pq155b', text: 'Muscat and Riesling', isCorrect: true, feedback: 'Correct. Aromatic varieties.' },
      { id: 'pq155c', text: 'Cabernet Sauvignon and Merlot', isCorrect: false, feedback: 'Rarely used for sparkling.' },
      { id: 'pq155d', text: 'Shiraz and Grenache', isCorrect: false, feedback: 'Sparkling Shiraz (often Traditional or Carbonation).' }
    ]
  },
  {
    id: 'pq_156_champagne_cuvee',
    tier: Tier.Tier2,
    category: 'Sparkling',
    region: 'Champagne',
    questionText: 'In Champagne production, the "Cuvée" refers to:',
    explanationText: 'The Cuvée is the first 2,050 litres of juice from 4,000kg of grapes. It is the purest juice, rich in acids and finesse.',
    mentalMapText: 'Sparkling -> Pressing',
    options: [
      { id: 'pq156a', text: 'The second pressing of the grapes', isCorrect: false, feedback: 'The Taille.' },
      { id: 'pq156b', text: 'The first liquid to come off the press (purest juice)', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq156c', text: 'The blend of red wines only', isCorrect: false, feedback: '' },
      { id: 'pq156d', text: 'The mixture of sugar and wine added at the end', isCorrect: false, feedback: 'Liqueur d\'expédition.' }
    ]
  },
  {
    id: 'pq_157_blanc_de_noirs',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Champagne',
    questionText: 'A Champagne labelled "Blanc de Noirs" is made from:',
    explanationText: 'Blanc de Noirs means "White from Blacks", made from black grapes (Pinot Noir and/or Pinot Meunier).',
    mentalMapText: 'Sparkling -> Styles',
    options: [
      { id: 'pq157a', text: '100% Chardonnay', isCorrect: false, feedback: 'Blanc de Blancs.' },
      { id: 'pq157b', text: '100% Pinot Noir and/or Meunier', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq157c', text: 'A blend of Chardonnay and Pinot Noir', isCorrect: false, feedback: 'Standard blend.' },
      { id: 'pq157d', text: '100% Meunier only', isCorrect: false, feedback: 'Possible, but can also be Pinot Noir.' }
    ]
  },
  {
    id: 'pq_158_nv_lees_aging',
    tier: Tier.Tier2,
    category: 'Sparkling',
    region: 'Champagne',
    questionText: 'What is the minimum maturation period on lees for a Non-Vintage Champagne?',
    explanationText: 'NV Champagne requires 15 months total ageing, of which at least 12 months must be on the lees.',
    mentalMapText: 'Sparkling -> Legislation',
    options: [
      { id: 'pq158a', text: '9 months', isCorrect: false, feedback: 'Minimum for Crémant.' },
      { id: 'pq158b', text: '12 months', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq158c', text: '15 months', isCorrect: false, feedback: 'Total ageing time (including post-disgorgement).' },
      { id: 'pq158d', text: '36 months', isCorrect: false, feedback: 'Vintage Champagne.' }
    ]
  },
  {
    id: 'pq_159_cote_des_blancs',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Champagne',
    questionText: 'Which region in Champagne is most famous for its Chardonnay vineyards?',
    explanationText: 'The Côte des Blancs is famous for its chalky slopes planted almost exclusively with Chardonnay.',
    mentalMapText: 'Sparkling -> Champagne Sub-regions',
    options: [
      { id: 'pq159a', text: 'Montagne de Reims', isCorrect: false, feedback: 'Pinot Noir.' },
      { id: 'pq159b', text: 'Vallée de la Marne', isCorrect: false, feedback: 'Pinot Meunier.' },
      { id: 'pq159c', text: 'Côte des Blancs', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq159d', text: 'Côte des Bar', isCorrect: false, feedback: 'Pinot Noir.' }
    ]
  },
  {
    id: 'pq_160_cava_method',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Spain',
    questionText: '"Cava" is a Spanish sparkling wine that must be made using:',
    explanationText: 'Cava DO regulations require the Traditional Method.',
    mentalMapText: 'Sparkling -> Cava',
    options: [
      { id: 'pq160a', text: 'The Tank Method', isCorrect: false, feedback: '' },
      { id: 'pq160b', text: 'The Ancestral Method', isCorrect: false, feedback: '' },
      { id: 'pq160c', text: 'The Traditional Method', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq160d', text: 'Carbonation', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_161_asti_method_wine',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Italy',
    questionText: 'Which Italian sparkling wine is made using the "Asti Method"?',
    explanationText: 'Asti DOCG uses the specific Asti Method (single tank fermentation arrested by chilling) to produce sweet, low-alcohol sparkling wine.',
    mentalMapText: 'Sparkling -> Asti',
    options: [
      { id: 'pq161a', text: 'Prosecco', isCorrect: false, feedback: 'Tank Method.' },
      { id: 'pq161b', text: 'Lambrusco', isCorrect: false, feedback: 'Tank Method.' },
      { id: 'pq161c', text: 'Franciacorta', isCorrect: false, feedback: 'Traditional Method.' },
      { id: 'pq161d', text: 'Asti DOCG', isCorrect: true, feedback: 'Correct.' }
    ]
  },
  {
    id: 'pq_162_brut_nature',
    tier: Tier.Tier2,
    category: 'Sparkling',
    region: 'Legislation',
    questionText: 'A sparkling wine labelled "Brut Nature" or "Zero Dosage" contains:',
    explanationText: 'Brut Nature allows 0-3 g/L residual sugar and no added sugar in the dosage.',
    mentalMapText: 'Sparkling -> Sweetness',
    options: [
      { id: 'pq162a', text: '0-3 g/L of sugar', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq162b', text: '0-12 g/L of sugar', isCorrect: false, feedback: 'Brut.' },
      { id: 'pq162c', text: '17-32 g/L of sugar', isCorrect: false, feedback: 'Sec/Dry.' },
      { id: 'pq162d', text: '50+ g/L of sugar', isCorrect: false, feedback: 'Doux.' }
    ]
  },
  {
    id: 'pq_163_cremant_def',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'France',
    questionText: 'The term "Crémant" refers to French sparkling wines that:',
    explanationText: 'Crémant is the term for French Traditional Method sparkling wines made outside the Champagne region (e.g., Alsace, Loire, Bourgogne).',
    mentalMapText: 'Sparkling -> Crémant',
    options: [
      { id: 'pq163a', text: 'Are always sweet', isCorrect: false, feedback: '' },
      { id: 'pq163b', text: 'Are made by the Traditional Method outside of Champagne', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq163c', text: 'Are made using the Tank Method', isCorrect: false, feedback: '' },
      { id: 'pq163d', text: 'Are made exclusively from Chenin Blanc', isCorrect: false, feedback: 'Depends on region.' }
    ]
  },
  {
    id: 'pq_164_prosecco_grape',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Italy',
    questionText: 'In the production of Prosecco, which grape variety is used?',
    explanationText: 'Glera is the grape variety used for Prosecco.',
    mentalMapText: 'Sparkling -> Prosecco',
    options: [
      { id: 'pq164a', text: 'Muscat', isCorrect: false, feedback: '' },
      { id: 'pq164b', text: 'Glera', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq164c', text: 'Chardonnay', isCorrect: false, feedback: '' },
      { id: 'pq164d', text: 'Nebbiolo', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_165_gyropalette',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'Production',
    questionText: 'What is the function of a "gyropalette" in sparkling wine production?',
    explanationText: 'A gyropalette is a machine that automates the riddling (remuage) process, replacing manual turning.',
    mentalMapText: 'Sparkling -> Production',
    options: [
      { id: 'pq165a', text: 'To press the grapes', isCorrect: false, feedback: '' },
      { id: 'pq165b', text: 'To automate the riddling process', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq165c', text: 'To freeze the neck of the bottle', isCorrect: false, feedback: 'Freezing brine bath.' },
      { id: 'pq165d', text: 'To add the dosage', isCorrect: false, feedback: '' }
    ]
  },

  // --- Section 2: Sherry Production & Styles ---
  {
    id: 'pq_166_jerez_winds',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Which two winds significantly affect the climate of Jerez?',
    explanationText: 'The Poniente is cool and humid (promotes flor), while the Levante is hot and dry (stresses vines, concentrates sugar).',
    mentalMapText: 'Spain -> Jerez -> Climate',
    options: [
      { id: 'pq166a', text: 'Mistral and Tramontane', isCorrect: false, feedback: 'France.' },
      { id: 'pq166b', text: 'Sirocco and Foehn', isCorrect: false, feedback: 'Italy/Alps.' },
      { id: 'pq166c', text: 'Poniente (cool/humid) and Levante (hot/dry)', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq166d', text: 'Zonda and Humboldt Current', isCorrect: false, feedback: 'South America.' }
    ]
  },
  {
    id: 'pq_167_albariza',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'The unique soil in Jerez, known as "Albariza", is valued for its ability to:',
    explanationText: 'Albariza soil forms a crust when dry, trapping moisture underground which is critical for the vines during the hot, dry summer.',
    mentalMapText: 'Spain -> Jerez -> Soils',
    options: [
      { id: 'pq167a', text: 'Reflect heat', isCorrect: false, feedback: 'It does reflect light, but moisture retention is key.' },
      { id: 'pq167b', text: 'Drain well but retain moisture in the summer', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq167c', text: 'Prevent phylloxera', isCorrect: false, feedback: '' },
      { id: 'pq167d', text: 'Add high acidity to the grapes', isCorrect: false, feedback: 'Palomino is naturally low acid.' }
    ]
  },
  {
    id: 'pq_168_palomino',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Which grape variety accounts for the vast majority of plantings in Jerez and is used for dry styles?',
    explanationText: 'Palomino is the principal grape for all dry Sherry styles (Fino, Oloroso, Amontillado).',
    mentalMapText: 'Spain -> Jerez -> Grapes',
    options: [
      { id: 'pq168a', text: 'Pedro Ximénez', isCorrect: false, feedback: 'Sweet wines.' },
      { id: 'pq168b', text: 'Muscat of Alexandria', isCorrect: false, feedback: 'Sweet wines (Moscatel).' },
      { id: 'pq168c', text: 'Palomino', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq168d', text: 'Garnacha', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_169_sobretabla',
    tier: Tier.Tier3,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'In the Sherry production process, what is "Sobretabla"?',
    explanationText: 'Sobretabla is the interim stage where wines are held after fortification but before entering the Solera system, to verify if flor develops correctly.',
    mentalMapText: 'Spain -> Sherry -> Production',
    options: [
      { id: 'pq169a', text: 'The harvest period', isCorrect: false, feedback: '' },
      { id: 'pq169b', text: 'The interim period where wine is set aside before entering a solera', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq169c', text: 'The final blending stage', isCorrect: false, feedback: '' },
      { id: 'pq169d', text: 'The pressing stage', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_170_biological_fortification',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Wines destined for biological ageing (Fino) are fortified to:',
    explanationText: 'Wines for biological ageing are fortified to 15–15.5% abv, which is the ideal strength for flor to thrive.',
    mentalMapText: 'Spain -> Sherry -> Production',
    options: [
      { id: 'pq170a', text: '15% - 15.5% abv', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq170b', text: '17% abv', isCorrect: false, feedback: 'Kills flor (Oloroso).' },
      { id: 'pq170c', text: '19% abv', isCorrect: false, feedback: 'Port levels.' },
      { id: 'pq170d', text: '22% abv', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_171_flor_conditions',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Jerez',
    questionText: '"Flor" requires which conditions to thrive?',
    explanationText: 'Flor needs alcohol (~15%), oxygen (barrels not full), and nutrients (glycerol/sugar) to survive.',
    mentalMapText: 'Spain -> Sherry -> Biological Ageing',
    options: [
      { id: 'pq171a', text: 'High alcohol (>17%) and no oxygen', isCorrect: false, feedback: 'This kills flor.' },
      { id: 'pq171b', text: 'Alcohol (~15%), oxygen, and nutrients', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq171c', text: 'Freezing temperatures and high sugar', isCorrect: false, feedback: '' },
      { id: 'pq171d', text: 'Complete darkness and anaerobic conditions', isCorrect: false, feedback: 'Flor needs oxygen.' }
    ]
  },
  {
    id: 'pq_172_amontillado_aging',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Which style of Sherry undergoes biological ageing followed by a period of oxidative ageing?',
    explanationText: 'Amontillado starts as a Fino (under flor), but is then fortified again to kill the flor, allowing it to age oxidatively.',
    mentalMapText: 'Spain -> Sherry -> Styles',
    options: [
      { id: 'pq172a', text: 'Fino', isCorrect: false, feedback: 'Biological only.' },
      { id: 'pq172b', text: 'Oloroso', isCorrect: false, feedback: 'Oxidative only.' },
      { id: 'pq172c', text: 'Amontillado', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq172d', text: 'Manzanilla', isCorrect: false, feedback: 'Biological only.' }
    ]
  },
  {
    id: 'pq_173_palo_cortado_char',
    tier: Tier.Tier3,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'A "Palo Cortado" is best described as having:',
    explanationText: 'Palo Cortado is a rare style defined as having the delicate aroma of Amontillado but the body and structure of Oloroso.',
    mentalMapText: 'Spain -> Sherry -> Styles',
    options: [
      { id: 'pq173a', text: 'The aroma of Amontillado and the body of Oloroso', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq173b', text: 'The aroma of Fino and the body of Manzanilla', isCorrect: false, feedback: '' },
      { id: 'pq173c', text: 'Extreme sweetness', isCorrect: false, feedback: 'Usually dry.' },
      { id: 'pq173d', text: 'A pale colour and flor character', isCorrect: false, feedback: 'Fino.' }
    ]
  },
  {
    id: 'pq_174_vors_age',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Jerez',
    questionText: '"VORS" on a Sherry label indicates an average age of at least:',
    explanationText: 'VORS (Vinum Optimum Rare Signatum / Very Old Rare Sherry) requires an average age of 30 years.',
    mentalMapText: 'Spain -> Sherry -> Classification',
    options: [
      { id: 'pq174a', text: '10 years', isCorrect: false, feedback: '' },
      { id: 'pq174b', text: '20 years', isCorrect: false, feedback: 'VOS.' },
      { id: 'pq174c', text: '30 years', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq174d', text: '40 years', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_175_pale_cream_sweetener',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Which sweetening agent is typically used to create "Pale Cream" Sherry?',
    explanationText: 'Pale Cream is Fino that has been sweetened with RCGM (Rectified Concentrated Grape Must) because RCGM is colourless and preserves the pale appearance.',
    mentalMapText: 'Spain -> Sherry -> Sweetening',
    options: [
      { id: 'pq175a', text: 'Pedro Ximénez (PX)', isCorrect: false, feedback: 'Brown/Dark colour.' },
      { id: 'pq175b', text: 'Rectified Concentrated Grape Must (RCGM)', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq175c', text: 'Brown sugar', isCorrect: false, feedback: '' },
      { id: 'pq175d', text: 'Caramel', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_176_oloroso_aging',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Jerez',
    questionText: '"Oloroso" Sherry is aged:',
    explanationText: 'Oloroso is fortified to 17% immediately, preventing flor growth, so it ages in direct contact with oxygen (oxidatively).',
    mentalMapText: 'Spain -> Sherry -> Styles',
    options: [
      { id: 'pq176a', text: 'Biologically under flor', isCorrect: false, feedback: 'Fino.' },
      { id: 'pq176b', text: 'Oxidatively (without flor)', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq176c', text: 'In stainless steel tanks', isCorrect: false, feedback: 'Wood (Solera).' },
      { id: 'pq176d', text: 'In bottle only', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_177_px_process',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Naturally sweet Pedro Ximénez (PX) wines are made from grapes that have been:',
    explanationText: 'PX grapes are sun-dried (passerillage) to evaporate water and concentrate sugar before fermentation.',
    mentalMapText: 'Spain -> Sherry -> Sweet Wines',
    options: [
      { id: 'pq177a', text: 'Frozen on the vine', isCorrect: false, feedback: 'Icewine.' },
      { id: 'pq177b', text: 'Infected with Noble Rot', isCorrect: false, feedback: 'Tokaji/Sauternes.' },
      { id: 'pq177c', text: 'Sun-dried to concentrate sugar (passerillage)', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq177d', text: 'Harvested early for high acidity', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_178_solera_system',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'What is the name of the fractional blending system used to mature Sherry?',
    explanationText: 'The Solera System is the dynamic aging process where younger wine is blended with older wine.',
    mentalMapText: 'Spain -> Sherry -> Solera',
    options: [
      { id: 'pq178a', text: 'Carbonic Maceration', isCorrect: false, feedback: 'Fermentation style.' },
      { id: 'pq178b', text: 'The Solera System', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq178c', text: 'Battonage', isCorrect: false, feedback: 'Lees stirring.' },
      { id: 'pq178d', text: 'Racking', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_179_manzanilla_town',
    tier: Tier.Tier1,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'A "Manzanilla" Sherry is a Fino style that must be matured in:',
    explanationText: 'Sanlúcar de Barrameda is coastal and humid, allowing for a thick layer of flor year-round, which defines the Manzanilla style.',
    mentalMapText: 'Spain -> Sherry -> Manzanilla',
    options: [
      { id: 'pq179a', text: 'Jerez de la Frontera', isCorrect: false, feedback: 'Fino/Oloroso.' },
      { id: 'pq179b', text: 'El Puerto de Santa María', isCorrect: false, feedback: 'Fino/Oloroso.' },
      { id: 'pq179c', text: 'Sanlúcar de Barrameda', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq179d', text: 'Seville', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_180_solera_space',
    tier: Tier.Tier2,
    category: 'Fortified',
    region: 'Jerez',
    questionText: 'Why are the butts (barrels) in a Solera system only filled five-sixths full?',
    explanationText: 'The gap (ullage) allows oxygen to reach the surface of the wine, which is essential for both flor survival (in biological aging) and oxidation (in oxidative aging).',
    mentalMapText: 'Spain -> Sherry -> Solera',
    options: [
      { id: 'pq180a', text: 'To save wine', isCorrect: false, feedback: '' },
      { id: 'pq180b', text: 'To allow oxygen to reach the wine/flor', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq180c', text: 'To make them easier to move', isCorrect: false, feedback: 'Soleras are rarely moved.' },
      { id: 'pq180d', text: 'To prevent evaporation', isCorrect: false, feedback: '' }
    ]
  },

  // --- Section 3: Wines of the USA (New York, Oregon, Washington) ---
  {
    id: 'pq_181_finger_lakes',
    tier: Tier.Tier1,
    category: 'USA',
    region: 'New York',
    questionText: 'Which American Viticultural Area (AVA) in New York State is most noted for quality Riesling?',
    explanationText: 'Finger Lakes is famous for its cool climate Riesling, which mirrors German styles.',
    mentalMapText: 'USA -> New York',
    options: [
      { id: 'pq181a', text: 'Napa Valley', isCorrect: false, feedback: 'California.' },
      { id: 'pq181b', text: 'Finger Lakes', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq181c', text: 'Willamette Valley', isCorrect: false, feedback: 'Oregon.' },
      { id: 'pq181d', text: 'Columbia Valley', isCorrect: false, feedback: 'Washington.' }
    ]
  },
  {
    id: 'pq_182_deep_lakes_role',
    tier: Tier.Tier2,
    category: 'USA',
    region: 'New York',
    questionText: 'How do the deep glacial lakes in the Finger Lakes region aid grape growing?',
    explanationText: 'The deep lakes store heat, moderating the freezing winter temperatures and extending the growing season into autumn.',
    mentalMapText: 'USA -> New York -> Geography',
    options: [
      { id: 'pq182a', text: 'They provide irrigation water only', isCorrect: false, feedback: '' },
      { id: 'pq182b', text: 'They reflect sunlight to ripen Cabernet Sauvignon', isCorrect: false, feedback: '' },
      { id: 'pq182c', text: 'They store heat, extending the growing season and moderating winter temperatures', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq182d', text: 'They cause noble rot every year', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_183_willamette_grape',
    tier: Tier.Tier1,
    category: 'USA',
    region: 'Oregon',
    questionText: 'Which grape variety is considered the signature red grape of Oregon\'s Willamette Valley?',
    explanationText: 'Willamette Valley has a cool maritime climate ideal for world-class Pinot Noir.',
    mentalMapText: 'USA -> Oregon -> Grapes',
    options: [
      { id: 'pq183a', text: 'Cabernet Sauvignon', isCorrect: false, feedback: 'Too cool.' },
      { id: 'pq183b', text: 'Zinfandel', isCorrect: false, feedback: 'Too cool.' },
      { id: 'pq183c', text: 'Pinot Noir', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq183d', text: 'Merlot', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_184_columbia_valley_rain_shadow',
    tier: Tier.Tier1,
    category: 'USA',
    region: 'Washington',
    questionText: 'The Columbia Valley AVA in Washington State sits in the rain shadow of which mountain range?',
    explanationText: 'The Cascade Mountains block the wet weather from the Pacific, making Eastern Washington a desert.',
    mentalMapText: 'USA -> Washington -> Geography',
    options: [
      { id: 'pq184a', text: 'The Andes', isCorrect: false, feedback: 'South America.' },
      { id: 'pq184b', text: 'The Rockies', isCorrect: false, feedback: 'Further East.' },
      { id: 'pq184c', text: 'The Cascade Mountains', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq184d', text: 'The Alps', isCorrect: false, feedback: 'Europe.' }
    ]
  },
  {
    id: 'pq_185_wa_irrigation',
    tier: Tier.Tier1,
    category: 'USA',
    region: 'Washington',
    questionText: 'Due to the very dry conditions in Eastern Washington, what is often a necessity for viticulture?',
    explanationText: 'With less than 200mm of rain annually in some parts, irrigation (from the Columbia River) is essential.',
    mentalMapText: 'USA -> Washington -> Viticulture',
    options: [
      { id: 'pq185a', text: 'Green harvesting', isCorrect: false, feedback: '' },
      { id: 'pq185b', text: 'Irrigation', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq185c', text: 'Terracing', isCorrect: false, feedback: '' },
      { id: 'pq185d', text: 'Using American rootstocks', isCorrect: false, feedback: 'Own roots are common due to no phylloxera (sandy soils).' }
    ]
  },
  {
    id: 'pq_186_wa_ny_hazard',
    tier: Tier.Tier1,
    category: 'USA',
    region: 'General',
    questionText: 'Which climatic hazard is a major concern for grape growers in Washington State and New York?',
    explanationText: 'Both regions suffer from extreme continental winters, making winter freeze (and vine death) a major risk.',
    mentalMapText: 'USA -> Hazards',
    options: [
      { id: 'pq186a', text: 'Drought', isCorrect: false, feedback: 'WA has irrigation; NY is wet.' },
      { id: 'pq186b', text: 'Winter freeze', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq186c', text: 'Hurricanes', isCorrect: false, feedback: 'East coast sometimes, but freeze is annual risk.' },
      { id: 'pq186d', text: 'Forest fires', isCorrect: false, feedback: 'California/Oregon issue primarily.' }
    ]
  },
  {
    id: 'pq_187_finger_lakes_varieties',
    tier: Tier.Tier2,
    category: 'USA',
    region: 'New York',
    questionText: 'In addition to Riesling, which other varieties are successful in the Finger Lakes?',
    explanationText: 'Pinot Noir, Cabernet Franc, and Chardonnay are the other main vinifera grapes that can survive the cool climate.',
    mentalMapText: 'USA -> New York -> Grapes',
    options: [
      { id: 'pq187a', text: 'Pinot Noir, Cabernet Franc, and Chardonnay', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq187b', text: 'Grenache and Syrah', isCorrect: false, feedback: 'Too cold.' },
      { id: 'pq187c', text: 'Zinfandel and Petite Sirah', isCorrect: false, feedback: 'Too cold.' },
      { id: 'pq187d', text: 'Malbec and Torrontés', isCorrect: false, feedback: 'Argentina.' }
    ]
  },
  {
    id: 'pq_188_oregon_climate',
    tier: Tier.Tier1,
    category: 'USA',
    region: 'Oregon',
    questionText: 'Oregon\'s climate in the Willamette Valley is best described as:',
    explanationText: 'Willamette is Moderate Maritime, cooled by ocean breezes, with wet winters and warm, dry summers.',
    mentalMapText: 'USA -> Oregon -> Climate',
    options: [
      { id: 'pq188a', text: 'Hot Mediterranean', isCorrect: false, feedback: 'Napa.' },
      { id: 'pq188b', text: 'Moderate Maritime with cooling Pacific breezes', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq188c', text: 'Hot Desert', isCorrect: false, feedback: 'Eastern Washington.' },
      { id: 'pq188d', text: 'Continental with humid summers', isCorrect: false, feedback: 'New York.' }
    ]
  },
  {
    id: 'pq_189_ny_hybrids',
    tier: Tier.Tier2,
    category: 'USA',
    region: 'New York',
    questionText: 'Unlike California, the grape growing areas of New York State have significant plantings of:',
    explanationText: 'American species (Vitis labrusca) and Hybrids are planted for their ability to withstand the severe winter freeze.',
    mentalMapText: 'USA -> New York -> Grapes',
    options: [
      { id: 'pq189a', text: 'American and Hybrid vine species (for winter hardiness)', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq189b', text: 'Carmenère', isCorrect: false, feedback: '' },
      { id: 'pq189c', text: 'Nebbiolo', isCorrect: false, feedback: '' },
      { id: 'pq189d', text: 'Tempranillo', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_190_wa_wines',
    tier: Tier.Tier1,
    category: 'USA',
    region: 'Washington',
    questionText: 'Which of the following statements about Washington State wines is true?',
    explanationText: 'Washington produces powerful, structured Merlot and Cabernet Sauvignon (often compared to Bordeaux) thanks to the long sunshine hours and cool nights.',
    mentalMapText: 'USA -> Washington -> Styles',
    options: [
      { id: 'pq190a', text: 'They are known for low acidity and high alcohol', isCorrect: false, feedback: 'They have high natural acidity due to cool nights.' },
      { id: 'pq190b', text: 'The region produces excellent Merlot and Cabernet Sauvignon with ripe fruit and fresh acidity', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq190c', text: 'It is too cold to ripen black grapes', isCorrect: false, feedback: 'False, summers are hot.' },
      { id: 'pq190d', text: 'They only produce white wines', isCorrect: false, feedback: 'Reds are dominant.' }
    ]
  },

  // --- Section 4: General Revision & Technical ---
  {
    id: 'pq_191_cap_classique_rev',
    tier: Tier.Tier1,
    category: 'Sparkling',
    region: 'South Africa',
    questionText: '"Cap Classique" refers to traditional method sparkling wines from:',
    explanationText: 'Methode Cap Classique (MCC) is South Africa\'s designation.',
    mentalMapText: 'South Africa -> Sparkling',
    options: [
      { id: 'pq191a', text: 'South Africa', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq191b', text: 'California', isCorrect: false, feedback: '' },
      { id: 'pq191c', text: 'New Zealand', isCorrect: false, feedback: '' },
      { id: 'pq191d', text: 'Australia', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_192_egg_white',
    tier: Tier.Tier2,
    category: 'Winemaking',
    region: 'General',
    questionText: 'Which fining agent is derived from egg whites?',
    explanationText: 'Albumin is the protein in egg whites used to fine red wines (removes harsh tannins).',
    mentalMapText: 'Winemaking -> Clarification',
    options: [
      { id: 'pq192a', text: 'Bentonite', isCorrect: false, feedback: 'Clay.' },
      { id: 'pq192b', text: 'Isinglass', isCorrect: false, feedback: 'Fish bladders.' },
      { id: 'pq192c', text: 'Albumin', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq192d', text: 'Casein', isCorrect: false, feedback: 'Milk.' }
    ]
  },
  {
    id: 'pq_193_gross_lees',
    tier: Tier.Tier1,
    category: 'Winemaking',
    region: 'General',
    questionText: 'The term "Gross lees" refers to:',
    explanationText: 'Gross lees are the heavy particles (skins, stalks, seeds) that settle quickly after pressing or fermentation. "Fine lees" are the dead yeast cells.',
    mentalMapText: 'Winemaking -> Terms',
    options: [
      { id: 'pq193a', text: 'The fine dead yeast cells after fermentation', isCorrect: false, feedback: 'Fine lees.' },
      { id: 'pq193b', text: 'The large, solid particles (skins, stalks) that settle immediately after pressing/fermentation', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq193c', text: 'The sugar added for dosage', isCorrect: false, feedback: '' },
      { id: 'pq193d', text: 'The foam on top of a fermenting wine', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_194_sussreserve',
    tier: Tier.Tier1,
    category: 'Winemaking',
    region: 'Germany',
    questionText: 'Which of the following is a common method for making sweet wines in Germany?',
    explanationText: 'Süssreserve is sterile unfermented grape juice added to dry wine to sweeten it.',
    mentalMapText: 'Winemaking -> Sweetness',
    options: [
      { id: 'pq194a', text: 'Fortification', isCorrect: false, feedback: 'Port/Sherry.' },
      { id: 'pq194b', text: 'Using "Süssreserve" (unfermented grape juice)', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq194c', text: 'Adding caramel', isCorrect: false, feedback: 'Forbidden generally.' },
      { id: 'pq194d', text: 'Carbonic maceration', isCorrect: false, feedback: 'Red winemaking.' }
    ]
  },
  {
    id: 'pq_195_veraison_colour',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'Cycle',
    questionText: '"Véraison" is the stage where black grapes:',
    explanationText: 'Véraison is the onset of ripening where grapes soften and change colour (green to red/purple).',
    mentalMapText: 'Viticulture -> Growth Cycle',
    options: [
      { id: 'pq195a', text: 'Flower', isCorrect: false, feedback: 'Flowering.' },
      { id: 'pq195b', text: 'Change colour from green to red/purple', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq195c', text: 'Are pruned', isCorrect: false, feedback: 'Winter.' },
      { id: 'pq195d', text: 'Are harvested', isCorrect: false, feedback: 'Autumn.' }
    ]
  },
  {
    id: 'pq_196_phylloxera_target',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'Pests',
    questionText: 'Which part of the vine is attacked by Phylloxera?',
    explanationText: 'Phylloxera feeds on the roots of the vine, destroying the root system and killing the plant.',
    mentalMapText: 'Viticulture -> Pests',
    options: [
      { id: 'pq196a', text: 'Leaves', isCorrect: false, feedback: 'Some mites/mildew do this.' },
      { id: 'pq196b', text: 'Berries', isCorrect: false, feedback: 'Botrytis/Moths.' },
      { id: 'pq196c', text: 'Roots', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq196d', text: 'Canes', isCorrect: false, feedback: 'Eutypa.' }
    ]
  },
  {
    id: 'pq_197_continental_def',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'Climate',
    questionText: '"Continental" climate is characterised by:',
    explanationText: 'Continental climates (inland) have hot summers and cold winters (high continentality).',
    mentalMapText: 'Viticulture -> Climate',
    options: [
      { id: 'pq197a', text: 'Low difference between summer and winter temperatures', isCorrect: false, feedback: 'Maritime.' },
      { id: 'pq197b', text: 'High difference (continentality) between summer and winter temperatures', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq197c', text: 'Constant rain throughout the year', isCorrect: false, feedback: 'Maritime.' },
      { id: 'pq197d', text: 'No seasonal variation', isCorrect: false, feedback: 'Tropical.' }
    ]
  },
  {
    id: 'pq_198_guyot',
    tier: Tier.Tier1,
    category: 'Viticulture',
    region: 'Pruning',
    questionText: 'The "Guyot" system is a method of:',
    explanationText: 'Guyot is the most common form of Replacement Cane Pruning (Single or Double Guyot).',
    mentalMapText: 'Viticulture -> Pruning',
    options: [
      { id: 'pq198a', text: 'Fermentation', isCorrect: false, feedback: '' },
      { id: 'pq198b', text: 'Sparkling wine production', isCorrect: false, feedback: '' },
      { id: 'pq198c', text: 'Replacement Cane Pruning', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq198d', text: 'Pest control', isCorrect: false, feedback: '' }
    ]
  },
  {
    id: 'pq_199_grape_acid',
    tier: Tier.Tier1,
    category: 'Vinification',
    region: 'Chemistry',
    questionText: 'Which acid is the most abundant in ripe grapes?',
    explanationText: 'Tartaric acid is the primary acid in grapes. Malic is also present but drops during ripening. Citric is trace.',
    mentalMapText: 'Vinification -> Acids',
    options: [
      { id: 'pq199a', text: 'Acetic acid', isCorrect: false, feedback: 'Vinegar.' },
      { id: 'pq199b', text: 'Lactic acid', isCorrect: false, feedback: 'From Malolactic conversion.' },
      { id: 'pq199c', text: 'Tartaric acid', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq199d', text: 'Citric acid', isCorrect: false, feedback: 'Trace amounts.' }
    ]
  },
  {
    id: 'pq_200_reduction',
    tier: Tier.Tier1,
    category: 'Tasting',
    region: 'Faults',
    questionText: '"Reduced" notes in a wine (e.g., rotten eggs, boiled cabbage) are caused by:',
    explanationText: 'Reduction is the opposite of oxidation; it occurs when wine is starved of oxygen, leading to the formation of volatile sulfur compounds (H2S).',
    mentalMapText: 'Tasting -> Faults',
    options: [
      { id: 'pq200a', text: 'Too much oxygen', isCorrect: false, feedback: 'Oxidation.' },
      { id: 'pq200b', text: 'Lack of oxygen during winemaking (reductive environment)', isCorrect: true, feedback: 'Correct.' },
      { id: 'pq200c', text: 'Cork taint', isCorrect: false, feedback: 'TCA.' },
      { id: 'pq200d', text: 'Volatile Acidity', isCorrect: false, feedback: 'Vinegar.' }
    ]
  }
];
