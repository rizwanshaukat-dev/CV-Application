import "../styles/cvpreview.css";
export default function CVPreview({ generalInfo, education, experience }) {
    return (
        <div className="cv-container">
            <div className="general-info-container">
                <div className="heading">
                    <h1 className="heading-title">{generalInfo.firstName} {generalInfo.lastName}</h1>
                    <h3 className="job-title">{experience.position}</h3>
                </div>
                <hr />
                <div className="general-content">
                    <p className="phone-title">{generalInfo.phone}</p>
                    <p className="email-title">{generalInfo.email}</p>
                </div>
            </div>
            <div className="experience-container">
                <h2 className="experience-title">Experience</h2>
                <div className="experience-header">
                    <div className="role-company">
                        <h3 className="role-title">{experience.position}</h3>
                        <h4 className="company-title">{experience.company}</h4>
                    </div>
                    <div className="date-container">
                        <p className="date">
                            {experience.startDate} - {experience.endDate || "present"}
                        </p>
                    </div>
                </div>
                <div className="experience-content">
                    <ul className="experience-description">{
                        experience.responsibility
                            .split(/[.!?]\s+/) 
                            .filter(line => line.trim() !== "")
                            .map((line, index) => {
                                const cleanLine = line.endsWith('.') ? line : `${line}.`;
                                return <li key={index}>{cleanLine}</li>;
                            })}</ul>
                </div>
            </div>
            <hr />
            <div className="education-container">
                <h2 className="education-title">Education</h2>
                <div className="education-content">
                    <div className="degree-school">
                        <h3 className="program-title">{education.titleOfStudy}</h3>
                        <h4 className="institute-title">{education.schoolName}</h4>
                    </div>
                    <div className="date-container">
                        <p className="date">
                            {education.startDate} - {education.endDate || "present"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}