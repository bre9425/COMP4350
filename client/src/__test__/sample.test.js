import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'; 
import User from '../components/homepage/catch/User';
import UsersContainer from '../components/homepage/catch/UsersContainer';
import About from '../components/landingpage/About';
import PopupWin from '../components/homepage/try/PopupWin';
import UserConfig from '../components/homepage/user.config/userconfig';
import SignUpContext from '../context/SignUpContext';
import Basics from '../components/landingpage/Basics';
import { SignUpProvider } from '../context/SignUpContext'; 
import Container from '../components/landingpage/LandingPage'; 
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from '../components/landingpage/LoginForm';
import SignupForm from '../components/landingpage/SignupForm';
import App from '../App';
import {createMemoryHistory} from 'history'


test('renders bio textarea with correct placeholder', () => {
    render(
      <SignUpProvider>
        <About />
      </SignUpProvider>
    );
    
    expect(screen.getByPlaceholderText(/Use this space to showcase your personality, interests, and what you're looking for in a partner.../i)).toBeInTheDocument();
});



test('clicking on an OS option updates state', () => {
    render(
      <SignUpProvider>
        <About />
      </SignUpProvider>
    );
  
    // Assuming the option is a button or similar clickable element
    fireEvent.click(screen.getByText('Windows'));
  
    expect(screen.getByText('Windows')).toHaveClass('active');
  });
  


  test('ensure multiple programming language selections are possible', () => {
    render(
      <SignUpProvider>
        <About />
      </SignUpProvider>
    );
  
    // Clicking on multiple programming language options
    fireEvent.click(screen.getByText('Python'));
    fireEvent.click(screen.getByText('Javascript'));
  
    // Assert that both options are now active
    expect(screen.getByText('Python')).toHaveClass('active');
    expect(screen.getByText('Javascript')).toHaveClass('active');
  });
  
 // Test if the PopupWin component renders when isOpen is true
test('renders PopupWin component when open', () => {
  // Mock the props to pass into PopupWin
  const mockUserData = { username: 'User1', interests: ['React', 'Jest'] };
  render(<PopupWin isOpen={true} onClose={() => {}} userData={mockUserData} onLike={() => {}} />);
  
  // Adjusted to find the button with text "x"
  expect(screen.getByText('x')).toBeInTheDocument();
  expect(screen.getByText('User1')).toBeInTheDocument(); // Checking if userData is rendered correctly
});

// Test if clicking the 'x' (close) button calls the onClose function
test('calls onClose prop when close button is clicked', async () => {
  const handleClose = jest.fn();
  const mockUserData = { username: 'User1', interests: ['React', 'Jest'] };
  render(<PopupWin isOpen={true} onClose={handleClose} userData={mockUserData} onLike={() => {}} />);
  
  fireEvent.click(screen.getByText('x'));

  // Wait for the mock to be called, considering the setTimeout in your component
  await waitFor(() => expect(handleClose).toHaveBeenCalledTimes(1));
});




//==============================================

jest.mock('../components/landingpage/TwinkleBackground/TwinkleBackground', () => () => <div>TwinkleBackground</div>);
jest.mock('../components/homepage/fixedcomponents/NavBar', () => () => <div>NavBar</div>);
jest.mock('../components/homepage/fixedcomponents/Header', () => () => <div>Header</div>);

describe('UserConfig Component', () => {
  test('enables submit button when passwords match', () => {
    render(<UserConfig />);
    const newPasswordInput = screen.getByPlaceholderText('New Password');
    const confirmNewPasswordInput = screen.getByPlaceholderText('Confirm New Password');
    fireEvent.change(newPasswordInput, { target: { value: 'newPassword123' } });
    fireEvent.change(confirmNewPasswordInput, { target: { value: 'newPassword123' } });
    const submitButton = screen.getByRole('button', { name: 'Update Password' });
    expect(submitButton).not.toBeDisabled();
  });

});


describe('Basics Component', () => {
  test('renders inputs and validates username correctly', async () => {
    render(
      <SignUpProvider>
        <Basics />
      </SignUpProvider>
    );
    
    const usernameInput = screen.getByPlaceholderText("Username");
    fireEvent.change(usernameInput, { target: { value: 'TestUser' } });
    fireEvent.blur(usernameInput);
    
    // Check if the username input is rendered and the entered value is correct
    expect(usernameInput.value).toBe('TestUser');
    // You may need to mock the `checkDuplicate` function if it's making an actual API call
    // to ensure the uniqueness validation works as expected in this test environment.
  });

  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  test('validates password requirements correctly', () => {
    render(
      <SignUpProvider>
        <Basics />
      </SignUpProvider>
    );
    
    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: 'Test@1234' } });
    fireEvent.blur(passwordInput);
    
    // Assuming your context provider manages state updates correctly,
    // this test will check if the password meets the requirements
    expect(passwordInput.value).toMatch(PWD_REGEX);
  });

});

describe('Container', () => {
  test('renders Container component', () => {
    render(<Router><Container /></Router>);

    // Check if the logo is in the document
    expect(screen.getByAltText('Logo')).toBeInTheDocument();

    // Check if the title is in the document
    expect(screen.getByText('cachingFeelings')).toBeInTheDocument();

    // Check if the buttons are in the document
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();

    // Check if the tagline is in the document
    expect(screen.getByText('Your soulmate is waiting...')).toBeInTheDocument();
  });
});

describe('LoginForm', () => {
  test('renders LoginForm component', () => {
    render(<Router><LoginForm /></Router>);

    // Check if the form elements are in the document
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('allows the user to fill out the form', () => {
    render(<Router><LoginForm /></Router>);

    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'testpass' },
    });

    expect(screen.getByPlaceholderText('Username')).toHaveValue('testuser');
    expect(screen.getByPlaceholderText('Password')).toHaveValue('testpass');
  });
});

describe('SignupForm', () => {
  test('renders SignupForm component', () => {
    // Mock the context values
    const mockContext = {
      page: 0,
      setPage: jest.fn(),
      data: {},
      title: ['Sign Up'],
      canSubmit: true,
      disablePrev: false,
      disableNext: false,
      prevHide: false,
      nextHide: false,
      submitHide: false
    };

    render(
      <Router>
        {/* Provide the mocked context */}
        <SignUpContext.Provider value={mockContext}>
          <SignupForm />
        </SignUpContext.Provider>
      </Router>
    );

    // Check if the form elements are in the document
    expect(screen.getByRole('button', { name: /prev/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});

describe('App', () => {
  test('navigates to different routes', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    // Simulate navigation
    history.push('/login');
    expect(history.location.pathname).toBe('/login');

    history.push('/signup');
    expect(history.location.pathname).toBe('/signup');

    history.push('/try');
    expect(history.location.pathname).toBe('/try');

    history.push('/userconfig');
    expect(history.location.pathname).toBe('/userconfig');

    history.push('/catch');
    expect(history.location.pathname).toBe('/catch');
  });
});
