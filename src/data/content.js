const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const part1Data = [
  {
    id: '1a',
    label: '1A',
    shortQ: 'Where should a beginner support engineer start with AI?',
    fullQ: 'I am a beginner here and started learning AI a few days ago. I am a support engineer at AWS. I don\'t know where to start and am looking for help.',
    videoSrc: publicAsset('/media/1A.mp4'),
    discord: {
      channelName: 'nextwork-general',
      username: 'Suhast @ NextWork',
      avatarBg: '#5865F2',
      avatarLetter: 'S',
      timestamp: 'Today at 10:24 AM',
      content: `Heyy, welcome to the fam! We’re excited to host you and help you learn, Michael!!

Here’s the order that has helped most of us here - you can start with the AI Fundamentals roadmap. We have 4 projects where you’ll be able to run your first AI model locally with Ollama, ship a RAG-powered API with FastAPI, deploy something real to production. It takes about an hour each. Then you can jump to AI/ML Engineer. This is the big one with 16 projects covering ML, chatbots, and production AI systems. Your support engineering background will actually map really well here.

After that you've got two great forks: either AI Workspace for Cursor and Claude Code, or Generative AI Developer if you want to bring AI back into AWS where your day job lives.

Next steps - try project one tonight, see what breaks. Then do it again tomorrow. Waiting to see your project link in #celebrations 🚀`,
    },
    instagram: {
      username: 'nextwork',
      timestamp: '2h',
      content: `Welcome in! glad you found us early 🙌

The learning roadmap path users here would recommend: AI Fundamentals - then AI/ML Engineer - then Generative AI Developer. Everything is hands on, all build > theory.
Try one project tonight, give it 30 mins, see what breaks. then do it again tomorrow. that's how everyone here learned. We’re here if anything goes south. 

Excited to see your progress, Michael 🚀`,
    },
    email: {
      body: `Heyy Michael,

Glad you found us early in your AI journey. The not-knowing-where-to-start feeling is the hardest part, and you're already past it just by asking.

Here's the path that's worked for most learners:

AI Fundamentals - anyone can start here regardless of background. Run your first AI model locally with Ollama, build a RAG-powered API with FastAPI, ship an AI app to production. Four projects, about an hour each. This will help you lay your foundation.

AI/ML Engineer - 16 projects across ML, chatbots, and production AI systems. Your support engineering background will also help you out here.

After that, two forks: AI Workspace for Cursor and Claude Code (the daily tools), or Generative AI Developer to bring AI back into the AWS world your day job already lives in.

All free, all on learn.nextwork.org.

But the real unlock is what you do tonight. Open project one. Give it 30 minutes. See what breaks. Then do it again tomorrow.

Maya from our team puts it best: simple steps, make it a habit, the magic is in the consistency. Pick a project this week and just start. Then do it again. Each time with less hand-holding 😁

When you ship project one, send it our way. We'll be the first to celebrate it.

Welcome in,
Suhast (and the NextWork team)`,
    },
    followUp: `Follow-up - T+7 days

DM: "heyy! saw you finished project one (and two ??). figured you'd love this - there's a NextWork meetup happening in San Francisco on 5/14. Would love to see you there if you're around."`,
  },
  {
    id: '1b',
    label: '1B',
    shortQ: 'LangChain resources for a junior software engineer?',
    fullQ: 'I will soon get the chance to work on LangChain. I don\'t have much experience with AI/LLMs other than basic prompting.',
    videoSrc: publicAsset('/media/1B.mp4'),
    discord: {
      channelName: 'nextwork-general',
      username: 'Suhast @ NextWork',
      avatarBg: '#5865F2',
      avatarLetter: 'S',
      timestamp: 'Today at 2:11 PM',
      content: `Hey Sierra, congrats on the LangChain opportunity, that's a great learning experience.

Being transparent here, there’s no dedicated LangChain project on NextWork yet. But the underlying concepts (RAG, embeddings, vector stores, agents) - we do have all of that with different tools.

Here's the path you can run before you start working with LangChain:

Build a RAG API with FastAPI - This will help you teach embeddings, vector DBs, retrieval. After this, you’ll be able to grasp the LangChain's RAG docs.

Multi-Agent System with CrewAI - Same agent model LangChain uses with LangGraph.

Then of course, I have logged the LangChain project request - it's a good one. Expect to see it on the roadmap soon.`,
    },
    instagram: {
      username: 'nextwork',
      timestamp: '1h',
      content: `Heyy, congrats on the LangChain opportunity 🙌

Yes, we don’t have a dedicated LangChain project on NextWork yet, but the underlying concepts (RAG, embeddings, vector stores, agents) we already teach with FastAPI and CrewAI.

The path: 1) FastAPI RAG project 2) CrewAI multi-agent project 
Then you can rebuild the RAG one in LangChain with much ease.

I’ve logged the LangChain ask - expect to see that soon 👀`,
    },
    email: {
      body: `Hey Sierra,

Congrats on the LangChain opportunity at work. That's a great learning experience.

Honest answer first: we don't have a dedicated LangChain project on NextWork yet. But the underlying concepts (RAG, embeddings, vector stores, agents) we already teach through different frameworks. Once you've built them once, LangChain is mostly syntax.

Here's the pathway you can follow:

Build a RAG API with FastAPI (45 mins) - Python, FastAPI, Ollama, ChromaDB. Teaches embeddings, vector DBs, retrieval, augmentation, generation. This is the foundation LangChain assumes you have.

Multi-Agent System with CrewAI (45 mins) - three agents collaborating to research, draft, and polish. Same orchestration model LangChain uses with LangGraph.

After you’re done, you can rebuild your RAG project in LangChain this weekend. If you run into any issues, please ping me and I’ll be happy to jump on a call.

Meanwhile, I'm logging the LangChain project request - it's a great one, please expect to see it on the roadmap soon.

When you ship the FastAPI project, send it over. I'd love to see what you built.

Cheering you on, 
Suhast (and the NextWork team)`,
    },
    followUp: `T+20 days - Loop back:

"Heyy Sierra, heads up we just kicked off planning for a dedicated LangChain project on the platform. Would you be open to being one of our beta testers when it drops? Your input would actually shape what we build."`,
  },
  {
    id: '1c',
    label: '1C',
    shortQ: 'Is it possible to add this project to my GitHub?',
    fullQ: 'Is it possible to add this project to my GitHub?',
    videoSrc: publicAsset('/media/1C.mp4'),
    discord: {
      channelName: 'project-help',
      username: 'Suhast @ NextWork',
      avatarBg: '#5865F2',
      avatarLetter: 'S',
      timestamp: 'Today at 3:45 PM',
      content: `YESSS SARAH, absolutely!!! your S3 project deserves a place on your GitHub.

If you've never set up a GitHub repo before, here's the move: do our Connect a GitHub Repo with AWS project. It's 45 mins, and it walks you through creating your first repo, generating a personal access token, and pushing your code from scratch. You’ll never struggle with GitHub problems again after that. 

Once that's done, push your S3 project to its own repo. Add screenshots of your bucket policy, your static website hosting tab, and your live URL in the README.

That's what AWS portfolio repos look like.

By the weekend you'll have two portfolio projects shipped. Drop both links in #celebrations`,
    },
    instagram: {
      username: 'nextwork',
      timestamp: '45m',
      content: `YES please do!! 🚀 if you've never used GitHub before, we actually have a project called Connect a GitHub Repo with AWS that teaches you the whole flow in 45 mins. do that one, then push your S3 project. two portfolio pieces by the weekend 💪`,
    },
    email: {
      body: `Heyy Sarah,

Yess, absolutely. You can add the project on GitHub for sure.

Quick question that I'm guessing might be in the back of your mind - have you used GitHub before? If not, that's totally fine, and we actually have a project that teaches you the whole flow.

Step 1: Connect a GitHub Repo with AWS - this is one of our DevOps Day projects, takes about 45 minutes. It walks you through creating your first repo, generating a personal access token, and pushing code to GitHub from scratch. No prior Git experience needed.

Step 2: Push your S3 project to a new repo. Once you've got the flow down, your S3 project is the perfect candidate. You can add some screenshots, a live URL, "what I built and why" section and have your fair share of fun with that.

By the weekend, you'll have shipped two projects. If you run into any issues, please ping me and I’ll be happy to jump on a call.


Cheering you on, 
Suhast (and the NextWork team)`,
    },
    followUp: `T + 10 days -

Share the repo on NextWork's Instagram/LinkedIn: 
"Sarah went from 'can I put this on GitHub?' to a fully documented S3 project repo in a week. This is what learning by building looks like and that’s how we do it here!!"

ADD LINK`,
  },
  {
    id: '1d',
    label: '1D',
    shortQ: 'Will AI displace solution architects within 3 years?',
    fullQ: 'I don\'t want to waste time. Is striving for this position feasible?',
    videoSrc: publicAsset('/media/1D.mp4'),
    discord: {
      channelName: 'career-advice',
      username: 'Suhast @ NextWork',
      avatarBg: '#5865F2',
      avatarLetter: 'S',
      timestamp: 'Today at 11:02 AM',
      content: `Heyy Max, really appreciate you asking this. It's the question more people are thinking than saying out loud.

Honest answer here: no, AI won't displace the role in 3 years. But the SAs who thrive will be the ones who learned to build with AI, not the ones who avoided it.

Great news here is the video’s roadmap already works for this. Networking, security, system design, none of that goes away in an AI world. It gets more valuable. Just add one AI project a month from AI Fundamentals alongside the SA path.

We're rooting for you on this. Pick a project, and we’ll be here to help you 🚀`,
    },
    instagram: {
      username: 'nextwork',
      timestamp: '3h',
      content: `great question, and the honest answer is don't worry, SAs aren't going away but SAs who avoid AI are 🙌

We’ve got a SA roadmap + 1 AI project a month. in 6 months you're not "an SA worried about AI." you're an SA who builds with AI. we've got you on this 💪`,
    },
    email: {
      body: `Heyy Max ,

Really glad you asked this. It's the question a lot of people are thinking but not saying out loud.

To be frank here, NO, AI won't displace Solutions Architects in 3 years. But the role will look different. The SAs who thrive will be the ones who learned to build with AI, not the ones who avoided it.

The good news is that we got a roadmap that is already AI-proof. Networking, security, storage, system design, none of that goes away. It gets more valuable.

Here's the small adjustment: follow Maximus’s SA roadmap, AND do one AI project a month from AI Fundamentals. JUST ONE!

In six months you're not "an SA worried about AI." You're an SA who builds with AI. That role isn't going anywhere.

As Maximus said: ‘Show up every day, you're ahead of 99%’

We've got you on this. 

Cheering you on, 
Suhast (and the NextWork team)`,
    },
    followUp: '',
  },
  {
    id: '1e',
    label: '1E',
    shortQ: 'Is there a Windows tutorial?',
    fullQ: 'is there windows tutorial?',
    videoSrc: publicAsset('/media/1E.mp4'),
    discord: {
      channelName: 'project-help',
      username: 'Suhast @ NextWork',
      avatarBg: '#5865F2',
      avatarLetter: 'S',
      timestamp: 'Today at 4:17 PM',
      content: `Heyy Lee, great question! 🙌 

Yes, the video is on Mac, but we got a full written project guide on our website that has both Mac AND Windows steps side by side. Ollama runs great on Windows.

If you hit any snags during install (connection refused is a common one), the Ask AI button right inside the project is the fastest path. It knows the project and your steps, so it can troubleshoot Windows-specific issues in real-time.

If you'd rather chat with a human, drop a screenshot in the project channel and someone on the team will jump in. GO WINDOWS🚀`,
    },
    instagram: {
      username: 'nextwork',
      timestamp: '30m',
      content: `great question, Lee! 🙌 

We got our full project guide that has both mac AND windows steps: learn.nextwork.org/projects/ai-ollama-setup

If you hit any snags on the way (as we all do), the Ask AI button inside the project is your fastest help (or drop into our discord). we've got you 🚀`,
    },
    email: {
      body: `Heyy Lee,

Great catch on this! We walked through the install on Mac in the video, but the full written project guide on our site has both Mac AND Windows steps side by side: https://learn.nextwork.org/projects/ai-ollama-setup . The install is usually about 5 minutes.

Two backups if you hit a snag ("connection refused" is a common one, install hiccups happen to everyone):

The "Ask AI" button right inside the project. It knows the project and your exact step, so it can troubleshoot Windows-specific issues in real-time.

Our Discord, where someone on the team will jump in within 5 minutes if you drop a screenshot.

When you've got your first local AI model running, drop a screenshot. We'd love to see your "what is the capital of France" moment work on Windows 🚀

Cheering you on,
Suhast (and the NextWork team)`,
    },
    followUp: `T + 10 min

pin a comment with the link to the written guide so every future Windows viewer sees it immediately. This is "fix the system, not the ticket" and it's worth flagging in Part 5 as a thing we'd build into the operating rhythm.`,
  },
  {
    id: '1f',
    label: '1F',
    shortQ: 'FastAPI pod cannot connect to local Ollama service',
    fullQ: 'FastAPI in k8s pod not able to connect to local ollama service.',
    videoSrc: publicAsset('/media/1F.mp4'),
    discord: {
      channelName: 'project-help',
      username: 'Suhast @ NextWork',
      avatarBg: '#5865F2',
      avatarLetter: 'S',
      timestamp: 'Today at 5:33 PM',
      content: `Heyy Ken, k8s networking errors are the worst kind of stuck but we got you.

What's happening: inside a pod, localhost means the pod itself, not your machine where Ollama is running. Natasha actually flags this exact issue at the around 1 hr 20 mins into the project video.

The fix is in your deployment.yaml, set the OLLAMA_HOST env var:

yaml
env:
- name: OLLAMA_HOST
value: "http://host.minikube.internal:11434"

(Use host.docker.internal if you're on Linux.) 

Also make sure Ollama is listening on 0.0.0.0 

You can easily start it with OLLAMA_HOST=0.0.0.0 ollama serve.

Then kubectl apply -f deployment.yaml and you should be good. If anything else gets weird, the Ask AI button inside the project knows your exact step. If you still run into anything, our discord community is faster than the NextWork team. We've got you 🚀`,
    },
    instagram: {
      username: 'nextwork',
      timestamp: '20m',
      content: `k8s networking is the worst kind of stuck, you're so close though 🙌

inside a pod, localhost = the pod itself, not your machine. fix is in deployment.yaml: set OLLAMA_HOST to http://host.minikube.internal:11434 (mac/win), then kubectl apply -f deployment.yaml. also make sure ollama is on 0.0.0.0. you got this 💪`,
    },
    email: {
      body: `Heyy Ken, K8s networking errors are the worst kind of stuck, glad you reached out.

What's happening: inside a pod, localhost means the pod itself, not your machine where Ollama is running. The fix is in your deployment.yaml, set the OLLAMA_HOST env variable:

yaml
env:
- name: OLLAMA_HOST
value: "http://host.minikube.internal:11434"

(Use host.docker.internal if you're on Linux.) Also make sure Ollama is listening on 0.0.0.0 by starting it with OLLAMA_HOST=0.0.0.0 ollama serve.

Then kubectl apply -f deployment.yaml and you should be good.

If anything else gets weird, two backups:
The Ask AI button inside the project knows your exact step
Our Discord, drop a screenshot and someone on the team will jump in

When the curl returns the working response, send the screenshot. That's the win 🚀

Cheering you on,
Suhast (and the NextWork team)`,
    },
    followUp: '',
  },
]

export const part2Data = [
  { id: '2a-short', title: 'Build Your First AI App in 60 Seconds', type: 'Short', aspect: '9/16', duration: '1:46', src: publicAsset('/media/2A-short.mp4'), poster: null, challenge: '2A' },
  { id: '2a-long', title: 'Build a RAG-Powered AI Project on NextWork', type: 'YouTube', aspect: '16/9', duration: '3:30', src: publicAsset('/media/2A-long.mp4'), poster: null, challenge: '2A' },
  { id: '2b-short', title: 'What is RAG? Explained in 45 Seconds', type: 'Short', aspect: '9/16', duration: '0:58', src: publicAsset('/media/2B-short.mp4'), poster: null, challenge: '2B' },
  { id: '2b-long', title: 'RAG Explained: From Zero to Production', type: 'YouTube', aspect: '16/9', duration: '3:04', src: publicAsset('/media/2B-long.mp4'), poster: null, challenge: '2B' },
  { id: '2c-viral', title: 'POV: You Just Ran Your First AI Model Locally', type: 'Short', aspect: '9/16', duration: '2:00', src: publicAsset('/media/2C.mp4'), poster: null, challenge: '2C' },
]

export const part3LinkedIn = [
  {
    id: 'derrick',
    name: 'Derrick',
    postSummary: 'Completed a full ALZ deploy with 10 management groups.',
    avatarBg: '#D8D1C2',
    avatarLetter: 'D',
    yourComment: `Derrick, watching you go from testing the Project Generator on the weekend to shipping a full ALZ deploy with 10 management groups was one of the best things to happen at HQ this month 🙌

This is exactly why we built the in-person space. Anyone reading this who's curious about coming to HQ: Derrick's weekend is what it can look like.

So proud. Keep going 🚀`,
  },
  {
    id: 'james',
    name: 'James',
    postSummary: 'Documented the full build so the next learner has a reference.',
    avatarBg: '#D8D1C2',
    avatarLetter: 'J',
    yourComment: `We’re grateful that you documented the full build, James, because anyone who tries this project next has a real reference to follow 🙌. We’ll send them your way!!

The "AI agents aren't a next big thing anymore" opening is so true that we'd hire you to write our LinkedIn captions, just saying 👀

So proud of you. Keep going 🚀`,
  },
  {
    id: 'sheetal',
    name: 'Sheetal',
    postSummary: 'Built a pipeline and simulated a CPU spike to test it.',
    avatarBg: '#D8D1C2',
    avatarLetter: 'S',
    yourComment: `Sheetal, you didn't just build the pipeline, you simulated a CPU spike to watch it fire. That's the move that separates "I followed a tutorial" from "I'd hire this person tomorrow." 🙌

So happy to have you in the NextWork family. Keep building 🚀`,
  },
  {
    id: 'jhonny',
    name: 'Jhonny',
    postSummary: 'Third NextWork build with a multi-user extension.',
    avatarBg: '#D8D1C2',
    avatarLetter: 'J',
    yourComment: `Jhonny, this is your third NextWork build and we are SOO here for it. The multi-user extension with metadata filtering is the part that takes this from "I followed a tutorial" to "I'd ship this at work" 🙌

You've been shipping consistently and we want you to know we see it. Keep going🚀`,
  },
]

export const part3NextSteps = {
  title: 'The Playbook: Make Sure No Learner Post Gets Ignored',
  intro: 'Love from peers > love from the company. The team\'s job isn\'t to be the love. The team\'s job is to route it from learners to learners AND fast.',
  strategies: [
    {
      icon: '01',
      title: 'The peer-to-peer engine',
      desc: 'The #share-your-work channel becomes the heart of the system. If you drop your post here, you also drop love on at least 3 other posts in this channel.',
    },
    {
      icon: '02',
      title: 'The activation layer',
      desc: 'The "Builder of the Month" spotlight and merch as a thank-you note for people who show up most consistently for other learners.',
    },
    {
      icon: '03',
      title: 'Something the team can deliver',
      desc: '0-engagement rescue, serial shipper acknowledgments, and pinned learner replies from the official NextWork LinkedIn.',
    },
    {
      icon: '04',
      title: 'The wow moment beyond LinkedIn',
      desc: 'A voice note from someone who has done the learner\'s job, a portfolio audit after 3+ projects, and a "Built with NextWork" yearbook.',
    },
  ],
  wowMoment: {
    title: 'The learner IS the marketing',
    desc: 'When a learner feels seen by peers, the team, and someone further ahead in their path, the project stops being a post and becomes a memory.',
  },
}

export const part4Video = {
  title: 'The 11-Star NextWork First 10 Interactions',
  type: 'Video',
  aspect: '16/9',
  duration: '8:14',
  src: publicAsset('/media/4.mp4'),
  poster: null,
}

export const part5Data = {
  keeping: [
    { stat: '240K', label: 'Vibe coder vs Senior Engineer', note: 'Proven Maximus format' },
    { stat: '167K', label: 'ML Engineer vs AI Engineer', note: 'Career anxiety wins' },
    { stat: '80.9K', label: 'RAG in 60sec', note: 'Simple concept, fast payoff' },
  ],
  keepDoing: [
    { title: 'Maximus on camera, one concept, 60 seconds', why: 'This is the thing. The format is proven and I wouldn\'t change it.' },
    { title: 'The System Design Interview series', why: 'It works because it hits career anxiety and real education at the same time. The series format makes people binge.' },
    { title: 'Career development hooks over tutorial hooks', why: 'People don\'t wake up wanting to learn Docker. They wake up wanting to not feel behind. Career hooks win every single time by 3-5x.' },
    { title: 'Cross-posting and daily cadence', why: 'Don\'t slow down.' },
  ],
  improve: [
    { area: 'All Maximus', issue: 'He is incredible on camera but one face can\'t carry the jump from 200K to 1M forever.', fix: 'Add learner stories: real people talking about what they built and what happened after.' },
    { area: 'YouTube long-form', issue: 'Project demos get 100-500 views. Two hour walkthroughs work as support material, not chosen entertainment.', fix: 'Make 15-20 minute learner panels, interviews, and Q&As, then cut them into 5-8 short clips.' },
    { area: 'LinkedIn', issue: '181K on Instagram says the audience is older and career-focused. LinkedIn should be getting way more attention.', fix: 'Post daily learner wins, career stories, and what the team is building.' },
    { area: 'Start path', issue: 'Video to profile to bio link to homepage to picking a project is too many steps.', fix: 'Every video names one specific project and the bio link goes directly to that project page.' },
    { area: 'City events', issue: 'City events are free content that nobody is capturing.', fix: 'Every meetup produces 5-10 short clips with simple prompts like "what did you build today?"' },
  ],
  contentSystem: {
    formats: ['Concept shorts, 4-5x per week', 'Learner stories, 2-3x per week', 'Community moments, 1-2x per week', 'Long-form conversations, 1x per week'],
    cadence: 'Roughly 10-12 short-form pieces and 1 long-form per week. Doable for a small team because learner stories and event moments are mostly learner-generated or event-captured.',
    metrics: ['Weekly: views by type, engagement rate, DMs, intent comments, learner story submissions', 'Monthly: signups with UTM tracking, projects started within 7 days, YouTube watch time, follower growth, learner posts tagged #NextWork'],
    review: 'Every Monday: 30 min standup. What performed best and why. What flopped and why. What are we testing this week. One test per week, ship it, review next Monday, keep going.',
  },
  selfAssessment: {
    strong: ['It didn\'t seem like we were promoting something from the get go.', 'Using relatable and trendy topics to catch early attention of the user.'],
    improve: ['Dig deep into the concepts as the current NextWork socials already does.'],
    nextTest: 'I\'d want to test more hooks, vox-pop content pieces.',
  },
}

export const part6Data = {
  timeline: [
    { date: 'Start', milestone: 'Start with 5 cities', desc: 'Use highest user concentration or default to Seattle, SF, NYC, LA, Chicago. Learn from those first 5 events and build the playbook from real experience.' },
    { date: 'Pilot', milestone: 'College chapters and community meetups', desc: 'College chapters are 10-15 groups. The other 35-40 are community meetups led by professionals from the existing user base.' },
    { date: 'Scale', milestone: '50 groups, 2 events each', desc: '50 groups, 2 events each in 6 months = 100. If the first event is genuinely warm, the second one fills itself.' },
    { date: 'Global', milestone: 'Grow beyond the US', desc: 'Philippines and Nigeria are proven. India is probably massive. After that, follow the data.' },
  ],
  howToGrow: [
    { icon: '01', title: 'Find hosts from existing learners', desc: 'Circulate a form: "Want to lead a NextWork group in your city?" Run fit checks. Look for warmth and initiative, not just project count.' },
    { icon: '02', title: 'Make the playbook simple', desc: 'Simple enough that someone who has never organized an event can pick it up and host something good.' },
    { icon: '03', title: 'Use sponsorships well', desc: 'AWS, Anthropic, maybe Google Cloud. The pitch: your future power users are in this room learning your tools.' },
    { icon: '04', title: 'Turn every event into content', desc: 'Every event should produce 5-10 short clips. Then any event can become content that fuels more events and feeds the 200K followers.' },
  ],
  idealJourney: [
    { step: 'Before', detail: 'Ravi sees a story from a NextWork learner, checks Discord, finds the event, and signs up. Nervous because he doesn\'t know anyone.' },
    { step: 'Walking in', detail: 'The leader is at the door. "Hey, are you Ravi? Glad you\'re here." Name badges have the project you last completed on them.' },
    { step: 'During', detail: 'Minimal presentations. Maybe one, 10 min max. The rest is building together, helping each other, pairing up.' },
    { step: 'Leaving', detail: 'The leader says goodbye by name. A short feedback form goes out within an hour. The last question asks if they want to host the next one.' },
    { step: 'After', detail: 'Thank you note, photos, what people built, next event date, and real follow-up if Ravi wrote down a problem he was stuck on.' },
    { step: 'What brings him back', detail: 'Not the content. The people. Someone knew his name at the door, helped when he got stuck, and meant it when they said see you next time.' },
  ],
}
