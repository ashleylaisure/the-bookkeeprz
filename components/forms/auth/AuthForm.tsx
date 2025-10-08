
import Link from 'next/link';

import ROUTES from '@/constants/routes';
import BrandIcon from '../../brand/BrandIcon';
import BrandText from '../../brand/BrandText';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import SocialAuthForm from './SocialAuthForm';

interface AuthFormProps {
    formHeader: string;
    formSubHeader?: string;
    formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = ({formHeader, formSubHeader, formType}: AuthFormProps) => {
    return (
        <div className="w-full max-w-md">
            {/* Header */}
            <div className="flex flex-center flex-col gap-4 mb-8">

                <Link href={ROUTES.HOME}>
                    <div className=" flex justify-center gap-2 ">
                        <BrandIcon />
                        <BrandText />
                    </div>
                </Link>

                <h1 className="h2-bold mt-5 text-center">
                    {formHeader}
                </h1>

                <p className="paragraph-regular text-muted-foreground text-center">
                    {formSubHeader}
                </p>
            </div>
            
            {/* MagicLink Form */}
            {/* <MagicLinkForm formType={formType} /> */}

            {formType === "SIGN_IN" ? (
                <SignInForm />
            ) : (
                <SignUpForm />
            )}

             {/* Divider */}
            <div className="flex items-center justify-center gap-4 my-4">
                <hr className="flex-grow border-t-1.5 border-dark-500_light400" />
                    <span className="text-xs text-dark500_light400 font-medium">OR</span>
                <hr className="flex-grow border-t-1.5 border-dark-500_light400" />
            </div>
                
            {/* Social Auth Form */}
            <SocialAuthForm formType={formType} />

            {/* Toggle between sign in and sign up */}
            {formType === "SIGN_IN" ? (
                    <div className="flex-center gap-4 flex-col mt-8">
                        <p className="text-sm text-center text-muted-foreground">
                            Don&apos;t have an account?{" "}
                            <Link
                                href={ROUTES.SIGN_UP}
                                className="font-semibold text-primary hover:underline"
                            >
                            Sign up
                            </Link>
                        </p>
                    </div>
                ) : (
                    <div className="flex-center gap-4 flex-col mt-8">
                        <p className="text-center text-sm text-muted-foreground">
                            Already have an account?{" "}
                            <Link
                                href={ROUTES.SIGN_IN}
                                className="font-semibold text-primary hover:underline"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                )}
        </div>
    )
}

export default AuthForm