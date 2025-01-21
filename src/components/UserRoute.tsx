import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import UserPage from './userPage';
import { useUserContext } from './UserContext';
import { Query } from 'appwrite';
import { databases } from '../appwrite';

const UserRoute = () => {
  const { username } = useParams();
  const [isValidUser, setIsValidUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { setUsername } = useUserContext();

  useEffect(() => {
    console.log("is this even working")
    const checkUserValidity = async () => {
      try {
        if (username) {
          const users = await databases.listDocuments(
            '677ea3cd002765dfe707',
            '678cc078000962acff1f',
            [Query.equal('username', username)]
          );
          const valid = users.total > 0;
          setIsValidUser(valid);
          if (valid) {
            console.log(`Valid user detected: ${username}`);
            setUsername(username);
            console.log("Username set in context:", username);
          };
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
  }, [username, setUsername]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isValidUser ? (
    <>
      <div>Rendering Home Component</div>
      <UserPage />
    </>
  ) : (
    <Navigate to="/not-found" replace />
  );
  
};

export default UserRoute;
