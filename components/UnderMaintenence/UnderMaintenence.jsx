// pages/maintenance.js
import React from 'react';
import Head from 'next/head';

const Maintenance = () => {
  return (
    <>
      <Head>
        <title>Site Under Maintenance</title>
      </Head>
      <div style={styles.container}>
        <h1 style={styles.heading}>We'll be back soon!</h1>
        <p style={styles.paragraph}>
          Sorry for the inconvenience but we're performing some maintenance at the moment. We'll
          be back online shortly!
        </p>
        <div style={styles.spinner}></div>
      </div>
    </>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    textAlign: 'center',
    padding: '0 20px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#111827',
  },
  paragraph: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    color: '#6b7280',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '6px solid #e5e7eb',
    borderTopColor: '#3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};

// Adding keyframes for spinner animation
const styleSheet = typeof document !== 'undefined' ? document.styleSheets[0] : null;
if (styleSheet) {
  const keyframes =
    `@keyframes spin {
      to { transform: rotate(360deg); }
    }`;
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

export default Maintenance;
