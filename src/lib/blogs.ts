import type { Blog } from ".";

export const blogs: Blog[] = [
  {
    title: '"Week 1 Team Update: Progress, Research, and... a Chair Incident"',
    content: `
## This week was a whirlwind of ideation, research, and some unexpected stress-testing of furniture (more on that later). Week 1 has officially wrapped up, and we’ve got plenty of exciting developments to share!

## Breaking Ground with Research and Ideation

We kicked off by splitting into specialized teams, each tackling a crucial aspect of our app development. Our ideation team jumped right into rapid brainstorming, tossing out interface ideas and evolving our vision on the fly. Meanwhile, our research team embarked on a mission to gather intel on caregiver routines, communication methods (hello, WhatsApp overload!), and the tech that will make it all work smoothly.

### Some of our research highlights:

- **Annabelle and Emmy** dove into [Radix](https://www.radix-ui.com/themes/docs/overview/getting-started) and [Shadcn](https://ui.shadcn.com/), exploring themes and UI components.
- **Angus** started working on authentication solutions like [Next Auth](https://next-auth.js.org/) to secure our app.
- **Max** (yours truly!) took on the challenge of integrating the [Google Calendar API](https://developers.google.com/calendar/api/guides/overview), trying to ensure caregivers can seamlessly manage schedules.
- **Vitor** explored cutting-edge AI solutions with [LangChain](https://www.langchain.com/) and [LangGraph](https://www.langchain.com/langgraph).
- **Angus and Max** also teamed up to get into testing with [Vitest](https://vitest.dev/), ensuring our code is solid (wink wink) from the start.

All this research lays the groundwork for our app’s core functionality, from secure user login to beautiful, animated UI and seamless scheduling.

## What Did We Learn?

Our research unveiled some key insights about caregiver workflows and technology needs, helping us rethink some of our key values. Caregivers are juggling tools like WhatsApp, but they’re craving a more centralized way to manage their schedules and notes. With this in mind, we’re fine-tuning our app to be a one-stop shop for both caregivers and families.

## And Now… The Chair Story

And yes, we can’t sign off without mentioning _the_ moment of the week. During one of our meetings, I, Max, decided to get a little too comfortable by sitting on the backrest of a chair. Let’s just say, the chair was not up for the challenge. One might argue I was merely performing an impromptu _stress test_, but the chair, unfortunately, failed spectacularly. RIP chair. We now know one thing: our app’s stress-testing might need some work too.

Overall, it's been a week filled with sweat, tears, and, well, a bit of broken furniture. Looking forward to sharing more updates as we head into Week 2!

Stay tuned — and maybe don’t sit directly on the back rest of your chair while you wait.

— Max & The Team
  `,
    author: {
      name: "Max Shuyu Li",
      profilePictureSrc: "/assets/images/max.jpg",
    },
    thumbnailSrc: "/assets/images/week-1.gif",
  },

  {
    title: "Week 2 - Oct 2. 2024",
    content: `
  
### Introduction

As the Harmony App development progresses, our team is excited to share weekly updates on our journey. In this blog, we’ll cover the latest progress from various teams, including:

- **Framework selection**
- **Research insights**
- **Design development**
- **Competitor analysis**

Stay tuned as we refine our approach and continue building an app that empowers caregivers and connects families!

### Research

The Research team had a productive week, conducting interviews with participants to gather insights for the user research assignment. In addition to these interviews, the team reviewed academic research focused on the intersection of caregiving and technology. This dual approach allowed them to gather well-rounded, comprehensive insights that will help guide the development process.

### Competitor Analysis

The Competitor team kicked off the week by exploring different caregiving apps in the market. They initiated the competitive analysis process by focusing on features such as:

- **Client scheduling**
- **Appointment details**
- **Care plan information**

These insights will be essential in distinguishing Harmony from competitors and refining the app’s functionality.

### Design & Ideation

The Design & Ideation team made significant progress this week by starting to create low-fidelity wireframes and beginning work on user flow charts. To further inspire their design, they collected screenshots from similar apps. Additionally, the team began exploring style and branding options, which will help ensure visual consistency as the app develops.

### Sandbox

The Sandbox team spent this week evaluating different frameworks to find the best fit for the Harmony project. After thorough consideration, they narrowed down their options to the following:

- **React + TanStack:** Known for its high-performance libraries, including TanStack Router, this option stands out for robust JavaScript/TypeScript functionalities.
- **Svelte + SvelteKit:** Offers faster performance by compiling components at build time and supports full-stack web development.
- **Solid + SolidStart:** Focuses on fine-grained reactivity, with efficient UI updates, and aims to be lightweight like Svelte while offering a React-like API.

### Next Steps

- **Research Team:** 
  - Complete the remaining scheduled interviews 
  - Hold a team meeting to discuss the findings.

- **Competitor Team:** 
  - Continue researching similar apps 
  - Build out the competitive analysis.

- **Design & Ideation Team:** 
  - Continue refining the style, branding guide, and user flows 
  - Make progress on the low-fidelity wireframe 
  - Start working on user personas.

- **Sandbox Team:** 
  - Dive deeper into AI models 
  - Explore mobile alternatives for Google Calendar and authentication integration.

Stay tuned for next week’s update as the team continues to refine and develop *Harmony*!

  `,
    author: "Chelsea Woo",
    thumbnailSrc: "/assets/images/week-2.gif",
  },
  {
    title: "Week 2 - Oct 2. 2024",
    content: `
  
### Introduction

As the Harmony App development progresses, our team is excited to share weekly updates on our journey. In this blog, we’ll cover the latest progress from various teams, including:

- **Framework selection**
- **Research insights**
- **Design development**
- **Competitor analysis**

Stay tuned as we refine our approach and continue building an app that empowers caregivers and connects families!

### Research

The Research team had a productive week, conducting interviews with participants to gather insights for the user research assignment. In addition to these interviews, the team reviewed academic research focused on the intersection of caregiving and technology. This dual approach allowed them to gather well-rounded, comprehensive insights that will help guide the development process.

### Competitor Analysis

The Competitor team kicked off the week by exploring different caregiving apps in the market. They initiated the competitive analysis process by focusing on features such as:

- **Client scheduling**
- **Appointment details**
- **Care plan information**

These insights will be essential in distinguishing Harmony from competitors and refining the app’s functionality.

### Design & Ideation

The Design & Ideation team made significant progress this week by starting to create low-fidelity wireframes and beginning work on user flow charts. To further inspire their design, they collected screenshots from similar apps. Additionally, the team began exploring style and branding options, which will help ensure visual consistency as the app develops.

### Sandbox

The Sandbox team spent this week evaluating different frameworks to find the best fit for the Harmony project. After thorough consideration, they narrowed down their options to the following:

- **React + TanStack:** Known for its high-performance libraries, including TanStack Router, this option stands out for robust JavaScript/TypeScript functionalities.
- **Svelte + SvelteKit:** Offers faster performance by compiling components at build time and supports full-stack web development.
- **Solid + SolidStart:** Focuses on fine-grained reactivity, with efficient UI updates, and aims to be lightweight like Svelte while offering a React-like API.

### Next Steps

- **Research Team:** 
  - Complete the remaining scheduled interviews 
  - Hold a team meeting to discuss the findings.

- **Competitor Team:** 
  - Continue researching similar apps 
  - Build out the competitive analysis.

- **Design & Ideation Team:** 
  - Continue refining the style, branding guide, and user flows 
  - Make progress on the low-fidelity wireframe 
  - Start working on user personas.

- **Sandbox Team:** 
  - Dive deeper into AI models 
  - Explore mobile alternatives for Google Calendar and authentication integration.

Stay tuned for next week’s update as the team continues to refine and develop *Harmony*!

  `,
    author: "Chelsea Woo",
    thumbnailSrc: "/assets/images/week-2.gif",
  },
];
