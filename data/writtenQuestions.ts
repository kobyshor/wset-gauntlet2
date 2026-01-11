
import { WrittenQuestion } from '../types';

export const WRITTEN_QUESTIONS: WrittenQuestion[] = [
  {
    id: 'swq_jerez',
    title: 'Soil and Viticulture in Jerez',
    category: 'Sherry',
    parts: [
      {
        id: 'p1',
        prompt: 'Albariza is the most important soil in Jerez. Explain what its key characteristics are and why it is vital for grape growing in Jerez.',
        marks: 6,
        modelAnswer: 'Albariza is a soil with high chalk content. Its key characteristics include a white color which reflects sunlight back into the canopy (assisting ripening) and high water retention capacity. It is vital in Jerez because the region has hot, dry summers with very little rainfall. During winter, the Albariza soil acts as a sponge, absorbing water and then forming a hard crust in summer that prevents evaporation, ensuring the vine has access to moisture throughout the growing season.',
        rubric: [
          'High chalk content / white color',
          'Sunlight reflection / aids ripening',
          'High water retention capacity',
          'Hot/dry summer climate context',
          'Winter water absorption',
          'Surface crust prevents evaporation'
        ],
        logicBlocks: [
          { id: 'lb1', text: 'High chalk content', type: 'factor' },
          { id: 'lb2', text: 'White color', type: 'factor' },
          { id: 'lb3', text: 'reflects sunlight', type: 'connector' },
          { id: 'lb4', text: 'assisting ripening', type: 'outcome' },
          { id: 'lb5', text: 'High water retention', type: 'factor' },
          { id: 'lb6', text: 'acts as a sponge', type: 'connector' },
          { id: 'lb7', text: 'ensures moisture access', type: 'outcome' },
          { id: 'lb8', text: 'Hard surface crust', type: 'factor' },
          { id: 'lb9', text: 'prevents evaporation', type: 'outcome' }
        ]
      }
    ]
  },
  {
    id: 'swq_bordeaux',
    title: 'Bordeaux Left Bank Red Wine',
    category: 'Bordeaux',
    parts: [
      {
        id: 'p1',
        prompt: 'Why is Cabernet Sauvignon suited to growing on the Left Bank of Bordeaux?',
        marks: 3,
        modelAnswer: 'Cabernet Sauvignon is a thick-skinned variety. This means that it will need more heat and sunshine to ripen compared to other varieties. Therefore, the gravel soils of the Left Bank, which retain heat, will help the grapes to ripen successfully.',
        rubric: [
          'Thick-skinned variety characteristic',
          'Heat/sunlight requirement for ripening',
          'Gravel soil heat retention property'
        ],
        logicBlocks: [
          { id: 'lb10', text: 'Thick-skinned variety', type: 'factor' },
          { id: 'lb11', text: 'needs more heat', type: 'connector' },
          { id: 'lb12', text: 'Gravel soils', type: 'factor' },
          { id: 'lb13', text: 'retain heat', type: 'connector' },
          { id: 'lb14', text: 'successfully ripen', type: 'outcome' }
        ]
      }
    ]
  },
  {
    id: 'swq_mosel_ripeness',
    title: 'Ripeness in the Mosel Valley',
    category: 'German Wines',
    parts: [
      {
        id: 'p1',
        prompt: 'The Mosel region has a cool climate. Identify two features of the best vineyard sites and explain how they help the grape grower overcome challenges like frosts or lack of warmth.',
        marks: 10,
        modelAnswer: 'The best sites in the Mosel feature steep south-facing slopes and stony slate soils. Firstly, steep south-facing slopes maximize sunlight and warmth, which aids fruit ripening in this cool climate. Because cold air drains down these slopes into the valley floor, it also reduces frost risk. Secondly, stony/slate soils are vital because they absorb heat during the day and radiate it back at night, effectively extending the growing day and helping the grapes reach phenolic maturity.',
        rubric: [
          'Identify: Steep south-facing slopes',
          'Explain: Maximize solar radiation / aiding ripeness',
          'Identify: Stony/Slate soils',
          'Explain: Heat absorption and radiation / extending warmth',
          'Frost protection via air drainage'
        ],
        logicBlocks: [
          { id: 'lb15', text: 'Steep south-facing slopes', type: 'factor' },
          { id: 'lb16', text: 'maximize sunlight', type: 'connector' },
          { id: 'lb17', text: 'aiding ripeness', type: 'outcome' },
          { id: 'lb18', text: 'Stony/Slate soils', type: 'factor' },
          { id: 'lb19', text: 'absorb heat', type: 'connector' },
          { id: 'lb20', text: 'radiate heat at night', type: 'connector' },
          { id: 'lb21', text: 'Air drainage', type: 'connector' },
          { id: 'lb22', text: 'prevents frost', type: 'outcome' }
        ]
      }
    ]
  },
  {
    id: 'swq_alsace',
    title: 'Alsace Climate and Style',
    category: 'French Wines',
    parts: [
      {
        id: 'p1',
        prompt: 'Alsace is located in Northern France but produces very ripe fruit styles. Explain the geographic factor responsible for this and its impact on viticulture.',
        marks: 5,
        modelAnswer: 'The primary geographic factor is the Vosges Mountains. These mountains provide a rain shadow effect, protecting the vineyards from westerly winds and rain. Consequently, Alsace has a sunny and dry climate. This lack of rain and presence of sunshine leads to long growing seasons, allowing grapes to reach high levels of sugar ripeness while maintaining high acidity.',
        rubric: ['Vosges Mountains', 'Rain shadow', 'Sunshine hours', 'Sugar ripeness', 'Acidity retention'],
        logicBlocks: [
          { id: 'lb23', text: 'Vosges Mountains', type: 'factor' },
          { id: 'lb24', text: 'rain shadow effect', type: 'connector' },
          { id: 'lb25', text: 'Sunny and dry climate', type: 'outcome' }
        ]
      }
    ]
  },
  {
    id: 'swq_champagne',
    title: 'Traditional Method Production',
    category: 'French Wines',
    parts: [
      {
        id: 'p1',
        prompt: 'Describe the process of autolysis in Champagne production and explain its contribution to the final style of the wine.',
        marks: 4,
        modelAnswer: 'Autolysis occurs when dead yeast cells (lees) break down in the bottle after second fermentation. During this period, which lasts months or years, the cells release compounds into the wine. This results in the development of "autolytic" flavors such as brioche, toast, and biscuit.',
        rubric: ['Yeast breakdown', 'Lees contact', 'Secondary ferment', 'Brioche/Toast flavors'],
        logicBlocks: [
          { id: 'lb29', text: 'Yeast cell breakdown', type: 'factor' },
          { id: 'lb30', text: 'Lees contact', type: 'connector' },
          { id: 'lb31', text: 'Brioche and toast flavors', type: 'outcome' }
        ]
      }
    ]
  },
  {
    id: 'swq_napa',
    title: 'Napa Valley Cooling Influences',
    category: 'USA Wines',
    parts: [
      {
        id: 'p1',
        prompt: 'Napa Valley is a warm region, yet it produces high-quality Cabernet Sauvignon and Chardonnay. Identify and explain the two main cooling influences that moderate temperatures in Napa.',
        marks: 6,
        modelAnswer: 'The two main cooling influences are fog and altitude. Firstly, fog from San Pablo Bay is sucked into the southern valley floor (Los Carneros) during the night. Secondly, altitude on the hillside AVAs (e.g., Howell Mountain) results in cooler average temperatures than the valley floor.',
        rubric: ['Fog', 'San Pablo Bay', 'Altitude', 'Hillside sites', 'Moderated temps'],
        logicBlocks: [
          { id: 'lb34', text: 'San Pablo Bay fog', type: 'factor' },
          { id: 'lb35', text: 'blocks morning sun', type: 'connector' },
          { id: 'lb36', text: 'preserves acidity', type: 'outcome' }
        ]
      }
    ]
  },
  {
    id: 'swq_barolo',
    title: 'Nebbiolo in Piemonte',
    category: 'Italian Wines',
    parts: [
      {
        id: 'p1',
        prompt: 'Explain why Nebbiolo is usually planted on south-facing slopes in Barolo between 300-500m.',
        marks: 4,
        modelAnswer: 'Nebbiolo is a very late-ripening variety. Therefore, it requires the maximum solar radiation provided by south-facing aspects to reach full phenolic ripeness. Sites between 300-500m are ideal because altitudes above 500m are often too cool.',
        rubric: ['Late-ripening', 'South-facing', 'Solar radiation', 'Altitude warmth'],
        logicBlocks: [
          { id: 'lb40', text: 'Late-ripening variety', type: 'factor' },
          { id: 'lb41', text: 'needs solar radiation', type: 'connector' }
        ]
      }
    ]
  },
  {
    id: 'swq_hunter_valley',
    title: 'Hunter Valley Semillon',
    category: 'Australian Wines',
    parts: [
      {
        id: 'p1',
        prompt: 'Hunter Valley Semillon is a unique style. Explain the winemaking and harvesting choices that lead to its characteristic low alcohol and high acidity.',
        marks: 4,
        modelAnswer: 'The grapes are harvested early, at low sugar levels. This results in a naturally low potential alcohol and high acidity. Crucially, oak aging is avoided.',
        rubric: ['Early harvest', 'Low sugar', 'Low alcohol', 'No oak'],
        logicBlocks: [
          { id: 'lb45', text: 'Early harvest', type: 'factor' },
          { id: 'lb47', text: 'low alcohol style', type: 'outcome' }
        ]
      }
    ]
  },
  {
    id: 'swq_port_production',
    title: 'Port Fortification and Aging',
    category: 'Fortified Wines',
    parts: [
      {
        id: 'p1',
        prompt: 'Explain the timing and method of fortification in Port production and its effect on the final style.',
        marks: 4,
        modelAnswer: 'Fortification in Port production happens during fermentation. A 77% ABV grape spirit (aguardente) is added, which kills the yeast and stops fermentation, leaving significant residual sugar.',
        rubric: ['During fermentation', '77% spirit', 'Kills yeast', 'Residual sugar'],
        logicBlocks: [
          { id: 'lb50', text: 'Fortification during fermentation', type: 'factor' },
          { id: 'lb52', text: 'stops yeast activity', type: 'connector' }
        ]
      }
    ]
  }
];
