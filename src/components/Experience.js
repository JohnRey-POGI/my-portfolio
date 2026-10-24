import { Container } from "react-bootstrap";
import "./Experience.css";

const EXPERIENCES = [
    {
        role: 'Junior System Developer & Technical Support',
        company: 'Inland Corporation',
        period: 'May 2026 – Present',
        note: 'Regular employee since October 2026',
        points: [
            'Converted 5 legacy desktop applications into web apps to replace Remote Desktop access; all 5 are now in user testing ahead of rollout',
            'Took part in the company\'s SAP Business One version upgrade',
            'Helped migrate on-premise servers to the AWS cloud',
            'Built an AI-assisted ticketing system to track the AWS migration, including deployment and SSL certificate setup',
            'Handles basic SAP B1 administration and studies how in-house applications integrate with SAP',
            'Provides technical support and troubleshooting for users across the company'
        ]
    },
    {
        role: 'Full-Stack Developer (IT Assistant for Software Developer)',
        company: 'Unitra Maritime Manila Inc.',
        period: 'June 2022 – December 2025',
        points: [
            'Developed and maintained enterprise ASP.NET web applications',
            'Designed responsive UI using AJAX, JavaScript, and Bootstrap',
            'Optimized backend logic and SQL stored procedures, improving system performance',
            'Developed and customized SSRS reports for operational and management use',
            'Refactored legacy code and added data validation and logging for reliability',
            'Collaborated with third-party developers on system upgrades and integrations',
            'Assisted in deployment and cloud hosting via Azure Web Apps',
            'Provided technical support and resolved live system issues'
        ]
    },
    {
        role: 'IT Support Intern',
        company: 'Makati Health Department',
        period: 'February 2020 – March 2020',
        points: [
            'Developed an automated Windows-based reporting system',
            'Maintained and updated a Microsoft Access database',
            'Provided technical support and troubleshooting for staff'
        ]
    }
];

const EVENTS = [
    {
        title: 'SAP Connect Day (attended twice)',
        place: 'BGC, Taguig',
        description: 'SAP Business One partner and customer events covering new features, cloud deployment, and integrations.'
    },
    {
        title: 'AWS Kiro AI Live Demo',
        place: 'AWS event',
        description: 'Live demonstration of Kiro, AWS\'s AI-powered IDE for spec-driven development.'
    }
];

export const Experience = () => {
    return (
        <section className="experience" id="experience">
            <div className="section-content">
                <Container>
                    <h2>Experience</h2>
                    <div className="timeline">
                        {EXPERIENCES.map((exp) => (
                            <div key={exp.company} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-card">
                                    <span className="timeline-period">{exp.period}</span>
                                    <h3>{exp.role}</h3>
                                    <h4>{exp.company}</h4>
                                    {exp.note && <span className="timeline-note">{exp.note}</span>}
                                    <ul>
                                        {exp.points.map((point) => (
                                            <li key={point}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 className="events-title">Events & Learning</h3>
                    <div className="events-grid">
                        {EVENTS.map((event) => (
                            <div key={event.title} className="event-card">
                                <h4>{event.title}</h4>
                                <span className="event-place">{event.place}</span>
                                <p>{event.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </section>
    );
};
