import React from 'react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/lekha.svg';
import '../App.css'

const Login = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form
        style={{
          width: '360px',
          backgroundColor: theme.background,
          padding: '2rem',
          //borderRadius: '12px', 
          // boxShadow: '0 0 12px rgba(0,0,0,s0.05)',
        }}
      >
        <img src={logo} alt='lekha logo' style={{ margin: '0% 18%', justifyContent:'center', alignItems: 'center',  height:'60px' }}/>
        <h2 style={{ textAlign: 'center' }}>Log in to your account</h2>
        {/* <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'black'   }}>
          Welcome back! Please enter your details.
        </p> */}

        <label>Username</label>
        <br />
        <input
          type="text"
          name = "username"
          placeholder="Enter your username"
          style={{
            width: '100%',
            padding: '10px',
            margin: '6px 0 16px 0',
            border: `1px solid ${theme.secondary}`,
            borderRadius: '8px',
          }}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="••••••••"
          style={{
            width: '100%',
            padding: '10px',
            margin: '6px 0 12px 0',
            border: `1px solid ${theme.secondary}`,
            borderRadius: '8px',
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
          <label>
            <input type="checkbox" /> Remember for 30 days
          </label>
          <a href="/" style={{ color: '#0066FF' }}>
            Forgot password
          </a>
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            marginTop: '16px',
            padding: '10px',
            backgroundColor: theme.primary,
            color: '#FFFFFF',
            fontWeight: 'bold',
            borderRadius: '8px',
            border: 'none',
          }}
        >
          Sign in
        </button>

        <p style={{ textAlign: 'center', marginTop: '16px' }}>
          Don’t have an account?{' '}
          <a href="/" style={{ color: '#0066FF' }}>
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;