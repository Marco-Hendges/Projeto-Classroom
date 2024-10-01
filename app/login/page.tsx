// app/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Importando useRouter para redirecionar
import styles from './login.module.css';  // Importando o CSS module

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);  // Para exibir erros de autenticação
  const router = useRouter();  // Hook para redirecionar

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);  // Reseta o erro anterior, se houver

    try {
      const response = await fetch('http://localhost:4000/login', {  // Use a URL completa do backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.success) {
          // Salva o userId no localStorage
          localStorage.setItem('userId', data.user.id);
          // Redireciona para a página Home
          router.push('/home');
      } else {
          setError(data.error || 'Falha no login');
      }
    } catch (err) {
      setError('Ocorreu um erro inesperado. Tente novamente mais tarde.');
      console.error(err);
    }
  };

  return (
    <div className={styles.loginContainer}>
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <h2 className={styles.loginTitle}>Login</h2>

      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={styles.loginInput}
      />

      <input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className={styles.loginInput}
      />

      {error && <p className={styles.errorMessage}>{error}</p>}  {/* Exibe a mensagem de erro */}

      <button type="submit" className={styles.loginButton}>Entrar</button>
    </form>
  </div>
  );
};

export default Login;
