import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import { TicketPerforated, CloudArrowUp, WindowStack, FileEarmarkBarGraph } from "react-bootstrap-icons";
import './Projects.css';

import Modal from './Modal'; // Import our new portal-based modal

import firstP1 from '../assets/img/project/p1-1.jpg'
import firstP2 from '../assets/img/project/p1-2.jpg'
import firstP3 from '../assets/img/project/p1-3.jpg'
import firstP4 from '../assets/img/project/p1-4.jpg'

import thirdP1 from '../assets/img/project/p3-1.png'
import thirdP2 from '../assets/img/project/p3-2.png'
import thirdP3 from '../assets/img/project/p3-3.png'

export const Projects = () => {
    const projects = [
        {
            id: 4,
            title: 'AWS Migration Ticketing System',
            description: "An internal ticketing system built specifically for Inland Corporation's AWS migration, used to log, assign, and track migration issues and requests. Developed with AI-assisted tooling and deployed with an SSL certificate for secure HTTPS access.",
            technologies: ['Web App', 'AI-Assisted Development', 'SSL Certificate', 'Deployment'],
            icon: TicketPerforated,
            images: []
        },
        {
            id: 5,
            title: 'SAP Business One Upgrade & AWS Cloud Migration',
            description: "Took part in upgrading the company's SAP Business One to a newer version and moving its on-premise servers to the AWS cloud. Covered basic SAP B1 administration and how in-house applications connect and integrate with SAP.",
            technologies: ['SAP Business One', 'AWS EC2', 'Cloud Migration', 'SAP Administration', 'SAP Integration'],
            icon: CloudArrowUp,
            images: []
        },
        {
            id: 6,
            title: 'Legacy Application Modernization',
            description: "Converted 5 of Inland Corporation's legacy desktop applications into web apps. Staff previously reached these apps only through Remote Desktop; the new versions run in the browser and are easier to maintain and access. All 5 are currently in user testing before official rollout.",
            technologies: ['Web App', 'Legacy Modernization', 'Remote Desktop Replacement', 'Full-Stack Development'],
            icon: WindowStack,
            images: []
        },
        {
            id: 2,
            title: 'Information System (IS) - Web Application',
            description: 'A comprehensive web-based information system built with Microsoft Azure services. Features include report generation, contract management, and document handling. The system provides excel export capabilities and uses RDLC for advanced reporting. Utilizes stored procedures for optimized database operations.',
            technologies: ['VB.NET', 'ASP.NET', 'jQuery', 'JavaScript', 'Bootstrap', 'CSS', 'MySQL', 'Azure', 'RDLC', 'Excel Generation'],
            icon: FileEarmarkBarGraph,
            images: []
        },
        {
            id: 3,
            title: 'WordPress CMS with Custom Enhancements',
            description: 'A WordPress-based content management system using Elegant theme with custom CSS modifications and Google Maps API integration. The customizations address layout limitations and provide enhanced location-based features for improved user experience.',
            technologies: ['WordPress', 'Elegant Theme', 'Custom CSS', 'Google Maps API'],
            images: [
                thirdP1,
                thirdP2,
                thirdP3
            ]
        },
        {
            id: 1,
            title: 'Game Development - Unity & C#',
            description: 'An unlockables-type game developed with Unity and C# backend. This project showcases game mechanics, progression systems, and interactive gameplay features with a robust unlock system for players to achieve and discover.',
            technologies: ['Unity', 'C#', 'Blender', 'Photoshop', 'Filmora'],
            images: [
                firstP1,
                firstP2,
                firstP3,
                firstP4
            ]
        }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (project, startIndex = 0) => {
        setCurrentProject(project);
        setCurrentIndex(startIndex);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentProject(null);
        setCurrentIndex(0);
    };

    const nextImage = (e) => {
        e && e.stopPropagation();
        if (!currentProject) return;
        setCurrentIndex((idx) => (idx + 1) % currentProject.images.length);
    };

    const prevImage = (e) => {
        e && e.stopPropagation();
        if (!currentProject) return;
        setCurrentIndex((idx) => (idx - 1 + currentProject.images.length) % currentProject.images.length);
    };

    return (
        <section id="projects" className="projects">
            <div className="section-content">
                <Container>
                    <h2>My Projects</h2>
                    <div className="projects-grid">
                        {projects.map(project => {
                            const hasImages = project.images.length > 0;
                            const Icon = project.icon;
                            return (
                            <div key={project.id} className={`project-card ${hasImages ? 'clickable' : ''}`} onClick={() => hasImages && openModal(project, 0)}>
                                <div className="project-image">
                                    {hasImages
                                        ? <img src={project.images[0]} alt={project.title} />
                                        : <div className="project-placeholder">{Icon && <Icon size={64} />}</div>}
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="technologies">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                {project.link && (
                                    <div className="project-links">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Visit Live Site</a>
                                    </div>
                                )}
                            </div>
                            );
                        })}
                    </div>

                    <Modal isOpen={isOpen && !!currentProject} onClose={closeModal}>
                        {currentProject && (
                            <>
                                <div className="modal-image-wrap">
                                    <img src={currentProject.images[currentIndex]} alt={`${currentProject.title} preview ${currentIndex + 1}`} />
                                </div>
                                <div className="modal-controls">
                                    <button className="modal-prev" onClick={prevImage} aria-label="Previous image">‹ Prev</button>
                                    <button className="modal-next" onClick={nextImage} aria-label="Next image">Next ›</button>
                                </div>
                                {currentProject.images.length > 1 && (
                                    <div className="modal-counter">{currentIndex + 1} / {currentProject.images.length}</div>
                                )}
                            </>
                        )}
                    </Modal>
                </Container>
            </div>
        </section>
    );
};