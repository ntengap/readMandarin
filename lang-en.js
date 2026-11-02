const LANG="en";
const I=["en-GB"," · text ","Today"," d","✓ Read!","✓ I've read it","What?","State","Level 1: 个 本 只 杯","Level 2: all","Look at the object: is it an animal, a container, something flat or something long?","Listen again 🎧 Which sounds do you recognise?","Pick a situation: the app plays the other person, you reply."," exchanges","👁 Meaning"," first time","↺ Play again","Other situations","Listen again 🎧 ","Finish ›","Next ›","📈 Tones","🎧 Which tone?","👂 Which word?","🗣 Sounds","🔁 Rules","🔊 Listen to the 4 tones","Tone ","Neutral tone · ","<div style=\"font-size:54px\">🎧</div><div class=\"tr\">Which tone do you hear?</div><div class=\"row\"><button class=\"sm\" id=\"q2p\">🔊</button><button class=\"sm\" id=\"q2s\">🐢</button></div>","Listen again 🎧 Does the voice stay high, rise, dip then rise, or fall?","<div style=\"font-size:54px\">👂</div><div class=\"tr\">Which word do you hear?</div><div class=\"row\"><button class=\"sm\" id=\"m2p\">🔊</button><button class=\"sm\" id=\"m2s\">🐢</button></div>","Compare using 🔊: which one sounds like the word you heard?","Colour: ","I don't have one.","touch it","point to it","Find something "," and ","🚪 Scenarios","🫵 Body","🎨 Colours","🎲 Mix","A mission: the app guides you step by step, you act, then answer its questions.","‹ Scenarios","↺ Replay","Other missions","✓ Done!","Touch or raise the body part you hear.","Find something of the right colour, or answer about your clothes.","Do the action you hear: stand, sit, jump…","A bit of everything, in random order.","Listen to the command and do it for real. ","▶ Start","🎧 Listen","<div><b>⬇ Install the app</b>","1️⃣ Open this page in <i style=\"font-style:normal;color:#b5532a;font-weight:700\">Safari</i> (not inside WhatsApp, Mail or Messenger)<br>2️⃣ Tap <span style=\"font-size:26px\">⬆️</span> (Share) at the bottom of the screen<br>3️⃣ Scroll down → “<i style=\"font-style:normal;color:#b5532a;font-weight:700\">Add to Home Screen</i>” ➕ → Add<br><small>On iPhone there is no automatic install button: it is always via Share.</small>","1️⃣ Tap <span style=\"font-size:26px\">⋮</span> (browser menu)<br>2️⃣ \"Install app\" or \"Add to Home screen\""];
const T=[
{t:"My cat",s:[
["我|wǒ|I 有|yǒu|to have 一|yì|a 只|zhī|(classifier: animals) 猫|māo|cat 。","I have a cat."],
["它|tā|it (animal) 很|hěn|very 小|xiǎo|small 。","It is small."],
["它|tā|it (animal) 喜欢|xǐhuan|to like 喝|hē|to drink 水|shuǐ|water 。","It likes to drink water."]]},
{t:"The morning",s:[
["早上|zǎoshang|morning 好|hǎo|good ！","Good morning!"],
["我|wǒ|I 喝|hē|to drink 一|yì|a 杯|bēi|(classifier: glass) 水|shuǐ|water 。","I drink a glass of water."],
["我|wǒ|I 吃|chī|to eat 一|yí|an 个|gè|(general classifier) 苹果|píngguǒ|apple 。","I eat an apple."]]},
{t:"My books",s:[
["我|wǒ|I 有|yǒu|to have 三|sān|three 本|běn|(classifier: books) 书|shū|book 。","I have three books."],
["这|zhè|this 本|běn|(classifier: books) 书|shū|book 很|hěn|very 好|hǎo|good 。","This book is very good."],
["我|wǒ|I 每天|měitiān|every day 看|kàn|to read 书|shū|book 。","I read every day."]]},
{t:"My home",s:[
["这|zhè|this 是|shì|to be 我|wǒ|my 的|de|(possessive) 家|jiā|home 。","This is my home."],
["我|wǒ|my 家|jiā|family 有|yǒu|to have 四|sì|four 个|gè|(general classifier) 人|rén|person 。","There are four people in my family."],
["我|wǒ|I 爱|ài|to love 我|wǒ|my 家|jiā|family 。","I love my family."]]},
{t:"At school",s:[
["我|wǒ|I 在|zài|to be at 学校|xuéxiào|school 。","I am at school."],
["我|wǒ|I 有|yǒu|to have 两|liǎng|two 支|zhī|(classifier: pens) 笔|bǐ|pen 。","I have two pens."],
["我|wǒ|I 有|yǒu|to have 一|yì|a 张|zhāng|(classifier: sheets) 纸|zhǐ|paper 。","I have a sheet of paper."]]},
{t:"Today",s:[
["今天|jīntiān|today 天气|tiānqì|weather 很|hěn|very 好|hǎo|good 。","The weather is very nice today."],
["我|wǒ|I 去|qù|to go 学校|xuéxiào|school 。","I go to school."],
["你|nǐ|you 呢|ne|and (you) ？","And you?"]]},
{t:"At the market",s:[
["你好|nǐ hǎo|hello ！","Hello!"],
["我|wǒ|I 要|yào|to want 五|wǔ|five 个|gè|(general classifier) 苹果|píngguǒ|apple 。","I would like five apples."],
["很|hěn|very 好|hǎo|good ，谢谢|xièxie|thank you ！","Very good, thank you!"]]},
{t:"My friend",s:[
["他|tā|he 是|shì|to be 我|wǒ|my 的|de|(possessive) 朋友|péngyou|friend 。","He is my friend."],
["他|tā|he 叫|jiào|to be called 小明|Xiǎo Míng|Xiao Ming 。","He is called Xiao Ming."],
["我们|wǒmen|we 都|dōu|all 喜欢|xǐhuan|to like 猫|māo|cat 。","We all like cats."]]},
{t:"The evening",s:[
["晚上|wǎnshang|evening 我|wǒ|I 在|zài|to be at 家|jiā|home 。","In the evening, I am at home."],
["我|wǒ|I 喝|hē|to drink 一|yì|a 杯|bēi|(classifier: cup) 茶|chá|tea 。","I drink a cup of tea."],
["晚安|wǎn'ān|good night ！","Good night!"]]},
{t:"Two cats",s:[
["我|wǒ|my 家|jiā|home 有|yǒu|to have 一|yì|a 只|zhī|(classifier: animals) 大|dà|big 猫|māo|cat 和|hé|and 一|yì|a 只|zhī|(classifier: animals) 小|xiǎo|small 猫|māo|cat 。","At my home, there is a big cat and a small cat."],
["大|dà|big 猫|māo|cat 喜欢|xǐhuan|to like 睡觉|shuìjiào|to sleep 。","The big cat likes to sleep."],
["小|xiǎo|small 猫|māo|cat 喜欢|xǐhuan|to like 玩|wán|to play 。","The small cat likes to play."]]},
{t:"Shopping",s:[["我|wǒ|I 去|qù|to go 市场|shìchǎng|market 。", "I go to the market."],
["我|wǒ|I 要|yào|to want 三|sān|three 个|gè|(general classifier) 苹果|píngguǒ|apple 。", "I would like three apples."],
["我|wǒ|I 也|yě|also 要|yào|to want 两|liǎng|two 条|tiáo|(classifier: fish) 鱼|yú|fish 。", "I would also like two fish."]]},
{t:"What do you want?",s:[["你好|nǐ hǎo|hello ！ 你|nǐ|you 要|yào|to want 什么|shénme|what ？", "Hello! What would you like?"],
["我|wǒ|I 要|yào|to want 一|yì|a 杯|bēi|(classifier: cup) 茶|chá|tea 和|hé|and 一|yì|a 杯|bēi|(classifier: glass) 牛奶|niúnǎi|milk 。", "I would like a tea and a milk."],
["谢谢|xièxie|thank you ！ 再见|zàijiàn|goodbye ！", "Thank you! Goodbye!"]]},
{t:"How much?",s:[["这|zhè|this 个|gè|(general classifier) 苹果|píngguǒ|apple 多少|duōshao|how much 钱|qián|money ？", "How much is this apple?"],
["一|yí|one 个|gè|(general classifier) 五|wǔ|five 块|kuài|yuan 。", "Five yuan each."],
["很|hěn|very 好|hǎo|good ， 我|wǒ|I 要|yào|to want 三|sān|three 个|gè|(general classifier) 。", "Great, I'll take three."]]},
{t:"Flowers",s:[["我|wǒ|I 喜欢|xǐhuan|to like 花|huā|flower 。", "I like flowers."],
["我|wǒ|I 要|yào|to want 五|wǔ|five 朵|duǒ|(classifier: flowers) 花|huā|flower 。", "I would like five flowers."],
["花|huā|flower 很|hěn|very 好看|hǎokàn|pretty 。", "The flowers are very pretty."]]},
{t:"My class",s:[["这|zhè|this 是|shì|to be 我|wǒ|my 的|de|(possessive) 班|bān|class 。", "This is my class."],
["班|bān|class 里|lǐ|in 有|yǒu|there is 二十|èrshí|twenty 个|gè|(general classifier) 学生|xuésheng|student 。", "There are twenty students in the class."],
["我们|wǒmen|we 有|yǒu|to have 一|yí|one 个|gè|(general classifier) 老师|lǎoshī|teacher 。", "We have one teacher."]]},
{t:"On the table",s:[["桌子|zhuōzi|table 上|shàng|on 有|yǒu|there is 三|sān|three 本|běn|(classifier: books) 书|shū|book 。", "On the table, there are three books."],
["还|hái|also 有|yǒu|there is 两|liǎng|two 支|zhī|(classifier: pens) 笔|bǐ|pen 和|hé|and 一|yì|a 张|zhāng|(classifier: sheets) 纸|zhǐ|paper 。", "There are also two pens and a sheet of paper."],
["老师|lǎoshī|teacher 喜欢|xǐhuan|to like 看|kàn|to read 书|shū|book 。", "The teacher likes to read."]]},
{t:"My classmates",s:[["我|wǒ|I 在|zài|to be at 学校|xuéxiào|school 。", "I am at school."],
["我|wǒ|my 的|de|(possessive) 朋友|péngyou|friend 在|zài|to be in 我|wǒ|my 的|de|(possessive) 班|bān|class 里|lǐ|in 。", "My friend is in my class."],
["我们|wǒmen|we 都|dōu|all 喜欢|xǐhuan|to like 老师|lǎoshī|teacher 。", "We all like the teacher."]]},
{t:"My family",s:[["我|wǒ|my 家|jiā|family 有|yǒu|to have 五|wǔ|five 个|gè|(general classifier) 人|rén|person 。", "There are five people in my family."],
["爸爸|bàba|dad 、 妈妈|māma|mum 、 哥哥|gēge|older brother 、 姐姐|jiějie|older sister 和|hé|and 我|wǒ|me 。", "Dad, mum, my older brother, my older sister and me."],
["我|wǒ|I 爱|ài|to love 我|wǒ|my 的|de|(possessive) 家|jiā|family 。", "I love my family."]]},
{t:"At the table",s:[["爸爸|bàba|dad 吃|chī|to eat 米饭|mǐfàn|rice 。", "Dad eats rice."],
["妈妈|māma|mum 吃|chī|to eat 鱼|yú|fish 。", "Mum eats fish."],
["我|wǒ|I 吃|chī|to eat 一|yí|an 个|gè|(general classifier) 蛋|dàn|egg 。", "I eat an egg."],
["我们|wǒmen|we 都|dōu|all 喝|hē|to drink 水|shuǐ|water 。", "We all drink water."]]},
{t:"My pets",s:[["我|wǒ|my 家|jiā|home 有|yǒu|to have 一|yì|a 只|zhī|(classifier: animals) 狗|gǒu|dog 和|hé|and 两|liǎng|two 只|zhī|(classifier: animals) 猫|māo|cat 。", "At my home, there is a dog and two cats."],
["狗|gǒu|dog 很|hěn|very 大|dà|big ， 猫|māo|cat 很|hěn|very 小|xiǎo|small 。", "The dog is big, the cats are small."],
["我们|wǒmen|we 都|dōu|all 喜欢|xǐhuan|to like 它们|tāmen|they (animals) 。", "We all like them."]]},
{t:"My clothes",s:[["我|wǒ|I 有|yǒu|to have 三|sān|three 件|jiàn|(classifier: clothes) 衣服|yīfu|clothes 。", "I have three items of clothing."],
["这|zhè|this 件|jiàn|(classifier: clothes) 衣服|yīfu|clothes 很|hěn|very 大|dà|big 。", "This item of clothing is very big."],
["我|wǒ|I 不|bù|not 喜欢|xǐhuan|to like 大|dà|big 衣服|yīfu|clothes 。", "I don't like big clothes."]]},
{t:"At home",s:[["家|jiā|home 里|lǐ|in 有|yǒu|there is 一|yì|a 张|zhāng|(classifier: tables) 桌子|zhuōzi|table 和|hé|and 四|sì|four 把|bǎ|(classifier: chairs) 椅子|yǐzi|chair 。", "At home, there is a table and four chairs."],
["桌子|zhuōzi|table 上|shàng|on 有|yǒu|there is 一|yì|a 杯|bēi|(classifier: cup) 茶|chá|tea 。", "On the table, there is a cup of tea."],
["我们|wǒmen|we 在|zài|at 家|jiā|home 吃饭|chīfàn|to eat 。", "We eat at home."]]},
{t:"Dad's car",s:[["爸爸|bàba|dad 有|yǒu|to have 一|yí|a 辆|liàng|(classifier: vehicles) 汽车|qìchē|car 。", "Dad has a car."],
["汽车|qìchē|car 很|hěn|very 大|dà|big 。", "The car is big."],
["我们|wǒmen|we 都|dōu|all 喜欢|xǐhuan|to like 汽车|qìchē|car 。", "We all like the car."]]},
{t:"Breakfast",s:[["早上|zǎoshang|morning ， 我|wǒ|I 吃|chī|to eat 面包|miànbāo|bread 和|hé|and 一|yí|an 个|gè|(general classifier) 蛋|dàn|egg 。", "In the morning, I eat bread and an egg."],
["我|wǒ|I 喝|hē|to drink 一|yì|a 杯|bēi|(classifier: glass) 牛奶|niúnǎi|milk 。", "I drink a glass of milk."],
["很|hěn|very 好吃|hǎochī|tasty ！", "It's very tasty!"]]},
{t:"A red apple",s:[["我|wǒ|I 有|yǒu|to have 一|yí|a 个|gè|(general classifier) 红|hóng|red 苹果|píngguǒ|apple 。", "I have a red apple."],
["红|hóng|red 苹果|píngguǒ|apple 很|hěn|very 好吃|hǎochī|tasty 。", "The red apple is very tasty."],
["我|wǒ|I 喜欢|xǐhuan|to like 吃|chī|to eat 苹果|píngguǒ|apple 。", "I like eating apples."]]},
{t:"Bananas",s:[["这|zhè|this 是|shì|to be 香蕉|xiāngjiāo|banana 。", "These are bananas."],
["香蕉|xiāngjiāo|banana 是|shì|to be 黄色|huángsè|yellow 的|de|(particle) 。", "Bananas are yellow."],
["我|wǒ|I 要|yào|to want 三|sān|three 根|gēn|(classifier: long objects) 香蕉|xiāngjiāo|banana 。", "I would like three bananas."]]},
{t:"The soup",s:[["晚上|wǎnshang|evening ， 我们|wǒmen|we 吃|chī|to eat 面条|miàntiáo|noodles 。", "In the evening, we eat noodles."],
["我|wǒ|I 喝|hē|to drink 一|yì|a 碗|wǎn|(classifier: bowl) 汤|tāng|soup 。", "I have a bowl of soup."],
["汤|tāng|soup 很|hěn|very 好喝|hǎohē|tasty (drink) 。", "The soup is very tasty."]]},
{t:"I'm hungry",s:[["我|wǒ|I 很|hěn|very 饿|è|hungry 。", "I am very hungry."],
["我|wǒ|I 要|yào|to want 吃|chī|to eat 米饭|mǐfàn|rice 和|hé|and 鱼|yú|fish 。", "I want to eat rice and fish."],
["我|wǒ|I 不|bú|not 要|yào|to want 茶|chá|tea ， 我|wǒ|I 要|yào|to want 水|shuǐ|water 。", "I don't want tea, I want water."]]},
{t:"At the restaurant",s:[["你好|nǐ hǎo|hello ！ 我|wǒ|I 要|yào|to want 一|yì|a 碗|wǎn|(classifier: bowl) 面条|miàntiáo|noodles 。", "Hello! I would like a bowl of noodles."],
["你|nǐ|you 要|yào|to want 喝|hē|to drink 什么|shénme|what ？", "What would you like to drink?"],
["我|wǒ|I 要|yào|to want 一|yì|a 杯|bēi|(classifier: cup) 茶|chá|tea ， 谢谢|xièxie|thank you 。", "I would like a tea, thank you."]]},
{t:"Colours",s:[["苹果|píngguǒ|apple 是|shì|to be 红色|hóngsè|red 的|de|(particle) 。", "The apple is red."],
["天|tiān|sky 是|shì|to be 蓝色|lánsè|blue 的|de|(particle) 。", "The sky is blue."],
["猫|māo|cat 是|shì|to be 白色|báisè|white 的|de|(particle) 。", "The cat is white."]]},
{t:"My white cat",s:[["我|wǒ|my 的|de|(possessive) 猫|māo|cat 是|shì|to be 白色|báisè|white 的|de|(particle) 。", "My cat is white."],
["它|tā|it (animal) 很|hěn|very 小|xiǎo|small 。", "It is very small."],
["它|tā|it (animal) 喜欢|xǐhuan|to like 喝|hē|to drink 牛奶|niúnǎi|milk 。", "It likes to drink milk."]]},
{t:"My black dog",s:[["我|wǒ|my 的|de|(possessive) 狗|gǒu|dog 是|shì|to be 黑色|hēisè|black 的|de|(particle) 。", "My dog is black."],
["它|tā|it (animal) 很|hěn|very 大|dà|big 。", "It is very big."],
["它|tā|it (animal) 喜欢|xǐhuan|to like 吃|chī|to eat 鱼|yú|fish 。", "It likes to eat fish."]]},
{t:"My pens",s:[["我|wǒ|I 有|yǒu|to have 三|sān|three 支|zhī|(classifier: pens) 笔|bǐ|pen 。", "I have three pens."],
["一|yì|one 支|zhī|(classifier: pens) 是|shì|to be 红色|hóngsè|red 的|de|(particle) ， 两|liǎng|two 支|zhī|(classifier: pens) 是|shì|to be 蓝色|lánsè|blue 的|de|(particle) 。", "One is red, two are blue."],
["我|wǒ|I 喜欢|xǐhuan|to like 蓝色|lánsè|blue 。", "I like blue."]]},
{t:"Colourful flowers",s:[["我|wǒ|I 有|yǒu|to have 五|wǔ|five 朵|duǒ|(classifier: flowers) 花|huā|flower 。", "I have five flowers."],
["三|sān|three 朵|duǒ|(classifier: flowers) 是|shì|to be 红色|hóngsè|red 的|de|(particle) ， 两|liǎng|two 朵|duǒ|(classifier: flowers) 是|shì|to be 黄色|huángsè|yellow 的|de|(particle) 。", "Three are red, two are yellow."],
["花|huā|flower 很|hěn|very 好看|hǎokàn|pretty 。", "The flowers are very pretty."]]},
{t:"It's hot",s:[["今天|jīntiān|today 很|hěn|very 热|rè|hot 。", "Today it's very hot."],
["我|wǒ|I 喝|hē|to drink 一|yì|one 杯|bēi|(classifier: glasses) 水|shuǐ|water 。", "I drink a glass of water."],
["我|wǒ|I 不|bù|not 喜欢|xǐhuan|to like 热|rè|hot 。", "I don't like the heat."]]},
{t:"It's cold",s:[["今天|jīntiān|today 很|hěn|very 冷|lěng|cold 。", "Today it's very cold."],
["我|wǒ|I 有|yǒu|to have 一|yí|one 件|jiàn|(classifier: clothes) 大|dà|big 衣服|yīfu|clothes 。", "I have a big coat."],
["我|wǒ|I 喝|hē|to drink 一|yì|one 杯|bēi|(classifier: cups) 热|rè|hot 茶|chá|tea 。", "I drink a cup of hot tea."]]},
{t:"It's raining",s:[["今天|jīntiān|today 下雨|xiàyǔ|to rain 。", "Today it's raining."],
["我|wǒ|I 在|zài|to be at 家|jiā|home 。", "I'm at home."],
["我|wǒ|I 喝|hē|to drink 茶|chá|tea ， 看|kàn|to read 书|shū|book 。", "I drink tea and read."]]},
{t:"Lovely weather",s:[["今天|jīntiān|today 天气|tiānqì|weather 很|hěn|very 好|hǎo|good 。", "Today the weather is very nice."],
["今天|jīntiān|today 有|yǒu|there is 太阳|tàiyáng|sun 。", "Today it's sunny."],
["我|wǒ|I 和|hé|and 朋友|péngyou|friend 去|qù|to go 市场|shìchǎng|market 。", "My friend and I are going to the market."]]},
{t:"What's the weather like?",s:[["今天|jīntiān|today 天气|tiānqì|weather 好|hǎo|good 吗|ma|(question) ？", "Is the weather nice today?"],
["很|hěn|very 好|hǎo|good ！", "Very nice!"],
["不|bù|not 冷|lěng|cold ， 也|yě|also 不|bú|not 热|rè|hot 。", "It's neither cold nor hot."]]},
{t:"My day",s:[["早上|zǎoshang|morning ， 我|wǒ|I 吃|chī|to eat 面包|miànbāo|bread 。", "In the morning, I eat bread."],
["下午|xiàwǔ|afternoon ， 我|wǒ|I 在|zài|to be at 学校|xuéxiào|school 。", "In the afternoon, I'm at school."],
["晚上|wǎnshang|evening ， 我|wǒ|I 在|zài|to be at 家|jiā|home 看|kàn|to read 书|shū|book 。", "In the evening, I read at home."]]},
{t:"Beijing · 北京",s:[["北京|Běijīng|Beijing 是|shì|to be 中国|Zhōngguó|China 的|de|(particle) 首都|shǒudū|capital 。", "Beijing is the capital of China."],
["北京|Běijīng|Beijing 有|yǒu|there is 故宫|Gùgōng|Forbidden City 和|hé|and 长城|Chángchéng|Great Wall 。", "In Beijing, there are the Forbidden City and the Great Wall."],
["我|wǒ|I 想|xiǎng|to want to 去|qù|to go 北京|Běijīng|Beijing 。", "I'd like to go to Beijing."]]},
{t:"Shanghai · 上海",s:[["上海|Shànghǎi|Shanghai 很|hěn|very 大|dà|big ， 人|rén|people 很|hěn|very 多|duō|many 。", "Shanghai is big and has lots of people."],
["上海|Shànghǎi|Shanghai 有|yǒu|there is 很多|hěn duō|many 高楼|gāolóu|skyscraper 。", "In Shanghai, there are many skyscrapers."],
["外滩|Wàitān|the Bund 很|hěn|very 好看|hǎokàn|pretty 。", "The Bund is very pretty."]]},
{t:"Chengdu · 成都",s:[["成都|Chéngdū|Chengdu 有|yǒu|there is 大熊猫|dàxióngmāo|giant panda 。", "In Chengdu, there are giant pandas."],
["大熊猫|dàxióngmāo|giant panda 喜欢|xǐhuan|to like 吃|chī|to eat 竹子|zhúzi|bamboo 。", "Giant pandas like eating bamboo."],
["成都|Chéngdū|Chengdu 的|de|(particle) 菜|cài|food 很|hěn|very 辣|là|spicy 。", "Chengdu food is very spicy."]]},
{t:"Xi'an · 西安",s:[["西安|Xī'ān|Xi'an 有|yǒu|there is 兵马俑|bīngmǎyǒng|Terracotta Army 。", "In Xi'an, there is the Terracotta Army."],
["兵马俑|bīngmǎyǒng|Terracotta Army 很|hěn|very 有名|yǒumíng|famous 。", "The Terracotta Army is very famous."],
["很多|hěn duō|many 人|rén|people 去|qù|to go 西安|Xī'ān|Xi'an 。", "Many people go to Xi'an."]]},
{t:"Hangzhou · 杭州",s:[["杭州|Hángzhōu|Hangzhou 有|yǒu|there is 西湖|Xīhú|West Lake 。", "In Hangzhou, there is West Lake."],
["西湖|Xīhú|West Lake 很|hěn|very 好看|hǎokàn|pretty 。", "West Lake is very pretty."],
["阿里巴巴|Ālǐbābā|Alibaba 在|zài|to be at 杭州|Hángzhōu|Hangzhou 。", "Alibaba is in Hangzhou."]]},
{t:"Shenzhen · 深圳",s:[["深圳|Shēnzhèn|Shenzhen 是|shì|to be 一|yí|one 个|gè|(general classifier) 大|dà|big 城市|chéngshì|city 。", "Shenzhen is a big city."],
["华为|Huáwéi|Huawei 和|hé|and 腾讯|Téngxùn|Tencent 在|zài|to be at 深圳|Shēnzhèn|Shenzhen 。", "Huawei and Tencent are in Shenzhen."],
["深圳|Shēnzhèn|Shenzhen 的|de|(particle) 公司|gōngsī|company 很|hěn|very 多|duō|many 。", "There are many companies in Shenzhen."]]},
{t:"Guangzhou · 广州",s:[["广州|Guǎngzhōu|Guangzhou 的|de|(particle) 菜|cài|food 很|hěn|very 好吃|hǎochī|delicious 。", "Guangzhou food is delicious."],
["早上|zǎoshang|morning ， 我|wǒ|I 喝|hē|to drink 茶|chá|tea ， 吃|chī|to eat 点心|diǎnxin|dim sum 。", "In the morning, I drink tea and eat dim sum."],
["我|wǒ|I 喜欢|xǐhuan|to like 广州|Guǎngzhōu|Guangzhou 。", "I like Guangzhou."]]},
{t:"Harbin · 哈尔滨",s:[["哈尔滨|Hā'ěrbīn|Harbin 的|de|(particle) 冬天|dōngtiān|winter 很|hěn|very 冷|lěng|cold 。", "Winter in Harbin is very cold."],
["那里|nàlǐ|there 有|yǒu|there is 很多|hěn duō|a lot of 冰|bīng|ice 和|hé|and 雪|xuě|snow 。", "There's a lot of ice and snow there."],
["我|wǒ|I 想|xiǎng|to want to 看|kàn|to look at 冰灯|bīngdēng|ice lanterns 。", "I'd like to see the ice lanterns."]]},
{t:"Chongqing · 重庆",s:[["重庆|Chóngqìng|Chongqing 有|yǒu|there is 很多|hěn duō|many 山|shān|mountain 。", "In Chongqing, there are many mountains."],
["重庆|Chóngqìng|Chongqing 的|de|(particle) 火锅|huǒguō|hot pot 很|hěn|very 辣|là|spicy 。", "Chongqing hot pot is very spicy."],
["我|wǒ|I 不|bù|not 喜欢|xǐhuan|to like 辣|là|spicy 。", "I don't like spicy food."]]},
{t:"Guilin · 桂林",s:[["桂林|Guìlín|Guilin 的|de|(particle) 山水|shānshuǐ|scenery 很|hěn|very 好看|hǎokàn|pretty 。", "The scenery in Guilin is very beautiful."],
["山|shān|mountain 很|hěn|very 高|gāo|tall 。", "The mountains are tall."],
["我|wǒ|I 想|xiǎng|to want to 去|qù|to go 桂林|Guìlín|Guilin 看|kàn|to look at 山|shān|mountain 。", "I'd like to go to Guilin to see the mountains."]]},
{t:"Huawei · 华为",s:[["华为|Huáwéi|Huawei 是|shì|to be 一|yì|one 家|jiā|(classifier: companies) 公司|gōngsī|company 。", "Huawei is a company."],
["华为|Huáwéi|Huawei 做|zuò|to make 手机|shǒujī|phone 。", "Huawei makes phones."],
["我|wǒ|I 的|de|(particle) 朋友|péngyou|friend 有|yǒu|to have 一|yí|one 部|bù|(classifier: phones, films) 手机|shǒujī|phone 。", "My friend has a phone."]]},
{t:"WeChat · 微信",s:[["微信|Wēixìn|WeChat 是|shì|to be 一|yí|one 个|gè|(general classifier) 软件|ruǎnjiàn|app 。", "WeChat is an app."],
["腾讯|Téngxùn|Tencent 有|yǒu|to have 微信|Wēixìn|WeChat 。", "Tencent has WeChat."],
["在|zài|in 中国|Zhōngguó|China ， 很多|hěn duō|many 人|rén|people 用|yòng|to use 微信|Wēixìn|WeChat 。", "In China, many people use WeChat."]]},
{t:"Alibaba · 阿里巴巴",s:[["阿里巴巴|Ālǐbābā|Alibaba 是|shì|to be 一|yì|one 家|jiā|(classifier: companies) 大|dà|big 公司|gōngsī|company 。", "Alibaba is a big company."],
["淘宝|Táobǎo|Taobao 是|shì|to be 阿里巴巴|Ālǐbābā|Alibaba 的|de|(particle) 网站|wǎngzhàn|website 。", "Taobao is an Alibaba website."],
["我|wǒ|I 在|zài|at 网上|wǎngshàng|online 买|mǎi|to buy 东西|dōngxi|things 。", "I buy things online."]]},
{t:"Baidu · 百度",s:[["百度|Bǎidù|Baidu 是|shì|to be 一|yì|one 家|jiā|(classifier: companies) 中国|Zhōngguó|China 公司|gōngsī|company 。", "Baidu is a Chinese company."],
["你|nǐ|you 可以|kěyǐ|can 用|yòng|to use 百度|Bǎidù|Baidu 搜索|sōusuǒ|to search 。", "You can search with Baidu."],
["百度|Bǎidù|Baidu 在|zài|to be at 北京|Běijīng|Beijing 。", "Baidu is in Beijing."]]},
{t:"Xiaomi · 小米",s:[["小米|Xiǎomǐ|Xiaomi 是|shì|to be 一|yì|one 家|jiā|(classifier: companies) 公司|gōngsī|company 。", "Xiaomi is a company."],
["小米|Xiǎomǐ|Xiaomi 做|zuò|to make 手机|shǒujī|phone 。", "Xiaomi makes phones."],
["你|nǐ|you 有|yǒu|to have 手机|shǒujī|phone 吗|ma|(question) ？", "Do you have a phone?"]]},
{t:"BYD · 比亚迪",s:[["比亚迪|Bǐyàdí|BYD 做|zuò|to make 汽车|qìchē|car 。", "BYD makes cars."],
["它|tā|it (company) 也|yě|also 做|zuò|to make 电动|diàndòng|electric 汽车|qìchē|car 。", "It also makes electric cars."],
["比亚迪|Bǐyàdí|BYD 在|zài|to be at 深圳|Shēnzhèn|Shenzhen 。", "BYD is in Shenzhen."]]},
{t:"Meituan · 美团",s:[["美团|Měituán|Meituan 是|shì|to be 一|yí|one 个|gè|(general classifier) 软件|ruǎnjiàn|app 。", "Meituan is an app."],
["你|nǐ|you 可以|kěyǐ|can 点|diǎn|to order 外卖|wàimài|takeaway 。", "You can order takeaway."],
["外卖|wàimài|takeaway 来|lái|to come 了|le|(completed) ！", "The takeaway has arrived!"]]},
{t:"Didi · 滴滴",s:[["滴滴|Dīdī|Didi 是|shì|to be 一|yí|one 个|gè|(general classifier) 软件|ruǎnjiàn|app 。", "Didi is an app."],
["你|nǐ|you 可以|kěyǐ|can 打车|dǎchē|to take a taxi 。", "You can take a taxi."],
["我|wǒ|I 坐|zuò|to take (transport) 出租车|chūzūchē|taxi 去|qù|to go 学校|xuéxiào|school 。", "I take a taxi to school."]]},
{t:"Confucius · 孔子",s:[["孔子|Kǒngzǐ|Confucius 是|shì|to be 一|yí|one 位|wèi|(classifier: people, polite) 老师|lǎoshī|teacher 。", "Confucius was a teacher."],
["他|tā|he 有|yǒu|to have 很多|hěn duō|many 学生|xuésheng|student 。", "He had many students."],
["他|tā|he 很|hěn|very 有名|yǒumíng|famous 。", "He is very famous."]]},
{t:"Laozi · 老子",s:[["老子|Lǎozǐ|Laozi 写|xiě|to write 了|le|(completed) 一|yì|one 本|běn|(classifier: books) 书|shū|book 。", "Laozi wrote a book."],
["那|nà|that 本|běn|(classifier: books) 书|shū|book 叫|jiào|to be called 道德经|Dàodéjīng|Tao Te Ching 。", "That book is called the Tao Te Ching."],
["很多|hěn duō|many 人|rén|people 看|kàn|to read 这|zhè|this 本|běn|(classifier: books) 书|shū|book 。", "Many people read this book."]]},
{t:"Li Bai · 李白",s:[["李白|Lǐ Bái|Li Bai 是|shì|to be 一|yí|one 位|wèi|(classifier: people, polite) 诗人|shīrén|poet 。", "Li Bai was a poet."],
["他|tā|he 写|xiě|to write 了|le|(completed) 很多|hěn duō|many 诗|shī|poem 。", "He wrote many poems."],
["很多|hěn duō|many 中国人|Zhōngguórén|Chinese people 喜欢|xǐhuan|to like 他|tā|he 的|de|(particle) 诗|shī|poem 。", "Many Chinese people like his poems."]]},
{t:"Qin Shi Huang · 秦始皇",s:[["秦始皇|Qín Shǐhuáng|Qin Shi Huang 是|shì|to be 中国|Zhōngguó|China 的|de|(particle) 第一|dì yī|first 个|gè|(general classifier) 皇帝|huángdì|emperor 。", "Qin Shi Huang was the first emperor of China."],
["他|tā|he 的|de|(particle) 兵马俑|bīngmǎyǒng|Terracotta Army 在|zài|to be at 西安|Xī'ān|Xi'an 。", "His Terracotta Army is in Xi'an."],
["很多|hěn duō|many 人|rén|people 去|qù|to go 看|kàn|to look at 兵马俑|bīngmǎyǒng|Terracotta Army 。", "Many people go to see the Terracotta Army."]]},
{t:"Zheng He · 郑和",s:[["郑和|Zhèng Hé|Zheng He 有|yǒu|to have 很多|hěn duō|many 大|dà|big 船|chuán|ship 。", "Zheng He had many big ships."],
["他|tā|he 去|qù|to go 了|le|(completed) 很多|hěn duō|many 地方|dìfang|places 。", "He went to many places."],
["他|tā|he 很|hěn|very 有名|yǒumíng|famous 。", "He is very famous."]]},
{t:"Yao Ming · 姚明",s:[["姚明|Yáo Míng|Yao Ming 很|hěn|very 高|gāo|tall 。", "Yao Ming is very tall."],
["他|tā|he 打|dǎ|to play 篮球|lánqiú|basketball 。", "He plays basketball."],
["他|tā|he 在|zài|in 美国|Měiguó|USA 打|dǎ|to play 篮球|lánqiú|basketball 。", "He played basketball in the USA."]]},
{t:"Jackie Chan · 成龙",s:[["成龙|Chéng Lóng|Jackie Chan 是|shì|to be 演员|yǎnyuán|actor 。", "Jackie Chan is an actor."],
["他|tā|he 会|huì|can 功夫|gōngfu|kung fu 。", "He can do kung fu."],
["他|tā|he 的|de|(particle) 电影|diànyǐng|film 很|hěn|very 有名|yǒumíng|famous 。", "His films are very famous."]]},
{t:"Bruce Lee · 李小龙",s:[["李小龙|Lǐ Xiǎolóng|Bruce Lee 是|shì|to be 功夫|gōngfu|kung fu 演员|yǎnyuán|actor 。", "Bruce Lee was a kung fu actor."],
["他|tā|he 的|de|(particle) 电影|diànyǐng|film 很|hěn|very 有名|yǒumíng|famous 。", "His films are very famous."],
["很多|hěn duō|many 人|rén|people 喜欢|xǐhuan|to like 看|kàn|to watch 他|tā|he 的|de|(particle) 电影|diànyǐng|film 。", "Many people like watching his films."]]},
{t:"Lang Lang · 郎朗",s:[["郎朗|Láng Lǎng|Lang Lang 是|shì|to be 一|yí|one 位|wèi|(classifier: people, polite) 钢琴家|gāngqínjiā|pianist 。", "Lang Lang is a pianist."],
["他|tā|he 弹|tán|to play (piano) 钢琴|gāngqín|piano 。", "He plays the piano."],
["我|wǒ|I 喜欢|xǐhuan|to like 听|tīng|to listen to 钢琴|gāngqín|piano 。", "I like listening to the piano."]]},
{t:"Eileen Gu · 谷爱凌",s:[["谷爱凌|Gǔ Àilíng|Eileen Gu 是|shì|to be 运动员|yùndòngyuán|athlete 。", "Eileen Gu is an athlete."],
["她|tā|she 喜欢|xǐhuan|to like 滑雪|huáxuě|to ski 。", "She likes skiing."],
["她|tā|she 在|zài|in 北京|Běijīng|Beijing 得到|dédào|to win 了|le|(completed) 金牌|jīnpái|gold medal 。", "She won a gold medal in Beijing."]]},
{t:"Tu Youyou · 屠呦呦",s:[["屠呦呦|Tū Yōuyōu|Tu Youyou 是|shì|to be 一|yí|one 位|wèi|(classifier: people, polite) 科学家|kēxuéjiā|scientist 。", "Tu Youyou is a scientist."],
["她|tā|she 得到|dédào|to win 了|le|(completed) 诺贝尔奖|Nuòbèi'ěr jiǎng|Nobel Prize 。", "She won the Nobel Prize."],
["她|tā|she 是|shì|to be 中国人|Zhōngguórén|Chinese person 。", "She is Chinese."]]},
{t:"Jack Ma · 马云",s:[["马云|Mǎ Yún|Jack Ma 以前|yǐqián|formerly 是|shì|to be 英语|Yīngyǔ|English 老师|lǎoshī|teacher 。", "Jack Ma used to be an English teacher."],
["后来|hòulái|later ， 他|tā|he 有|yǒu|to have 了|le|(completed) 一|yì|one 家|jiā|(classifier: companies) 公司|gōngsī|company 。", "Later, he had a company."],
["那|nà|that 家|jiā|(classifier: companies) 公司|gōngsī|company 叫|jiào|to be called 阿里巴巴|Ālǐbābā|Alibaba 。", "That company is called Alibaba."]]},
{t:"My body (1)",s:[["我|wǒ|I 有|yǒu|to have 一|yí|one 个|gè|(general classifier) 头|tóu|head 。", "I have a head."],
["我|wǒ|I 有|yǒu|to have 两|liǎng|two 只|zhī|(classifier: animals, limbs) 眼睛|yǎnjing|eye 。", "I have two eyes."],
["我|wǒ|I 有|yǒu|to have 一|yì|one 张|zhāng|(classifier: mouths, sheets) 嘴|zuǐ|mouth 。", "I have a mouth."]]},
{t:"My body (2)",s:[["我|wǒ|I 有|yǒu|to have 两|liǎng|two 只|zhī|(classifier: animals, limbs) 手|shǒu|hand 。", "I have two hands."],
["我|wǒ|I 有|yǒu|to have 两|liǎng|two 只|zhī|(classifier: animals, limbs) 脚|jiǎo|foot 。", "I have two feet."],
["我|wǒ|I 有|yǒu|to have 两|liǎng|two 只|zhī|(classifier: animals, limbs) 耳朵|ěrduo|ear 。", "I have two ears."]]},
{t:"Transport (1)",s:[["我|wǒ|I 坐|zuò|to take (transport) 地铁|dìtiě|metro 去|qù|to go 学校|xuéxiào|school 。", "I take the metro to school."],
["我|wǒ|I 的|de|(particle) 朋友|péngyou|friend 坐|zuò|to take (transport) 公共汽车|gōnggòng qìchē|bus 。", "My friend takes the bus."],
["我们|wǒmen|we 都|dōu|all 喜欢|xǐhuan|to like 坐|zuò|to take (transport) 火车|huǒchē|train 。", "We all like taking the train."]]},
{t:"Transport (2)",s:[["他|tā|he 骑|qí|to ride 自行车|zìxíngchē|bicycle 。", "He rides a bike."],
["她|tā|she 开|kāi|to drive 汽车|qìchē|car 。", "She drives a car."],
["我|wǒ|I 走路|zǒulù|to walk 去|qù|to go 市场|shìchǎng|market 。", "I walk to the market."]]},
{t:"My hobbies",s:[["我|wǒ|I 喜欢|xǐhuan|to like 听|tīng|to listen to 音乐|yīnyuè|music 。", "I like listening to music."],
["我|wǒ|I 喜欢|xǐhuan|to like 唱歌|chànggē|to sing 。", "I like singing."],
["我|wǒ|I 的|de|(particle) 朋友|péngyou|friend 喜欢|xǐhuan|to like 跑步|pǎobù|to run 。", "My friend likes running."]]},
{t:"At the swimming pool",s:[["我|wǒ|I 会|huì|can 游泳|yóuyǒng|to swim 。", "I can swim."],
["他|tā|he 不|bú|not 会|huì|can 游泳|yóuyǒng|to swim 。", "He can't swim."],
["我们|wǒmen|we 在|zài|at 学校|xuéxiào|school 游泳|yóuyǒng|to swim 。", "We swim at school."]]},
{t:"The week",s:[["星期一|xīngqīyī|Monday ， 我|wǒ|I 去|qù|to go 学校|xuéxiào|school 。", "On Monday, I go to school."],
["星期六|xīngqīliù|Saturday ， 我|wǒ|I 在|zài|to be at 家|jiā|home 。", "On Saturday, I'm at home."],
["星期天|xīngqītiān|Sunday ， 我|wǒ|I 去|qù|to go 市场|shìchǎng|market 。", "On Sunday, I go to the market."]]},
{t:"Tomorrow",s:[["今天|jīntiān|today 是|shì|to be 星期六|xīngqīliù|Saturday 。", "Today is Saturday."],
["明天|míngtiān|tomorrow 是|shì|to be 星期天|xīngqītiān|Sunday 。", "Tomorrow is Sunday."],
["明天|míngtiān|tomorrow ， 我|wǒ|I 去|qù|to go 看|kàn|to visit 朋友|péngyou|friend 。", "Tomorrow, I'm going to see a friend."]]},
{t:"Trip to China",s:[["我|wǒ|I 想|xiǎng|to want to 去|qù|to go 中国|Zhōngguó|China 。", "I'd like to go to China."],
["我|wǒ|I 坐|zuò|to take (transport) 飞机|fēijī|plane 去|qù|to go 北京|Běijīng|Beijing 。", "I'm flying to Beijing."],
["在|zài|in 北京|Běijīng|Beijing ， 我|wǒ|I 吃|chī|to eat 烤鸭|kǎoyā|roast duck 。", "In Beijing, I eat roast duck."]]},
{t:"Phones in China",s:[["在|zài|in 中国|Zhōngguó|China ， 很多|hěn duō|many 人|rén|people 用|yòng|to use 手机|shǒujī|phone 。", "In China, many people use their phones."],
["他们|tāmen|they 用|yòng|to use 微信|Wēixìn|WeChat 买|mǎi|to buy 东西|dōngxi|things 。", "They use WeChat to buy things."],
["我|wǒ|I 也|yě|also 想|xiǎng|to want to 用|yòng|to use 微信|Wēixìn|WeChat 。", "I'd like to use WeChat too."]]}
];
const K="lecture-mandarin-en-v1";
const SUB=[["我","wǒ","I",0],["你","nǐ","you",1],["他","tā","he",2],["她","tā","she",2],["我们","wǒmen","we",3]];
const ETRE=["am","are","is","is","are"];
const ADJ=[["小","xiǎo",["small","small","small"]],["大","dà",["big","big","big"]],["高兴","gāoxìng",["happy","happy","happy"]],["忙","máng",["busy","busy","busy"]],["累","lèi",["tired","tired","tired"]],["好","hǎo",["well","well","well"],["am","are","is","is","are"]]];
const VRB=[
{h:"吃",p:"chī",c:["eat","eat","eats","eat"],o:[["米饭","mǐfàn","rice"],["一个苹果","yí ge píngguǒ","an apple"],["面包","miànbāo","bread"]]},
{h:"喝",p:"hē",c:["drink","drink","drinks","drink"],o:[["水","shuǐ","water"],["茶","chá","tea"],["一杯水","yì bēi shuǐ","a glass of water"]]},
{h:"有",p:"yǒu",c:["have","have","has","have"],o:[["一只猫","yì zhī māo","a cat"],["三本书","sān běn shū","three books"],["两支笔","liǎng zhī bǐ","two pens"],["一张纸","yì zhāng zhǐ","a sheet of paper"]]},
{h:"看",p:"kàn",c:["look at","look at","looks at","look at"],o:[["书","shū","a book"],["猫","māo","the cat"]]},
{h:"喜欢",p:"xǐhuan",c:["like","like","likes","like"],o:[["猫","māo","cats"],["米饭","mǐfàn","rice"],["苹果","píngguǒ","apples"],["茶","chá","tea"]]}
];
const NEGO={"一个苹果":["苹果","píngguǒ","apples"],"一只猫":["猫","māo","a cat"],"一张纸":["纸","zhǐ","paper"],"米饭":["米饭","mǐfàn","rice"],"面包":["面包","miànbāo","bread"],"水":["水","shuǐ","water"],"茶":["茶","chá","tea"],"书":["书","shū","books"]};
const ITM=[
{h:"苹果",p:"píngguǒ",c:"个",cp:"gè",y:"yí",g:"f",e:"🍎",f1:"an apple",fp:"apples"},
{h:"书",p:"shū",c:"本",cp:"běn",y:"yì",g:"m",e:"📚",f1:"a book",fp:"books"},
{h:"水",p:"shuǐ",c:"杯",cp:"bēi",y:"yì",g:"m",e:"💧",f1:"a glass of water",fp:"glasses of water"},
{h:"猫",p:"māo",c:"只",cp:"zhī",y:"yì",g:"m",e:"🐱",f1:"a cat",fp:"cats"},
{h:"蛋",p:"dàn",c:"个",cp:"gè",y:"yí",g:"m",e:"🥚",f1:"an egg",fp:"eggs"},
{h:"学生",p:"xuésheng",c:"个",cp:"gè",y:"yí",g:"m",e:"🧑‍🎓",f1:"a student",fp:"students"},
{h:"朋友",p:"péngyou",c:"个",cp:"gè",y:"yí",g:"m",e:"🧑",f1:"a friend",fp:"friends"},
{h:"茶",p:"chá",c:"杯",cp:"bēi",y:"yì",g:"f",e:"🍵",f1:"a cup of tea",fp:"cups of tea"},
{h:"牛奶",p:"niúnǎi",c:"杯",cp:"bēi",y:"yì",g:"m",e:"🥛",f1:"a glass of milk",fp:"glasses of milk"},
{h:"狗",p:"gǒu",c:"只",cp:"zhī",y:"yì",g:"m",e:"🐶",f1:"a dog",fp:"dogs"},
{h:"鸟",p:"niǎo",c:"只",cp:"zhī",y:"yì",g:"m",e:"🐦",f1:"a bird",fp:"birds"},
{h:"纸",p:"zhǐ",c:"张",cp:"zhāng",y:"yì",g:"f",e:"📄",f1:"a sheet of paper",fp:"sheets of paper"},
{h:"桌子",p:"zhuōzi",c:"张",cp:"zhāng",y:"yì",g:"f",e:"🍽️",f1:"a table",fp:"tables"},
{h:"笔",p:"bǐ",c:"支",cp:"zhī",y:"yì",g:"m",e:"✏️",f1:"a pen",fp:"pens"},
{h:"鱼",p:"yú",c:"条",cp:"tiáo",y:"yì",g:"m",e:"🐟",f1:"a fish",fp:"fish"},
{h:"花",p:"huā",c:"朵",cp:"duǒ",y:"yì",g:"f",e:"🌸",f1:"a flower",fp:"flowers"},
{h:"椅子",p:"yǐzi",c:"把",cp:"bǎ",y:"yì",g:"f",e:"🪑",f1:"a chair",fp:"chairs"},
{h:"汽车",p:"qìchē",c:"辆",cp:"liàng",y:"yí",g:"f",e:"🚗",f1:"a car",fp:"cars"},
{h:"衣服",p:"yīfu",c:"件",cp:"jiàn",y:"yí",g:"m",e:"👕",f1:"a piece of clothing",fp:"pieces of clothing"},
{h:"公司",p:"gōngsī",c:"家",cp:"jiā",y:"yì",g:"f",e:"🏢",f1:"a company",fp:"companies"},
{h:"老师",p:"lǎoshī",c:"位",cp:"wèi",y:"yí",g:"m",e:"🧑‍🏫",f1:"a teacher",fp:"teachers"},
{h:"山",p:"shān",c:"座",cp:"zuò",y:"yí",g:"f",e:"⛰️",f1:"a mountain",fp:"mountains"},
{h:"手机",p:"shǒujī",c:"部",cp:"bù",y:"yí",g:"m",e:"📱",f1:"a phone",fp:"phones"},
{h:"电影",p:"diànyǐng",c:"部",cp:"bù",y:"yí",g:"m",e:"🎬",f1:"a movie",fp:"movies"}];
const CUE={"个":"general: apples, people, eggs…","本":"books, notebooks","只":"animals","杯":"a glass or cup","张":"flat things: sheets, tables","支":"long thin things: pens","条":"long and flexible: fish","朵":"flowers","把":"things with a handle: chairs","辆":"vehicles","件":"clothing","家":"companies, shops","位":"people (polite)","座":"mountains, bridges, big buildings","部":"phones, movies"};
function frNum(n,f){
  const U=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  const T=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
  if(n<20)return U[n];
  const t=Math.floor(n/10),u=n%10;
  return T[t]+(u?"-"+U[u]:"");
}
const FRN=["one","two","three","four","five","six","seven","eight","nine","ten"];
function gen(st){
  const s=SUB[st.s],parts=[[s[0],s[1],"S"]];let fr;
  if(st.m===2){
    const it=ITM[st.i],n=st.n,cj=VRB[2].c[s[3]];
    const nz=numZh(n,it);
    parts.push(["有","yǒu","V"],[nz[0],nz[1],"NUM"],[it.c,it.cp,"CL"],[it.h,it.p,"N"]);
    const q=n===1?it.f1:frNum(n,false)+" "+it.fp;
    fr=s[2]+" "+cj+" "+q;
    return {parts,fr:cap(fr),hz:parts.map(p=>p[0]).join("")+"。"};
  }
  if(st.m===1){
    const a=ADJ[st.a],vb=a[3]?a[3][st.s]:ETRE[st.s],g=s[2]==="we"?2:0,af=a[2][g];
    if(st.neg){parts.push(["不","bù","NEG"]);fr=s[2]+" "+vb+" not "+af}
    else{parts.push(["很","hěn","DEG"]);fr=s[2]+" "+vb+" very "+af}
    parts.push([a[0],a[1],"ADJ"]);
  }else{
    const v=VRB[st.v];let o=v.o[st.o];const cj=v.c[s[3]];
    if(st.neg){
      if(v.h==="有")parts.push(["没","méi","NEG"],["有","yǒu","V"]);else parts.push(["不","bù","NEG"],[v.h,v.p,"V"]);
      if(v.h!=="喜欢"&&NEGO[o[0]])o=NEGO[o[0]];
      fr=s[2]+" "+(s[3]===2?"doesn't":"don't")+" "+v.c[0]+" "+o[2];
    }else{
      parts.push([v.h,v.p,"V"]);
      fr=s[2]+" "+cj+" "+o[2];
    }
    parts.push([o[0],o[1],"O"]);
  }
  return {parts,fr:cap(fr),hz:parts.map(p=>p[0]).join("")+"。"};
}
const HINT={S:"Who is doing the action? Start there.",V:"What is the action?",O:"What is the action done to?",NEG:"How do you say \"not\"? And where does it go?",DEG:"How do you say \"very\"? Where does it go?",NUM:"How many are there?",CL:"Which little word is used to count this thing?",N:"What are we counting?",ADJ:"What is the person like?"};
const NM={"v": [["北京", "Běijīng", "Beijing", "🏯", "capital city"], ["上海", "Shànghǎi", "Shanghai", "🌆", "huge city"], ["广州", "Guǎngzhōu", "Guangzhou", "🥟", "Cantonese food"], ["深圳", "Shēnzhèn", "Shenzhen", "🏙️", "tech company hub"], ["成都", "Chéngdū", "Chengdu", "🐼", "pandas and spicy food"], ["西安", "Xī'ān", "Xi'an", "🏺", "Terracotta Army"], ["杭州", "Hángzhōu", "Hangzhou", "🛶", "West Lake"], ["重庆", "Chóngqìng", "Chongqing", "🌶️", "hilly city, hotpot"], ["哈尔滨", "Hā'ěrbīn", "Harbin", "❄️", "ice and snow in winter"], ["桂林", "Guìlín", "Guilin", "⛰️", "mountain and river scenery"], ["香港", "Xiānggǎng", "Hong Kong", "🌃", "big port, skyscrapers"], ["南京", "Nánjīng", "Nanjing", "🏛️", "former capital"], ["苏州", "Sūzhōu", "Suzhou", "🌸", "classical gardens"], ["青岛", "Qīngdǎo", "Qingdao", "🌊", "by the sea"]], "e": [["华为", "Huáwéi", "Huawei", "📱", "phones, networks"], ["腾讯", "Téngxùn", "Tencent", "💬", "WeChat (微信)"], ["阿里巴巴", "Ālǐbābā", "Alibaba", "🛒", "online shopping (淘宝)"], ["百度", "Bǎidù", "Baidu", "🔍", "search engine"], ["小米", "Xiǎomǐ", "Xiaomi", "📲", "phones, smart devices"], ["比亚迪", "Bǐyàdí", "BYD", "🚗", "electric cars"], ["美团", "Měituán", "Meituan", "🛵", "food delivery"], ["滴滴", "Dīdī", "Didi", "🚕", "ride-hailing app"], ["字节跳动", "Zìjié Tiàodòng", "ByteDance", "🎵", "TikTok (抖音)"], ["京东", "Jīngdōng", "JD.com", "📦", "online shopping"], ["联想", "Liánxiǎng", "Lenovo", "💻", "computers"], ["海尔", "Hǎi'ěr", "Haier", "🧊", "home appliances"]], "p": [["孔子", "Kǒngzǐ", "Confucius", "📜", "philosopher and teacher"], ["老子", "Lǎozǐ", "Laozi", "🌀", "Daodejing"], ["李白", "Lǐ Bái", "Li Bai", "🌙", "Tang-dynasty poet"], ["杜甫", "Dù Fǔ", "Du Fu", "🖋️", "Tang-dynasty poet"], ["秦始皇", "Qín Shǐhuáng", "Qin Shi Huang", "👑", "first emperor of China"], ["郑和", "Zhèng Hé", "Zheng He", "⛵", "admiral, great sea voyages"], ["姚明", "Yáo Míng", "Yao Ming", "🏀", "basketball player, NBA"], ["成龙", "Chéng Lóng", "Jackie Chan", "🥋", "actor, kung fu films"], ["李小龙", "Lǐ Xiǎolóng", "Bruce Lee", "🐉", "actor, martial arts"], ["郎朗", "Láng Lǎng", "Lang Lang", "🎹", "pianist"], ["屠呦呦", "Tū Yōuyōu", "Tu Youyou", "🔬", "2015 Nobel Prize in Medicine"], ["莫言", "Mò Yán", "Mo Yan", "📚", "2012 Nobel Prize in Literature"], ["谷爱凌", "Gǔ Àilíng", "Eileen Gu", "⛷️", "skier, 2022 Olympic champion"], ["李娜", "Lǐ Nà", "Li Na", "🎾", "tennis player, 2011 French Open champion"], ["马云", "Mǎ Yún", "Jack Ma", "💼", "co-founder of Alibaba"]]};
const TR=[{"g": "Basics", "e": "👋", "p": [["你好！", "Nǐ hǎo!", "Hello!"], ["你好吗？", "Nǐ hǎo ma?", "How are you?"], ["谢谢！", "Xièxie!", "Thank you!"], ["不客气。", "Bú kèqi.", "You're welcome."], ["对不起。", "Duìbuqǐ.", "Sorry."], ["没关系。", "Méi guānxi.", "It doesn't matter."], ["你叫什么名字？", "Nǐ jiào shénme míngzi?", "What's your name?"], ["很高兴认识你。", "Hěn gāoxìng rènshi nǐ.", "Nice to meet you."], ["再见！", "Zàijiàn!", "Goodbye!"]]}, {"g": "Understanding", "e": "👂", "p": [["我会说一点中文。", "Wǒ huì shuō yìdiǎn Zhōngwén.", "I speak a little Chinese."], ["我听不懂。", "Wǒ tīng bu dǒng.", "I don't understand."], ["请再说一遍。", "Qǐng zài shuō yí biàn.", "Could you say that again?"], ["请说慢一点。", "Qǐng shuō màn yìdiǎn.", "Please speak more slowly."], ["你会说英语吗？", "Nǐ huì shuō Yīngyǔ ma?", "Do you speak English?"], ["这个用中文怎么说？", "Zhège yòng Zhōngwén zěnme shuō?", "How do you say this in Chinese?"]]}, {"g": "Eating", "e": "🍜", "p": [["一位。", "Yí wèi.", "Table for one."], ["请给我菜单。", "Qǐng gěi wǒ càidān.", "The menu, please."], ["我要这个。", "Wǒ yào zhège.", "I'll have this."], ["我不吃辣。", "Wǒ bù chī là.", "I don't eat spicy food."], ["我吃素。", "Wǒ chī sù.", "I'm vegetarian."], ["我要一杯水。", "Wǒ yào yì bēi shuǐ.", "I'd like a glass of water."], ["很好吃！", "Hěn hǎochī!", "It's delicious!"], ["买单。", "Mǎidān.", "The bill, please."]]}, {"g": "Directions", "e": "🧭", "p": [["请问，洗手间在哪里？", "Qǐngwèn, xǐshǒujiān zài nǎlǐ?", "Where is the toilet?"], ["请问，地铁站在哪里？", "Qǐngwèn, dìtiězhàn zài nǎlǐ?", "Where is the metro station?"], ["火车站在哪里？", "Huǒchēzhàn zài nǎlǐ?", "Where is the train station?"], ["离这里远吗？", "Lí zhèlǐ yuǎn ma?", "Is it far from here?"], ["一直走。", "Yìzhí zǒu.", "Straight ahead."], ["往左拐。", "Wǎng zuǒ guǎi.", "Turn left."], ["往右拐。", "Wǎng yòu guǎi.", "Turn right."]]}, {"g": "Paying", "e": "💳", "p": [["多少钱？", "Duōshao qián?", "How much is it?"], ["太贵了！", "Tài guì le!", "That's too expensive!"], ["可以便宜一点吗？", "Kěyǐ piányi yìdiǎn ma?", "Can you lower the price a bit?"], ["我要两个。", "Wǒ yào liǎng ge.", "I'll take two."], ["可以刷卡吗？", "Kěyǐ shuā kǎ ma?", "Can I pay by card?"], ["可以用支付宝吗？", "Kěyǐ yòng Zhīfùbǎo ma?", "Can I pay with Alipay?"], ["可以用微信支付吗？", "Kěyǐ yòng Wēixìn zhīfù ma?", "Can I pay with WeChat Pay?"], ["不用了，谢谢。", "Bú yòng le, xièxie.", "No thanks, I'm fine."]]}, {"g": "Transport", "e": "🚆", "p": [["请去机场。", "Qǐng qù jīchǎng.", "To the airport, please."], ["请到这里。", "Qǐng dào zhèlǐ.", "Here, please (showing the address)."], ["请在这里停车。", "Qǐng zài zhèlǐ tíngchē.", "Please stop here."], ["我要买一张去上海的票。", "Wǒ yào mǎi yì zhāng qù Shànghǎi de piào.", "I'd like a ticket to Shanghai."], ["火车几点开？", "Huǒchē jǐ diǎn kāi?", "What time does the train leave?"], ["这是去北京的火车吗？", "Zhè shì qù Běijīng de huǒchē ma?", "Is this the train to Beijing?"]]}, {"g": "Hotel", "e": "🏨", "p": [["我有预订。", "Wǒ yǒu yùdìng.", "I have a reservation."], ["我要一个房间。", "Wǒ yào yí ge fángjiān.", "I'd like a room."], ["有WiFi吗？", "Yǒu WiFi ma?", "Is there WiFi?"], ["几点退房？", "Jǐ diǎn tuìfáng?", "What time is check-out?"], ["我可以放行李吗？", "Wǒ kěyǐ fàng xíngli ma?", "Can I leave my luggage?"]]}, {"g": "Help", "e": "🆘", "p": [["请帮我。", "Qǐng bāng wǒ.", "Please help me."], ["我迷路了。", "Wǒ mílù le.", "I'm lost."], ["我不舒服。", "Wǒ bù shūfu.", "I don't feel well."], ["请叫医生。", "Qǐng jiào yīshēng.", "Please call a doctor."], ["医院在哪里？", "Yīyuàn zài nǎlǐ?", "Where is the hospital?"], ["我的手机不见了。", "Wǒ de shǒujī bú jiàn le.", "I've lost my phone."]]}];
const DL=[{"t": "At the restaurant", "e": "🍜", "turns": [{"o": [["一位。", "Yí wèi.", "One person."], ["我要一杯水。", "Wǒ yào yì bēi shuǐ.", "I'd like a glass of water."], ["再见！", "Zàijiàn!", "Goodbye!"]], "h": "He's asking how many people. Which reply is a number?", "npc": ["欢迎光临！几位？", "Huānyíng guānglín! Jǐ wèi?", "Welcome! How many of you?"]}, {"o": [["我要这个。", "Wǒ yào zhège.", "I'll have this."], ["我有预订。", "Wǒ yǒu yùdìng.", "I have a reservation."], ["请去机场。", "Qǐng qù jīchǎng.", "To the airport, please."]], "h": "You're pointing at a dish. Which phrase lets you do that?", "npc": ["这是菜单。你要吃什么？", "Zhè shì càidān. Nǐ yào chī shénme?", "Here's the menu. What would you like to eat?"]}, {"o": [["不要辣。", "Bú yào là.", "Not spicy."], ["往左拐。", "Wǎng zuǒ guǎi.", "Turn left."], ["我要买一张票。", "Wǒ yào mǎi yì zhāng piào.", "I'd like a ticket."]], "h": "The waiter is talking about spice (辣). Which reply talks about it too?", "npc": ["要辣的吗？", "Yào là de ma?", "Would you like it spicy?"]}, {"o": [["我要一杯水。", "Wǒ yào yì bēi shuǐ.", "I'd like a glass of water."], ["我迷路了。", "Wǒ mílù le.", "I'm lost."], ["多少钱？", "Duōshao qián?", "How much is it?"]], "h": "He's asking what you want to drink. Which reply contains 杯 (glass)?", "npc": ["喝什么？", "Hē shénme?", "What would you like to drink?"]}, {"o": [["买单。", "Mǎidān.", "The bill, please."], ["我吃素。", "Wǒ chī sù.", "I'm vegetarian."], ["一直走。", "Yìzhí zǒu.", "Straight ahead."]], "h": "You've finished eating. What do you ask the waiter?", "npc": ["吃好了吗？", "Chī hǎo le ma?", "Finished?"]}]}, {"t": "In a taxi", "e": "🚕", "turns": [{"o": [["请去机场。", "Qǐng qù jīchǎng.", "To the airport, please."], ["我要一杯茶。", "Wǒ yào yì bēi chá.", "I'd like a tea."], ["我吃素。", "Wǒ chī sù.", "I'm vegetarian."]], "h": "He's asking where you're going. Which reply names a place?", "npc": ["你好，去哪里？", "Nǐ hǎo, qù nǎlǐ?", "Hello, where are you going?"]}, {"o": [["我会说一点中文。", "Wǒ huì shuō yìdiǎn Zhōngwén.", "I speak a little Chinese."], ["我要这个。", "Wǒ yào zhège.", "I'll have this."], ["几点退房？", "Jǐ diǎn tuìfáng?", "What time is check-out?"]], "h": "He's talking about 中文 (Chinese). Which reply talks about it too?", "npc": ["好的。你会说中文吗？", "Hǎo de. Nǐ huì shuō Zhōngwén ma?", "OK. Do you speak Chinese?"]}, {"o": [["多少钱？", "Duōshao qián?", "How much do I owe you?"], ["一位。", "Yí wèi.", "One person."], ["我有预订。", "Wǒ yǒu yùdìng.", "I have a reservation."]], "h": "You've arrived. What do you want to know before getting out?", "npc": ["到了！", "Dào le!", "We're here!"]}, {"o": [["可以用支付宝吗？", "Kěyǐ yòng Zhīfùbǎo ma?", "Can I pay with Alipay?"], ["我迷路了。", "Wǒ mílù le.", "I'm lost."], ["往右拐。", "Wǎng yòu guǎi.", "Turn right."]], "h": "He's given you the price. How do you ask about paying?", "npc": ["三十块。", "Sānshí kuài.", "Thirty yuan."]}, {"o": [["谢谢，再见！", "Xièxie, zàijiàn!", "Thank you, goodbye!"], ["太贵了！", "Tài guì le!", "That's too expensive!"], ["我听不懂。", "Wǒ tīng bu dǒng.", "I don't understand."]], "h": "All settled. How do you politely say goodbye?", "npc": ["可以。", "Kěyǐ.", "That's fine."]}]}, {"t": "At the market", "e": "🛒", "turns": [{"o": [["我要三个苹果。", "Wǒ yào sān gè píngguǒ.", "I'd like three apples."], ["请去机场。", "Qǐng qù jīchǎng.", "To the airport, please."], ["我有预订。", "Wǒ yǒu yùdìng.", "I have a reservation."]], "h": "He's asking what you're buying. Which reply is about fruit?", "npc": ["你好！你要什么？", "Nǐ hǎo! Nǐ yào shénme?", "Hello! What would you like?"]}, {"o": [["我也要两条鱼。", "Wǒ yě yào liǎng tiáo yú.", "I'd also like two fish."], ["我迷路了。", "Wǒ mílù le.", "I'm lost."], ["往左拐。", "Wǎng zuǒ guǎi.", "Turn left."]], "h": "You want to add something. Which word means \"also\" (也)?", "npc": ["好的。还要别的吗？", "Hǎo de. Hái yào bié de ma?", "OK. Anything else?"]}, {"o": [["可以便宜一点吗？", "Kěyǐ piányi yìdiǎn ma?", "Could you lower the price a little?"], ["医院在哪里？", "Yīyuàn zài nǎlǐ?", "Where is the hospital?"], ["一位。", "Yí wèi.", "One person."]], "h": "Fifty yuan is a bit pricey? What can you ask?", "npc": ["一共五十块。", "Yígòng wǔshí kuài.", "Fifty yuan in total."]}, {"o": [["好的，谢谢！", "Hǎo de, xièxie!", "OK, thank you!"], ["我吃素。", "Wǒ chī sù.", "I'm vegetarian."], ["我不舒服。", "Wǒ bù shūfu.", "I don't feel well."]], "h": "He's lowered his price. How do you politely accept?", "npc": ["好吧，四十五块。", "Hǎo ba, sìshíwǔ kuài.", "OK, forty-five yuan."]}]}, {"t": "At the hotel", "e": "🏨", "turns": [{"o": [["我有预订。", "Wǒ yǒu yùdìng.", "I have a reservation."], ["买单。", "Mǎidān.", "The bill, please."], ["一直走。", "Yìzhí zǒu.", "Straight ahead."]], "h": "You're arriving at the hotel. What did you do before coming?", "npc": ["你好，欢迎！", "Nǐ hǎo, huānyíng!", "Hello, welcome!"]}, {"o": [["我叫小明。", "Wǒ jiào Xiǎo Míng.", "My name is Xiao Ming."], ["我要这个。", "Wǒ yào zhège.", "I'll have this."], ["再见！", "Zàijiàn!", "Goodbye!"]], "h": "Which phrase starts with \"my name is\" (我叫)?", "npc": ["你叫什么名字？", "Nǐ jiào shénme míngzi?", "What's your name?"]}, {"o": [["我要一个房间。", "Wǒ yào yí ge fángjiān.", "I'd like a room."], ["我要三个苹果。", "Wǒ yào sān gè píngguǒ.", "I'd like three apples."], ["我迷路了。", "Wǒ mílù le.", "I'm lost."]], "h": "Which word in the question do you recognise: 房间? Use it in your reply.", "npc": ["你要几个房间？", "Nǐ yào jǐ ge fángjiān?", "How many rooms would you like?"]}, {"o": [["有WiFi吗？", "Yǒu WiFi ma?", "Is there WiFi?"], ["我要买一张票。", "Wǒ yào mǎi yì zhāng piào.", "I'd like a ticket."], ["一位。", "Yí wèi.", "One person."]], "h": "You want to get online in your room. What do you ask?", "npc": ["还有别的问题吗？", "Hái yǒu bié de wèntí ma?", "Do you have any other questions?"]}]}, {"t": "Asking for directions", "e": "🧭", "turns": [{"o": [["请问，地铁站在哪里？", "Qǐngwèn, dìtiězhàn zài nǎlǐ?", "Where is the metro station?"], ["请问，洗手间在哪里？", "Qǐngwèn, xǐshǒujiān zài nǎlǐ?", "Where is the toilet?"], ["我要一杯水。", "Wǒ yào yì bēi shuǐ.", "I'd like a glass of water."]], "h": "Look closely at the place you're asking about. Is it the one you want?", "sit": "You're looking for the metro station. What do you ask?"}, {"o": [["请再说一遍。", "Qǐng zài shuō yí biàn.", "Could you repeat that?"], ["我要这个。", "Wǒ yào zhège.", "I'll have this."], ["我有预订。", "Wǒ yǒu yùdìng.", "I have a reservation."]], "h": "He spoke quickly. What can you ask to hear it again?", "npc": ["一直走，然后往左拐。", "Yìzhí zǒu, ránhòu wǎng zuǒ guǎi.", "Straight ahead, then turn left."]}, {"o": [["谢谢你！", "Xièxie nǐ!", "Thank you!"], ["太贵了！", "Tài guì le!", "That's too expensive!"], ["我吃素。", "Wǒ chī sù.", "I'm vegetarian."]], "h": "You understood. How do you say thanks?", "npc": ["一直走，往左拐。不远。", "Yìzhí zǒu, wǎng zuǒ guǎi. Bù yuǎn.", "Straight ahead, then left. It's not far."]}]}, {"t": "At the station", "e": "🚆", "turns": [{"o": [["我要买一张去上海的票。", "Wǒ yào mǎi yì zhāng qù Shànghǎi de piào.", "I'd like a ticket to Shanghai."], ["我要买一张去北京的票。", "Wǒ yào mǎi yì zhāng qù Běijīng de piào.", "I'd like a ticket to Beijing."], ["我要一杯茶。", "Wǒ yào yì bēi chá.", "I'd like a tea."]], "h": "Check the city written on the ticket.", "sit": "You want a ticket to Shanghai. What do you say?"}, {"o": [["可以刷卡吗？", "Kěyǐ shuā kǎ ma?", "Can I pay by card?"], ["我有预订。", "Wǒ yǒu yùdìng.", "I have a reservation."], ["医院在哪里？", "Yīyuàn zài nǎlǐ?", "Where is the hospital?"]], "h": "How do you ask if you can pay by card?", "npc": ["一共一百块。", "Yígòng yìbǎi kuài.", "One hundred yuan in total."]}, {"o": [["火车几点开？", "Huǒchē jǐ diǎn kāi?", "What time does the train leave?"], ["火车站在哪里？", "Huǒchēzhàn zài nǎlǐ?", "Where is the station?"], ["离这里远吗？", "Lí zhèlǐ yuǎn ma?", "Is it far from here?"]], "h": "You want the time, not the place. Which phrase asks \"what time\" (几点)?", "sit": "You want to know the train time. What do you ask?"}, {"o": [["谢谢！", "Xièxie!", "Thank you!"], ["太贵了！", "Tài guì le!", "That's too expensive!"], ["我不舒服。", "Wǒ bù shūfu.", "I don't feel well."]], "h": "He's told you the time. What do you say?", "npc": ["八点。", "Bā diǎn.", "Eight o'clock."]}]}, {"t": "Lost in the street", "e": "🗺️", "turns": [{"o": [["请帮我。我迷路了。", "Qǐng bāng wǒ. Wǒ mílù le.", "Help me. I'm lost."], ["买单。", "Mǎidān.", "The bill, please."], ["我吃素。", "Wǒ chī sù.", "I'm vegetarian."]], "h": "What do you say to ask for help and explain your problem?", "sit": "You're lost. What do you say to a passer-by?"}, {"o": [["我要去火车站。", "Wǒ yào qù huǒchēzhàn.", "I want to go to the station."], ["我要三个苹果。", "Wǒ yào sān gè píngguǒ.", "I'd like three apples."], ["再见！", "Zàijiàn!", "Goodbye!"]], "h": "He's asking where you're going. Which reply contains 去 (to go)?", "npc": ["你要去哪里？", "Nǐ yào qù nǎlǐ?", "Where do you want to go?"]}, {"o": [["谢谢你！", "Xièxie nǐ!", "Thank you!"], ["太贵了！", "Tài guì le!", "That's too expensive!"], ["买单。", "Mǎidān.", "The bill, please."]], "h": "Someone offers to help. How do you react?", "npc": ["我带你去。", "Wǒ dài nǐ qù.", "I'll take you there."]}]}, {"t": "Introducing yourself", "e": "👋", "turns": [{"o": [["你好！", "Nǐ hǎo!", "Hello!"], ["买单。", "Mǎidān.", "The bill, please."], ["往左拐。", "Wǎng zuǒ guǎi.", "Turn left."]], "h": "What do you say when someone greets you?", "npc": ["你好！", "Nǐ hǎo!", "Hello!"]}, {"o": [["我叫小明。", "Wǒ jiào Xiǎo Míng.", "My name is Xiao Ming."], ["我要这个。", "Wǒ yào zhège.", "I'll have this."], ["多少钱？", "Duōshao qián?", "How much is it?"]], "h": "Which phrase starts with \"my name is\" (我叫)?", "npc": ["你叫什么名字？", "Nǐ jiào shénme míngzi?", "What's your name?"]}, {"o": [["我也很高兴。", "Wǒ yě hěn gāoxìng.", "I'm pleased too."], ["太贵了！", "Tài guì le!", "That's too expensive!"], ["我要这个。", "Wǒ yào zhège.", "I'll have this."]], "h": "He's pleased to meet you. Say it back (也 = also).", "npc": ["很高兴认识你。", "Hěn gāoxìng rènshi nǐ.", "Nice to meet you."]}, {"o": [["我会说一点中文。", "Wǒ huì shuō yìdiǎn Zhōngwén.", "I speak a little Chinese."], ["我有预订。", "Wǒ yǒu yùdìng.", "I have a reservation."], ["一直走。", "Yìzhí zǒu.", "Straight ahead."]], "h": "What do you say when asked if you speak Chinese?", "npc": ["你会说中文吗？", "Nǐ huì shuō Zhōngwén ma?", "Do you speak Chinese?"]}]}];
DL.push(...[{"t": "At the café", "e": "☕", "turns": [{"npc": ["你好，要喝什么？", "Nǐ hǎo, yào hē shénme?", "Hello, what would you like to drink?"], "o": [["我要一杯咖啡。", "Wǒ yào yì bēi kāfēi.", "I'd like a coffee."], ["我要三个苹果。", "Wǒ yào sān gè píngguǒ.", "I'd like three apples."], ["我有预订。", "Wǒ yǒu yùdìng.", "I have a reservation."]], "h": "He's asking what you'd like to drink. Which reply contains 杯 (glass, cup)?"}, {"npc": ["热的还是冰的？", "Rè de háishi bīng de?", "Hot or iced?"], "o": [["我要热的。", "Wǒ yào rè de.", "I'd like it hot."], ["往左拐。", "Wǎng zuǒ guǎi.", "Turn left."], ["我要买一张票。", "Wǒ yào mǎi yì zhāng piào.", "I'd like a ticket."]], "h": "He offers hot (热) or iced (冰). Which reply picks one?"}, {"npc": ["要加糖吗？", "Yào jiā táng ma?", "With sugar?"], "o": [["不要糖。", "Bú yào táng.", "No sugar."], ["我迷路了。", "Wǒ mílù le.", "I'm lost."], ["一位。", "Yí wèi.", "One person."]], "h": "You know 不要 (I don't want). Which reply starts with it?"}, {"npc": ["还要吃的吗？", "Hái yào chī de ma?", "Would you like something to eat as well?"], "o": [["我要一个面包。", "Wǒ yào yí ge miànbāo.", "I'd like a bread roll."], ["请去机场。", "Qǐng qù jīchǎng.", "To the airport, please."], ["医院在哪里？", "Yīyuàn zài nǎlǐ?", "Where is the hospital?"]], "h": "He's talking about eating (吃). Which reply is about food?"}, {"npc": ["二十八块。", "Èrshíbā kuài.", "Twenty-eight yuan."], "o": [["可以刷卡吗？", "Kěyǐ shuā kǎ ma?", "Can I pay by card?"], ["我吃素。", "Wǒ chī sù.", "I'm vegetarian."], ["往右拐。", "Wǎng yòu guǎi.", "Turn right."]], "h": "He's given you the price. How do you ask to pay by card?"}]}, {"t": "At the pharmacy", "e": "💊", "turns": [{"npc": ["你好，你怎么了？", "Nǐ hǎo, nǐ zěnme le?", "Hello, what's the matter?"], "o": [["我不舒服。", "Wǒ bù shūfu.", "I don't feel well."], ["买单。", "Mǎidān.", "The bill, please."], ["再见！", "Zàijiàn!", "Goodbye!"]], "h": "He's asking how you are. Which reply says you're unwell?"}, {"npc": ["哪里不舒服？", "Nǎlǐ bù shūfu?", "Where does it hurt?"], "o": [["我头疼。", "Wǒ tóu téng.", "I have a headache."], ["我要这个。", "Wǒ yào zhège.", "I'll have this."], ["一直走。", "Yìzhí zǒu.", "Straight ahead."]], "h": "He's asking where. Which reply names a part of the body (头 = head)?"}, {"npc": ["这个药，一天三次。", "Zhège yào, yì tiān sān cì.", "This medicine, three times a day."], "o": [["请说慢一点。", "Qǐng shuō màn yìdiǎn.", "Please speak more slowly."], ["太贵了！", "Tài guì le!", "That's too expensive!"], ["我要一杯茶。", "Wǒ yào yì bēi chá.", "I'd like a tea."]], "h": "You want to be sure you understand. What do you ask him?"}, {"npc": ["如果还不舒服，请去医院。", "Rúguǒ hái bù shūfu, qǐng qù yīyuàn.", "If you still don't feel well, go to the hospital."], "o": [["医院在哪里？", "Yīyuàn zài nǎlǐ?", "Where is the hospital?"], ["太贵了！", "Tài guì le!", "That's too expensive!"], ["我有预订。", "Wǒ yǒu yùdìng.", "I have a reservation."]], "h": "He mentions the hospital (医院). What can you ask?"}]}, {"t": "Buying clothes", "e": "👕", "turns": [{"npc": ["你好，你要买什么？", "Nǐ hǎo, nǐ yào mǎi shénme?", "Hello, what would you like to buy?"], "o": [["我想买一件衣服。", "Wǒ xiǎng mǎi yí jiàn yīfu.", "I'd like to buy a piece of clothing."], ["我要一杯茶。", "Wǒ yào yì bēi chá.", "I'd like a tea."], ["我迷路了。", "Wǒ mílù le.", "I'm lost."]], "h": "Which reply contains 衣服 (clothes) and the measure word 件?"}, {"npc": ["要大的还是小的？", "Yào dà de háishi xiǎo de?", "Big or small?"], "o": [["我要大的。", "Wǒ yào dà de.", "I'd like the big one."], ["我吃素。", "Wǒ chī sù.", "I'm vegetarian."], ["往左拐。", "Wǎng zuǒ guǎi.", "Turn left."]], "h": "He offers big (大) or small (小). Which reply picks one?"}, {"npc": ["这件很好看。", "Zhè jiàn hěn hǎokàn.", "This one looks very nice."], "o": [["多少钱？", "Duōshao qián?", "How much is it?"], ["一位。", "Yí wèi.", "One person."], ["医院在哪里？", "Yīyuàn zài nǎlǐ?", "Where is the hospital?"]], "h": "You like the garment. What do you ask before buying?"}, {"npc": ["一百五十块。", "Yìbǎi wǔshí kuài.", "One hundred and fifty yuan."], "o": [["太贵了！可以便宜一点吗？", "Tài guì le! Kěyǐ piányi yìdiǎn ma?", "That's too expensive! Could you lower the price a little?"], ["我有预订。", "Wǒ yǒu yùdìng.", "I have a reservation."], ["我不舒服。", "Wǒ bù shūfu.", "I don't feel well."]], "h": "It's pricey. How do you politely bargain?"}, {"npc": ["好，一百块。", "Hǎo, yìbǎi kuài.", "OK, one hundred yuan."], "o": [["好的，我要这个。", "Hǎo de, wǒ yào zhège.", "OK, I'll take it."], ["我吃素。", "Wǒ chī sù.", "I'm vegetarian."], ["往右拐。", "Wǎng yòu guǎi.", "Turn right."]], "h": "He's lowered his price. How do you accept?"}]}]);
const TN=[{"n": 1, "h": "妈", "p": "mā", "f": "mum", "d": "High and flat", "m": "Stays high, like a held note"}, {"n": 2, "h": "麻", "p": "má", "f": "hemp", "d": "Rises", "m": "Like a question: \"what?\""}, {"n": 3, "h": "马", "p": "mǎ", "f": "horse", "d": "Falls then rises", "m": "A dip in the voice"}, {"n": 4, "h": "骂", "p": "mà", "f": "to scold", "d": "Drops sharply", "m": "Like a sharp command: \"no!\""}, {"n": 5, "h": "吗", "p": "ma", "f": "(question)", "d": "Light and short", "m": "No pitch of its own"}],TQ=[["妈", 1, "mā", "mum"], ["汤", 1, "tāng", "soup"], ["书", 1, "shū", "book"], ["家", 1, "jiā", "house"], ["茶", 2, "chá", "tea"], ["糖", 2, "táng", "sugar"], ["人", 2, "rén", "person"], ["钱", 2, "qián", "money"], ["马", 3, "mǎ", "horse"], ["水", 3, "shuǐ", "water"], ["我", 3, "wǒ", "I"], ["买", 3, "mǎi", "to buy"], ["好", 3, "hǎo", "good"], ["卖", 4, "mài", "to sell"], ["看", 4, "kàn", "to look"], ["大", 4, "dà", "big"], ["去", 4, "qù", "to go"], ["睡", 4, "shuì", "to sleep"], ["树", 4, "shù", "tree"]],PR=[[["买", "mǎi", "to buy"], ["卖", "mài", "to sell"]], [["汤", "tāng", "soup"], ["糖", "táng", "sugar"]], [["水", "shuǐ", "water"], ["睡", "shuì", "to sleep"]], [["书", "shū", "book"], ["树", "shù", "tree"]], [["妈", "mā", "mum"], ["马", "mǎ", "horse"]], [["家", "jiā", "house"], ["假", "jiǎ", "fake"]], [["好", "hǎo", "good"], ["号", "hào", "number"]], [["花", "huā", "flower"], ["画", "huà", "drawing"]], [["鱼", "yú", "fish"], ["雨", "yǔ", "rain"]], [["猫", "māo", "cat"], ["毛", "máo", "fur"]], [["问", "wèn", "to ask"], ["文", "wén", "writing"]]],SND=[["ü", "Say \"ee\" with your lips rounded, like French \"u\" in \"lune\"", [["女", "nǚ", "woman"], ["绿", "lǜ", "green"]]], ["x", "Between \"s\" and \"sh\", lips stretched as if smiling", [["西", "xī", "west"], ["谢", "xiè", "to thank"]]], ["q", "A \"ch\" with a little puff of air", [["七", "qī", "seven"], ["钱", "qián", "money"]]], ["j", "Like q, but without the puff of air", [["家", "jiā", "house"], ["九", "jiǔ", "nine"]]], ["zh", "Tongue curled back, no puff of air", [["中", "zhōng", "middle"], ["知", "zhī", "to know"]]], ["ch", "Like zh, but with a puff of air", [["吃", "chī", "to eat"], ["茶", "chá", "tea"]]], ["sh", "Like English \"sh\", with the tongue curled back", [["水", "shuǐ", "water"], ["是", "shì", "to be"]]], ["r", "Tongue curled back, between English \"r\" and the \"s\" in \"measure\"", [["热", "rè", "hot"], ["人", "rén", "person"]]], ["c", "A \"ts\" with a puff of air", [["菜", "cài", "dish"], ["草", "cǎo", "grass"]]], ["z", "A \"ts\" without a puff of air", [["在", "zài", "to be at"], ["字", "zì", "character"]]]],RL=[["3rd tone + 3rd tone", "The first becomes 2nd tone", [["你好", "nǐ hǎo → ní hǎo", "hello"], ["很好", "hěn hǎo → hén hǎo", "very good"]]], ["不 bù", "Before a 4th tone, it becomes bú", [["不要", "bú yào", "don't want"], ["不去", "bú qù", "not go"], ["不好", "bù hǎo", "not good"]]], ["一 yī", "Before a 4th tone: yí. Before 1st, 2nd or 3rd: yì", [["一个", "yí gè", "one"], ["一杯", "yì bēi", "a glass"], ["一只", "yì zhī", "one (animal)"]]], ["Neutral tone", "Short, light syllable with no pitch of its own", [["谢谢", "xièxie", "thank you"], ["妈妈", "māma", "mum"], ["朋友", "péngyou", "friend"]]]];
const BODY=[{"h": "头", "py": "tóu", "fr": "your head", "e": "🙂", "p": 0, "on": 1, "up": 0}, {"h": "眼睛", "py": "yǎnjing", "fr": "your eyes", "e": "👀", "p": 0, "on": 0, "up": 0}, {"h": "鼻子", "py": "bízi", "fr": "your nose", "e": "👃", "p": 0, "on": 0, "up": 0}, {"h": "嘴", "py": "zuǐ", "fr": "your mouth", "e": "👄", "p": 0, "on": 0, "up": 0}, {"h": "耳朵", "py": "ěrduo", "fr": "your ear", "e": "👂", "p": 1, "on": 0, "up": 0}, {"h": "手", "py": "shǒu", "fr": "your hand", "e": "✋", "p": 1, "on": 0, "up": 1}, {"h": "脚", "py": "jiǎo", "fr": "your foot", "e": "🦶", "p": 1, "on": 0, "up": 1}, {"h": "肩膀", "py": "jiānbǎng", "fr": "your shoulder", "e": "🤷", "p": 1, "on": 1, "up": 0}, {"h": "腿", "py": "tuǐ", "fr": "your leg", "e": "🦵", "p": 1, "on": 0, "up": 1}, {"h": "膝盖", "py": "xīgài", "fr": "your knee", "e": "🦵", "p": 1, "on": 1, "up": 0}, {"h": "肚子", "py": "dùzi", "fr": "your tummy", "e": "🥟", "p": 0, "on": 1, "up": 0}, {"h": "头发", "py": "tóufa", "fr": "your hair", "e": "💇", "p": 0, "on": 0, "up": 0}, {"h": "手指", "py": "shǒuzhǐ", "fr": "your finger", "e": "☝️", "p": 0, "on": 0, "up": 0}, {"h": "脖子", "py": "bózi", "fr": "your neck", "e": "🦒", "p": 0, "on": 0, "up": 0}, {"h": "背", "py": "bèi", "fr": "your back", "e": "🔙", "p": 0, "on": 0, "up": 0}],COL=[["红色", "hóngsè", "red", "#d94a3d"], ["蓝色", "lánsè", "blue", "#3b6fd1"], ["黄色", "huángsè", "yellow", "#f2c230"], ["绿色", "lǜsè", "green", "#4a9d5b"], ["白色", "báisè", "white", "#ffffff"], ["黑色", "hēisè", "black", "#222222"], ["灰色", "huīsè", "grey", "#9a9a9a"], ["粉色", "fěnsè", "pink", "#f4a6c0"], ["棕色", "zōngsè", "brown", "#8b5a3c"], ["紫色", "zǐsè", "purple", "#7b4fb3"], ["橙色", "chéngsè", "orange", "#f08a2c"]],CLO=[["衣服", "yīfu", "What colour are your clothes?"], ["裤子", "kùzi", "What colour are your trousers?"], ["鞋子", "xiézi", "What colour are your shoes?"], ["帽子", "màozi", "What colour is your hat?"], ["袜子", "wàzi", "What colour are your socks?"], ["外套", "wàitào", "What colour is your jacket?"], ["裙子", "qúnzi", "What colour is your skirt?"]],ACT=[["站起来。", "Zhàn qǐlái.", "Stand up.", "🧍"], ["坐下。", "Zuòxià.", "Sit down.", "🪑"], ["拍手。", "Pāishǒu.", "Clap your hands.", "👏"], ["转身。", "Zhuǎnshēn.", "Turn around.", "🔄"], ["跳一下。", "Tiào yíxià.", "Jump once.", "🦘"], ["点头。", "Diǎntóu.", "Nod your head (yes).", "🙂"], ["摇头。", "Yáotóu.", "Shake your head (no).", "🙅"], ["笑一笑。", "Xiào yi xiào.", "Smile.", "😊"], ["闭上眼睛。", "Bìshàng yǎnjing.", "Close your eyes.", "😌"], ["睁开眼睛。", "Zhēngkāi yǎnjing.", "Open your eyes.", "👀"], ["向前走三步。", "Xiàng qián zǒu sān bù.", "Take three steps forward.", "👣"], ["向后走两步。", "Xiàng hòu zǒu liǎng bù.", "Take two steps back.", "↩️"], ["举起手机。", "Jǔqǐ shǒujī.", "Raise your phone.", "📱"], ["放下手机。", "Fàngxià shǒujī.", "Put your phone down.", "⬇️"], ["喝一口水。", "Hē yì kǒu shuǐ.", "Take a sip of water.", "💧"], ["摸一下桌子。", "Mō yíxià zhuōzi.", "Touch the table.", "🪑"], ["摸一下椅子。", "Mō yíxià yǐzi.", "Touch the chair.", "🪑"], ["看一看窗户。", "Kàn yi kàn chuānghu.", "Look at the window.", "🪟"], ["深呼吸。", "Shēn hūxī.", "Breathe deeply.", "🌬️"], ["数到五。", "Shǔ dào wǔ.", "Count to five.", "🔢"]],SCN=[{"t": "The door", "e": "🚪", "sub": "Touch the handle, open, close", "steps": [{"t": "ask", "zh": "你在哪里？", "py": "Nǐ zài nǎlǐ?", "fr": "Where are you?", "e": "📍", "opts": [{"zh": "我在家。", "py": "Wǒ zài jiā.", "fr": "I'm at home.", "next": 1}, {"zh": "我在学校。", "py": "Wǒ zài xuéxiào.", "fr": "I'm at school.", "next": 1}, {"zh": "我在外面。", "py": "Wǒ zài wàimiàn.", "fr": "I'm outside.", "next": 1}, {"zh": "我在别的地方。", "py": "Wǒ zài bié de dìfang.", "fr": "I'm somewhere else.", "next": 1}]}, {"t": "cmd", "zh": "找一扇门。", "py": "Zhǎo yí shàn mén.", "fr": "Find a door.", "e": "🔎", "next": 2}, {"t": "cmd", "zh": "走到门那里。", "py": "Zǒu dào mén nàlǐ.", "fr": "Go to the door.", "e": "🚶", "next": 3}, {"t": "cmd", "zh": "摸一下门把手。", "py": "Mō yíxià mén bǎshǒu.", "fr": "Touch the door handle.", "e": "✋", "next": 4}, {"t": "cmd", "zh": "打开门。", "py": "Dǎkāi mén.", "fr": "Open the door.", "e": "🚪", "next": 5}, {"t": "ask", "zh": "门开了吗？", "py": "Mén kāi le ma?", "fr": "Is the door open?", "e": "❓", "opts": [{"zh": "开了。", "py": "Kāi le.", "fr": "It's open.", "next": 6}, {"zh": "没开。", "py": "Méi kāi.", "fr": "It's not open.", "next": 9}]}, {"t": "cmd", "zh": "关上门。", "py": "Guānshàng mén.", "fr": "Close the door.", "e": "🚪", "next": 7}, {"t": "ask", "zh": "门关了吗？", "py": "Mén guān le ma?", "fr": "Is the door closed?", "e": "❓", "opts": [{"zh": "关了。", "py": "Guān le.", "fr": "It's closed.", "next": 8}, {"zh": "没关。", "py": "Méi guān.", "fr": "It's not closed.", "next": 10}]}, {"t": "end", "zh": "很好！", "py": "Hěn hǎo!", "fr": "Very good!", "e": "🎉"}, {"t": "cmd", "zh": "再打开一次。", "py": "Zài dǎkāi yí cì.", "fr": "Open it once more.", "e": "🔁", "next": 5}, {"t": "cmd", "zh": "再关一次。", "py": "Zài guān yí cì.", "fr": "Close it once more.", "e": "🔁", "next": 7}]}, {"t": "The window", "e": "🪟", "sub": "Open, look outside, close", "steps": [{"t": "cmd", "zh": "找一扇窗户。", "py": "Zhǎo yí shàn chuānghu.", "fr": "Find a window.", "e": "🔎", "next": 1}, {"t": "cmd", "zh": "走到窗户那里。", "py": "Zǒu dào chuānghu nàlǐ.", "fr": "Go to the window.", "e": "🚶", "next": 2}, {"t": "cmd", "zh": "打开窗户。", "py": "Dǎkāi chuānghu.", "fr": "Open the window.", "e": "🪟", "next": 3}, {"t": "ask", "zh": "窗户开了吗？", "py": "Chuānghu kāi le ma?", "fr": "Is the window open?", "e": "❓", "opts": [{"zh": "开了。", "py": "Kāi le.", "fr": "It's open.", "next": 4}, {"zh": "没开。", "py": "Méi kāi.", "fr": "It's not open.", "next": 9}]}, {"t": "cmd", "zh": "看一看外面。", "py": "Kàn yi kàn wàimiàn.", "fr": "Look outside.", "e": "👀", "next": 5}, {"t": "ask", "zh": "你看到什么？", "py": "Nǐ kàndào shénme?", "fr": "What do you see?", "e": "🔭", "opts": [{"zh": "我看到树。", "py": "Wǒ kàndào shù.", "fr": "I see a tree.", "next": 6}, {"zh": "我看到房子。", "py": "Wǒ kàndào fángzi.", "fr": "I see a house.", "next": 6}, {"zh": "我看到车。", "py": "Wǒ kàndào chē.", "fr": "I see a car.", "next": 6}, {"zh": "我看到人。", "py": "Wǒ kàndào rén.", "fr": "I see someone.", "next": 6}]}, {"t": "cmd", "zh": "关上窗户。", "py": "Guānshàng chuānghu.", "fr": "Close the window.", "e": "🪟", "next": 7}, {"t": "ask", "zh": "窗户关了吗？", "py": "Chuānghu guān le ma?", "fr": "Is the window closed?", "e": "❓", "opts": [{"zh": "关了。", "py": "Guān le.", "fr": "It's closed.", "next": 8}, {"zh": "没关。", "py": "Méi guān.", "fr": "It's not closed.", "next": 10}]}, {"t": "end", "zh": "很好！", "py": "Hěn hǎo!", "fr": "Very good!", "e": "🎉"}, {"t": "cmd", "zh": "再打开一次。", "py": "Zài dǎkāi yí cì.", "fr": "Open it once more.", "e": "🔁", "next": 3}, {"t": "cmd", "zh": "再关一次。", "py": "Zài guān yí cì.", "fr": "Close it once more.", "e": "🔁", "next": 7}]}, {"t": "The light", "e": "💡", "sub": "Find the switch, turn on, turn off", "steps": [{"t": "cmd", "zh": "找开关。", "py": "Zhǎo kāiguān.", "fr": "Find the switch.", "e": "🔎", "next": 1}, {"t": "cmd", "zh": "摸一下开关。", "py": "Mō yíxià kāiguān.", "fr": "Touch the switch.", "e": "✋", "next": 2}, {"t": "cmd", "zh": "开灯。", "py": "Kāi dēng.", "fr": "Turn on the light.", "e": "💡", "next": 3}, {"t": "ask", "zh": "灯亮了吗？", "py": "Dēng liàng le ma?", "fr": "Is the light on?", "e": "❓", "opts": [{"zh": "亮了。", "py": "Liàng le.", "fr": "It's on.", "next": 4}, {"zh": "没亮。", "py": "Méi liàng.", "fr": "It's not on.", "next": 7}]}, {"t": "cmd", "zh": "关灯。", "py": "Guān dēng.", "fr": "Turn off the light.", "e": "🌙", "next": 5}, {"t": "ask", "zh": "灯关了吗？", "py": "Dēng guān le ma?", "fr": "Is the light off?", "e": "❓", "opts": [{"zh": "关了。", "py": "Guān le.", "fr": "It's off.", "next": 6}, {"zh": "没关。", "py": "Méi guān.", "fr": "It's not off.", "next": 8}]}, {"t": "end", "zh": "很好！", "py": "Hěn hǎo!", "fr": "Very good!", "e": "🎉"}, {"t": "cmd", "zh": "再按一次。", "py": "Zài àn yí cì.", "fr": "Press it once more.", "e": "🔁", "next": 3}, {"t": "cmd", "zh": "再按一次。", "py": "Zài àn yí cì.", "fr": "Press it once more.", "e": "🔁", "next": 5}]}, {"t": "Drinking water", "e": "🥤", "sub": "Pick up a glass, check, drink", "steps": [{"t": "cmd", "zh": "找一个杯子。", "py": "Zhǎo yí ge bēizi.", "fr": "Find a glass or a cup.", "e": "🔎", "next": 1}, {"t": "cmd", "zh": "拿起杯子。", "py": "Náqǐ bēizi.", "fr": "Pick up the glass.", "e": "🥤", "next": 2}, {"t": "ask", "zh": "杯子里有水吗？", "py": "Bēizi lǐ yǒu shuǐ ma?", "fr": "Is there water in the glass?", "e": "❓", "opts": [{"zh": "有。", "py": "Yǒu.", "fr": "Yes, there is.", "next": 3}, {"zh": "没有。", "py": "Méiyǒu.", "fr": "No, there isn't.", "next": 6}]}, {"t": "cmd", "zh": "喝一口水。", "py": "Hē yì kǒu shuǐ.", "fr": "Take a sip of water.", "e": "💧", "next": 4}, {"t": "cmd", "zh": "放下杯子。", "py": "Fàngxià bēizi.", "fr": "Put the glass down.", "e": "⬇️", "next": 5}, {"t": "end", "zh": "很好！", "py": "Hěn hǎo!", "fr": "Very good!", "e": "🎉"}, {"t": "cmd", "zh": "去倒水。", "py": "Qù dào shuǐ.", "fr": "Go and pour some water.", "e": "🚰", "next": 2}]}, {"t": "My clothes", "e": "👕", "sub": "What are you wearing? What colour?", "steps": [{"t": "ask", "zh": "你穿什么？", "py": "Nǐ chuān shénme?", "fr": "What are you wearing?", "e": "👕", "opts": [{"zh": "我穿裤子。", "py": "Wǒ chuān kùzi.", "fr": "I'm wearing trousers.", "next": 1}, {"zh": "我穿裙子。", "py": "Wǒ chuān qúnzi.", "fr": "I'm wearing a skirt.", "next": 1}, {"zh": "我穿外套。", "py": "Wǒ chuān wàitào.", "fr": "I'm wearing a jacket.", "next": 1}, {"zh": "我穿鞋子。", "py": "Wǒ chuān xiézi.", "fr": "I'm wearing shoes.", "next": 1}]}, {"t": "cmd", "zh": "摸一下你的衣服。", "py": "Mō yíxià nǐ de yīfu.", "fr": "Touch your clothes.", "e": "✋", "next": 2}, {"t": "ask", "zh": "你的衣服是什么颜色的？", "py": "Nǐ de yīfu shì shénme yánsè de?", "fr": "What colour are your clothes?", "e": "🎨", "col": ["衣服", "yīfu"], "next": 3}, {"t": "cmd", "zh": "找一个颜色一样的东西。", "py": "Zhǎo yí ge yánsè yíyàng de dōngxi.", "fr": "Find something of the same colour.", "e": "🔎", "next": 4}, {"t": "cmd", "zh": "摸一下它。", "py": "Mō yíxià tā.", "fr": "Touch it.", "e": "✋", "next": 5}, {"t": "end", "zh": "很好！", "py": "Hěn hǎo!", "fr": "Very good!", "e": "🎉"}]}];
function genBody(){
  const b=pk(BODY),sd=b.p?pk([["左","zuǒ","left"],["右","yòu","right"]]):null;
  const bf=sd?b.fr.replace("your ","your "+sd[2]+" "):b.fr;const f=pk(["t","t"].concat(b.on?["on"]:[]).concat(b.up?["up"]:[]));
  if(f==="on")return{e:b.e,zh:"把手放在你的"+b.h+"上。",py:"Bǎ shǒu fàng zài nǐ de "+b.py+" shàng.",fr:"Put your hand on "+b.fr+"."};
  if(f==="up")return{e:b.e,zh:"举起你的"+sd[0]+b.h+"。",py:"Jǔqǐ nǐ de "+sd[1]+" "+b.py+".",fr:"Raise "+bf+"."};
  return{e:b.e,zh:"摸你的"+(sd?sd[0]:"")+b.h+"。",py:"Mō nǐ de "+(sd?sd[1]+" ":"")+b.py+".",fr:"Touch "+bf+"."};
}
function tpScore(c){const q=document.createElement("div");q.className="qsc";q.textContent="⭐ "+S.tp.n+(S.tp.n===1?" action done":" actions done");c.appendChild(q)}
function artStrip(s){return s.replace(/^(an?|the) /i,"")}
const UI=["🔥 0","⬇ Install","‹","›","读 Read","造 Build","考 Quiz","配 Pairs","名 Names","旅 Travel","声 Tones","动 Actions","📅 Pick a text","✕","✓ read · outline = today · tap to open","🔊 Read all","🎧 Listen","拼 Pinyin","🇬🇧 Translation","🐢 Slow first","🇬🇧 + translation","∞ All texts","✓ I've read it today","吃 Action","很 State","三 Count","不 Not","我"," Who?","吃"," Action","饭","What?","三"," Units","十"," Tens","🔊 Listen","🎲 Random","↺ Restart","Next ›","1 noun = 1 classifier: 苹果 → 个苹果","Next ›","Tap a card to hear it","🏙 Cities","🏢 Companies","👤 People","Tap a phrase to hear it · 📲 to show it to someone","🎧 Listen &amp; guess","💬 Dialogues","🎧","Listen, then pick the meaning","🔊","🐢","Next ›","Listen to the instruction in Chinese and do the action for real"];
