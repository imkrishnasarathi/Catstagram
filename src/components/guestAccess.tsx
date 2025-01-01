import { account } from "../appwrite";

function guestAccess(){
    const handleGuestAccess = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await account.createAnonymousSession();
        }
        catch (error) {
            console.error('Guest Access Failed', error);
        }
    }
    
    return (
        <div>
          <button onClick={handleGuestAccess}>Continue as Guest</button>
        </div>
    );
}

export default guestAccess;