'use client';  // Adicione esta linha

import React, { useEffect, useState } from 'react';
import styles from './home.module.css';

interface Class {
    id: number;
    name: string;
    teacher: {
        id: number;
        name: string;
        photo: string;
    };
}

const Home: React.FC = () => {
    const [classes, setClasses] = useState<Class[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const userId = localStorage.getItem('userId');

        if (userId) {
            fetch(`http://localhost:4000/home/${userId}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        setClasses(data.data);
                    } else {
                        setError(data.error || 'Erro ao buscar as classes');
                    }
                })
                .catch((err) => {
                    console.error(err);
                    setError('Ocorreu um erro ao buscar as classes');
                });
        } else {
            setError('Usuário não encontrado');
        }
    }, []);

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
                rel="stylesheet"
            />
            <header>
                <nav className={styles.navbar}>
                    <div className={styles.navbarBrand}>
                        <span className="material-icons menu-icon">menu</span>
                        <div className={styles.headerNome}>
                            <img src="https://www.gstatic.com/classroom/web/10th_anniversary.png" className={styles.brandLogo} alt="Logotipo de aniversário de 10 anos do Google Sala de Aula com um chapéu de festa e balões animados" data-iml="1543" />
                            <span className={styles.brandText}>Google Sala de Aula</span>
                        </div>
                    </div>
                    <div className={styles.navbarMenu}>
                        <span className={`material-icons add-icon ${styles.marginIcon}`}>add</span>
                        <span className={`material-icons add-icon ${styles.marginIcon}`}>apps</span>
                        <span className={`material-icons big-img ${styles.accountIcon}`}>
                            account_circle
                        </span>
                    </div>
                </nav>
            </header>
            <main className={styles.main}>
                <section className={styles.secondaryHeader}>
                    <div className={styles.secondaryIconContainer}>
                        <span className="material-icons-outlined">fact_check</span>
                        <span className={styles.secondaryIconText}>Pendentes</span>
                    </div>
                    <div className={styles.secondaryIconContainer}>
                        <span className="material-icons calender-icon">calendar_today</span>
                        <span className={styles.secondaryIconText}>Agenda</span>
                    </div>
                </section>
                <section className={styles.cardSection}>
                    {error && <p className={styles.errorMessage}>{error}</p>}
                    {classes.map((subject) => (
                        <div className={styles.card} key={subject.id}>
                            <div className={styles.cardHeader}>
                                <h1 className={styles.subjectName}>{subject.name}</h1>
                                <h3 className={styles.teacherName}>{subject.teacher.name}</h3>
                                <img
                                    src={`http://localhost:4000/images/${subject.teacher.photo}`}
                                    alt={`Foto do(a) professor(a) ${subject.teacher.name}`}
                                    className={styles.teacherIcon}
                                />
                            </div>
                            <div className={styles.cardBody}></div>
                            <div className={styles.cardFooter}>
                                <span className="material-icons-outlined assignment-icon">
                                    assignment_ind
                                </span>
                                <span
                                    className="material-icons-outlined folder-icon"
                                    style={{ paddingLeft: '10px' }}
                                >
                                    folder
                                </span>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <span className={`material-icons ${styles.helpIcon}`}>help_outline</span>
        </>
    );
};

export default Home;
