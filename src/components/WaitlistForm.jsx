import { useState } from 'react'
import { supabase } from '../supabase'
import logo from '../../assets/logo.jpeg'
import logoText from '../../assets/logo_text.png'

// Initial waitlist signup component
const WaitlistSignup = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim() && email.includes('@')) {
      onSubmit(email)
    }
  }

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#000000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem 1rem 6rem 1rem',
      position: 'relative'
    },
    content: {
      width: '100%',
      maxWidth: '28rem',
      textAlign: 'center'
    },
    logoSection: {
      marginBottom: '2rem'
    },
    logoBox: {
      width: '7rem',
      height: '7rem',
      margin: '0 auto 0rem',
      borderRadius: '0.5rem',
      overflow: 'hidden'
    },
    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    logoTextImage: {
      height: '1.75rem',
      objectFit: 'contain'
    },
    heading: {
      color: 'white',
      fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
      fontWeight: '300',
      marginBottom: '2.5rem',
      lineHeight: '1.1',
      fontFamily: 'Helvetica, Arial, sans-serif',
      whiteSpace: 'nowrap'
    },
    formContainer: {
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    },
    inputContainer: {
      display: 'flex',
      backgroundColor: '#282828',
      borderRadius: '9999px',
      overflow: 'hidden',
      minWidth: '40rem'
    },
    input: {
      flex: 1,
      backgroundColor: 'transparent',
      color: 'white',
      padding: '0.75rem 1.5rem',
      outline: 'none',
      border: 'none',
      fontSize: '1rem'
    },
    inputPlaceholder: {
      color: '#9CA3AF'
    },
    button: {
      backgroundColor: '#FFF4EB',
      color: 'black',
      padding: '0.75rem 2rem',
      fontWeight: '600',
      fontSize: '0.875rem',
      letterSpacing: '0.05em',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: 'Helvetica, Arial, sans-serif',
      borderRadius: '9999px',
      margin: '0.25rem'
    },
    buttonHover: {
      backgroundColor: 'black',
      color: '#FFF4EB'
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '1rem',
      backgroundColor: '#FFF4EB'
    },
    footerText: {
      textAlign: 'center',
      color: 'black',
      fontSize: '0.875rem',
      letterSpacing: '0.1em'
    },
    footerBold: {
      fontWeight: 'bold'
    }
  }

  return (
    <div style={styles.container} className="mobile-container">
      <div style={styles.content} className="mobile-content">
        {/* Logo */}
        <div style={styles.logoSection}>
          <div style={styles.logoBox} className="mobile-logo-box">
            <img src={logo} alt="Athens Logo" style={styles.logoImage} />
          </div>
          <img src={logoText} alt="Athens" style={styles.logoTextImage} className="mobile-logo-text" />
        </div>

        {/* Main heading */}
        <h2 style={styles.heading} className="mobile-heading">
          Get early access
        </h2>

        {/* Email input */}
        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={styles.inputContainer}>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                style={styles.input}
                required
              />
              <button
                type="submit"
                style={styles.button}
                className="mobile-button"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = styles.buttonHover.backgroundColor
                  e.target.style.color = styles.buttonHover.color
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#FFF4EB'
                  e.target.style.color = 'black'
                }}
              >
                JOIN WAITLIST
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom tagline with beige stripe */}
      <div style={styles.footer} className="mobile-footer">
        <p style={styles.footerText}>
          PIVOTING TECHNOLOGY TO LEARN <span style={styles.footerBold}>PERFECTLY</span>
        </p>
      </div>
    </div>
  )
}

// Success state component
const WaitlistSuccess = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#000000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem 1rem 6rem 1rem',
      position: 'relative'
    },
    content: {
      width: '100%',
      maxWidth: '28rem',
      textAlign: 'center'
    },
    logoSection: {
      marginBottom: '2rem'
    },
    logoBox: {
      width: '6rem',
      height: '6rem',
      margin: '0 auto 1rem',
      borderRadius: '0.5rem',
      overflow: 'hidden'
    },
    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    logoTextImage: {
      height: '1.5rem',
      objectFit: 'contain'
    },
    heading: {
      color: 'white',
      fontSize: 'clamp(3rem, 8vw, 4rem)',
      fontWeight: '300',
      marginBottom: '2rem',
      lineHeight: '1.1',
      fontFamily: 'Helvetica, Arial, sans-serif'
    },
    message: {
      color: '#D1D5DB',
      fontSize: '1.125rem',
      lineHeight: '1.6',
      marginBottom: '4rem',
      fontFamily: 'Geist, sans-serif'
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '1rem',
      backgroundColor: '#FFF4EB'
    },
    footerText: {
      textAlign: 'center',
      color: 'black',
      fontSize: '0.875rem',
      letterSpacing: '0.1em'
    },
    footerBold: {
      fontWeight: 'bold'
    }
  }

  return (
    <div style={styles.container} className="mobile-container">
      <div style={styles.content} className="mobile-content">
        {/* Logo */}
        <div style={styles.logoSection}>
          <div style={styles.logoBox} className="mobile-logo-box">
            <img src={logo} alt="Athens Logo" style={styles.logoImage} />
          </div>
          <img src={logoText} alt="Athens" style={styles.logoTextImage} className="mobile-logo-text" />
        </div>

        {/* Success message */}
        <h2 style={styles.heading} className="mobile-heading">
          You're in.
        </h2>

        <p style={styles.message}>
          An email will be sent when our beta is released for testing.
        </p>
      </div>

      {/* Bottom tagline with beige stripe */}
      <div style={styles.footer} className="mobile-footer">
        <p style={styles.footerText}>
          PIVOTING TECHNOLOGY TO LEARN <span style={styles.footerBold}>PERFECTLY</span>
        </p>
      </div>
    </div>
  )
}

// Main component that manages state
export default function WaitlistApp() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailSubmit = async (email) => {
    setIsLoading(true)
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: email.toLowerCase().trim() }])

      if (error) {
        if (error.code === '23505') {
          // Email already exists - still show success to prevent email enumeration
          setIsSubmitted(true)
        } else {
          throw error
        }
      } else {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting email:', error)
      // For now, still show success - you might want to add error handling UI later
      setIsSubmitted(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          color: 'white',
          fontSize: '1.125rem',
          textAlign: 'center'
        }}>
          Joining waitlist...
        </div>
      </div>
    )
  }

  return (
    <>
      {!isSubmitted ? (
        <WaitlistSignup onSubmit={handleEmailSubmit} />
      ) : (
        <WaitlistSuccess />
      )}
    </>
  )
}