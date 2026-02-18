import React, { useState } from 'react';
import './Projects.css';

import firstP1 from '../assets/img/project/p1-1.jpg'
import firstP2 from '../assets/img/project/p1-2.jpg'
import firstP3 from '../assets/img/project/p1-3.jpg'
import firstP4 from '../assets/img/project/p1-4.jpg'

import thirdP1 from '../assets/img/project/p3-1.png'
import thirdP2 from '../assets/img/project/p3-2.png'
import thirdP3 from '../assets/img/project/p3-3.png'

const Projects = () => {
    const projects = [
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
        },
        {
            id: 2,
            title: 'Information System (IS) - Web Application',
            description: 'A comprehensive web-based information system built with Microsoft Azure services. Features include report generation, contract management, and document handling. The system provides excel export capabilities and uses RDLC for advanced reporting. Utilizes stored procedures for optimized database operations.',
            technologies: ['VB.NET', 'ASP.NET', 'jQuery', 'JavaScript', 'Bootstrap', 'CSS', 'MySQL', 'Azure', 'RDLC', 'Excel Generation'],
            images: [
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
                'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop'
            ]
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
            <div className="container">
                <h2>My Projects</h2>
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card" onClick={() => openModal(project, 0)}>
                            <div className="project-image">
                                <img src={project.images[0]} alt={project.title} />
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="technologies">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {isOpen && currentProject && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
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
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;