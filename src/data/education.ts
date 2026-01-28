export interface Education {
    institution: string;
    degree: string;
    period: string;
    gpa: string;
    description: string;
    achievements?: string[];
}

export const education: Education[] = [
    {
        institution: "Universitas Jember",
        degree: "Bachelor of System Information",
        period: "Aug 2023 - Aug 2027 (Expected)",
        gpa: "3.95/4.00",
        description: "Active as a Teaching Assistant and Assistant Coordinator at the Software Engineering Laboratory. Participated in multiple competitions and achieved several awards in web development and tech innovation.",
        achievements: [
            "Completed major projects such as SkillSwap, ScholarMate, and Anggrek AI using Laravel and modern web technologies.",
        ]
    },
];
