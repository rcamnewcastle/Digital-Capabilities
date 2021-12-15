import React from "react";
import ResourceLinks from "../ResourceLinks";

const DigitalLearningDevelopment = (props) => {

    return(
        <ResourceLinks
            // what the user scored in this section
            score={props.score}

            // these resource links will be managed and selected accordingly
            resourceData={[
                {
                    link: 'https://www.linkedin.com/learning/onenote-2016-essential-training/add-text-and-quick-notes?u=75842122',
                    label: 'OneNote 2016 Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/infographics-planning-and-wireframing/using-the-exercise-files?u=75842122',
                    label: 'Infographics: Planning and Wireframing',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/security-tips/use-a-password-manager?u=75842122',
                    label: 'Security Tips',
                    weighting: ['General']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-pinterest-2/use-pinterest-to-collect-and-manage-your-inspirations?u=75842122',
                    label: 'Learning Pinterest',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/google-calendar-essential-training/be-a-schedule-champion-with-google-calendar?u=75842122',
                    label: 'Google Calendar Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-lucidchart/visualize-complex-ideas-with-lucidchart?u=75842122',
                    label: 'Learning Lucidchart',
                    weighting: ['Beginner']
                }
            ]}
        />
    )
}

export default DigitalLearningDevelopment;