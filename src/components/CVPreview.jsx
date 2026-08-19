import "../styles/cvpreview.css";
import phoneIcon from "../assets/phone.png";
import mailIcon from "../assets/mail.png";
export default function CVPreview({ generalInfo, education, experience }) {
    return (
        <div className="cv-container">
            <div className="general-info-container">
                <div className="heading">
                    <h1 className="heading-title">{generalInfo.firstName} {generalInfo.lastName}</h1>
                    <h3 className="job-title">{generalInfo?.role}</h3>
                </div>
                <hr />
                <div className="general-content">
                    <div className="phone-wrapper">
                    <img src={phoneIcon} alt="phone-icon" />
                    <p className="phone-title">{generalInfo.phone} | </p>
                    </div>
                    <div className="email-wrapper">
                    <img src={mailIcon} alt="mail-icon" />
                    <p className="email-title">{generalInfo.email}</p>
                    </div>
                </div>
            </div>
            <h2 className="experience-title">Experience</h2>
            {experience.map((experienceItem, index) =>
                <div className="experience-container" key={index}>
                    <div className="experience-header">
                        <div className="role-company">
                            <h3 className="role-title">{experienceItem.position}</h3>
                            <h4 className="company-title">{experienceItem.company}</h4>
                        </div>
                        <div className="date-container">
                            <p className="date">
                                {experienceItem.startDate} - {experienceItem.endDate || "present"}
                            </p>
                        </div>
                    </div>
                    <div className="experience-content">
                        <h4 className="responsibility-title">Responsibilities:</h4>
                        <ul className="experience-description">{
                            experienceItem.responsibility
                                ?.split(/[.!?]\s+/)
                                .filter(line => line.trim() !== "")
                                .map((line, index) => {
                                    const cleanLine = line.endsWith('.') ? line : `${line}.`;
                                    return <li key={index}>{cleanLine}</li>;
                                })}</ul>
                    </div>
                </div>
            )}
            <hr />
            <h2 className="education-title">Education</h2>
            {education.map((educationItem, index) =>
                <div className="education-container" key={index}>
                    <div className="education-content">
                        <div className="degree-school">
                            <h3 className="program-title">{educationItem.titleOfStudy}</h3>
                            <h4 className="institute-title">{educationItem.schoolName}</h4>
                        </div>
                        <div className="date-container">
                            <p className="date">
                                {educationItem.startDate} - {educationItem.endDate || "present"}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}