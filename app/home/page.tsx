// app/home.tsx
import React from 'react';
import styles from './home.module.css';

const Home: React.FC = () => {
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
                rel="stylesheet"
            />
            <header>
                <nav className={styles.navbar}>
                    <section className={styles.navbarBrand}>
                        <span className="material-icons menu-icon">menu</span>
                        <img
                            className={styles.brandLogo}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                            alt="Google Logo"
                        />
                        <span className={styles.brandText}>Sala de Aula</span>
                    </section>
                    <section className={styles.navbarMenu}>
                        <span className="material-icons add-icon">add</span>
                        <span className="material-icons apps-icon">apps</span>
                        <span className={`material-icons big-img ${styles.accountIcon}`}>
                            account_circle
                        </span>
                    </section>
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
                    {/* Repetir o bloco de cards conforme necessário */}
                    {['Computer Networks', 'OOPS', 'DBMS', 'AI', 'C Programming', 'OOPS Lab', 'DBMS Lab', 'AI Lab', 'C Lab'].map((subject, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.cardHeader}>
                                <h1 className={styles.subjectName}>{subject}</h1>
                                <h2 className={styles.section}>CSE B</h2>
                                <h3 className={styles.teacherName}>{`${index % 2 === 0 ? 'John' : 'Jane'} Doe`}</h3>
                                <span className={`material-icons ${styles.teacherIcon}`}>person</span>
                            </div>
                            <div className={styles.cardBody}></div>
                            <div className={styles.cardFooter}>
                                <span className="material-icons-outlined assignment-icon">assignment_ind</span>
                                <span className="material-icons-outlined folder-icon" style={{paddingLeft: '10px'}}>folder</span>
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
