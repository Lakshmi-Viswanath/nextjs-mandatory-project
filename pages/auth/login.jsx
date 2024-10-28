import { useState } from 'react';
import { useAuth } from '@/pages/context/AuthContext';
import { useRouter } from 'next/router';
import styles from '@/styles/auth/Login.module.css'; 
import Link from 'next/link';

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    router.push('/product');
  };

  return (
    <div className={styles.wrapper}>
        <div className={styles.formContainer}>
          <h2>Login to Your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="***************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.btn}>Log in</button>
          </form>
          <div className={styles.signupLink}>
            <p>Don't have an account? <Link href="/auth/register">Sign up</Link></p>
          </div>
        </div>
    </div>
  );
}
