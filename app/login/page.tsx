import Link from "next/link";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <div className="text-center">
      <LoginForm />
      <div className="text-primary text-[13px] my-4 block">
        <p>
          <Link
            href="/forgot-password"
            className="underline underline-offset-3 hover:text-secondary mb-3 block"
          >
            Zaboravljena lozinka?
          </Link>
        </p>
        <p>
          Ukoliko nemate nalog registrujte se{" "}
          <Link
            href="/register"
            className="underline underline-offset-3 hover:text-secondary"
          >
            OVDE
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
