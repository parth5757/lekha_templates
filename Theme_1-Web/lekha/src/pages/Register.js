import React from 'react';

const Register = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f9f9f9' }}>
      <div style={{ width: '400px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#32CD32', marginBottom: '20px' }}>lekha</h1>
        <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Create your account</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px' }}>Welcome! Please fill in your details to sign up.</p>
        <form>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
            <input type="text" placeholder="Enter your name" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
            <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password</label>
            <input type="password" placeholder="Enter your password" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#32CD32', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
            Sign Up
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '15px', color: '#666' }}>
          Already have an account? <a href="/login" style={{ color: '#32CD32', textDecoration: 'none' }}>Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Register;