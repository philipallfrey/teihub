/*
* Modified by Philip Allfrey 2020-09-26
* Data/labels taken from , GPL
* Interface taken from https://github.com/cospired/i18n-iso-languages, MIT Licence
*/

/*
* Copyright 2014
* Jason LuBean <jason.lubean@gmail.com>
* https://github.com/jlubean/iso-639-2
*
* This program is free software; you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation; either version 2 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program; if not, write to the Free Software
* Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
* MA 02110-1301, USA.
*/

/*
* The MIT License (MIT)
*
* Copyright (c) 2018 cospired GmbH
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


    const labels = {
        a3: "ISO 639-2 Bibliographic Language Code",
        a3t: "ISO 639-2 Terminology Language Code",
        a2: "ISO 639-1 Language Code",
        name: "Local Name",
        eng: "English Name",
        dir: "Reading Direction"
    };

    const data = [
      ["–","–","","(no language specified)","(no language specified)","ltr"],
      ["aar","aar","aa","ʿAfár af","Afar","ltr"],
      ["abk","abk","ab","Аҧсуа","Abkhazian","ltr"],
      ["ace","ace","","Achinese","Achinese","ltr"],
      ["ach","ach","","Acoli","Acoli","ltr"],
      ["ada","ada","","Adangbɛ","Adangme","ltr"],
      ["ady","ady","","Aдыгэбзэ","Adyghe; Adygei","ltr"],
      ["aeb","aeb","","تونسي","Tunisian","rtl"],
      ["afa","afa","","Afro-Asiatic languages","Afro-Asiatic languages","ltr"],
      ["afh","afh","","Afrihili","Afrihili","ltr"],
      ["afr","afr","af","Afrikaans","Afrikaans","ltr"],
      ["aii","aii","","ܣܘܪܝܬ","Neo-Aramaic","rtl"],
      ["ain","ain","","アイヌ イタク","Ainu","ltr"],
      ["ajw","ajw","","Ajawa","Ajawa","ltr"],
      ["ajp","ajp","","اللهجة الشامية الجنوبية","South Levantine Arabic","rtl"],
      ["aka","aka","ak","Akana","Akan","ltr"],
      ["akk","akk","","Akkadian","Akkadian","ltr"],
      ["alb","sqi","sq","Shqip","Albanian","ltr"],
      ["ale","ale","","Unangam Tunuu","Aleut","ltr"],
      ["alg","alg","","Algonquian languages","Algonquian languages","ltr"],
      ["alt","alt","","Southern Altai","Southern Altai","ltr"],
      ["amh","amh","am","አማርኛ","Amharic","ltr"],
      ["ang","ang","","English, Old (ca.450-1100)","English, Old (ca.450-1100)","ltr"],
      ["anp","anp","","Angika","Angika","ltr"],
      ["apa","apa","","Ndéé","Apache","ltr"],
      ["apc","apc","","اللهجة الشامي الشمال","North Levantine Arabic","rtl"],
      ["ara","ara","ar","العربية","Arabic","rtl"],
      ["arb","arb","","العربية الفصحى","Modern Standard Arabic","rtl"],
      ["arc","arc","","Official Aramaic (700-300 BCE); Imperial Aramaic (700-300 BCE)","Official Aramaic (700-300 BCE); Imperial Aramaic (700-300 BCE)","ltr"],
      ["arg","arg","an","Aragonés","Aragonese","ltr"],
      ["arm","hye","hy","Հայերեն","Armenian","ltr"],
      ["arn","arn","","Mapudungun; Mapuche","Mapudungun; Mapuche","ltr"],
      ["arp","arp","","Hinono'eitiitt","Arapaho","ltr"],
      ["art","art","","Artificial languages","Artificial languages","ltr"],
      ["ary","ary","","الدارجة المغربية","Moroccan Arabic","rtl"],
      ["arz","arz","","مصرى","Egyptian Arabic","rtl"],
      ["arw","arw","","Arawak","Arawak","ltr"],
      ["asm","asm","as","অসমীয়া","Assamese","ltr"],
      ["ast","ast","","Llïonés","Asturian; Bable; Leonese; Asturleonese","ltr"],
      ["ath","ath","","Athapascan languages","Athapascan languages","ltr"],
      ["aus","aus","","Australian languages","Australian languages","ltr"],
      ["ava","ava","av","Авар","Avaric","ltr"],
      ["ave","ave","ae","Avestan","Avestan","ltr"],
      ["awa","awa","","Awadhi","Awadhi","ltr"],
      ["aym","aym","ay","Aymar Aru","Aymara","ltr"],
      ["aze","aze","az","Azərbaycanca / آذربايجان","Azerbaijani","ltr"],
      ["bad","bad","","Banda languages","Banda languages","ltr"],
      ["bai","bai","","Bamileke languages","Bamileke languages","ltr"],
      ["bak","bak","ba","Башҡорт","Bashkir","ltr"],
      ["bal","bal","","Baluchi","Baluchi","ltr"],
      ["bam","bam","bm","Bamanankan","Bambara","ltr"],
      ["ban","ban","","Balinese","Balinese","ltr"],
      ["baq","eus","eu","Euskara","Basque","ltr"],
      ["bar","bar","","Boarisch, Bairisch","Austro-Bavarian","ltr"],
      ["bas","bas","","Basa","Basa","ltr"],
      ["bat","bat","","Baltic languages","Baltic languages","ltr"],
      ["bej","bej","","Beja; Bedawiyet","Beja; Bedawiyet","ltr"],
      ["bel","bel","be","Беларуская","Belarusian","ltr"],
      ["bem","bem","","iciBemba","Bemba","ltr"],
      ["ben","ben","bn","বাংলা","Bengali","ltr"],
      ["ber","ber","","Tamaziɣt","Berber","ltr"],
      ["bho","bho","","भोजपुरी, بھوجپوري","Bhojpuri","ltr"],
      ["bih","bih","bh","भोजपुरी","Bihari","ltr"],
      ["bik","bik","","Bikol","Bikol","ltr"],
      ["bin","bin","","Bini; Edo","Bini; Edo","ltr"],
      ["bis","bis","bi","Bislama","Bislama","ltr"],
      ["bla","bla","","Siksika","Siksika","ltr"],
      ["bnt","bnt","","Bantu languages","Bantu languages","ltr"],
      ["bos","bos","bs","Босански / Bosanski","Bosnian","ltr"],
      ["bra","bra","","Braj","Braj","ltr"],
      ["bre","bre","br","Brezhoneg","Breton","ltr"],
      ["brh","brh","","براہوئی","Brahui","ltr"],
      ["brx","brx","","बर'","Boro","ltr"],
      ["btk","btk","","Batak languages","Batak languages","ltr"],
      ["bua","bua","","Buriat","Buriat","ltr"],
      ["bug","bug","","Buginese","Buginese","ltr"],
      ["bul","bul","bg","Български","Bulgarian","ltr"],
      ["bur","mya","my","မြန်မာစာ / မြန်မာစကား","Burmese","ltr"],
      ["bya","bya","","Palawan Batak","Batak","ltr"],
      ["byn","byn","","Blin; Bilin","Blin; Bilin","ltr"],
      ["cad","cad","","Caddo","Caddo","ltr"],
      ["cai","cai","","Central American Indian languages","Central American Indian languages","ltr"],
      ["car","car","","Galibi Carib","Galibi Carib","ltr"],
      ["cat","cat","ca","Català","Catalan; Valencian","ltr"],
      ["cau","cau","","Caucasian languages","Caucasian languages","ltr"],
      ["ceb","ceb","","Bisaya / Sinugbuanon","Cebuano","ltr"],
      ["cel","cel","","Celtic languages","Celtic languages","ltr"],
      ["cha","cha","ch","Chamoru","Chamorro","ltr"],
      ["chb","chb","","Chibcha","Chibcha","ltr"],
      ["che","che","ce","Нохчийн","Chechen","ltr"],
      ["chg","chg","","Chagatai","Chagatai","ltr"],
      ["chi","zho","zh","中文","Chinese","ltr"],
      ["chk","chk","","Chuukese","Chuukese","ltr"],
      ["chm","chm","","Mari","Mari","ltr"],
      ["chn","chn","","Chinook jargon","Chinook jargon","ltr"],
      ["cho","cho","","Chahta'","Choctaw","ltr"],
      ["chp","chp","","ᑌᓀᓲᒢᕄᓀ / Dene Suline / Dëne Sųłiné","Chipewyan; Dene Suline","ltr"],
      ["chr","chr","","Cherokee","Cherokee","ltr"],
      ["chu","chu","cu","словѣньскъ / slověnĭskŭ","Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic","ltr"],
      ["chv","chv","cv","Чăваш","Chuvash","ltr"],
      ["chy","chy","","Cheyenne","Cheyenne","ltr"],
      ["cmc","cmc","","Chamic languages","Chamic languages","ltr"],
      ["cmn","cmn","","官話 / 官话","Mandarin","ltr"],
      ["cop","cop","","Coptic","Coptic","ltr"],
      ["cor","cor","kw","Kernewek","Cornish","ltr"],
      ["cos","cos","co","Corsu","Corsican","ltr"],
      ["cpe","cpe","","Creoles and pidgins, English based","Creoles and pidgins, English based","ltr"],
      ["cpf","cpf","","Creoles and pidgins, French-based","Creoles and pidgins, French-based","ltr"],
      ["cpp","cpp","","Creoles and pidgins, Portuguese-based","Creoles and pidgins, Portuguese-based","ltr"],
      ["cre","cre","cr","ᓀᐦᐃᔭᐍᐏᐣ","Cree","ltr"],
      ["crh","crh","","Crimean Tatar; Crimean Turkish","Crimean Tatar; Crimean Turkish","ltr"],
      ["crp","crp","","Creoles and pidgins","Creoles and pidgins","ltr"],
      ["csb","csb","","Kashubian","Kashubian","ltr"],
      ["cus","cus","","Cushitic languages","Cushitic languages","ltr"],
      ["cze","ces","cs","Český","Czech","ltr"],
      ["dak","dak","","Dakȟótiyapi","Dakota","ltr"],
      ["dan","dan","da","Dansk","Danish","ltr"],
      ["dar","dar","","Дарган Mез","Dargwa","ltr"],
      ["day","day","","Land Dayak languages","Land Dayak languages","ltr"],
      ["del","del","","Delaware","Delaware","ltr"],
      ["den","den","","Slave (Athapascan)","Slave (Athapascan)","ltr"],
      ["dgr","dgr","","Dogrib","Dogrib","ltr"],
      ["din","din","","Dinka","Dinka","ltr"],
      ["div","div","dv","Divehi; Dhivehi; Maldivian","Divehi; Dhivehi; Maldivian","rtl"],
      ["doi","doi","","Dogri","Dogri","ltr"],
      ["dra","dra","","Dravidian languages","Dravidian languages","ltr"],
      ["dsb","dsb","","Lower Sorbian","Lower Sorbian","ltr"],
      ["dua","dua","","Duala","Duala","ltr"],
      ["dum","dum","","Dutch, Middle (ca.1050-1350)","Dutch, Middle (ca.1050-1350)","ltr"],
      ["dut","nld","nl","Nederlands","Dutch; Flemish","ltr"],
      ["dyu","dyu","","Dyula","Dyula","ltr"],
      ["dzo","dzo","dz","ཇོང་ཁ","Dzongkha","ltr"],
      ["efi","efi","","Efik","Efik","ltr"],
      ["egy","egy","","Egyptian (Ancient)","Egyptian (Ancient)","ltr"],
      ["eka","eka","","Ekajuk","Ekajuk","ltr"],
      ["elx","elx","","Elamite","Elamite","ltr"],
      ["eng","eng","en","English","English","ltr"],
      ["enm","enm","","English, Middle (1100-1500)","English, Middle (1100-1500)","ltr"],
      ["epo","epo","eo","Esperanto","Esperanto","ltr"],
      ["est","est","et","Eesti","Estonian","ltr"],
      ["esx","esx","","Eskaleut","Eskimo-Aleut","ltr"],
      ["ewe","ewe","ee","Ɛʋɛ","Ewe","ltr"],
      ["ewo","ewo","","Ewondo","Ewondo","ltr"],
      ["fan","fan","","Fang","Fang","ltr"],
      ["fao","fao","fo","Føroyskt","Faroese","ltr"],
      ["fat","fat","","Fanti","Fanti","ltr"],
      ["fij","fij","fj","Na Vosa Vakaviti","Fijian","ltr"],
      ["fil","fil","","Filipino; Pilipino","Filipino; Pilipino","ltr"],
      ["fin","fin","fi","Suomi","Finnish","ltr"],
      ["fiu","fiu","","Finno-Ugrian languages","Finno-Ugrian languages","ltr"],
      ["fon","fon","","Fon","Fon","ltr"],
      ["fre","fra","fr","Français","French","ltr"],
      ["frm","frm","","French, Middle (ca.1400-1600)","French, Middle (ca.1400-1600)","ltr"],
      ["fro","fro","","French, Old (842-ca.1400)","French, Old (842-ca.1400)","ltr"],
      ["frr","frr","","Noordfreesk","Northern Frisian","ltr"],
      ["frs","frs","","Seeltersk","Eastern Frisian","ltr"],
      ["fry","fry","fy","Frysk","Western Frisian","ltr"],
      ["ful","ful","ff","Fulfulde","Fulah","ltr"],
      ["fur","fur","","Furlan","Friulian","ltr"],
      ["gaa","gaa","","Gã","Ga","ltr"],
      ["gad","gad","","Gaddang","Gaddang","ltr"],
      ["gay","gay","","Gayo","Gayo","ltr"],
      ["gba","gba","","Gbaya","Gbaya","ltr"],
      ["gem","gem","","Germanic languages","Germanic languages","ltr"],
      ["geo","kat","ka","ქართული","Georgian","ltr"],
      ["ger","deu","de","Deutsch","German","ltr"],
      ["gez","gez","","Geez","Geez","ltr"],
      ["gil","gil","","Gilbertese","Gilbertese","ltr"],
      ["gla","gla","gd","Gàidhlig","Gaelic; Scottish Gaelic","ltr"],
      ["gle","gle","ga","Gaeilge","Irish","ltr"],
      ["glg","glg","gl","Galego","Galician","ltr"],
      ["glv","glv","gv","Gaelg","Manx","ltr"],
      ["gmh","gmh","","German, Middle High (ca.1050-1500)","German, Middle High (ca.1050-1500)","ltr"],
      ["gml","gml","","German, Middle Low (ca.1200-1650)","German, Middle Low (ca.1200-1650)","ltr"],
      ["goh","goh","","German, Old High (ca.750-1050)","German, Old High (ca.750-1050)","ltr"],
      ["gon","gon","","Gondi","Gondi","ltr"],
      ["gor","gor","","Gorontalo","Gorontalo","ltr"],
      ["got","got","","Gothic","Gothic","ltr"],
      ["grb","grb","","Grebo","Grebo","ltr"],
      ["grc","grc","","Greek, Ancient (to 1453)","Greek, Ancient (to 1453)","ltr"],
      ["gre","ell","el","Ελληνικά","Greek, Modern (1453-)","ltr"],
      ["grk","grk","","Hellenic languages","Hellenic languages","ltr"],
      ["grn","grn","gn","Avañe'ẽ","Guarani","ltr"],
      ["gsw","gsw","","Schwyzerdütsch","Swiss German; Alemannic; Alsatian","ltr"],
      ["gug","gug","","avañeʼẽ","Guarani","ltr"],
      ["guj","guj","gu","ગુજરાતી","Gujarati","ltr"],
      ["gwi","gwi","","Gwich'in","Gwich'in","ltr"],
      ["hai","hai","","Xaat Kíl","Haida","ltr"],
      ["hat","hat","ht","Krèyol ayisyen","Haitian; Haitian Creole","ltr"],
      ["hau","hau","ha","هَوُسَ","Hausa","rtl"],
      ["haw","haw","","ʻŌlelo Hawaiʻi","Hawaiian","ltr"],
      ["hbo","hbo","","Ancient Hebrew","Ancient Hebrew","rtl"],
      ["hbs","hbs","sh","српскохрватски / хрватскосрпски","Serbo-Croatian","ltr"],
      ["heb","heb","he","עברית","Hebrew","rtl"],
      ["her","her","hz","Otsiherero","Herero","ltr"],
      ["hil","hil","","Hiligaynon","Hiligaynon","ltr"],
      ["him","him","","पहाड़ी","Himachali languages; Western Pahari languages","ltr"],
      ["hin","hin","hi","हिन्दी","Hindi","ltr"],
      ["hit","hit","","Hittite","Hittite","ltr"],
      ["hmn","hmn","","lol Hmongb, lus Hmoob, lug Moob","Hmong; Mong","ltr"],
      ["hmo","hmo","ho","Hiri Motu","Hiri Motu","ltr"],
      ["hrv","hrv","hr","Hrvatski","Croatian","ltr"],
      ["hsb","hsb","","Upper Sorbian","Upper Sorbian","ltr"],
      ["hun","hun","hu","Magyar","Hungarian","ltr"],
      ["hup","hup","","Hupa","Hupa","ltr"],
      ["iba","iba","","Iban","Iban","ltr"],
      ["ibe","ibe","","Abesabesi","Akpes","ltr"],
      ["ibo","ibo","ig","Igbo","Igbo","ltr"],
      ["ice","isl","is","Íslenska","Icelandic","ltr"],
      ["ido","ido","io","Ido","Ido","ltr"],
      ["iii","iii","ii","ꆈꌠ꒿ / 四川彝语","Sichuan Yi; Nuosu","ltr"],
      ["ijo","ijo","","Ijo languages","Ijo languages","ltr"],
      ["iku","iku","iu","ᐃᓄᒃᑎᑐᑦ","Inuktitut","ltr"],
      ["ile","ile","ie","Interlingue","Interlingue; Occidental","ltr"],
      ["ilo","ilo","","Iloko","Iloko","ltr"],
      ["ina","ina","ia","Interlingua","Interlingua (International Auxiliary Language Association)","ltr"],
      ["inc","inc","","Indic languages","Indic languages","ltr"],
      ["ind","ind","id","Bahasa Indonesia","Indonesian","ltr"],
      ["ine","ine","","Indo-European languages","Indo-European languages","ltr"],
      ["inh","inh","","ГӀалгӀай мотт","Ingush","ltr"],
      ["inm","inm","","Minaean","Minaean","ltr"],
      ["ipk","ipk","ik","Iñupiak","Inupiaq","ltr"],
      ["ira","ira","","Iranian languages","Iranian languages","ltr"],
      ["iro","iro","","Iroquoian languages","Iroquoian languages","ltr"],
      ["ita","ita","it","Italiano","Italian","ltr"],
      ["jav","jav","jv","Basa Jawa","Javanese","ltr"],
      ["jbo","jbo","","Lojban","Lojban","ltr"],
      ["jpa","jpa","","Jewish Palestinian Aramaic","Jewish Palestinian Aramaic","rtl"],
      ["jpn","jpn","ja","日本語","Japanese","ltr"],
      ["jpr","jpr","","Judeo-Persian","Judeo-Persian","ltr"],
      ["jrb","jrb","","Judeo-Arabic","Judeo-Arabic","rtl"],
      ["kaa","kaa","","Қарақалпақ","Kara-Kalpak","ltr"],
      ["kab","kab","","شئعم","Kabyle","ltr"],
      ["kac","kac","","Kachin; Jingpho","Kachin; Jingpho","ltr"],
      ["kal","kal","kl","Kalaallisut","Kalaallisut; Greenlandic","ltr"],
      ["kam","kam","","Kamba","Kamba","ltr"],
      ["kan","kan","kn","ಕನ್ನಡ","Kannada","ltr"],
      ["kar","kar","","Karen languages","Karen languages","ltr"],
      ["kas","kas","ks","कश्मीरी / كشميري","Kashmiri","rtl"],
      ["kau","kau","kr","Kanuri","Kanuri","ltr"],
      ["kaw","kaw","","Kawi","Kawi","ltr"],
      ["kaz","kaz","kk","Қазақ Tілі","Kazakh","ltr"],
      ["kbd","kbd","","Kъэбэрдеибзэ","Kabardian","ltr"],
      ["kha","kha","","Khasi","Khasi","ltr"],
      ["khi","khi","","Khoisan languages","Khoisan languages","ltr"],
      ["khm","khm","km","ភាសាខ្មែរ","Central Khmer","ltr"],
      ["kho","kho","","Khotanese; Sakan","Khotanese; Sakan","ltr"],
      ["kik","kik","ki","Gĩkũyũ","Kikuyu; Gikuyu","ltr"],
      ["kin","kin","rw","Kinyarwandi","Kinyarwanda","ltr"],
      ["kir","kir","ky","Kırgızca / Кыргызча","Kirghiz; Kyrgyz","ltr"],
      ["kmb","kmb","","Kimbundu","Kimbundu","ltr"],
      ["kok","kok","","कोंकणी / Konknni / കൊങ്കണി / ಕೊಂಕಣಿ","Konkani","ltr"],
      ["kom","kom","kv","Коми","Komi","ltr"],
      ["kon","kon","kg","KiKongo","Kongo","ltr"],
      ["kor","kor","ko","조선말 / 한국어","Korean","ltr"],
      ["kos","kos","","Kosraean","Kosraean","ltr"],
      ["kpe","kpe","","Kpelle","Kpelle","ltr"],
      ["krc","krc","","Karachay-Balkar","Karachay-Balkar","ltr"],
      ["krl","krl","","Karelian","Karelian","ltr"],
      ["kro","kro","","Kru languages","Kru languages","ltr"],
      ["kru","kru","","Kurukh","Kurukh","ltr"],
      ["kua","kua","kj","Kuanyama","Kuanyama; Kwanyama","ltr"],
      ["kum","kum","","Къумукъ Tил","Kumyk","ltr"],
      ["kur","kur","ku","Kurdí, کوردی, or K’öрди","Kurdish","rtl"],
      ["kut","kut","","Kutenai","Kutenai","ltr"],
      ["lad","lad","","Ladino","Ladino","ltr"],
      ["lah","lah","","Lahnda","Lahnda","ltr"],
      ["lam","lam","","Lamba","Lamba","ltr"],
      ["lao","lao","lo","ລາວ / Pha xa lao","Lao","ltr"],
      ["lat","lat","la","Latina","Latin","ltr"],
      ["lav","lav","lv","Latviešu","Latvian","ltr"],
      ["lea","lea","","Shabunda Lega","Shabunda Lega","ltr"],
      ["lez","lez","","Lezghian","Lezghian","ltr"],
      ["lim","lim","li","Lèmburgs","Limburgan; Limburger; Limburgish","ltr"],
      ["lin","lin","ln","Lingála","Lingala","ltr"],
      ["lit","lit","lt","Lietuvių","Lithuanian","ltr"],
      ["lng","lng","","Lombardic","Lombardic", "ltr"],
      ["lol","lol","","Mongo","Mongo","ltr"],
      ["loz","loz","","Lozi","Lozi","ltr"],
      ["ltz","ltz","lb","Lëtzebuergesch","Luxembourgish; Letzeburgesch","ltr"],
      ["lua","lua","","Luba-Lulua","Luba-Lulua","ltr"],
      ["lub","lub","lu","Luba-Katanga","Luba-Katanga","ltr"],
      ["lug","lug","lg","Luganda","Ganda","ltr"],
      ["lui","lui","","Cham'teela","Luiseno","ltr"],
      ["lun","lun","","Lunda","Lunda","ltr"],
      ["luo","luo","","Kavirondo / Dholuo","Luo (Kenya and Tanzania)","ltr"],
      ["lus","lus","","Lushai","Lushai","ltr"],
      ["lzh","lzh","","古文 / 文言","Classical Chinese","ltr"],
      ["mac","mkd","mk","Македонски","Macedonian","ltr"],
      ["mad","mad","","Madurese","Madurese","ltr"],
      ["mag","mag","","मगही","Magahi","ltr"],
      ["mah","mah","mh","Kajin Majel / Ebon","Marshallese","ltr"],
      ["mai","mai","","मैथिली / মৈথিলী","Maithili","ltr"],
      ["mak","mak","","Makasar","Makasar","ltr"],
      ["mal","mal","ml","മലയാളം","Malayalam","ltr"],
      ["man","man","","Mandingo","Mandingo","ltr"],
      ["mao","mri","mi","Māori","Maori","ltr"],
      ["map","map","","Austronesian languages","Austronesian languages","ltr"],
      ["mar","mar","mr","मराठी","Marathi","ltr"],
      ["mas","mas","","Masai","Masai","ltr"],
      ["may","msa","ms","Bahasa Melayu","Malay","ltr"],
      ["mck","mck","","Mbúùnda / Chimbúùnda","Mbunda","ltr"],
      ["mdf","mdf","","Moksha","Moksha","ltr"],
      ["mdr","mdr","","Mandar","Mandar","ltr"],
      ["men","men","","Mende","Mende","ltr"],
      ["mga","mga","","Irish, Middle (900-1200)","Irish, Middle (900-1200)","ltr"],
      ["mic","mic","","Mi'kmaq; Micmac","Mi'kmaq; Micmac","ltr"],
      ["mig","mig","","San Miguel El Grande Mixtec","San Miguel El Grande Mixtec", "ltr"],
      ["min","min","","Minangkabau","Minangkabau","ltr"],
      ["mis","mis","","Uncoded languages","Uncoded languages","ltr"],
      ["mix","mix","","Mixtepec Mixtec","Mixtepec Mixtec", "ltr"],
      ["miy","miy","","Ayutla Mixtec","Ayutla Mixtec", "ltr"],
      ["miz","miz","","Coatzospan Mixtec","Coatzospan Mixtec", "ltr"],
      ["mkh","mkh","","Mon-Khmer languages","Mon-Khmer languages","ltr"],
      ["mlg","mlg","mg","Malagasy","Malagasy","ltr"],
      ["mlt","mlt","mt","Malti","Maltese","ltr"],
      ["mnc","mnc","","ᠮᠠᠨᠵᡠ ᡤᡳᠰᡠᠨ","Manchu","ltr"],
      ["mni","mni","","Manipuri","Manipuri","ltr"],
      ["mno","mno","","Manobo languages","Manobo languages","ltr"],
      ["moh","moh","","Mohawk","Mohawk","ltr"],
      ["mon","mon","mn","Монгол Хэл / ᠮᠣᠨᠭᠭᠣᠯ ᠬᠡᠯᠡ","Mongolian","ltr"],
      ["mos","mos","","Mossi","Mossi","ltr"],
      ["mul","mul","","Multiple languages","Multiple languages","ltr"],
      ["mun","mun","","Munda languages","Munda languages","ltr"],
      ["mus","mus","","Mvskoke / Mvskokē","Muscogee Creek","ltr"],
      ["mwl","mwl","","Mirandese","Mirandese","ltr"],
      ["mwr","mwr","","Marwari","Marwari","ltr"],
      ["myn","myn","","Mayan languages","Mayan languages","ltr"],
      ["myv","myv","","Erzya","Erzya","ltr"],
      ["nah","nah","","Nahuatl languages","Nahuatl languages","ltr"],
      ["nai","nai","","North American Indian languages","North American Indian languages","ltr"],
      ["nap","nap","","Neapolitan","Neapolitan","ltr"],
      ["nau","nau","na","Dorerin Naoero","Nauru","ltr"],
      ["nav","nav","nv","Diné bizaad","Navajo; Navaho","ltr"],
      ["nbl","nbl","nr","isiNdebele","Ndebele, South; South Ndebele","ltr"],
      ["nde","nde","nd","Sindebele","Ndebele, North; North Ndebele","ltr"],
      ["ndo","ndo","ng","Oshiwambo","Ndonga","ltr"],
      ["nds","nds","","Plattdüütsch","Low German; Low Saxon; German, Low; Saxon, Low","ltr"],
      ["nep","nep","ne","नेपाली","Nepali","ltr"],
      ["new","new","","नेपाल भाषा","Nepal Bhasa; Newari","ltr"],
      ["nia","nia","","Nias","Nias","ltr"],
      ["nic","nic","","Niger-Kordofanian languages","Niger-Kordofanian languages","ltr"],
      ["niu","niu","","Niuean","Niuean","ltr"],
      ["nno","nno","nn","Norsk (nynorsk)","Norwegian Nynorsk; Nynorsk, Norwegian","ltr"],
      ["nob","nob","nb","Bokmål, Norwegian; Norwegian Bokmål","Bokmål, Norwegian; Norwegian Bokmål","ltr"],
      ["nog","nog","","Nogai","Nogai","ltr"],
      ["non","non","","Norse, Old","Norse, Old","ltr"],
      ["nor","nor","no","Norsk (bokmål / riksmål)","Norwegian","ltr"],
      ["nqo","nqo","","N'Ko","N'Ko","ltr"],
      ["nso","nso","","Pedi; Sepedi; Northern Sotho","Pedi; Sepedi; Northern Sotho","ltr"],
      ["nub","nub","","Nubian languages","Nubian languages","ltr"],
      ["nwc","nwc","","Classical Newari; Old Newari; Classical Nepal Bhasa","Classical Newari; Old Newari; Classical Nepal Bhasa","ltr"],
      ["nya","nya","ny","Chi-Chewa","Chichewa; Chewa; Nyanja","ltr"],
      ["nym","nym","","Nyamwezi","Nyamwezi","ltr"],
      ["nyn","nyn","","Nyankole","Nyankole","ltr"],
      ["nyo","nyo","","Nyoro","Nyoro","ltr"],
      ["nxq","nxq","","Naqxi geezheeq","Naxi","ltr"],
      ["nzi","nzi","","Nzima","Nzima","ltr"],
      ["nzz","nzz","","Naŋa tegu","Naŋa dama","ltr"],
      ["oar","oar","","Old Aramaic","Old Aramaic","ltr"],
      ["oci","oci","oc","Occitan","Occitan (post 1500)","ltr"],
      ["ofs","ofs","","Frysk","Old Frisian","ltr"],
      ["oji","oji","oj","ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin","Ojibwa","ltr"],
      ["olt","olt","","Old Lithuanian","Old Lithuanian","ltr"],
      ["ori","ori","or","ଓଡ଼ିଆ","Oriya","ltr"],
      ["orm","orm","om","Oromoo","Oromo","ltr"],
      ["osa","osa","","Osage","Osage","ltr"],
      ["osc","osc","","Oscan","Oscan","ltr"],
      ["oss","oss","os","Иронау","Ossetian; Ossetic","ltr"],
      ["osx","osx","","Sahsisk","Old Saxon","ltr"],
      ["ota","ota","","Turkish, Ottoman (1500-1928)","Turkish, Ottoman (1500-1928)","ltr"],
      ["oto","oto","","Otomian languages","Otomian languages","ltr"],
      ["paa","paa","","Papuan languages","Papuan languages","ltr"],
      ["pag","pag","","Pangasinan","Pangasinan","ltr"],
      ["pal","pal","","Pahlavi","Pahlavi","ltr"],
      ["pam","pam","","Pampanga; Kapampangan","Pampanga; Kapampangan","ltr"],
      ["pan","pan","pa","ਪੰਜਾਬੀ / पंजाबी / پنجابي","Panjabi; Punjabi","ltr"],
      ["pap","pap","","Papiamento","Papiamento","ltr"],
      ["pau","pau","","Palauan","Palauan","ltr"],
      ["pcd","pcd","","Picard","Picard","ltr"],
      ["peo","peo","","Persian, Old (ca.600-400 B.C.)","Persian, Old (ca.600-400 B.C.)","ltr"],
      ["per","fas","fa","فارسی","Persian","rtl"],
      ["phi","phi","","Philippine languages","Philippine languages","ltr"],
      ["phn","phn","","Phoenician","Phoenician","ltr"],
      ["pka","pka","","𑀅𑀭𑁆𑀥𑀫𑀸𑀕𑀥𑀻","Ardhamagadhi Prakrit","ltr"],
      ["pli","pli","pi","Pāli / पाऴि","Pali","ltr"],
      ["pol","pol","pl","Polski","Polish","ltr"],
      ["pon","pon","","Pohnpeian","Pohnpeian","ltr"],
      ["por","por","pt","Português","Portuguese","ltr"],
      ["pra","pra","","Prakrit languages","Prakrit languages","ltr"],
      ["pro","pro","","Provençal, Old (to 1500);Occitan, Old (to 1500)","Provençal, Old (to 1500);Occitan, Old (to 1500)","ltr"],
      ["prs","prs","","دری","Dari","rtl"],
      ["pus","pus","ps","پښتو","Pushto; Pashto","rtl"],
      ["qaa-qtz","qaa-qtz","","Reserved for local use","Reserved for local use","ltr"],
      ["quc","quc","","Qatzijobʼal","Kʼicheʼ","ltr"],
      ["que","que","qu","Runa Simi","Quechua","ltr"],
      ["raj","raj","","राजस्थानी","Rajasthani","ltr"],
      ["rap","rap","","Rapanui","Rapanui","ltr"],
      ["rar","rar","","Rarotongan; Cook Islands Maori","Rarotongan; Cook Islands Maori","ltr"],
      ["roa","roa","","Romance languages","Romance languages","ltr"],
      ["roh","roh","rm","Rumantsch","Romansh","ltr"],
      ["rom","rom","","Romany","Romany","ltr"],
      ["rue","rue","","русинськый язык; руски язик","Rusyn","ltr"],
      ["rum","ron","ro","Română","Romanian; Moldavian; Moldovan","ltr"],
      ["run","run","rn","Kirundi","Rundi","ltr"],
      ["rup","rup","","Aromanian; Arumanian; Macedo-Romanian","Aromanian; Arumanian; Macedo-Romanian","ltr"],
      ["rus","rus","ru","Русский","Russian","ltr"],
      ["sad","sad","","Sandawe","Sandawe","ltr"],
      ["sag","sag","sg","Sängö","Sango","ltr"],
      ["sah","sah","","Yakut","Yakut","ltr"],
      ["sai","sai","","South American Indian languages","South American Indian languages","ltr"],
      ["sal","sal","","Salishan languages","Salishan languages","ltr"],
      ["sam","sam","","Samaritan Aramaic","Samaritan Aramaic","ltr"],
      ["san","san","sa","संस्कृतम्","Sanskrit","ltr"],
      ["sas","sas","","Sasak","Sasak","ltr"],
      ["sat","sat","","Santali","Santali","ltr"],
      ["scn","scn","","Sicilianu","Sicilian","ltr"],
      ["sco","sco","","Scots","Scots","ltr"],
      ["scx","scx","","Sicel","Sicel","ltr"],
      ["sel","sel","","Selkup","Selkup","ltr"],
      ["sem","sem","","Semitic languages","Semitic languages","ltr"],
      ["sga","sga","","Irish, Old (to 900)","Irish, Old (to 900)","ltr"],
      ["sgn","sgn","","Sign Languages","Sign Languages","ltr"],
      ["shn","shn","","Shan","Shan","ltr"],
      ["sid","sid","","Sidamo","Sidamo","ltr"],
      ["sin","sin","si","සිංහල","Sinhala; Sinhalese","ltr"],
      ["sio","sio","","Siouan languages","Siouan languages","ltr"],
      ["sit","sit","","Sino-Tibetan languages","Sino-Tibetan languages","ltr"],
      ["sla","sla","","Slavic languages","Slavic languages","ltr"],
      ["slo","slk","sk","Slovenčina","Slovak","ltr"],
      ["slv","slv","sl","Slovenščina","Slovenian","ltr"],
      ["sma","sma","","Southern Sami","Southern Sami","ltr"],
      ["sme","sme","se","Sámegiella","Northern Sami","ltr"],
      ["smi","smi","","Sami languages","Sami languages","ltr"],
      ["smj","smj","","Lule Sami","Lule Sami","ltr"],
      ["smn","smn","","Inari Sami","Inari Sami","ltr"],
      ["smo","smo","sm","Gagana Sāmoa","Samoan","ltr"],
      ["sms","sms","","Skolt Sami","Skolt Sami","ltr"],
      ["sna","sna","sn","chiShona","Shona","ltr"],
      ["snd","snd","sd","सिनधि","Sindhi","ltr"],
      ["snk","snk","","Soninke","Soninke","ltr"],
      ["sog","sog","","Sogdian","Sogdian","ltr"],
      ["som","som","so","اللغة الصومالية","Somali","ltr"],
      ["son","son","","Songhai languages","Songhai languages","ltr"],
      ["sot","sot","st","Sesotho","Sotho, Southern","ltr"],
      ["spa","spa","es","Español","Spanish; Castilian","ltr"],
      ["srd","srd","sc","Sardu","Sardinian","ltr"],
      ["srn","srn","","Sranan Tongo","Sranan Tongo","ltr"],
      ["srp","srp","sr","Српски","Serbian","ltr"],
      ["srr","srr","","Serer","Serer","ltr"],
      ["ssa","ssa","","Nilo-Saharan languages","Nilo-Saharan languages","ltr"],
      ["ssw","ssw","ss","SiSwati","Swati","ltr"],
      ["suk","suk","","Sukuma","Sukuma","ltr"],
      ["sun","sun","su","Basa Sunda","Sundanese","ltr"],
      ["sus","sus","","Susu","Susu","ltr"],
      ["sux","sux","","Sumerian","Sumerian","ltr"],
      ["swa","swa","sw","Swahili languages","Swahili languages","ltr"],
      ["swe","swe","sv","Svenska","Swedish","ltr"],
      ["swh","swh","","Kiswahili","Swahili","ltr"],
      ["sxc","sxc","","Sicanian","Sicanian","ltr"],
      ["syc","syc","","Classical Syriac","Classical Syriac","ltr"],
      ["syr","syr","","Syriac","Syriac","ltr"],
      ["tah","tah","ty","Reo Mā`ohi","Tahitian","ltr"],
      ["tai","tai","","Tai languages","Tai languages","ltr"],
      ["tam","tam","ta","தமிழ்","Tamil","ltr"],
      ["tat","tat","tt","Tatarça","Tatar","ltr"],
      ["tel","tel","te","తెలుగు","Telugu","ltr"],
      ["tem","tem","","Timne","Timne","ltr"],
      ["ter","ter","","Tereno","Tereno","ltr"],
      ["tet","tet","","Tetum","Tetum","ltr"],
      ["tgk","tgk","tg","Тоҷикӣ","Tajik","ltr"],
      ["tgl","tgl","tl","Tagalog","Tagalog","ltr"],
      ["tha","tha","th","ภาษาไทย","Thai","ltr"],
      ["tib","bod","bo","དབུས་སྐད་","Tibetan","ltr"],
      ["tig","tig","","Tigre","Tigre","ltr"],
      ["tir","tir","ti","ትግርኛ","Tigrinya","ltr"],
      ["tiv","tiv","","Tiv","Tiv","ltr"],
      ["tkl","tkl","","Tokelau","Tokelau","ltr"],
      ["tlh","tlh","","Klingon; tlhIngan-Hol","Klingon; tlhIngan-Hol","ltr"],
      ["tli","tli","","Tlingit","Tlingit","ltr"],
      ["tmh","tmh","","Tamashek","Tamashek","ltr"],
      ["tmr","tmr","","Jewish Babylonian Aramaic","Jewish Babylonian Aramaic","rtl"],
      ["tog","tog","","Tonga (Nyasa)","Tonga (Nyasa)","ltr"],
      ["toi","toi","","iSitonga","Tonga","ltr"],
      ["ton","ton","to","Lea Faka-Tonga","Tonga (Tonga Islands)","ltr"],
      ["tpi","tpi","","Tok Pisin","Tok Pisin","ltr"],
      ["tpw","tpw","","Tupinambá","Tupi","ltr"],
      ["tru","tru","","ܛܘܪܝܐ","Turoyo","ltr"],
      ["tsi","tsi","","Tsimshian","Tsimshian","ltr"],
      ["tsn","tsn","tn","Setswana","Tswana","ltr"],
      ["tso","tso","ts","Xitsonga","Tsonga","ltr"],
      ["tuk","tuk","tk","Туркмен / تركمن","Turkmen","ltr"],
      ["tum","tum","","Tumbuka","Tumbuka","ltr"],
      ["tup","tup","","Tupi languages","Tupi languages","ltr"],
      ["tur","tur","tr","Türkçe","Turkish","ltr"],
      ["tut","tut","","Altaic languages","Altaic languages","ltr"],
      ["tvl","tvl","","Tuvalu","Tuvalu","ltr"],
      ["twi","twi","tw","Twi","Twi","ltr"],
      ["tyv","tyv","","Tuvinian","Tuvinian","ltr"],
      ["udm","udm","","Udmurt","Udmurt","ltr"],
      ["uga","uga","","Ugaritic","Ugaritic","ltr"],
      ["uig","uig","ug","Uyƣurqə / ئۇيغۇرچە","Uighur; Uyghur","ltr"],
      ["ukr","ukr","uk","Українська","Ukrainian","ltr"],
      ["umb","umb","","Umbundu","Umbundu","ltr"],
      ["und","und","","Undetermined","Undetermined","ltr"],
      ["urd","urd","ur","اردو","Urdu","rtl"],
      ["uzb","uzb","uz","Ўзбек","Uzbek","ltr"],
      ["vai","vai","","Vai","Vai","ltr"],
      ["ven","ven","ve","Tshivenḓa","Venda","ltr"],
      ["vie","vie","vi","Tiếng Việt","Vietnamese","ltr"],
      ["vol","vol","vo","Volapük","Volapük","ltr"],
      ["vot","vot","","Votic","Votic","ltr"],
      ["wak","wak","","Wakashan languages","Wakashan languages","ltr"],
      ["wal","wal","","Wolaitta; Wolaytta","Wolaitta; Wolaytta","ltr"],
      ["war","war","","Waray","Waray","ltr"],
      ["was","was","","Washo","Washo","ltr"],
      ["wel","cym","cy","Cymraeg","Welsh","ltr"],
      ["wen","wen","","Sorbian languages","Sorbian languages","ltr"],
      ["win","win","","Hoocą́k hoit'éra","Winnebago","ltr"],
      ["wln","wln","wa","Walon","Walloon","ltr"],
      ["wol","wol","wo","Wollof","Wolof","ltr"],
      ["wrm","wrm","","Warumungu","Warumungu","ltr"],
      ["xal","xal","","Kalmyk; Oirat","Kalmyk; Oirat","ltr"],
      ["xcl","xcl","","գրաբար","Classical Armenian","ltr"],
      ["xct","xct","","Classical Tibetan","Classical Tibetan","ltr"],
      ["xho","xho","xh","isiXhosa","Xhosa","ltr"],
      ["xly","xly","","Elymian","Elymian","ltr"],
      ["xno","xno","","Anglo-Normaund","Anglo-Norman","ltr"],
      ["xpu","xpu","","Punic","Punic","ltr"],
      ["xzp","xzp","","Zapotec","Zapotec","ltr"],
      ["x-lap","x-lap","","Igpay Atinlay","Pig Latin","ltr"],
      ["x-oldcam","x-oldcam","","Old Cam","Old Cam","ltr"],
      ["yao","yao","","Yao","Yao","ltr"],
      ["yap","yap","","Yapese","Yapese","ltr"],
      ["yej","yej","","יעואני גלוסא","Yevanic","rtl"],
      ["yid","yid","yi","ייִדיש","Yiddish","rtl"],
      ["yor","yor","yo","Yorùbá","Yoruba","ltr"],
      ["ypk","ypk","","Yupik languages","Yupik languages","ltr"],
      ["yua","yua","","maayaʼ tʼàan","Yucatec Maya","ltr"],
      ["zap","zap","","Zapotec","Zapotec","ltr"],
      ["zbl","zbl","","Blissymbols; Blissymbolics; Bliss","Blissymbols; Blissymbolics; Bliss","ltr"],
      ["zen","zen","","Zenaga","Zenaga","ltr"],
      ["zgh","zgh","","Standard Moroccan Tamazight","Standard Moroccan Tamazight","ltr"],
      ["zha","zha","za","Cuengh / Tôô / 壮语","Zhuang; Chuang","ltr"],
      ["znd","znd","","Zande languages","Zande languages","ltr"],
      ["zul","zul","zu","isiZulu","Zulu","ltr"],
      ["zun","zun","","Zuni","Zuni","ltr"],
      ["zxx","zxx","","No linguistic content; Not applicable","No linguistic content; Not applicable","ltr"],
      ["zza","zza","","Zaza; Dimili; Dimli; Kirdki; Kirmanjki; Zazaki","Zaza; Dimili; Dimli; Kirdki; Kirmanjki; Zazaki","ltr"]
    ];

    let alpha2 = {},
      alpha3T = {},
      alpha3B = {},
      direction = {};

    data.forEach(function(codeInformation) {
      let [a3, a3t, a2, name, eng, dir] = codeInformation;
      if(a2 !=='') alpha2[a2] = a3t;
      alpha3T[a3t] = a3t;
      alpha3B[a3] = a3t;
      direction[a3t] = dir;
    });

    /*
     * @param code Alpha-2 code
     * @return Alpha-3T code or undefined
     */
    function alpha2ToAlpha3T(code) {
      return alpha2[code.toLowerCase()];
    }

    exports.alpha2ToAlpha3T = alpha2ToAlpha3T;

    /*
     * @param code ISO 639-1 alpha-2, ISO 639-2 alpha-3 T or B
     * @return ISO 639-2 alpha-3 T
     */
    function toAlpha3T(code) {
      if (typeof code === "string") {
        const lcCode = code.toLowerCase();
        if(code.length === 2) {
          return alpha2ToAlpha3T(lcCode);
        }
        if (code.length === 3) {
          if( alpha3T[lcCode] ) {
            return lcCode;
          }
          if( alpha3B[lcCode] ) {
            return alpha3B[lcCode];
          }
        }
      }

      return undefined;
    }

    exports.toAlpha3T = toAlpha3T;

    /*
     * @param code ISO 639-2 alpha-3 T
     * @param lang name (local) or eng (English name)
     * @return name or undefined
     */
    exports.getName = function(code, lang) {
      const d = data.filter(x => x[1] === code);
      if( d.length ){
        const column = lang === 'name' ? 3 : 4;
        return d[0][column];
      } else {
        return undefined;
      }
    };

    /*
     * @return Object of alpha-2 codes mapped to alpha-3 T codes
     */
    exports.getAlpha2Codes = function() {
      return alpha2;
    };

    /*
     * @return Object of alpha-3 T codes mapped to alpha-2 codes
     */
    exports.getAlpha3TCodes = function() {
      return alpha3T;
    };

    /*
     * @return Object of alpha-3 B codes mapped to alpha-2 codes
     */
    exports.getAlpha3BCodes = function() {
      return alpha3B;
    };

    /*
     * @param code ISO 639-2 alpha-3 T code
     * @return String 'rtl' or 'ltr'
     */
    exports.getDir = function(code) {
      return direction[code];
    };

    /*
     * @param code ISO 639-1 alpha-2, 639-2 alpha-3 T or B code
     * @return Boolean
     */
    exports.isLocalName = function(code) {
      return this.getName(code, 'name') !== this.getName(code, 'eng');
    };

    /*
     * @param code ISO 639-1 alpha-2, 639-2 alpha-3 T or B code
     * @return Boolean
     */
    exports.isValid = function(code) {
      return this.toAlpha3T(code) !== undefined;
    };
