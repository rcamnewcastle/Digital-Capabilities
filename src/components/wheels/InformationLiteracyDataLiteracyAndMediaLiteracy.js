import React from "react";
import ResourceLinks from "../ResourceLinks";

const InformationLiteracyDataLiteracyAndMediaLiteracy = (props) => {

    return(
        <ResourceLinks
            // what the user scored in this section
            score={props.score}

            // these resource links will be managed and selected accordingly
            resourceData={[
                {
                    link: 'https://www.linkedin.com/learning/statistics-foundations-the-basics/the-beginning-of-your-statistics-journey?u=75842122',
                    label: 'Statistics Foundations: The Basics',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-creating-a-basic-dashboard/welcome?u=75842122',
                    label: 'Excel: Creating a Basic Dashboard',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-advanced-formulas-and-functions/use-the-most-powerful-formulas-and-functions-in-excel?u=75842122',
                    label: 'Excel: Advanced Formulas and Functions',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-data-analytics-1-foundations/learning-to-identify-data?u=75842122',
                    label: 'Learning Data Analytics: 1 Foundations',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-2019-essential-training/getting-started-with-excel?u=75842122',
                    label: 'Excel 2019 Essential Training',
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
                    link: 'https://www.linkedin.com/learning/data-fluency-exploring-and-describing-data/gather-greater-insight-and-make-better-decisions-with-your-data?u=75842122',
                    label: 'Data Fluency: Exploring and Describing Data',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/data-science-foundations-data-mining-in-python/python-for-data-mining?autoAdvance=true&autoSkip=false&autoplay=true&resume=true&u=75842122',
                    label: 'Data Science Foundations: Data Mining in Python',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-statistics-essential-training-1-2/what-is-data?u=75842122',
                    label: 'Excel Statistics Essential Training: 1',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/topics/business-software-and-tools?u=75842122',
                    label: 'Power Apps: Building Data-Driven Apps',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-tips-weekly/conversion-of-values-into-binary-octal-decimal-and-hexadecimal-equivalents?u=75842122',
                    label: 'Excel Tips Weekly',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-excel-desktop-office-365-microsoft-365/what-you-need-to-know?u=75842122',
                    label: 'Learning Excel Desktop (Office 365/Microsoft 365)',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/data-science-foundations-python-scientific-stack/welcome?u=75842122',
                    label: 'Data Science Foundations: Python Scientific Stack',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/excel-analytics-tips/about-the-pro-tip-series?u=75842122',
                    label: 'Excel: Analytics Tips',
                    weighting: ['Intermediate']
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
                    link: 'https://www.linkedin.com/learning/topics/business-software-and-tools?u=75842122',
                    label: 'Learning Data Analytics',
                    weighting: ['Beginner']
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
                    link: 'https://www.linkedin.com/learning/data-visualization-in-r-with-ggplot2/welcome?u=75842122',
                    label: 'Data Visualization in R with ggplot2',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/data-visualization-for-data-analysis-and-analytics/moving-from-analysis-to-visualization?u=75842122',
                    label: 'Data Visualization for Data Analysis and Analytics',
                    weighting: ['Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/learning-instagram-2/follow-other-users-and-hashtags?u=75842122',
                    label: 'Learning Instagram',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/data-analytics-for-students/what-is-the-value-of-data?u=75842122',
                    label: 'Data Analytics for Students',
                    weighting: ['Beginner']
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
                    link: 'https://www.linkedin.com/learning/icloud-essential-training-3/create-an-icloud-account?u=75842122',
                    label: 'iCloud Essential Training',
                    weighting: ['Beginner', 'Intermediate']
                },
                {
                    link: 'https://www.linkedin.com/learning/pandas-essential-training/welcome?u=75842122',
                    label: 'pandas Essential Training',
                    weighting: ['Intermediate']
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
                    link: 'https://www.linkedin.com/learning/logistic-regression-in-r-and-excel/welcome?u=75842122',
                    label: 'Logistic Regression in R and Excel',
                    weighting: ['Advanced']
                },
                {
                    link: 'https://www.linkedin.com/learning/picking-the-right-chart-for-your-data/welcome?u=75842122',
                    label: 'Picking the Right Chart for Your Data',
                    weighting: ['Beginner']
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
                    link: 'https://www.linkedin.com/learning/creating-and-managing-a-youtube-channel-2/how-do-you-create-and-maintain-a-youtube-channel?u=75842122',
                    label: 'Creating and Managing a YouTube Channel',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/online-video-content-strategy/terms-and-concepts?u=75842122',
                    label: 'Online Video Content Strategy',
                    weighting: ['Beginner']
                },
                {
                    link: 'https://www.linkedin.com/learning/web-security-user-authentication-and-access-control/best-practices-for-user-authentication-and-access-control?u=75842122',
                    label: 'Web Security: User Authentication and Access Control',
                    weighting: ['Intermediate']
                }
            ]}
        />
    )
}

export default InformationLiteracyDataLiteracyAndMediaLiteracy;