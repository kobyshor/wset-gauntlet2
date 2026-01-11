
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
  }
];
