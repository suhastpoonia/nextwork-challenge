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
"Sarah went from 'can I put this on GitHub?' to a fully documented S3 project repo in a week. This is what learning by building looks like and that’s how we do it here!!"`,
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

Pin a comment with the link to the written guide so every future Windows viewer sees it immediately.`,
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

Then kubectl apply -f deployment.yaml and you should be good. If anything else gets weird, the Ask AI button inside the project knows your exact step. If you still run into anything, this community is faster than the NextWork team. We've got you 🚀`,
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
  { id: '2a-short', label: '2A - Short Form', title: 'What is RAG? Explained in 45 Seconds', type: 'Short', aspect: '9/16', duration: '0:58', src: publicAsset('/media/2B-short.mp4'), poster: null, challenge: '2B' },
  { id: '2a-long', label: '2A - Long Form', title: 'RAG Explained: From Zero to Production', type: 'YouTube', aspect: '16/9', duration: '3:04', src: publicAsset('/media/2B-long.mp4'), poster: null, challenge: '2B' },
  { id: '2b-short', label: '2B - Short Form', title: 'Build Your First AI App in 60 Seconds', type: 'Short', aspect: '9/16', duration: '1:46', src: publicAsset('/media/2A-short.mp4'), poster: null, challenge: '2A' },
  { id: '2b-long', label: '2B - Long Form', title: 'Build a RAG-Powered AI Project on NextWork', type: 'YouTube', aspect: '16/9', duration: '3:30', src: publicAsset('/media/2A-long.mp4'), poster: null, challenge: '2B' },
  { id: '2c-viral', label: '2C - Freestyle', title: 'POV: You Just Ran Your First AI Model Locally', type: 'Short', aspect: '9/16', duration: '2:00', src: publicAsset('/media/2C.mp4'), poster: null, challenge: '2C' },
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
    yourComment: `That is firee🔥, Sheetal. Love the way you constructed the entire workflow and glad to see you had a fun time pursuing the secret mission of adding custom application-level telemetry.

You’ve been building a lot and we are here to celebrate it all 🚀`,
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

export const part3WhyNotes = [
  {
    name: 'Derrick',
    note: 'Amber had already commented which meant the personal warmth was covered. So I wanted to write something that spoke to the actual project he shipped, and also doubled as an open invitation for anyone else reading who might be curious about coming to HQ.',
  },
  {
    name: 'James',
    note: 'His post had barely any engagement which felt wrong given how well he wrote it. I noticed his opening line was genuinely strong so I called it out specifically because I figured a real compliment about his writing would hit different than just praising the project itself.',
  },
  {
    name: 'Sheetal',
    note: 'Two people from the team had already commented on her post. I wanted the comment to make her feel proud of what she built, and the closing line of her post already told me exactly what skills she knew she had developed. The secret mission detail was my way of showing I actually went through her documentation, not just her LinkedIn post.',
  },
  {
    name: 'Jhonny',
    note: 'I saw he had shipped three builds with barely any recognition on any of them. The project felt secondary to that. I wanted to lead with the fact that we had noticed the pattern before saying anything about what he built, because that felt like the thing he actually needed to hear.',
  },
]

export const part3NextSteps = {
  title: 'The Playbook: Make Sure No Learner Post Gets Ignored',
  intro: 'Love from peers > love from the company. The team\'s job isn\'t to be the love. The team\'s job is to route it from learners to learners AND fast.',
  sections: [
    {
      title: 'Peer Engine',
      body: [
        'Add a new channel to the Discord server. Right now, celebrations live inside Discord but don\'t reliably reach LinkedIn. We can fix that with a SIMPLE RULE.',
        'When a learner posts their NextWork project on LinkedIn, they drop the link in a dedicated Discord channel (can name it #share-your-work). That channel has one rule pinned at the top: "If you drop your post here, you also drop love on at least 3 other posts in this channel. That\'s how we keep the energy going." This is the Pay-It-Forward rule. It\'s kinda reciprocal (learners agreeing among themselves). And it tries to solve the Jhonny problem.',
        'But we gotta make sure this one rule is communicated everywhere. In the project guide, on the YouTube outro, in the welcome email. EVERYWHERE. Every time NextWork tells a learner to share their project, the same sentence appears: "Drop the link in #share-your-work and pay it forward to three other learners. That\'s the deal."',
      ],
    },
    {
      title: 'The activation layer',
      body: [
        'The "Builder of the Month" spotlight - for those people who showed up most consistently for other learners that month. Featured in the email newsletter, on socials, MAYBEE with a short Q&A.',
        'Merch as a thank-you note - send a NextWork hoodie to someone\'s door with a handwritten note: "You\'ve shown up for so many learners this month. Here’s a small thank you from our side."',
      ],
    },
    {
      title: 'Something the team can deliver',
      body: [
        'The 0-engagement rescue - if a learner has tagged @NextWork and the post has under 5 reactions after 48 hours, it pings someone on the Front of House team. Then someone from the team writes one warm, specific comment, and drops the post in #share-your-work with a personal note ("Jhonny just shipped his third build, would love some love").',
        'The serial shipper acknowledgment - once a learner ships their third project, an automated flag goes to the team. Someone writes a personal note: "We noticed you\'ve been here for three builds. We see you."',
        'The pinned learner reply - each month, NextWork\'s official LinkedIn picks 1-2 learner posts and pins them on the company page or features them as a carousel. Not a lot like 10. Maybe just one or two, deeply. The pinned learner post sends a signal to every other learner: if you ship, you might be next.',
      ],
    },
    {
      title: 'The "wow" moment',
      body: [
        'The "someone who\'s done your job" voice note - when a learner finishes 3 projects, the team sends them a 1-minute voice note (in Discord or by email) from someone who actually does that job. Like a real SA saying "I saw your ALZ build, this is what gave me my first Azure job, here\'s what to do next." This is to make sure we last longer in the learner\'s memory.',
        'The portfolio audit - once a learner has shipped 3+ projects, the team offers a free 15-minute portfolio audit. Real, specific feedback from someone in the team OR industry on how their projects actually look to recruiters.',
        '"Built with NextWork" yearbook - publish an end-of-year digital book featuring every learner project, organized by category. Anyone who shipped that year is in it. Sent to all learners. It celebrates everyone who shipped and makes everyone who didn\'t wish they had.',
      ],
    },
  ],
}

export const part4Video = {
  title: 'The 11-Star NextWork First 10 Interactions',
  type: 'Video',
  aspect: '16/9',
  duration: '8:14',
  src: publicAsset('/media/4.mp4'),
  poster: null,
}

export const part4Interactions = [
  {
    title: 'Interaction 1',
    what: 'John is scrolling at 11pm. He sees a 40-second video. A guy who looks like he could be John\'s cousin is on camera saying "I\'m a warehouse manager. I\'ve never written code. I just built an AI agent that answers questions about our shipping documents. Took me 45 minutes. Here\'s what it looks like." Screen share. It works. The guy is genuinely surprised. He laughs. The caption says "If I can do this, you definitely can."',
    how: 'Filming 5-10 learner stories per month. Just real people screen-sharing what they built and reacting to the fact that it works. I’d personally like to prioritize non-traditional backgrounds like chefs, teachers, warehouse managers, accountants.',
  },
  {
    title: 'Interaction 2',
    what: 'John doesn\'t comment (he\'s shy). But he taps the NextWork profile. He sees more of the same - real people, real projects, real reactions. Not a content calendar of tips and tricks. A feed full of people who look like they could be his coworkers, building things he didn\'t know were possible. He taps the bio link.',
    how: 'Redesign the Instagram/TikTok grid so the first 3 posts are learner faces and projects, not a concept explanation. I’d like to market NextWork as an experience and learners are the best way to show that.',
  },
  {
    title: 'Interaction 3',
    what: 'John lands on the page. Before he sees a single project, he sees faces. Real learners. Short quotes. "I\'m a teacher from Lagos. I built a RAG chatbot in 45 minutes." "I\'m a finance analyst from Manila. I automated my calendar with AI." "I\'m a chef from Austin. I shipped my first AI agent last week." Below the faces, one button: "Pick your first project." No sign-up wall. No email capture. No "choose your learning path" quiz.',
    how: 'We have a lot of screenshots and all we have to do is embed some of those quotes on the hero page (people talking about us). Rotate them weekly.',
  },
  {
    title: 'Interaction 4',
    what: 'John picked "Run Ollama on Your Machine." He clicks start. Within 15 minutes, he has typed one command, Ollama is running, and his terminal says "The capital of France is Paris." He just ran AI on his own laptop. No API. No cloud. No cost. His laptop did that.',
    how: 'Already built.',
  },
  {
    title: 'Interaction 5',
    what: 'John finishes the project. He filled in a few prompts along the way ("What did you build?" "What was the hardest part?"). Now the platform generates a one-page portfolio card. His name. His photo (or avatar if he\'s shy). The project title. A hero screenshot of his terminal working. Two short paragraphs summarizing what he built and what he learned. A clean visual design and not a wall of text, something he\'d actually be proud to share. It looks like a Dribbble shot, not a Google Doc.',
    how: 'Adding a new template of the auto-generated documentation that looks like a visual portfolio card. One page. Hero image, name, title, two paragraphs max.',
  },
  {
    title: 'Interaction 6',
    what: 'John clicks "Share to LinkedIn." The post is pre-drafted with his project title, his portfolio card image already attached, and a personal hook ("I just built my first AI model. It runs entirely on my laptop. No code background, no API costs. Here\'s what I learned."). He tweaks it, adds his own voice, hits post. Within 2 hours, NextWork\'s account comments something short, warm, specific to him. Within 6 hours, 3-4 other learners from Discord\'s #share-your-work channel have liked and commented. By the time he checks his phone after dinner, his post has 8-12 engagements. He expected 0.',
    how: 'The 0 engagement rescue system from 3b. NextWork\'s team comments within 2 hours (one person, one comment, specific). The Discord #share-your-work Pay-It-Forward rule drives peer engagement. The pre-attached image removes the friction that currently kills most learner shares.',
  },
  {
    title: 'Interaction 7',
    what: 'Someone from the NextWork team sends him a short message: "Hey John, saw your Ollama project. The fact that you did this with no coding background is exactly why we built NextWork. If you want to know what to build next, the AI Fundamentals roadmap is the move. We\'re here if you need anything."',
    how: 'The Front of House automates sending 10-15 DMs per day to new learners who just shared their first project. Use their name, reference their specific project, suggest the next step. No template. 5-7 minutes of total team time per day.',
  },
  {
    title: 'Interaction 8',
    what: '3 days after his first project, John gets a message. Not "come back!" Not "you haven\'t logged in!" Something that connects what he already built to what he could build next: "Your Ollama model can answer general questions, but it doesn\'t know anything about YOUR work. Want to fix that? Build a RAG API and teach it your own documents."',
    how: 'Project-specific follow-up emails triggered by completion. Not a generic "here are more projects" list. One email connected to what he just did and a suggestion for the next chapter.',
  },
  {
    title: 'Interaction 9',
    what: 'After his second project, John gets an invite: "Hey, there are 15 NextWork learners in Hyderabad. They meet every other Saturday at a coworking space. No agenda, just people building together. The next one is this weekend. Want to come?" He shows up. Someone says "oh, you did the RAG project too? I just finished that last week. Did you get the Ollama install error?" They laugh. They help each other. He’s part of the community now. For the shy version of John, the one who would never show up to an in-person event - the equivalent is a Discord channel where he lurks, watches others share wins, and one day quietly posts his own screenshot. Someone reacts with a 🚀. I guess that\'s enough. He\'s seen.',
    how: 'City group leaders get notified when a new learner in their city completes a project. They send an invite personally to build a personalized recall value.',
  },
  {
    title: 'Interaction 10',
    what: '60 days in. John has shipped 4 projects. He sees a new learner in the Hyderabad group struggling with the Ollama install on Windows. He’s now replying with the fix. Then NextWork reaches out: "John, your journey from \'I\'ve never written code\' to 4 shipped projects in 60 days is exactly the kind of story other learners need to see. Would you be open to doing a 5-minute screen recording of your favorite project? We\'d feature it on our YouTube and other socials." He says yes. He records it. HIS FACE BECOMES THE PUSH FOR NEXT JOHN OUT THERE.',
    how: 'As soon as any learner ships their 4th project, team reaches out with the recording invitation. Not every learner will say yes. But the ones who do become the content engine.',
  },
]

export const part5Data = {
  statCards: [
    { stat: '240K', label: 'Vibe Coder vs Senior Engineer' },
    { stat: '167K', label: 'ML Engineer vs AI Engineer' },
    { stat: '80.9K', label: 'RAG in 60 seconds' },
  ],
  sections: [
    {
      title: 'What NextWork Is Already Doing Well',
      paragraphs: [
        'NextWork’s current social strategy engine says - Maximus on camera, one concept. 60 seconds. Cross-posted everywhere. That engine works. “Vibe Coder vs Senior Engineer” hit 240K. “ML Engineer vs AI Engineer” hit 167K. “RAG in 60 seconds” hit 80.9K. The reason this format works is not just that the topics are good. It works because the videos sit at the intersection of career anxiety and real education.',
        'People do not only want to learn RAG. They want to stop feeling behind. That is the part NextWork already understands really well.',
        'There are a few other things already working too. Events are becoming content. The BBQ at HQ, Build Day in Austin, the Manila event, all of that already gives people a sense that NextWork is not just an online project library. It is a real community with real people inside it.',
        'Learner wins also get reshared. Amber, Maya, Maximus, and the team post personally, and those posts often feel more alive than the company page because they come from actual people, not a brand voice trying to sound human.',
        'Keep the current engine, then add more ways for the community itself to carry the story.',
      ],
    },
    {
      title: 'What I’d Build On Top Of It',
      paragraphs: [
        'Maximus has a genuine point of view. He talks to the camera like a friend. He makes abstract tech feel like something you would actually want to learn. Those are not impossible-to-replicate traits. They are learnable patterns.',
        'And NextWork already has the raw material for this inside the community. There are 200K learners around the brand. Some percentage of them are naturally good storytellers. Some are funny. Some are clear explainers. Some have interesting career pivots. Some are just early, honest, and relatable, which is sometimes even better.',
        'Right now, the biggest opportunity is to turn more of those people into the content layer. Not in a polished, overproduced way. More like: “Here is someone who actually built something. Here is what they were confused about. Here is what clicked. Here is what changed after.” That kind of content connects Discord, social, events, and the product together.',
      ],
    },
    {
      title: 'The Learner Story Layer',
      paragraphs: [
        'When someone posts a NextWork project on LinkedIn, the post might get attention or it might disappear. That usually depends less on the quality of the work and more on whether the learner already has an audience.',
        'I would not solve that by simply reposting more. I would build a lightweight learner interview pipeline. Every week, identify 2-3 learners who shipped something interesting. Get them on a 10-minute call. Record it. Ask three simple questions: what were you doing before NextWork, what did you build, and what happened after?',
        'That call can become a 60-second short, a LinkedIn post, a quote card, a YouTube Short, and a community spotlight. This is where NextWork has a real advantage. The HQ, the events, the city groups, the build days, the Discord activity. There is already motion everywhere. The content does not need to be invented from scratch. It needs to be captured.',
        'I would also do more behind-the-scenes content from HQ. Not overly polished. Just the real stuff. The chaos before an event. Someone packing merch. A whiteboard planning session. A team member reacting to a learner project. People like seeing what is happening behind the screen because it makes the company feel real.',
      ],
    },
    {
      title: 'The Visual Packaging Layer',
      paragraphs: [
        'NextWork already has a few visual modes: black, white, and the fun colorful style. That is good. I would just push it further. I’d want to start adding and rotating visual themes. Not because the brand changes, but because the feed needs new reasons to stop the scroll. The core can stay the same: educational, career-focused, project-based, human. But the packaging can rotate.',
        'For example, portfolio reviews could have different themes. One week could feel like an anime power ranking. Another could feel like a hiring manager teardown. Another could feel like a “before and after” transformation. Even something like a Naruto-inspired portfolio review theme could work if it is done with taste and humor. The point is not to make things random. The point is to make the same educational engine feel fresh again and again.',
      ],
    },
    {
      title: 'Long-Form YouTube',
      paragraphs: [
        'For YouTube long-form, I would treat full videos as the deeper layer, not the first ask. If NextWork records a one-hour conversation with a learner who has been active in the community, I would not drop the full hour first and hope people watch. I would cut 5-8 short clips from that conversation and post them across Instagram, TikTok, YouTube Shorts, and LinkedIn first.',
        'Then watch what people respond to. Which clip gets saved? Which one gets shared? Which comment section has people asking follow-up questions? Which story actually makes people curious? That becomes the vibe check.',
        'This also makes long-form less risky. Every long conversation becomes multiple experiments before it becomes one big asset.',
      ],
    },
  ],
  pillars: [
    {
      title: 'Pillar 1: Character-Based Concept Shorts',
      body: 'NextWork is already doing this well. I would keep the format and add more faces into it. Maximus should not have to carry every character-based short. People already see Amber, Maya, Natasha, John, and the team across different parts of the ecosystem. Some of them can start carrying these formats too. The format does not need to change much. One person, one sharp concept, one clear idea in under 60 seconds. Career comparisons, AI concepts, cloud ideas, system design, project explainers. The new layer is rotation: new faces, new visual themes, same clarity.',
    },
    {
      title: 'Pillar 2: Learner Short Interviews',
      body: 'Every week, 2-3 learners. Ten-minute recorded call. Cut it into 60 seconds. The learner is the content. The team is just helping package the story. This can work especially well because NextWork projects naturally create proof. People do not just say, “I learned cloud.” They can show the actual project, the portfolio doc, the GitHub repo, the LinkedIn post, the thing they built. That makes the story more believable.',
    },
    {
      title: 'Pillar 3: Event And HQ Clips',
      body: 'Every HQ event, Build Day, city meetup, or community gathering should produce 5-10 short clips. Questions like “What did you build today?”, “What got you stuck?”, “What made you come here?”, “What are you trying to get hired for?”, and “What would you tell someone who is nervous to start?” can be asked. Raw clips. 20-30 seconds. This is the kind of content competitors cannot easily copy because most of them do not have the in-person layer NextWork has.',
    },
    {
      title: 'Pillar 4: Behind The Scenes',
      body: 'I would make behind-the-scenes a real pillar, not just occasional filler. The HQ setup. The planning. The event prep. The team reacting to learner wins. The small chaotic moments before something ships. People like seeing how things are made. And when the team itself is part of the product experience, showing the team makes the brand feel closer. This does not need heavy production. It just needs consistency.',
    },
  ],
  measurement: [
    'I would keep the measurement simple enough that the team can actually use it every week.',
    'On a weekly basis, I’d look at performance by pillar: which concept shorts, learner interviews, event clips, and behind-the-scenes posts got the most views, saves, shares, and comments. I’d pay special attention to DM shares on Instagram, because that usually means the video felt useful or relatable enough for someone to send to a friend. I’d also track comments that show intent, like “how do I start?” or “where is the project?”, plus how many learners are volunteering for interviews and how many usable clips each event produces.',
    'Monthly, I’d connect the content back to the product. How many new signups came from social? How many of those people started a project within seven days? How many learner posts tagged NextWork on LinkedIn? For YouTube, I’d look at whether short clips are creating demand for the full conversation, instead of judging long-form videos in isolation.',
    'Then every Monday, I’d run a 30-minute content review: what performed best, what underperformed, what people actually said in the comments, and what one test we’re shipping next. The goal is not to build a giant reporting system. The goal is to keep learning while the team keeps shipping.',
  ],
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
