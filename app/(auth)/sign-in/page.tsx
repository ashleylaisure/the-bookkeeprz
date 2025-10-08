import AuthForm from "@/components/forms/auth/AuthForm";


export default function SignInPage() {
    return (
        <>
            <AuthForm
                formHeader="Welcome back"
                formSubHeader="Sign in to continue to your account"
                formType="SIGN_IN"
            />
        </>
    );
}
