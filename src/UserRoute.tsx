import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import UserPage from './components/userPage';
import NotFound from './components/NotFound';
import { Query } from 'appwrite';
import { databases } from './appwrite'; 

const UserRoute = () => {
  const { username } = useParams();
  const [isValidUser, setIsValidUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUserValidity = async () => {
      try {
        if (username) { 
          const users = await databases.listDocuments(
            '677ea3cd002765dfe707', 
            '678cc078000962acff1f', 
            [Query.equal('username', username)] 
          );
          setIsValidUser(users.total > 0);
        } else {
          setIsValidUser(false);
        }
      } catch (error) {
        console.error('Error checking username validity:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserValidity();
  }, [username]); 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isValidUser ? <UserPage /> : <Navigate to="/not-found" replace />;
};

export default UserRoute;
