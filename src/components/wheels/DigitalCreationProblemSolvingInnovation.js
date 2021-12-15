import React from "react";
import ResourceLinks from "../ResourceLinks";

const DigitalCreationProblemSolvingInnovation = (props) => {

    return(
        <ResourceLinks
            // what the user scored in this section
            score={props.score}

            // these resource links will be managed and selected accordingly
            resourceData={[
                {
                    link: 'https://www.linkedin.com/learning/powerpoint-essential-training-office-365-microsoft-365/deliver-a-powerful-message-with-a-powerful-presentation?u=75842122',
                    label: 'PowerPoint Essential Training (Office 365/Microsoft 365)',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/powerpoint-2016-essential-training/welcome?u=75842122',
                    label: 'PowerPoint 2016 Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/powerpoint-tips-and-tricks/powerpoint-is-smarter?u=75842122',
                    label: 'PowerPoint Tips and Tricks',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/powerpoint-2019-for-mac-essential-training/deliver-a-powerful-message-with-a-powerful-presentation?u=75842122',
                    label: 'PowerPoint 2019 for Mac Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/powerpoint-animations-office-365-microsoft-365/welcome?u=75842122',
                    label: 'PowerPoint: Animations (Office 365/Microsoft 365)',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/powerpoint-2016-audio-and-video-in-depth/welcome?u=75842122',
                    label: 'PowerPoint 2016: Audio and Video In Depth',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-adobe-presenter-10/welcome?u=75842122',
                    label: 'Learning Adobe Presenter 10',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/presentation-tips-weekly/manipulating-objects-like-a-boss?u=75842122',
                    label: 'Presentation Tips Weekly',
                    weighting: ['General']
                },
                {
                    link: 'https://www.linkedin.com/learning/artificial-intelligence-tools-and-concepts/welcome-to-the-course?u=75842122',
                    label: 'Artificial Intelligence Tools and Concepts',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/imovie-10-1-16-essential-training/create-videos-people-actually-want-to-watch?u=75842122',
                    label: 'iMovie 10.1.16 Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/infographics-planning-and-wireframing/using-the-exercise-files?u=75842122',
                    label: 'Infographics: Planning and Wireframing',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/voice-over-for-video-and-animation/welcome?u=75842122',
                    label: 'Voice-Over for Video and Animation',
                    weighting: ['General']
                },
                {
                    link: 'https://www.linkedin.com/learning/creating-and-managing-a-youtube-channel-2/how-do-you-create-and-maintain-a-youtube-channel?u=75842122',
                    label: 'Creating and Managing a YouTube Channel',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/foundations-of-video-the-art-of-editing/welcome?u=75842122',
                    label: 'Foundations of Video: The Art of Editing',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/video-editing-fundamentals/welcome-to-the-exciting-world-of-video-editing?u=75842122',
                    label: 'Video Editing Fundamentals',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/audio-for-video-1-getting-started/welcome?u=75842122',
                    label: 'Audio for Video: 1 Getting Started',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/online-video-content-strategy/terms-and-concepts?u=75842122',
                    label: 'Online Video Content Strategy',
                    weighting: ['Beginner']
                }
            ]}
        />
    )
}

export default DigitalCreationProblemSolvingInnovation;