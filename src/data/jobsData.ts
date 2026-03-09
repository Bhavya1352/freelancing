export interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    time: string;
    category: string;
    isNew?: boolean;
    logoColor: string;
    initial: string;
    description: string;
    responsibilities: string[];
    skills: string[];
    tags: string[];
    experience: string;
    degree: string;
}

export const JOBS: Job[] = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'Linear company',
        location: 'Brussels',
        type: 'Full Time',
        salary: '$45k - $85k',
        time: '29 min ago',
        category: 'Software',
        isNew: true,
        logoColor: '#5B21B6',
        initial: 'L',
        description: 'Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis. Pellentesque varius augue in purus lobortis in varius erat consequat.',
        responsibilities: [
            'Be involved in every step of the product design cycle from discovery to developer handoff.',
            'Work with BAs, product managers and tech teams to lead the Product Design.',
            'Maintain quality of the design process and ensure accurate translation to code.'
        ],
        skills: [
            'Strong portfolio demonstrating your design skills.',
            '3+ years of experience as a UI/UX Designer.',
            'In-depth knowledge of UI/UX tools like Figma.'
        ],
        tags: ['Full time', 'Contract', 'Remote', 'Corporate'],
        experience: '3 Years',
        degree: 'Bachelor'
    },
    {
        id: 2,
        title: 'Junior UI Designer',
        company: 'Notion',
        location: 'Madrid',
        type: 'Full Time',
        salary: '$30k - $32k',
        time: '1 day ago',
        category: 'Design',
        logoColor: '#000000',
        initial: 'N',
        description: 'Aliquam erat volutpat. Nam sit amet tortor metus. Sed dictum tristique risus. In hac habitasse platea dictumst. Vestibulum varius enim ex, at sollicitudin odio congue vitae.',
        responsibilities: [
            'Assist senior designers in creating user interfaces.',
            'Maintain the design system and update components.',
            'Collaborate with the engineering team for implementation.'
        ],
        skills: [
            'Basic understanding of layout and color theory.',
            'Proficiency in Figma or Sketch.',
            'Willingness to learn and grow within the team.'
        ],
        tags: ['Junior', 'Design', 'Full time'],
        experience: '1 Year',
        degree: 'Bachelor'
    },
    {
        id: 3,
        title: 'Technical Support Engineer',
        company: 'Spline studio',
        location: 'United States',
        type: 'Full Time',
        salary: '$50k - $52k',
        time: '1 day ago',
        category: 'Support',
        logoColor: '#3B82F6',
        initial: 'S',
        description: 'Support our global customer base with technical issues. Work closely with product and engineering to resolve bugs and improve documentation.',
        responsibilities: [
            'Resolve complex technical issues for enterprise clients.',
            'Write and maintain technical documentation.',
            'Provide feedback to the product team based on user issues.'
        ],
        skills: [
            'Strong problem-solving skills.',
            'Experience with CLI and basic programming.',
            'Excellent communication skills.'
        ],
        tags: ['Support', 'Technical', 'Full time'],
        experience: '2 Years',
        degree: 'Bachelor'
    },
    {
        id: 4,
        title: 'Corporate Solutions Executive',
        company: 'Luthar and Sons',
        location: 'New York, USA',
        type: 'Full Time',
        salary: '$45000 - $48000',
        time: '12 min ago',
        category: 'Commerce',
        logoColor: '#4285F4',
        initial: 'G',
        description: 'Nam et elit purus. In hac habitasse platea dictumst. Donec id congue sem nisl odio suscipit et in. Felis ac nisl et erat. Cras faucibus fringilla sapien nec enim laoreet vel facilisis.',
        responsibilities: [
            'Et sunt in temporibus duis vel nisl tellus. Omnis rerum ea ab nihil molestiae.',
            'Cum facilis aspernatur iusto itaque inventore voluptas quis iusto dolores natus.',
            'Totam omnis quia perferendis rem natus quis dolores delectus.'
        ],
        skills: [
            'Et sunt in temporibus duis vel nisl tellus. Omnis rerum ea ab nihil.',
            'Cum facilis aspernatur iusto itaque inventore voluptas quis iusto.',
            'Totam omnis quia perferendis rem natus quis dolores delectus.'
        ],
        tags: ['Full time', 'Contract', 'Near - York', 'Corporate', 'Lutcher'],
        experience: '5 Years',
        degree: 'Master'
    },
    {
        id: 5,
        title: 'Product Designer',
        company: 'Raycast corp',
        location: 'London',
        type: 'Full Time',
        salary: '$40k - $42k',
        time: '2 day ago',
        category: 'Design',
        logoColor: '#000000',
        initial: 'R',
        description: 'Design beautiful interfaces for raycast tools. Work on core components and branding.',
        responsibilities: ['Create visual assets', 'Conduct user research'],
        skills: ['Figma', 'Prototyping'],
        tags: ['Design', 'Raycast'],
        experience: '4 Years',
        degree: 'Bachelor'
    }
];
