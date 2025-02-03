
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { handleGoogleAuth } from '@/redux/slices/authSlice';
import { toast } from "react-toastify";
import { handleCallback } from '@/api/auth';
import { Container, Row, Col, Spinner, Card, ProgressBar } from 'react-bootstrap';

const AuthCallback = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 20;
        return newProgress >= 90 ? 90 : newProgress;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const processCallback = async () => {
      try {
        // Extract token from URL
        const params = new URLSearchParams(window.location.search);
        const hashParams = new URLSearchParams(window.location.hash.replace('#', '?'));
        
        let accessToken = params.get('access_token') || hashParams.get('access_token');
        
        if (!accessToken) {
          throw new Error('No access token found');
        }

        // First set cookies by calling the callback endpoint
        const callbackResult = await handleCallback(accessToken, 'google');
        
        // Then update Redux state
        await dispatch(handleGoogleAuth({
          accessToken,
          provider: 'google'
        })).unwrap();

        setProgress(100);
        toast.success('Successfully logged in!');
        router.push('/dashboard');
      } catch (error) {
        console.error('Callback processing error:', error);
        setError(error.message);
        toast.error(error.message || 'Authentication failed');
        router.push('/login');
      }
    };

    processCallback();
  }, [dispatch, router]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 p-4 rounded-lg text-center">
          <h2 className="text-red-700 font-semibold mb-2">Authentication Error</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <Container fluid className="min-h-screen bg-gradient-to-b from-blue-50 to-white" style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
    <Row className="justify-content-center align-items-center min-h-screen">
      <Col xs={12} md={6} lg={4}>
        <Card className="border-0 shadow-lg p-4 bg-white bg-opacity-90 backdrop-blur">
          <Card.Body className="text-center">
            <div className="mb-4">
              <Spinner
                animation="border"
                variant="primary"
                style={{ 
                  width: '3rem', 
                  height: '3rem',
                  borderWidth: '0.25em'
                }}
                className="mb-3"
              />
              
              <div className="mt-4 mb-3">
                <ProgressBar 
                  now={progress} 
                  variant="primary"
                  className="mb-3"
                  style={{ height: '0.5rem' }}
                />
              </div>

              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                Authenticating
              </h2>
              
              <div className="flex justify-center mb-3">
                <div className="loading-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>

              <p className="text-gray-600 mb-0">
                Please wait while we verify your credentials
              </p>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <style jsx>{`
      .loading-dots {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
      }

      .dot {
        width: 8px;
        height: 8px;
        background-color: #3b82f6;
        border-radius: 50%;
        display: inline-block;
        animation: bounce 1.4s infinite ease-in-out;
      }

      .dot:nth-child(1) {
        animation-delay: -0.32s;
      }

      .dot:nth-child(2) {
        animation-delay: -0.16s;
      }

      @keyframes bounce {
        0%, 80%, 100% {
          transform: scale(0);
        }
        40% {
          transform: scale(1);
        }
      }

      .min-h-screen {
        min-height: 100vh;
      }

      .backdrop-blur {
        backdrop-filter: blur(8px);
      }

      /* Custom progress bar styling */
      :global(.progress) {
        background-color: #e2e8f0;
        border-radius: 9999px;
        overflow: hidden;
      }

      :global(.progress-bar) {
        transition: width 0.5s ease;
        background-color: #3b82f6;
      }
    `}</style>
  </Container>
  );
};

export default AuthCallback;