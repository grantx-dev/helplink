'use client'
import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Button as MovingButton } from "@/components/ui/moving-border";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Spotlight } from "@/components/ui/spotlight";
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/ui/icons'

import { cn } from '@/lib/utils'

export default function SignUpPage() {
 return (
  <div className="flex h-screen w-full">
   <div className="flex w-full md:w-1/2 items-center justify-center px-4">
    <SignUp.Root>
     <Clerk.Loading>
      {(isGlobalLoading) => (
       <>
        <SignUp.Step name="verifications">
         <SignUp.Strategy name="email_code">
          <Card className="w-full sm:w-96">
           <CardHeader>
            <CardTitle>Verify your email</CardTitle>
            <CardDescription>
             Use the verification link sent to your email address
            </CardDescription>
           </CardHeader>
           <CardContent className="grid gap-y-4">
            <div className="grid items-center justify-center gap-y-2">
             <Clerk.Field name="code" className="space-y-2">
              <Clerk.Label className="sr-only">Email address</Clerk.Label>
              <div className="flex justify-center text-center">
               <Clerk.Input
                type="otp"
                className="flex justify-center has-[:disabled]:opacity-50"
                autoSubmit
                render={({ value, status }) => {
                 return (
                  <div
                   data-status={status}
                   className={cn(
                    'relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
                    {
                     'z-10 ring-2 ring-ring ring-offset-background':
                      status === 'cursor' || status === 'selected',
                    },
                   )}
                  >
                   {value}
                   {status === 'cursor' && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                     <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
                    </div>
                   )}
                  </div>
                 )
                }}
               />
              </div>
              <Clerk.FieldError className="block text-center text-sm text-destructive" />
             </Clerk.Field>
             <SignUp.Action
              asChild
              resend
              className="text-muted-foreground"
              fallback={({ resendableAfter }) => (
               <Button variant="link" size="sm" disabled>
                Didn&apos;t receive a code? Resend (
                <span className="tabular-nums">{resendableAfter}</span>)
               </Button>
              )}
             >
              <Button type="button" variant="link" size="sm">
               Didn&apos;t receive a code? Resend
              </Button>
             </SignUp.Action>
            </div>
           </CardContent>
           <CardFooter>
            <div className="grid w-full gap-y-4">
             <SignUp.Action submit asChild>
              <Button disabled={isGlobalLoading}>
               <Clerk.Loading>
                {(isLoading) => {
                 return isLoading ? (
                  <Icons.spinner className="size-4 animate-spin" />
                 ) : (
                  'Continue'
                 )
                }}
               </Clerk.Loading>
              </Button>
             </SignUp.Action>
            </div>
           </CardFooter>
          </Card>
         </SignUp.Strategy>
        </SignUp.Step>

        <SignUp.Step name="continue">
         <Card className="w-full sm:w-96">
          <CardHeader>
           <CardTitle>Continue with Email instead</CardTitle>
          </CardHeader>
          <CardContent>
           <Clerk.Field name="username" className="space-y-2">
            <Clerk.Label>
             <Label>Username</Label>
            </Clerk.Label>
            <Clerk.Input type="text" required asChild>
             <Input />
            </Clerk.Input>
            <Clerk.FieldError className="block text-sm text-destructive" />
           </Clerk.Field>
          </CardContent>
          <CardFooter>
           <div className="grid w-full gap-y-4">
            <SignUp.Action submit asChild>
             <MovingButton disabled={isGlobalLoading}>
              <Clerk.Loading>
               {(isLoading) => {
                return isLoading ? (
                 <Icons.spinner className="size-4 animate-spin" />
                ) : (
                 'Continue'
                )
               }}
              </Clerk.Loading>
             </MovingButton>
            </SignUp.Action>
           </div>
          </CardFooter>
         </Card>
        </SignUp.Step>
        <SignUp.Step name="start">  
         <Card className="w-full sm:w-96 border-none ">
          <CardHeader className='mb-5'>
          <CardTitle className="text-2xl sm:text-l bg-gradient-to-r from-zinc-400 to-zinc-300 bg-clip-text text-transparent">
            Sign up to HelpLink
            </CardTitle>

           <CardDescription className='text-xs'>
            Welcome! Please fill in the details to get started.
           </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-y-4 w-full">
           <div className="grid grid-rows-2 gap-y-4">
            <Clerk.Connection name="github" asChild>
             <Button
              size="sm"
              variant="outline"
              type="button"
              className='bg-zinc-900'
              disabled={isGlobalLoading}
             >
              <Clerk.Loading scope="provider:github">
               {(isLoading) =>
                isLoading ? (
                 <Icons.spinner className="size-4 animate-spin" />
                ) : (
                 <>
                  <Icons.gitHub className="mr-2 size-4" />
                  GitHub
                 </>
                )
               }
              </Clerk.Loading>
             </Button>
            </Clerk.Connection>
            <Clerk.Connection name="google" asChild>
             <Button
              size="sm"
              variant="outline"
              type="button"
              className='bg-zinc-900'
              disabled={isGlobalLoading}
             >
              <Clerk.Loading scope="provider:google">
               {(isLoading) =>
                isLoading ? (
                 <Icons.spinner className="size-4 animate-spin" />
                ) : (
                 <>
                  <Icons.google className="mr-2 size-4" />
                  Google
                 </>
                )
               }
              </Clerk.Loading>
             </Button>
            </Clerk.Connection>
           </div>
           <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
            or
           </p>
           <Clerk.Field name="emailAddress" className="space-y-2">
            <Clerk.Label asChild>
             <Label>Email address</Label>
            </Clerk.Label>
            <Clerk.Input type="email" placeholder='hey@harshbhat.me' required asChild>
             <Input />
            </Clerk.Input>
            <Clerk.FieldError className="block text-sm text-destructive" />
           </Clerk.Field>
          </CardContent>
          <CardFooter>
           <div className="grid w-full gap-y-4">
            <SignUp.Captcha className="empty:hidden" />
            <SignUp.Action submit asChild>
             <Button disabled={isGlobalLoading}>
              <Clerk.Loading>
               {(isLoading) => {
                return isLoading ? (
                 <Icons.spinner className="size-4 animate-spin" />
                ) : (
                 'Continue'
                )
               }}
              </Clerk.Loading>
             </Button>
            </SignUp.Action>
            <Button variant="link" size="sm" asChild>
             <Link href="/auth/signin">Already have an account? Sign in</Link>
            </Button>
           </div>
          </CardFooter>
         </Card>
        </SignUp.Step>
       </>
      )}
     </Clerk.Loading>
    </SignUp.Root>
   </div>
   <div className="hidden md:flex w-1/2 items-center justify-center border-l border-zinc-700">
   <Card className="w-2/3 border-none">
          <h2 className="text-3xl leading-relaxed bg-gradient-to-r from-zinc-500 to-zinc-200 bg-clip-text text-transparent">
            Fastest way to create, manage and resolve support tickets for your clients.
          </h2>
        </Card>
   </div>
  </div>
 )
}
