import React from "react";
import ResourceLinks from "../ResourceLinks";

const ProficiencyAndProductivity = (props) => {

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
                    link: 'https://www.linkedin.com/learning/excel-essential-training-office-365-microsoft-365/getting-started-with-excel-for-office-365?u=75842122',
                    label: 'Excel Essential Training (Office 365/Microsoft 365)',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-2016-essential-training/welcome?u=75842122',
                    label: 'Excel 2016 Essential Training',
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
                    link: 'https://www.linkedin.com/learning/word-2019-essential-training/get-acquainted-with-the-power-of-word-2019?u=75842122',
                    label: 'Word 2019 Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/powerpoint-2016-essential-training/welcome?u=75842122',
                    label: 'PowerPoint 2016 Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-creating-a-basic-dashboard/welcome?u=75842122',
                    label: 'Excel: Creating a Basic Dashboard',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/powerpoint-tips-and-tricks/powerpoint-is-smarter?u=75842122',
                    label: 'PowerPoint Tips and Tricks',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-advanced-formulas-and-functions/use-the-most-powerful-formulas-and-functions-in-excel?u=75842122',
                    label: 'Excel: Advanced Formulas and Functions',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/powerpoint-2019-essential-training/create-a-presentation-from-scratch?u=75842122',
                    label: 'PowerPoint 2019 Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-2019-essential-training/getting-started-with-excel?u=75842122',
                    label: 'Excel 2019 Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/ios-14-and-ipados-iphone-and-ipad-essential-training/get-to-know-ios-14-in-depth-on-your-iphone-or-ipad-2?u=75842122',
                    label: 'iOS 14 and iPadOS: iPhone and iPad Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-quick-tips-2018/welcome?u=75842122',
                    label: 'Excel Quick Tips (2018)',
                    weighting: ['General']
                },
                {
                    link: 'https://www.linkedin.com/learning/python-data-analysis-2/get-started-in-data-analysis-with-python?u=75842122',
                    label: 'Python Data Analysis',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-2016-introduction-to-formulas-and-functions/welcome?u=75842122',
                    label: 'Excel 2016: Introduction to Formulas and Functions',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/word-automating-your-work-with-macros/welcome?u=75842122',
                    label: 'Word: Automating Your Work with Macros',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/statistics-foundations-probability/the-importance-of-probabilities?u=75842122',
                    label: 'Statistics Foundations: Probability',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/data-science-foundations-data-mining-in-python/python-for-data-mining?autoAdvance=true&autoSkip=false&autoplay=true&resume=true&u=75842122',
                    label: 'Data Science Foundations: Data Mining in Python',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/word-2016-templates-in-depth/welcome?u=75842122',
                    label: 'Word 2016: Templates in Depth',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-statistics-essential-training-1-2/what-is-data?u=75842122',
                    label: 'Excel Statistics Essential Training: 1',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/creating-reports-in-word-2016/welcome?u=75842122',
                    label: 'Creating Reports in Word 2016',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/topics/business-software-and-tools?u=75842122',
                    label: 'Power Apps: Building Data-Driven Apps',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/word-2019-for-mac-essential-training/get-acquainted-with-the-power-of-word-2019-for-mac?u=75842122',
                    label: 'Word 2019 for Mac Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-tips-weekly/conversion-of-values-into-binary-octal-decimal-and-hexadecimal-equivalents?u=75842122',
                    label: 'Excel Tips Weekly',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-word-for-the-web-office-365-microsoft-365/get-the-power-of-word-in-your-browser?u=75842122',
                    label: 'Learning Word for the web (Office 365/Microsoft 365)',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-excel-desktop-office-365-microsoft-365/what-you-need-to-know?u=75842122',
                    label: 'Learning Excel Desktop (Office 365/Microsoft 365)',
                    weighting: ['Beginner']
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
                    link: 'https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack/welcome?u=75842122',
                    label: 'Data Science Foundations: Python Scientific Stack',
                    weighting: ['Intermediate']
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
                    link: 'https://www.linkedin.com/learning/excel-analytics-tips/about-the-pro-tip-series?u=75842122',
                    label: 'Excel: Analytics Tips',
                    weighting: ['Intermediate']
                },
                {
                    link: 'linkedin.com/learning/word-2016-essential-training/launching-word-and-touring-the-interface?u=75842122',
                    label: 'Word 2016 Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-power-query-for-beginners/what-is-power-query-in-excel?u=75842122',
                    label: 'Excel: Power Query for Beginners',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/cert-prep-excel-expert-microsoft-office-specialist-for-office-2019-and-office-365/prove-your-excel-skills-as-a-mos-expert?u=75842122',
                    label: 'Cert Prep: Excel Expert - Microsoft Office Specialist for Office 2019 and Office 365',
                    weighting: ['Advanced']
                },
                {
                    link: 'https://www.linkedin.com/learning/python-for-data-science-essential-training-part-1/data-science-life-hacks?u=75842122',
                    label: 'Python for Data Science Essential Training Part 1',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/power-bi-data-visualization-and-dashboard-tips-tricks-techniques/data-visualization-and-reporting-in-power-bi?u=75842122',
                    label: 'Power BI Data Visualization and Dashboard Tips, Tricks, & Techniques',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/sharepoint-online-essential-training-beyond-the-basics/customize-sharepoint-for-your-team-and-company?u=75842122',
                    label: 'SharePoint Online Essential Training: Beyond the Basics',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-vba-managing-files-and-data-2/determine-if-a-workbook-exists?u=75842122',
                    label: 'Excel VBA: Managing Files and Data',
                    weighting: ['Advanced']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-data-analysis-forecasting/welcome?u=75842122',
                    label: 'Excel Data Analysis: Forecasting',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/cert-prep-word-associate-microsoft-office-specialist-for-office-2019-and-office-365/prove-your-word-skills-with-a-word-associate-certification?u=75842122',
                    label: 'Cert Prep: Word Associate - Microsoft Office Specialist for Office 2019 and Office 365',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/topics/business-software-and-tools?u=75842122',
                    label: 'Learning Data Analytics',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/microsoft-teams-tips-weekly/format-text-in-a-message?u=75842122',
                    label: 'Microsoft Teams Tips Weekly',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/presentation-tips-weekly/manipulating-objects-like-a-boss?u=75842122',
                    label: 'Presentation Tips Weekly',
                    weighting: ['General']
                },
                {
                    link: 'https://www.linkedin.com/learning/using-python-with-excel/managing-excel-with-python?u=75842122',
                    label: 'Using Python with Excel',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-lookup-functions-in-depth/introduction?u=75842122',
                    label: 'Excel: Lookup Functions in Depth',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/onenote-2016-essential-training/add-text-and-quick-notes?u=75842122',
                    label: 'OneNote 2016 Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/data-visualization-in-r-with-ggplot2/welcome?u=75842122',
                    label: 'Data Visualization in R with ggplot2',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/outlook-2016-time-management-with-calendar-and-tasks/welcome?u=75842122',
                    label: 'Outlook 2016: Time Management with Calendar and Tasks',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/computer-literacy-for-windows-10-2021/get-up-to-speed-with-your-windows-computer?u=75842122',
                    label: 'Computer Literacy for Windows 10',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/data-visualization-for-data-analysis-and-analytics/moving-from-analysis-to-visualization?u=75842122',
                    label: 'Data Visualization for Data Analysis and Analytics',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-typing-2014/welcome?u=75842122',
                    label: 'Learning Typing (2014)',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/artificial-intelligence-tools-and-concepts/welcome-to-the-course?u=75842122',
                    label: 'Artificial Intelligence Tools and Concepts',
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
                    link: 'https://www.linkedin.com/learning/data-analytics-for-students/what-is-the-value-of-data?u=75842122',
                    label: 'Data Analytics for Students',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/google-drive-essential-training-2021/do-more-than-store-files-with-google-drive?u=75842122',
                    label: 'Google Drive Essential Training',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/filemaker-pro-essential-training-2/introducing-filemaker-essential-training?u=75842122',
                    label: 'FileMaker Pro Essential Training',
                    weighting: ['General']
                },
                {
                    link: 'https://www.linkedin.com/learning/sql-data-reporting-and-analysis-2/don-t-let-your-reporting-system-hold-you-back?u=75842122',
                    label: 'SQL: Data Reporting and Analysis',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/processing-text-with-python-essential-training/the-need-for-text-mining-skills-in-data-science?u=75842122',
                    label: 'Processing Text with Python Essential Training',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-filemaker-16/welcome?u=75842122',
                    label: 'Learning FileMaker 16',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/acrobat-dc-essential-training-2019/creating-pdfs-with-ease-in-acrobat?u=75842122',
                    label: 'Acrobat DC Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/imovie-10-1-16-essential-training/create-videos-people-actually-want-to-watch?u=75842122',
                    label: 'iMovie 10.1.16 Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/working-with-computers-and-devices/working-with-computers-to-create-opportunity?u=75842122',
                    label: 'Working with Computers and Devices',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/sharepoint-online-admin-essential-training/configure-sharepoint-to-suit-your-organization-s-goals?u=75842122',
                    label: 'SharePoint Online Admin Essential Training',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-the-chrome-browser/welcome?u=75842122',
                    label: 'Learning the Chrome Browser',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/computer-literacy-for-windows-10/welcome?u=75842122',
                    label: 'Computer Literacy for Windows 10',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-the-ipad-pro-4/be-more-productive-with-the-ipad-pro?u=75842122',
                    label: 'Learning the iPad Pro',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/google-drive-advanced-tips-and-tricks/what-you-should-know?u=75842122',
                    label: 'Google Drive Advanced Tips and Tricks',
                    weighting: ['Advanced']
                },
                {
                    link: 'https://www.linkedin.com/learning/icloud-essential-training-3/create-an-icloud-account?u=75842122',
                    label: 'iCloud Essential Training',
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
                    link: 'https://www.linkedin.com/learning/pandas-essential-training/welcome?u=75842122',
                    label: 'pandas Essential Training',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/google-sites-essential-training-3/create-a-website-in-minutes-with-google-sites?u=75842122',
                    label: 'Google Sites Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/google-calendar-essential-training/be-a-schedule-champion-with-google-calendar?u=75842122',
                    label: 'Google Calendar Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/spss-statistics-essential-training-2/spss-in-context?u=75842122',
                    label: 'SPSS Statistics Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/matlab-2018-essential-training/use-matlab-for-data-calculation?u=75842122',
                    label: 'MATLAB 2018 Essential Training',
                    weighting: ['Intermediate']
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
                    link: 'https://www.linkedin.com/learning/computer-literacy-for-mac-3/welcome?u=75842122',
                    label: 'Computer Literacy for Mac',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/logistic-regression-in-r-and-excel/welcome?u=75842122',
                    label: 'Logistic Regression in R and Excel',
                    weighting: ['Advanced']
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
                    link: 'https://www.linkedin.com/learning/learning-iphone-and-ipad-security-2/welcome?u=75842122',
                    label: 'Learning iPhone and iPad Security',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/picking-the-right-chart-for-your-data/welcome?u=75842122',
                    label: 'Picking the Right Chart for Your Data',
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
                    link: 'https://www.linkedin.com/learning/android-tips-and-tricks-2/welcome?u=75842122',
                    label: 'Android Tips and Tricks',
                    weighting: ['Intermediate']
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
                    link: 'https://www.linkedin.com/learning/learning-linkedin-2021/get-started-with-linkedin?u=75842122',
                    label: 'Learning LinkedIn',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/google-apps-tips-tricks-and-techniques/anyone-can-be-a-google-power-user?u=75842122',
                    label: 'Google Apps: Tips, Tricks, and Techniques',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/online-searching-tips-and-tricks/the-data-you-need-is-just-a-few-clicks-away?u=75842122',
                    label: 'Online Searching Tips and Tricks',
                    weighting: ['General']
                },
                {
                    link: 'https://www.linkedin.com/learning/nvivo-2018-essential-training/welcome?u=75842122',
                    label: 'NVivo 2018 Essential Training',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/information-literacy/welcome?u=75842122',
                    label: 'Information Literacy',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/endnote-essential-training/welcome?u=75842122',
                    label: 'EndNote Essential Training',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/academic-research-foundations-quantitative/welcome?u=75842122',
                    label: 'Academic Research Foundations: Quantitative',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/spss-for-academic-research/welcome?u=75842122',
                    label: 'SPSS for Academic Research',
                    weighting: ['Beginner']
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
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-pc-maintenance-and-performance-2/pc-maintenance-for-performance?u=75842122',
                    label: 'Learning PC Maintenance and Performance',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/it-security-foundations-core-concepts-2/tech-savvy-tech-safe?u=75842122',
                    label: 'IT Security Foundations: Core Concepts',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/the-benefits-of-managing-and-maintaining-windows-10?u=75842122',
                    label: 'Windows 10: Manage and Maintain Windows 10',
                    weighting: ['Intermediate']
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
                    link: 'https://www.linkedin.com/learning/learning-wi-fi/learning-wi-fi?u=75842122',
                    label: 'Learning Wi-Fi',
                    weighting: ['Beginner']
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
                    link: 'https://www.linkedin.com/learning/web-security-user-authentication-and-access-control/best-practices-for-user-authentication-and-access-control?u=75842122',
                    label: 'Web Security: User Authentication and Access Control',
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
                },
                {
                    link: 'https://www.linkedin.com/learning/security-matters-to-everyone/why-is-security-so-important?u=75842122',
                    label: 'Security Matters (To Everyone)',
                    weighting: ['Beginner', 'Intermediate']
                }
            ]}
        />
    )
}

export default ProficiencyAndProductivity;