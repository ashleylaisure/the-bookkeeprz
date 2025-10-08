import AuthForm from "@/components/forms/auth/AuthForm";

export default function SignUpPage() {
    return (
        <>
            <AuthForm
                formHeader="Welcome to your ultimate book-reading companion"
                formSubHeader="Create an account to start your journey"
                formType="SIGN_UP"
            />
        </>
    );
}
