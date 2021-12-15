import React from "react";
import ResourceLinks from "../ResourceLinks";

const DigitalCommunicationCollaborationAndParticipation = (props) => {

    return(
        <ResourceLinks
            // what the user scored in this section
            score={props.score}

            // these resource links will be managed and selected accordingly
            resourceData={[
                {
                    link: 'https://www.linkedin.com/learning/microsoft-teams-essential-training-5/communicate-effectively-with-microsoft-teams?u=75842122',
                    label: 'Microsoft Teams Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/google-sheets-essential-training-2021/get-organized-with-google-sheets?u=75842122',
                    label: 'Google Sheets Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/outlook-essential-training-office-365-microsoft-365/stay-organized-and-collaborate-effectively?u=75842122',
                    label: 'Outlook Essential Training (Office 365/Microsoft 365)',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-microsoft-project-2/project-management-with-microsoft-project?u=75842122',
                    label: 'Learning Microsoft Project',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-zoom/stay-connected-with-zoom-meetings?u=75842122',
                    label: 'Learning Zoom',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/word-2019-essential-training/get-acquainted-with-the-power-of-word-2019?u=75842122',
                    label: 'Word 2019 Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/outlook-tips-and-tricks/become-an-outlook-power-user?u=75842122',
                    label: 'Outlook: Tips and Tricks',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/google-docs-essential-training-4/create-collaborate-and-be-great-with-google-docs?u=75842122',
                    label: 'Google Docs Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/sharepoint-online-essential-training-beyond-the-basics/customize-sharepoint-for-your-team-and-company?u=75842122',
                    label: 'SharePoint Online Essential Training: Beyond the Basics',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/microsoft-teams-tips-weekly/format-text-in-a-message?u=75842122',
                    label: 'Microsoft Teams Tips Weekly',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-instagram-2/follow-other-users-and-hashtags?u=75842122',
                    label: 'Learning Instagram',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/microsoft-planner-essential-training-2019/take-control-of-your-projects-with-planner?u=75842122',
                    label: 'Microsoft Planner Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/google-drive-essential-training-2021/do-more-than-store-files-with-google-drive?u=75842122',
                    label: 'Google Drive Essential Training',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/sharepoint-online-admin-essential-training/configure-sharepoint-to-suit-your-organization-s-goals?u=75842122',
                    label: 'SharePoint Online Admin Essential Training',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/twitter-essential-training-5/be-part-of-the-global-conversation-on-twitter?u=75842122',
                    label: 'Twitter Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/topics/business-software-and-tools?u=75842122',
                    label: 'Primavera P6 Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/sway-essential-training-2/welcome?u=75842122',
                    label: 'Sway Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-dropbox-2018/welcome?u=75842122',
                    label: 'Learning Dropbox',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/advanced-primavera-p6/doing-more-with-primavera-p6?u=75842122',
                    label: 'Advanced Primavera P6',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-lucidchart/visualize-complex-ideas-with-lucidchart?u=75842122',
                    label: 'Learning Lucidchart',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-loom/install-loom-on-windows?u=75842122',
                    label: 'Learning Loom',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/business-etiquette-meetings-meals-and-networking-events/the-left-brained-personality-types-at-work?u=75842122',
                    label: 'Business Etiquette: Meetings, Meals, and Networking Events',
                    weighting: ['General']
                },
                {
                    link: 'https://www.linkedin.com/learning/google-meet-essential-training/meet-online-with-teammates-customers-and-clients?u=75842122',
                    label: 'Google Meet Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/skype-for-business-essential-training/welcome?u=75842122',
                    label: 'Skype for Business Essential Training',
                    weighting: ['General']
                },
                {
                    link: 'https://www.linkedin.com/learning/zoom-leading-effective-and-engaging-calls/leading-effective-productive-and-engaging-zoom-calls?u=75842122',
                    label: 'Zoom: Leading Effective and Engaging Calls',
                    weighting: ['General']
                },
                {
                    link: 'https://www.linkedin.com/learning/digital-citizenship/what-is-a-digital-footprint?u=75842122',
                    label: 'Digital Citizenship',
                    weighting: ['Beginner']
                }
            ]}
        />
    )
}

export default DigitalCommunicationCollaborationAndParticipation;