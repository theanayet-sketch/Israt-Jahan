/* Skill detail content. Edit text here. Page is opened as skill.html?s=<slug> */
const SKILLS = {
 'digital-marketing':{t:'Digital Marketing',i:'fa-bullhorn',tag:'Sharing ideas online and growing an audience with purpose.',
  intro:['Digital marketing is the practice of promoting ideas, content and brands through online channels such as social media, video platforms and search. It combines creativity with planning, so the right message reaches the right people.','Through hands-on work in content creation and professional learning, Israt has developed practical digital marketing skills she continues to build on.'],
  what:['Planning content strategies around a clear audience and goal','Creating consistent, recognisable visuals and messaging','Using social media platforms to share and grow reach','Understanding what engages people and improving over time'],
  how:['Helps build engaging content strategies and grow online presence','Applies practical digital marketing skills alongside Canva and CapCut','Supported by certificates earned in Digital Skills'],
  why:'Good communication needs the right channel. Digital marketing lets educational and motivational messages, including topics from science and nature, reach a wider audience.'},
 'canva-design':{t:'Canva Design',i:'fa-palette',tag:'Turning ideas into clean, eye-catching visuals.',
  intro:['Canva is a popular design platform for creating posters, social media graphics, thumbnails and presentations. Good design makes information clearer and easier to remember.','Israt uses Canva regularly as part of her work as a content creator.'],
  what:['Layout, colour and typography choices that suit the message','Designing posters and social media graphics','Creating thumbnails that represent a video clearly','Keeping a consistent visual style across all content'],
  how:['Designs posters, reels and thumbnails using Canva and CapCut','Uses design to support educational and motivational content','Developed practical Canva skills through ongoing learning'],
  why:'Strong visuals help an audience notice, understand and remember a message, which is especially useful when explaining ideas in a simple way.'},
 'english-communication':{t:'English Communication',i:'fa-comments',tag:'Expressing ideas clearly, confidently and respectfully.',
  intro:['English communication covers speaking, writing, listening and presenting. It helps share ideas with a wider community and opens doors in study, research and professional life.','Israt is committed to improving her communication through regular practice and training.'],
  what:['Speaking clearly and confidently','Writing in a clear, organised way','Active listening and teamwork','Presenting and explaining ideas to different audiences'],
  how:['Takes part in communication practice sessions and workshops with NUSDF Bangladesh','Earned multiple certificates in Communication','Speaks Bangla (native), English and Hindi'],
  why:'Research and knowledge are only useful when they can be shared. Clear communication connects learning with people and community.'},
 'capcut-video-editing':{t:'CapCut Video Editing',i:'fa-film',tag:'Shaping short videos and reels that tell a story.',
  intro:['CapCut is a video editing tool widely used to make reels and short-form videos. Editing involves trimming, sequencing, adding text, music and effects to turn raw clips into a clear story.','Israt uses CapCut to produce content for social media platforms.'],
  what:['Cutting and arranging clips for good flow','Adding captions, text and transitions','Choosing music and pacing that fit the topic','Exporting videos suited to social platforms'],
  how:['Designs reels and thumbnails using Canva and CapCut','Creates educational and motivational video content','Earned certificates in Video Editing'],
  why:'Short video is one of the most effective ways to share ideas today. Strong editing keeps viewers interested and helps the message come across.'},
 'content-creation':{t:'Content Creation',i:'fa-camera',tag:'Creating educational and motivational content with purpose.',
  intro:['Content creation is the process of planning, producing and sharing material such as posts, reels, posters and videos. It needs ideas, consistency and an understanding of the audience.','Since January 2023, Israt has worked as a self-employed content creator.'],
  what:['Generating ideas and planning content','Writing, designing and editing material','Publishing consistently on social platforms','Learning from audience response to improve'],
  how:['Creates educational and motivational content for social media platforms','Designs posters, reels and thumbnails using Canva and CapCut','Helps build engaging content strategies and grow online presence'],
  why:'Content creation turns knowledge into something people can enjoy and learn from, and builds a personal voice and online presence.'},
 'research-analysis':{t:'Research Analysis',i:'fa-microscope',tag:'Asking questions, studying evidence and drawing clear conclusions.',
  intro:['Research analysis means gathering information, examining it carefully and drawing conclusions that are supported by evidence. It is central to science, especially in the study of animals and ecosystems.','As a Zoology student, Israt has a strong interest in research.'],
  what:['Finding reliable sources of information','Observing, comparing and organising findings','Thinking critically about evidence','Presenting results clearly'],
  how:['Studies BSc in Zoology (Hons) at Dhaka Mohanagar Mohila College, National University, Bangladesh','Builds analytical habits through continuous learning','Combines research interest with communication skills'],
  why:'Understanding wildlife and nature depends on careful research. Good analysis supports conservation and better decisions for the future.'},
 'problem-solving':{t:'Problem Solving',i:'fa-lightbulb',tag:'Finding practical, creative ways forward.',
  intro:['Problem solving is the ability to understand a challenge, consider options and choose a workable solution. It involves patience, creativity and clear thinking.','It supports Israt in her studies, creative work and teamwork.'],
  what:['Defining the problem clearly','Exploring different ideas and approaches','Making decisions and adjusting when needed','Working with others to reach solutions'],
  how:['Collaborates with team members in various projects and events','Plans content strategies to improve engagement','Keeps learning and developing personally'],
  why:'Every field, from research to community projects, meets challenges. Strong problem solving turns obstacles into learning.'},
 'teaching':{t:'Teaching',i:'fa-chalkboard-user',tag:'Sharing knowledge in a simple and helpful way.',
  intro:['Teaching is about explaining ideas clearly so others can understand and grow. It needs patience, communication and care for the learner.','Teaching is one of Israt\'s skills and fits naturally with her passion for learning and community development.'],
  what:['Breaking complex ideas into simple steps','Explaining with examples and visuals','Encouraging questions and curiosity','Being patient and supportive'],
  how:['Creates educational content for social media platforms','Takes part in youth development and social impact activities','Learns continuously, which strengthens how she explains things'],
  why:'Sharing knowledge helps others grow and supports youth empowerment, a goal Israt cares about.'}
};
const key = new URLSearchParams(location.search).get('s');
const k = SKILLS[key] ? key : 'digital-marketing';
const s = SKILLS[k];
const $ = id => document.getElementById(id);
document.title = s.t + ' | Israt Zahan';
$('sk-icon').className = 'fa-solid ' + s.i;
$('sk-title').textContent = s.t;
$('sk-tag').textContent = s.tag;
$('sk-intro').innerHTML = s.intro.map(p => `<p style="margin-bottom:8px">${p}</p>`).join('');
$('sk-what').innerHTML = s.what.map(x => `<li>${x}</li>`).join('');
$('sk-how').innerHTML = s.how.map(x => `<li>${x}</li>`).join('');
$('sk-why').textContent = s.why;
$('sk-more').innerHTML = Object.entries(SKILLS).map(([id,v]) => `<a href="skill.html?s=${id}" class="${id===k?'cur':''}">${v.t}</a>`).join('');
$('yr').textContent = new Date().getFullYear();
window.addEventListener('scroll', () => $('nav').classList.toggle('scrolled', scrollY > 10), {passive:true});
