// import { Translate } from '@google-cloud/Translate';
// import { Translate } from '@google-cloud/translate/build/src/v2 ;
import { Translate } from '@google-cloud/translate/build/src/v2/index.js';

// Instantiates a client
// const translate = new Translate({projectId});

// async function quickStart() {
  // The text to translate
//   const text = 'hello';
/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const projectId = 'para-413221';

// Imports the Google Cloud client library

// Instantiates a client
const translate = new Translate({projectId});

async function quickStart() {
  // The text to translate
  const text = 'Hello, world!';

  // The target language
  const target = 'ru';

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);
}

quickStart();
