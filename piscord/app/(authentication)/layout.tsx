import * as React from 'react';

const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-indigo-500 h-screen flex items-center justify-center">
        {children}
        </div>
    );
}
export default AuthenticationLayout