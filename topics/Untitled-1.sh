#!/bin/bash

S3_bucketName=trustlogics-database-backup
DB_Username=root
DB_Password=42a6p90ev53cat5h
DB_Name=keycloak
mysqlIpAddress=$(docker inspect --format '{{ .NetworkSettings.IPAddress }}' mysql-idp-server)
filename='trustlogics-idp-server-' + $(date +%Y-%m-%d-%H.%M.%S)

mysqldump  -h $mysqlIpAddress -u$DB_Username -p$DB_Password $DB_Name > $filename.sql

#Create bucket 
aws s3 mb s3://$S3_bucketName
aws s3 cp $filename.sql s3://$S3_bucketName/
rm -rf $filename.sql


strain	तनाव
aggravate	छेड़ना
medicinal	औषधीय
numerous	अनेक
visibly	प्रत्यक्षत:
cuisine	भोजन
smell	गंध
pleasant	सुखद
lend	उधार देना
rosemary	मेंहदी
exfoliate	छूटना
remedy	उपाय
rinse	कुल्ला
vinegar	सिरका
assumed	कल्पित
usually	आमतौर पर
crush	कुचलना
infect	संक्रमित
inflame	भड़काना
inflamed	सूजन
revoke	वापस लेना
plead	वकालत करना
stubborn	जिद्दी
competence	क्षमता
hobble	लंगड़ाना
shortage	कमी
squandered	गंवा
assess	आकलन
ruined	तबाह
cliff	चट्टान
argue	बहस
prudent	विवेकी
fungal	फंगल
rid	छुटकारा पा
evaluation	मूल्यांकन
optimistic	आशावादी
emphasis	जोर
disclose	खुलासा
illustration	उदाहरण
dismantle	गिराना
humiliate	विनीत करना
humiliated	बेआबरू
belated	विलम्बित
courage	साहस
consensus	आम राय
convene	बुलाना
oppose	विरोध करना
torn	नोचा हुआ
defend	रक्षा करना
feared	आशंका जताई
undermine	कमजोर
Percentiles	प्रतिशतक
mediocre	औसत दर्जे का
obstacle	बाधा
tossed	फेंक दिया
notion	धारणा
fickle	चंचल
spotlight	रोशनी
until	जब तक
arrive	पहुंचना
personality	व्यक्तित्व
applicant	आवेदक
invitation	निमंत्रण
complement	पूरक
ordinance	अध्यादेश
concentration	एकाग्रता
portrayal	निरूपण
realistic	यथार्थवादी
resistant	प्रतिरोधी
immediately	तुरंत
gain	लाभ
pimples	मुँहासे
leading	प्रमुख
pore	ताकना
clog	रोकना
scalp	खोपड़ी
flaky	परतदार
fed up	तंग आ गया
confession	पाप - स्वीकारोक्ति
Recur	पुनरावृत्ति होना
Reflux	भाटा
insult	अपमान
Awkward	अनाड़ी
cuddle	cuddle
alimony	रोटी - कपड़ा
epidural	दृढ़तानिका के ऊपर
irrational	तर्कहीन
scratch	खरोंच
regretting	पछता
tuck	टक
fart	पादना
virgin	कुंआरी
chasing	पीछा
swipe	ज़ोर से मारना
detention	निरोध
appreciate	सराहना
determine	निर्धारित
reiterate	दोहराना
periodically	समय - समय
intend	इरादा
unprecedented	अभूतपूर्व
intervention	हस्तक्षेप
groping	तलाशने
allegedly	कथित तौर पर
graft	कलम
struggle	संघर्ष
allegation	आरोप
acquise	प्राप्त
endorse	समर्थन करना
expose	बेनकाब
victim	शिकार
leap	छलांग
plash	डबरी
proprietary	मालिकाना
blow	झटका
lane	लेन
lame	लंगड़ा
psychopathic	मनोरोगी
simulating	अनुकरण
screw	स्क्रू
astray	गुमराह
ceasefire	युद्धविराम
violation	उल्लंघन
signification	अर्थ
delegation	प्रत्यायोजन
cooperation	सहयोग
thorny	कांटेदार
deficit	घाटा
inflation	मुद्रास्फीति
haunt	अड्डा
council	कौंसिल
stimulate	प्रोत्साहित करना
conjunction	संयोजन
unintended	अनायास
prevent	रोकना
specify	निर्दिष्ट
consistency	स्थिरता
concurrently	साथ - साथ
preliminary	प्रारंभिक
repository	कोष
Although	हालांकि
outlines	रूपरेखा
architecture	स्थापत्य
upcoming	आगामी
Release	रिलीज
constant	स्थिर
thorough	संपूर्ण
procedure	प्रक्रिया
consider	विचार करना
scurrility	गाली - गलौज
conceit	दंभ
indecency	अभद्रता
affectation	स्वांग
regret	खेद
amazing	अद्भुत
experience	अनुभव
prest	पुजारी
reveal	प्रकट
inappropriate	अनुचित
fumble	टटोलना
sack	बोरा
defender	रक्षक
ingredient	संघटक
swept	बह
realization	अहसास
ethic	नैतिक
testament	वसीयतनामा
remade	पुनर्निर्माण
franchise	मताधिकार
disgruntled	असंतुष्ट
whopping	whopping
trade	व्यापार
struck	मारा
soak	भिगोना
reward	इनाम
injury	चोट
pitch	पिच
raucous	फटा
clinch	कड़ी
sentiment	भाव
bearded	दढ़ियल
improbable	असंभव
fasten	जकड़ना
fond in	में शौकीन
intriguing	लुभावना
adulation	मनुहार
curious	जिज्ञासु
instead	बजाय
intrigue	साज़िश
mystic	रहस्यवादी
held	आयोजित
privilege	विशेषाधिकार
imagined	कल्पना
turban	पगडी
renowned	प्रसिद्ध
Soreness	व्यथा
address	पता
determination	दृढ़ संकल्प
conservation	संरक्षण
unfortunate	बदकिस्मत
empower	सशक्त बनाना
conclude	निष्कर्ष निकालना
Reformer	सुधारक
hails	निवासी
rousing	गर्मजोशी
massive	विशाल
convocation	दीक्षान्त समारोह
inaugurate	उद्घाटन करना
lay down	निर्धारित करना
compulsive	बाध्यकारी
momentum	गति
terrible	भयानक
conquer	जीतना
lasting	स्थायी
discriminatory	चुनाव का
apprehension	शंका
greed	लालच
grab	हथियाना
tier	स्तर
utter	बोलना
tremendous	जबरदस्त
transit	पारगमन
defeat	हार
letting	दे
aspect	पहलू
collaborate	सहयोग
precious	अनमोल
irritation	जलन
endurance	सहनशीलता
calibrate	जांचना
disengage	छुड़ाना
penetrate	घुसना
distraction	व्याकुलता
deceive	धोखा देना
composite	संयुक्त
deterrent	निवारक
perception	अनुभूति
miserable	दुखी
manifest	प्रकट
duplicity	कपट
stipulate	शर्त लगाना
deception	धोखा
steady	स्थिर
conscious	जागरूक
exhalation	साँस छोड़ना
inhalation	साँस लेना
substantial	पर्याप्त
empowerment	सशक्तिकरण
underestimate	बहुत मूल्यवान समझना
estimate	आकलन
raise	उठाना
happened	हुआ
crack	दरार
beyond	परे
either	भी
significance	महत्व
elaborate	विस्तृत
phenomena	घटना
constitute	का गठन
arrogant	अभिमानी
strategist	रणनीतिज्ञ
mince	क़ीमा
substantiate	सिद्ध करना
lick	चाटना
Empower	सशक्त
consequence	परिणाम
rebel	बागी
tolerance	सहिष्णुता
impose	थोपना
denied	वंचित
mob	भीड़
stampede	भगदड़
rumour	अफवाह
assembled	इकट्ठे
pilgrim	तीर्थयात्री
mercy	दया
eyelet	सुराख़
cues	संकेतों
sprint	पूरे वेग से दौड़ना
bleeding	खून बहना
stitch	टांका
stiffness	कठोरता
pace	गति
economical	किफायती
engage	लगाना
stride	छलाँग
drill	ड्रिल
collision	टक्कर
essentially	अनिवार्य रूप से
starving	भूख से मर
amongst	बीच में
slight	थोड़ा
endorsed	पृष्ठांकित
pollution	प्रदूषण
availed	लाभ उठाया
Descriptor	वर्णनकर्ता
Minimalistic	minimalistic
Glimpse	झलक
Conservative	रूढ़िवादी
Convenient	सुविधाजनक
Dissect	काटना
Intend	इरादा
Incarnation	अवतार
Nevertheless	फिर भी
finicky	नकचढ़ा
weird	अजीब
snapping	तड़क
grumpy	क्रोधी
daunting	चुनौतीपूर्ण
springtime	बहार
concrete	कंक्रीट
sneeze	छींक
owlet	उल्लू
squirrel	गिलहरी
motorable	मोटर योग्य
legend	किंवदंती
authenticity	प्रामाणिकता
vouch	साक्ष्य देना
abandoned	परित्यक्त
shelter	आश्रय
Contribution	योगदान
Imperfect	अपूर्ण
Joyous	सानन्द
Honored	सम्मानित
Delight	आनंद
Bribe	घूस
Beneficiary	लाभार्थी
Reimbursement	प्रतिपूर्ति
Contemporary	समकालीन
Journal	पत्रिका
treatise	निबंध
uttering	बोले
disgust	घृणा
sermons	उपदेश
beast	जानवर
recited	पाठ
begged	विनती
lash	जोर से मारना
negotiation	बातचीत
narration	कथा
sabotage	तोड़ - फोड़
topically	विषयानुसार
accountability	जवाबदेही
peel	छाल
foetus	भ्रूण
womb	कोख
discretion	विवेक
mindlessly	आंख मूंदकर
firmer	मजबूत
gradually	धीरे - धीरे
ligament	बंध
improve	में सुधार
barefoot	नंगे पैर
hesitate	संकोच
consuming	खपत
although	हालांकि
imply	मतलब
implying	जिसका अर्थ
material	सामग्री
Misunderstanding	गलतफहमी
Insane	पागल
compulsory	अनिवार्य
shivering	कंपकपाहट
relieve	को राहत देने
devotion	भक्ति
forgiveness	क्षमा
beg	भीख माँगना
crushed	कुचल
crumple	टूट जाना
aggravation	उत्तेजना
straight	सीधे
furious	उग्र
hectic	व्यस्त
sip	घूंट
petal	पत्ती
dipping	डुबकी
enhance	बढ़ाना
immunity	प्रतिरक्षा
combat	मुकाबला
substance	पदार्थ
patch	पैच
presence	उपस्थिति
feeble	कमजोर
bedridden	शय्याग्रस्त
dotage	साठियापा
bother	परेशानी
succeeded	सफल
steadfast	दृढ़
stricken	घायल
poverty	निर्धनता
worsening	बिगड़ती
worse	बदतर
starvation	अकाल
former	पूर्व
perspiration	पसीना
thermos	थरमस
poured	डाला
dawn	भोर
accompanied	के साथ
wintry	शीत ऋतु का
beside	बगल में
nutritious	पौष्टिक
hope	आशा
Grocery	किराना
consequences	परिणाम
appearance	उपस्थिति
roughly	लगभग
culture	संस्कृति
originate	उत्पन्न करना
ancient	प्राचीन
mural	भित्ति - चित्र
spectacular	शानदार
Melt	पिघलना
locomotion	हरकत
monster	राक्षस
drain	नाली
Commence	प्रारंभ
chopped	कटा हुआ
staple	प्रधान
smoothie	ठग
cinnamon	दालचीनी
yogurt	दही
guilty	दोषी
dessert	मिठाई
combine	गठबंधन
ample	पर्याप्त
Even though	यद्यपि
hang around	मंडलाना
amendment	संशोधन
Constituency	निर्वाचन - क्षेत्र
tenure	कार्यकाल
bury	दफनाना
pervade	पठैना
gloom	उदासी
strenuous	ज़ोरदार
cater	पूरा करने के
exert	खींचना
exertion	परिश्रम
propel	प्रेरित करना
battle	लड़ाई
praised	प्रशंसा की
imbue	गहरे रंग से रंगना
cling	चिपटना
explanation	स्पष्टीकरण
entrepreneur	उद्यमी
separate	अलग
trapped	फंसे
strike	हड़ताल
curate	ठीक
accurate	सही
Marionette	कठपुतली
Thorough	संपूर्ण
illustrate	समझाना
appropriate	उपयुक्त
jurisdictions	न्यायालय
jurisdiction	अधिकार - क्षेत्र
circumstance	परिस्थिति
circumstances	हालत
scenario	परिदृश्य
consume	उपभोग
abstraction	मतिहीनता
still	अब तक
lifting	उत्तोलक
expect	उम्मीद
expected	अपेक्षित
critical	आलोचनात्मक
misusing	दुरूपयोग
expensive	महंगा
adhered	पालन
comprehensive	व्यापक
ensure	सुनिश्चित करना
inadequate	अपर्याप्त
era	युग
woes	संकट
dominant	प्रमुख
mousetrap	चूहादानी
emergence	उभार
legitimate	वैध
dominance	प्रभुत्व
piece	टुकड़ा
threat	धमकी
opinion	राय
plenty	बहुत सारे
non routine	गैर दिनचर्या
take away	ले जाना
renewable	अक्षय
opposed	विरोधी
fossil	जीवाश्म
extent	सीमा
Instead	बजाय
skepticism	अविश्वास
prospect	संभावना
giant	विशाल
giants	दिग्गज
summarize	संक्षेप में प्रस्तुत करना
consumer	उपभोक्ता
excitement	उत्तेजना
proved	साबित
crowd	भीड़
recipient	प्राप्तकर्ता
tackled	घेरने की कोशिश
collaboration	सहयोग
speculation	सट्टा
levied	लगाया
pretend	नाटक
fictitious	काल्पनिक
generous	उदार
aspiration	आकांक्षा
gladly	ख़ुशी से
tenderly	नम्रता से
thoughts	विचारों
coincide	मेल खाता है
leisure	अवकाश
awaken	जगाना
rigid	कठोर
thought	विचार
advisability	औचित्य
utterances	बयान
confined	सीमित
hypothetical	काल्पनिक
volition	इच्छा
anxious	चिंतित
acquainted	परिचित
wicked	दुष्ट
mess	गड़बड़
worth	मूल्य
accent	उच्चारण
landed	उतरा
fictional	कल्पित
rake	जेली
deserve	लायक
probably	शायद
confronted	सामना
guts	हिम्मत
housekeeper	घरबारी
keeper	रक्षक
roar	गर्जन
gratifying	तृप्तिदायी
intimate	अन्तरंग
appeal	अपील
inspirational	प्रेरणादायक
heard	सुना
especially	विशेष रूप से
conveyed	जानकारी दी
predecessor	पूर्ववर्ती
irk	थकाना
ideology	विचारधारा
cornucopia	बकरी का सींग
itinerary	यात्रा कार्यक्रम
surveyed	सर्वेक्षण
smiling	मुस्कुरा
Citing	का हवाला देते हुए
concern	चिंता
certainly	निश्चित रूप से
qualified	योग्य
doubt	पर शक
phrases	वाक्यांश
albeit	यद्यपि
negotiations	वार्ता
persuade	मनाना
objections	आपत्ति
Jewish	यहूदी
opposes	का विरोध
influence	प्रभाव
endorsement	बेचान
opponent	प्रतिद्वंद्वी
minority	अल्पसंख्यक
criticize	आलोचना करना
liberalization	उदारीकरण
damnation	फटकार
pragmatic	धृष्ट
hotbed	क्यारी
insight	अन्तर्दृष्टि
potential	संभावित
retail	खुदरा
leverage	उत्तोलन
demonstrate	दिखाना
grocery stores	किराने की दुकान
grocery	किराना
attendees	उपस्थितगण
drew	आकर्षित किया
receptive	ग्रहणशील
however	तथापि
conversion	रूपांतरण
canyon	घाटी
increasingly	तेजी
reality	वास्तविकता
promotional	प्रचार
huge	विशाल
traction	कर्षण
salivating	मुँह में पानी
meanwhile	तब तक
Meanwhile	तब तक
ultimately	अंत में
ultimate	परम
strive	प्रयास करना
disruption	विघटन
competitive	प्रतियोगी
enormous	भारी
initially	शुरू में
foreseen	सोच
alleviate	कम करना
unmanageable	असहनीय
therefore	इसलिए
sheer	निरा
strategic	सामरिक
spectrum	स्पेक्ट्रम
efficient	कुशल
among	के बीच में
despite	के बावजूद
consideration	विचार
regardless	बेपरवाह
disruptive	हानिकारक
barometer	बैरोमीटर
adoption	दत्तक ग्रहण
widespread	बड़े पैमाने पर
augmented	संवर्धित
worn	पहना
Hug	आलिंगन
traject	मार्ग
trajectory	प्रक्षेपवक्र
aligned	गठबंधन
potentially	संभावित
gesture	इशारा
dictation	श्रुतलेख
judging	पहचानने
philosophically	दर्शनानुसार
drift	बहाव
unveiling	अनावरण
Notably	विशेषकर
seem	लग रहे हो
cozy	आरामदायक
meantime	तब तक
imply	मतलब है
endorsing	पुष्टि
sour	खट्टा
Inspiring	प्रेरणादायक
ingenious	सरल
awe	भय
praise	प्रशंसा
even	और भी
sick	बीमार
intensity	तीव्रता
grudge	असन्तोष
irrelevant	अप्रासंगिक
choke	गला घोंटना
chase	पीछा
indeed	वास्तव में
often	अक्सर
Curiosity	जिज्ञासा
advert	विज्ञापन
revered	श्रद्धेय
airing	वायु - सेवन
sake	खातिर
precise	यथार्थ
rely	भरोसा करना
relies	निर्भर करता है
Fortunately,	सौभाग्य से,
annoying	कष्टप्रद
riots	दंगों
voilent	घूंघट
convulse	ऐंठना
seeking	मांग
seek	की तलाश
polarizing	ध्रुवीकरण
polar	ध्रुवीय
relatively	अपेक्षाकृत
draw	खींचना
partial	आंशिक
distinguish	भेद करना
frizz	घुंघराले बाल
relevant	प्रासंगिक
infrastructure	बुनियादी ढांचे
Coverage	व्याप्ति
toward	की ओर
soul	आत्मा
mate	दोस्त
Destiny	भाग्य
passionate	आवेशपूर्ण
enigma	पहेली
ironically	विडम्बना से
routinely	नियमित तौर पर
dominate	पर हावी
integral	अभिन्न
stress	तनाव
pursue	पीछा करना
abundance	प्रचुरता
embrace	आलिंगन
enlightenment	प्रबोधन
manifestation	अभिव्यक्ति
shelves	अलमारियों
Sprinkle	छिड़क देना
a while	थोड़ी देर के
turpentine	तारपीन का तेल
griddle	रोटी पकाने का तवा
Soak	भिगोना
wilting	कारण कमजोर पड़ गया
invert	पलटना
molest	छेड़छाड़ करना
quote	उद्धरण
rags	लत्ता
deserves	के हकदार हैं
lead	नेतृत्व
decency	शालीनता
comment	टिप्पणी
newcomers	नए चेहरे
enthusiasm	उत्साह
accomplished	पूरा
obsession	ग्रस्तता
resemble	सदृश होना
stardom	प्रसिद्ध अभिनेत्रियाँ
acknowledge	स्वीकार करना
willing	तैयार
willingness	स्वेच्छा
prejudice	पूर्वाग्रह
bother	परेशान करना
further	आगे
relevance	प्रासंगिकता
bencher	उच्च श्रेणी का बैरिस्टर
evidence	सबूत
contrast	इसके विपरीत
fond	पृष्ठभूमि
insulate	पृथक करना
cherish	संजोना
mediocrity	सामान्यता
instinct	वृत्ति
pressure	दबाव
nostalgic	उदासीन
grew	बढ़ी
grew up	पले
Excerpts	कुछ अंशः
readiness	तत्परता
optimist	आशावादी
exemplify	उदाहरण देना
leveraging	लाभ
Strategic	सामरिक
humour	हास्य
versatile	बहुमुखी
express	व्यक्त
strengthen	को मजबूत बनाने के
strength	शक्ति
evolve	विकसित करना
obsess	सताना
energetic	शक्तिशाली
contours	आकृति
lively	रोचक
subtle	सूक्ष्म
impact	प्रभाव
first glance	पहली नज़र
glance	ग्लांस
innovation	नवीनता
overdo	थका मारना
tactile	स्पर्शनीय
pleasing	मनभावन
delicate	नाजुक
mimic	की नकल
variation	परिवर्तन
mildly	हल्का
mild	नरम
appealing	अपील
diverse	विविध
glue	गोंद
elegant	सुरुचिपूर्ण
fascinated	मोहित
encourage	प्रोत्साहित करना
allegiance	निष्ठा
excessively	अत्यंत
tightrope	संभलकर
bias	पूर्वाग्रह
bound	सीमित
alienate	पराया करना
vital	महत्वपूर्ण
incredibly	अविश्वसनीय
sought	की मांग की
summed	अभिव्यक्त किया
penalize	दंडित करना
opposing	विरोधी
sensation	सनसनी
curiosity	जिज्ञासा
sincere	ईमानदार
temperament	स्वभाव
lying	लेटा हुआ
adorable	आराध्य
trapped	फंस
rescue	बचाव
Sneaky	डरपोक
smuggle	तस्करी करना
Gregarious	यूथचारी
Mount	माउंट
Mounted	घुड़सवार
passed out	मर जाना
noble	महान
suspended	निलंबित
getaway	भगदड़
serve	सेवा करना
dense	सघन
wilderness	जंगल
minimal	न्यूनतम
stunning	तेजस्वी
vibe	खिंचाव
drainage tube	जल निकासी नली
concrete	ठोस
accents	लहजे
playful	चंचल
pops	फ़ैशनवाला
sleek	चिकना
venture	वेंचर
fairytale	कहानी
Arctic	उत्तरी ध्रुवी
beat	हराना
ruin	नाश
foray	धावा
pioneer	अग्रणी
foliage	पत्ते
hike	वृद्धि
grandeur	वैभव
glimpse	झलक
renovations	जीर्णोद्धार
contemporary	समकालीन
CRUISES	यात्राएँ
Delightful	रमणीय
facade	मुखौटा
headed	अध्यक्षता में
Dorm	छात्रावास
amble	टहलना
laid	रखी
timber	लकड़ी
lid	ढक्कन
dresser	ड्रेसर
reckon	मानना
caution	सावधानी
ramble	विचरना
porch	पोर्च
unto	पर्यत
charity	परोपकार
