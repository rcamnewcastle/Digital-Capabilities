import React from "react";
import ResourceLinks from "../ResourceLinks";

const DigitalIdentityAndWellbeing = (props) => {

    return(
        <ResourceLinks
            // what the user scored in this section
            score={props.score}

            // these resource links will be managed and selected accordingly
            resourceData={[
                {
                    link: 'https://www.linkedin.com/learning/twitter-essential-training-5/be-part-of-the-global-conversation-on-twitter?u=75842122',
                    label: 'Twitter Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-iphone-and-ipad-security-2/welcome?u=75842122',
                    label: 'Learning iPhone and iPad Security',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-computer-security-and-internet-safety-3/verify-updates-happen-automatically?u=75842122',
                    label: 'Learning Computer Security and Internet Safety',
                    weighting: ['General']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-android-security/welcome?u=75842122',
                    label: 'Learning Android Security',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-linkedin-2021/get-started-with-linkedin?u=75842122',
                    label: 'Learning LinkedIn',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/it-security-foundations-core-concepts-2/tech-savvy-tech-safe?u=75842122',
                    label: 'IT Security Foundations: Core Concepts',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-vpn/what-is-a-vpn?u=75842122',
                    label: 'Learning VPN',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/windows-10-security/welcome?u=75842122',
                    label: 'Windows 10: Security',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-mobile-device-security-3/securing-mobile-devices?u=75842122',
                    label: 'Learning Mobile Device Security',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/topics/security-3?u=75842122',
                    label: 'Cybersecurity Foundations',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/cybersecurity-awareness-malware-explained/welcome?u=75842122',
                    label: 'Cybersecurity Awareness: Malware Explained',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/securing-your-home-office/securing-your-home-office?u=75842122',
                    label: 'Securing Your Home Office',
                    weighting: ['Beginner']
                }
            ]}
        />
    )
}

export default DigitalIdentityAndWellbeing;