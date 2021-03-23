import { useUser } from "@auth0/nextjs-auth0";

export default function Page() {
  const { user, isLoading } = useUser();

  console.log(user);

  return (
    <>
      {!user && (
        <>
          Not signed in <br />
          <button>
            <a href="http://localhost:3000/api/auth/login">Login</a>
          </button>
        </>
      )}
      {user && (
        <>
          Signed in as {user.email} <br />
          <button>
            <a href="http://localhost:3000/api/auth/logout">Logout</a>
          </button>
        </>
      )}
    </>
  );
}
